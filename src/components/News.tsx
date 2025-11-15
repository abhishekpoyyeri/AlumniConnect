import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, User, MessageCircle, Heart, Share2, TrendingUp } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function News() {
  const newsArticles = [
    {
      id: 1,
      title: "University Ranked #1 in Engineering Excellence for Third Consecutive Year",
      excerpt: "Our alma mater continues to lead in engineering education and research, with groundbreaking innovations in sustainable technology and AI.",
      content: "The university has been recognized for its outstanding contributions to engineering education and research innovation...",
      author: "University Communications",
      date: "2024-01-15",
      category: "University News",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=300&fit=crop",
      likes: 234,
      comments: 45,
      featured: true
    },
    {
      id: 2,
      title: "Alumni Startup Raises ₹400 Crore Series B Funding Round",
      excerpt: "GreenTech Solutions, founded by Rajesh Kumar (2012 Batch), secures major funding to expand sustainable technology solutions across India and Southeast Asia.",
      content: "The company plans to use the funding to accelerate development of their revolutionary clean energy platform...",
      author: "Rajesh Kumar",
      date: "2024-01-12",
      category: "Alumni Success",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=300&fit=crop",
      likes: 189,
      comments: 32,
      featured: true
    },
    {
      id: 3,
      title: "Dr. Priya Sharma Named Among Top 40 Under 40 Tech Leaders in India",
      excerpt: "Our distinguished alumna receives recognition for her contributions to artificial intelligence and machine learning at Tata Consultancy Services.",
      content: "Dr. Sharma's work in developing ethical AI frameworks has been instrumental in shaping industry standards...",
      author: "Tech Industry Weekly",
      date: "2024-01-10",
      category: "Alumni Achievement",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=300&fit=crop",
      likes: 156,
      comments: 28,
      featured: false
    },
    {
      id: 4,
      title: "New State-of-the-Art Research Center Opens on Campus",
      excerpt: "The Innovation Hub, a cutting-edge facility for interdisciplinary research, officially opens with support from alumni donations.",
      content: "The 50,000 sq ft facility will house advanced labs for AI, biotechnology, and sustainable engineering research...",
      author: "Campus News Team",
      date: "2024-01-08",
      category: "Campus Development",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=300&fit=crop",
      likes: 312,
      comments: 67,
      featured: false
    },
    {
      id: 5,
      title: "Alumni Mentorship Program Reaches 1000 Students Milestone",
      excerpt: "The successful program connecting current students with alumni mentors celebrates a major achievement in career guidance.",
      content: "The program has facilitated over 5,000 mentoring sessions and resulted in a 40% increase in job placement rates...",
      author: "Career Services",
      date: "2024-01-05",
      category: "Programs",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop",
      likes: 278,
      comments: 54,
      featured: false
    },
    {
      id: 6,
      title: "New Alumni Chapter Launches in Bangalore Tech Hub",
      excerpt: "New chapter established to serve the growing community of alumni working in India's Silicon Valley and major tech companies.",
      content: "The chapter will host monthly networking events, professional development workshops, and startup showcases...",
      author: "Alumni Relations",
      date: "2024-01-03",
      category: "Alumni Network",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop",
      likes: 145,
      comments: 23,
      featured: false
    },
    {
      id: 7,
      title: "Alumni-led Initiative Supports Digital India Mission",
      excerpt: "Tech alumni collaborate on government projects to digitize rural healthcare and education systems across 500+ villages.",
      content: "The initiative leverages IoT, AI, and mobile technology to bridge the digital divide in rural India...",
      author: "Digital India Team",
      date: "2024-01-01",
      category: "Alumni Success",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&h=300&fit=crop",
      likes: 298,
      comments: 71,
      featured: false
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "Alumni Reunion 2024 Registration Now Open",
      date: "2024-01-20",
      priority: "high"
    },
    {
      id: 2,
      title: "New Alumni Directory Platform Launch",
      date: "2024-01-18",
      priority: "medium"
    },
    {
      id: 3,
      title: "Scholarship Fund Campaign Update",
      date: "2024-01-15",
      priority: "low"
    }
  ];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'University News': return 'bg-blue-500';
      case 'Alumni Success': return 'bg-green-500';
      case 'Alumni Achievement': return 'bg-purple-500';
      case 'Campus Development': return 'bg-orange-500';
      case 'Programs': return 'bg-pink-500';
      case 'Alumni Network': return 'bg-teal-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500';
      case 'medium': return 'border-l-yellow-500';
      case 'low': return 'border-l-green-500';
      default: return 'border-l-gray-500';
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Alumni News & Updates</h1>
          <p className="text-xl text-muted-foreground">
            Stay connected with the latest news from your alma mater and fellow alumni
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Stories */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold flex items-center">
                <TrendingUp className="h-6 w-6 mr-2 text-primary" />
                Featured Stories
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {newsArticles
                  .filter(article => article.featured)
                  .map((article) => (
                    <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="aspect-video relative">
                        <ImageWithFallback 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                        <Badge 
                          className={`absolute top-4 left-4 ${getCategoryColor(article.category)} hover:opacity-90`}
                        >
                          {article.category}
                        </Badge>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-xl line-clamp-2">{article.title}</CardTitle>
                        <CardDescription className="line-clamp-3">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{formatDate(article.date)}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Heart className="h-4 w-4" />
                              <span>{article.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MessageCircle className="h-4 w-4" />
                              <span>{article.comments}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Read More
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </section>

            {/* Latest News */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold">Latest News</h2>
              
              <div className="space-y-4">
                {newsArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-md transition-shadow">
                    <div className="flex">
                      <div className="w-48 flex-shrink-0">
                        <ImageWithFallback 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-32 object-cover rounded-l-lg"
                        />
                      </div>
                      
                      <div className="flex-1 p-6">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="space-y-2">
                              <Badge 
                                variant="outline" 
                                className={`${getCategoryColor(article.category)} text-white border-none`}
                              >
                                {article.category}
                              </Badge>
                              <h3 className="text-lg font-semibold line-clamp-2">{article.title}</h3>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground line-clamp-2">{article.excerpt}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{article.author}</span>
                              <span>•</span>
                              <span>{formatDate(article.date)}</span>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Heart className="h-4 w-4" />
                                  <span>{article.likes}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <MessageCircle className="h-4 w-4" />
                                  <span>{article.comments}</span>
                                </div>
                                <Button variant="ghost" size="sm">
                                  <Share2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Important Announcements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Important Announcements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {announcements.map((announcement) => (
                  <div 
                    key={announcement.id} 
                    className={`p-3 border-l-4 ${getPriorityColor(announcement.priority)} bg-muted/50 rounded-r`}
                  >
                    <h4 className="font-medium text-sm mb-1">{announcement.title}</h4>
                    <p className="text-xs text-muted-foreground">{formatDate(announcement.date)}</p>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full mt-3">
                  View All Announcements
                </Button>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Stay Updated</CardTitle>
                <CardDescription>
                  Subscribe to our newsletter for weekly updates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 border rounded-md text-sm"
                />
                <Button className="w-full" size="sm">
                  Subscribe
                </Button>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Alumni</span>
                  <span className="font-semibold">50,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Active Members</span>
                  <span className="font-semibold">15,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Stories Published</span>
                  <span className="font-semibold">1,200+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Global Chapters</span>
                  <span className="font-semibold">25+</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}