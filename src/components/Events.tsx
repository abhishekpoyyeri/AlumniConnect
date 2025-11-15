import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Calendar, Clock, MapPin, Users, Video, Star, ChevronRight } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Events() {
  const [selectedCategory, setSelectedCategory] = useState('upcoming');

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Alumni Reunion 2024",
      description: "Join us for our biggest reunion celebration with networking, awards ceremony, and cultural programs.",
      date: "2024-03-15",
      time: "10:00 AM - 8:00 PM",
      location: "University Main Campus",
      type: "In-Person",
      category: "Reunion",
      attendees: 500,
      price: "Free",
      featured: true,
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Tech Innovation Summit",
      description: "Explore the latest trends in AI, blockchain, and emerging technologies with industry experts.",
      date: "2024-02-20",
      time: "2:00 PM - 6:00 PM",
      location: "Virtual Event",
      type: "Virtual",
      category: "Professional",
      attendees: 200,
      price: "₹500",
      featured: false,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Entrepreneurship Workshop",
      description: "Learn from successful alumni entrepreneurs about starting and scaling your own business.",
      date: "2024-02-28",
      time: "9:00 AM - 5:00 PM",
      location: "T-Hub, Hyderabad",
      type: "In-Person",
      category: "Workshop",
      attendees: 50,
      price: "₹1,500",
      featured: false,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Industry 4.0 Conference",
      description: "Explore digital transformation trends in manufacturing and automation with industry leaders.",
      date: "2024-03-25",
      time: "10:00 AM - 4:00 PM",
      location: "India Expo Mart, Greater Noida",
      type: "In-Person",
      category: "Conference",
      attendees: 300,
      price: "₹2,000",
      featured: false,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Alumni Cricket Tournament",
      description: "Annual sports meet bringing together alumni from different batches for a fun cricket tournament.",
      date: "2024-04-14",
      time: "8:00 AM - 6:00 PM",
      location: "University Sports Complex",
      type: "In-Person",
      category: "Sports",
      attendees: 200,
      price: "Free",
      featured: false,
      image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Women in Leadership Panel",
      description: "Inspiring stories and career advice from successful women alumni across various industries.",
      date: "2024-03-08",
      time: "3:00 PM - 5:00 PM",
      location: "Virtual Event",
      type: "Virtual",
      category: "Panel Discussion",
      attendees: 150,
      price: "Free",
      featured: true,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=300&fit=crop"
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: "Global Alumni Meet 2023",
      description: "Successful virtual meetup connecting alumni from 25+ countries.",
      date: "2023-12-15",
      attendees: 800,
      highlights: ["50+ speakers", "15 panel discussions", "Global networking"]
    },
    {
      id: 8,
      title: "Career Fair 2023",
      description: "Major career fair with 100+ companies and 1000+ job opportunities.",
      date: "2023-11-20",
      attendees: 1200,
      highlights: ["100+ companies", "500+ interviews", "200+ job offers"]
    },
    {
      id: 9,
      title: "Make in India Summit 2023",
      description: "Alumni-led initiative showcasing innovation in Indian manufacturing and startups.",
      date: "2023-10-02",
      attendees: 600,
      highlights: ["30+ startups", "Government officials", "₹50 Crore funding commitments"]
    }
  ];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-IN', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isEventSoon = (dateStr: string) => {
    const eventDate = new Date(dateStr);
    const now = new Date();
    const diffTime = eventDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays > 0;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <motion.div 
      className="py-8 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <motion.div 
          className="text-center space-y-4"
          variants={itemVariants}
        >
          <h1 className="text-3xl font-bold">Alumni Events</h1>
          <p className="text-xl text-muted-foreground">
            Stay connected through networking events, workshops, and reunions
          </p>
        </motion.div>

        {/* Event Categories */}
        <motion.div variants={itemVariants}>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
            </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            {/* Featured Events */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Featured Events</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {upcomingEvents
                  .filter(event => event.featured)
                  .map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                      <div className="aspect-video relative">
                        <ImageWithFallback 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        {isEventSoon(event.date) && (
                          <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                            <Star className="h-3 w-3 mr-1" />
                            Soon
                          </Badge>
                        )}
                        <Badge 
                          variant={event.type === 'Virtual' ? 'secondary' : 'default'}
                          className="absolute top-4 right-4"
                        >
                          {event.type === 'Virtual' ? (
                            <Video className="h-3 w-3 mr-1" />
                          ) : (
                            <MapPin className="h-3 w-3 mr-1" />
                          )}
                          {event.type}
                        </Badge>
                      </div>
                      
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-xl">{event.title}</CardTitle>
                            <Badge variant="outline">{event.category}</Badge>
                          </div>
                        </div>
                        <CardDescription className="text-base">
                          {event.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{event.attendees} registered</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-semibold">
                            {event.price}
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Button>
                              Register Now
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                    </motion.div>
                  ))}
              </div>
            </div>

            {/* All Upcoming Events */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">All Upcoming Events</h2>
              <div className="grid lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative">
                      <ImageWithFallback 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <Badge 
                        variant={event.type === 'Virtual' ? 'secondary' : 'default'}
                        className="absolute top-2 right-2"
                      >
                        {event.type}
                      </Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{event.category}</Badge>
                        <span className="font-semibold">{event.price}</span>
                      </div>
                      
                      <Button className="w-full" variant="outline">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Past Events</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold">Event Highlights:</h4>
                        <div className="flex flex-wrap gap-2">
                          {event.highlights.map((highlight, index) => (
                            <Badge key={index} variant="secondary">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        View Event Report
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.div>
  );
}