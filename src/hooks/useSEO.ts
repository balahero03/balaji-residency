import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const useSEO = ({
  title = 'Balaji Residency Thirunallar | Best Lodging Near Saneeswaran Temple',
  description = 'Comfortable pilgrim accommodation just 50 meters from Saneeswaran Temple. AC/Non-AC rooms, 24/7 service, free parking.',
  keywords = 'Balaji Residency, Thirunallar lodging, Saneeswaran Temple accommodation, Karaikal hotels, pilgrim stay',
  image = '/temple-view.jpg',
  url = 'https://balajiresidency.com',
  type = 'website'
}: SEOProps = {}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('title', title);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    // Twitter tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, keywords, image, url, type]);
};

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'Balaji Residency Thirunallar | Sacred Stay Near Saneeswaran Temple',
    description: 'Experience divine comfort just 50 meters from the sacred Saneeswaran Temple. Family-run pilgrim accommodation with modern amenities in Thirunallar.',
    keywords: 'Balaji Residency, Thirunallar, Saneeswaran Temple, pilgrim accommodation, sacred stay, Karaikal lodging'
  },
  rooms: {
    title: 'Rooms & Accommodation | Balaji Residency Thirunallar',
    description: 'Comfortable AC and Non-AC rooms at Balaji Residency. Modern amenities, 24/7 service, just 50m from Saneeswaran Temple.',
    keywords: 'rooms Thirunallar, AC rooms, Non-AC rooms, pilgrim accommodation, temple stay'
  },
  contact: {
    title: 'Contact & Booking | Balaji Residency Thirunallar',
    description: 'Book your stay at Balaji Residency. Call 9442422556 or WhatsApp for immediate booking. Located near Saneeswaran Temple.',
    keywords: 'book Balaji Residency, contact Thirunallar, WhatsApp booking, temple accommodation'
  },
  about: {
    title: 'About Balaji Residency | Family-Run Pilgrim Accommodation',
    description: 'Learn about Balaji Residency\'s 10+ years of serving pilgrims near Saneeswaran Temple. Traditional hospitality with modern comfort.',
    keywords: 'about Balaji Residency, family business, pilgrim service, Thirunallar history'
  }
};
