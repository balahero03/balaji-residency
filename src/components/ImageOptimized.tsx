import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ImageOptimizedProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    priority?: boolean;
    placeholder?: string;
}

const ImageOptimized = ({
    src,
    alt,
    className,
    width,
    height,
    priority = false,
    placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+"
}: ImageOptimizedProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(priority);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (priority) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, [priority]);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div
            ref={imgRef}
            className={cn("relative overflow-hidden", className)}
            style={{ width, height }}
        >
            {/* Placeholder */}
            <div
                className={cn(
                    "absolute inset-0 bg-gray-200 transition-opacity duration-300",
                    isLoaded ? "opacity-0" : "opacity-100"
                )}
                style={{
                    backgroundImage: `url(${placeholder})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            {/* Actual Image */}
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    className={cn(
                        "transition-opacity duration-300",
                        isLoaded ? "opacity-100" : "opacity-0"
                    )}
                    onLoad={handleLoad}
                    loading={priority ? "eager" : "lazy"}
                    decoding="async"
                />
            )}
        </div>
    );
};

export default ImageOptimized;
