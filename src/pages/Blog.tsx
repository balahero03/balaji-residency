import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCTA from "@/components/BookingCTA";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ExternalLink, Star, MapPin } from "lucide-react";
import templeView from "@/assets/temple-view.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "Sani Peyarchi 2024: Important Dates and Rituals",
      excerpt: "Saturn's transit (Sani Peyarchi) is one of the most significant astrological events. Learn about the important dates, rituals, and how to prepare for your visit to Saneeswaran Temple.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Temple Events",
      image: templeView,
      featured: true
    },
    {
      title: "Complete Guide to Thirunallar Temple Pooja Timings",
      excerpt: "Plan your pilgrimage with our comprehensive guide to daily pooja timings, special festivals, and the best times to visit Saneeswaran Temple for maximum spiritual benefit.",
      date: "2024-02-01", 
      readTime: "7 min read",
      category: "Temple Guide",
      image: templeView,
      featured: false
    },
    {
      title: "Guru Peyarchi 2024: Significance and Temple Rituals",
      excerpt: "Jupiter's transit brings new opportunities and blessings. Discover the significance of Guru Peyarchi and special rituals performed at Thirunallar temple during this auspicious time.",
      date: "2024-02-20",
      readTime: "6 min read", 
      category: "Temple Events",
      image: templeView,
      featured: false
    },
    {
      title: "Accommodation Tips for Thirunallar Pilgrims",
      excerpt: "Essential tips for pilgrims visiting Thirunallar - from booking accommodation to temple etiquette, local customs, and making the most of your spiritual journey.",
      date: "2024-03-05",
      readTime: "4 min read",
      category: "Travel Tips",
      image: templeView,
      featured: false
    },
    {
      title: "Festival Calendar 2024: Special Celebrations at Saneeswaran Temple",
      excerpt: "Mark your calendar with important festivals and special celebrations at Saneeswaran Temple. Each festival offers unique spiritual experiences and blessings.",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "Festivals",
      image: templeView,
      featured: false
    }
  ];

  const announcements = [
    {
      title: "Special Festival Accommodation Packages",
      content: "Book early for upcoming festival seasons. Special packages available for families and groups.",
      type: "Offer"
    },
    {
      title: "New AC Rooms Available",
      content: "We've added 4 new AC rooms with temple view. Perfect for families visiting during summer months.",
      type: "Update"
    },
    {
      title: "Temple Parking Information",
      content: "Free parking available for all guests. Limited spaces during festivals - advance booking recommended.",
      type: "Info"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
              Temple News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Stay informed about temple events, festival calendars, pilgrimage tips, 
              and important announcements for your visit to Thirunallar
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts[0] && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Badge className="bg-gradient-temple text-primary-foreground mb-4">
                Featured Article
              </Badge>
              
              <Card className="border-none shadow-temple overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <CardContent className="p-8 lg:p-12">
                    <Badge variant="secondary" className="mb-4">
                      {blogPosts[0].category}
                    </Badge>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{blogPosts[0].readTime}</span>
                        </div>
                      </div>
                      <Button variant="temple" asChild>
                        <a href="#" className="flex items-center space-x-2">
                          <span>Read More</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-20 bg-gradient-earth">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Recent Articles
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <Card key={index} className="border-none shadow-warm hover:shadow-temple transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge 
                      variant="secondary" 
                      className="absolute top-4 left-4 bg-background/90 backdrop-blur"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-primary mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href="#" className="text-primary hover:text-primary/80">
                          Read More
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lodge Announcements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary text-center mb-12">
              Lodge Announcements
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {announcements.map((announcement, index) => (
                <Card key={index} className="border-none shadow-warm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-serif text-lg text-primary">
                        {announcement.title}
                      </CardTitle>
                      <Badge 
                        variant={announcement.type === 'Offer' ? 'default' : 'secondary'}
                        className={announcement.type === 'Offer' ? 'bg-gradient-temple text-primary-foreground' : ''}
                      >
                        {announcement.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {announcement.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Temple News
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest updates about temple events, festival calendars, and 
              special offers directly to your phone via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="xl" asChild>
                <a 
                  href="https://wa.me/919442422556?text=Hi,%20I%20would%20like%20to%20receive%20temple%20updates%20and%20news"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Star className="w-5 h-5" />
                  Subscribe via WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="xl" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                <a 
                  href="https://balajiresidencytnr.blogspot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Our Blog
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA />
      <Footer />
    </div>
  );
};

export default Blog;