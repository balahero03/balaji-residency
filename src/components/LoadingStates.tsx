import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";

export const HeroSkeleton = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
    <div className="relative z-10 text-center px-4 max-w-4xl">
      <Skeleton className="h-16 w-96 mx-auto mb-6" />
      <Skeleton className="h-8 w-80 mx-auto mb-4" />
      <Skeleton className="h-6 w-96 mx-auto mb-8" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Skeleton className="h-12 w-32" />
        <Skeleton className="h-12 w-32" />
      </div>
    </div>
  </section>
);

export const RoomCardSkeleton = () => (
  <Card className="border-none shadow-temple">
    <Skeleton className="h-48 w-full rounded-t-lg" />
    <CardContent className="p-6">
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-2/3 mb-4" />
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-10 w-24" />
      </div>
    </CardContent>
  </Card>
);

export const GallerySkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <Skeleton key={i} className="h-64 w-full rounded-lg" />
    ))}
  </div>
);

export const StatsSkeleton = () => (
  <div className="grid grid-cols-3 gap-6 md:gap-8">
    {Array.from({ length: 3 }).map((_, i) => (
      <Card key={i} className="border-none shadow-warm bg-card/50 backdrop-blur">
        <CardContent className="text-center p-6">
          <Skeleton className="h-8 w-8 mx-auto mb-4" />
          <Skeleton className="h-8 w-16 mx-auto mb-2" />
          <Skeleton className="h-4 w-24 mx-auto" />
        </CardContent>
      </Card>
    ))}
  </div>
);
