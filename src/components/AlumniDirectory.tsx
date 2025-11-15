import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Search, MapPin, Calendar, Briefcase, MessageCircle, Users } from "lucide-react";

export function AlumniDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterIndustry, setFilterIndustry] = useState('all');
  const [filterYear, setFilterYear] = useState('all');

  const alumni = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      role: "Chief Technology Officer",
      company: "TechCorp Solutions",
      graduation: "2015",
      degree: "Computer Science Engineering",
      location: "San Francisco, USA",
      industry: "Technology",
      expertise: ["AI/ML", "Cloud Computing", "Leadership"],
      email: "priya.sharma@example.com"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      company: "GreenTech Solutions",
      graduation: "2012",
      degree: "Environmental Engineering",
      location: "Bangalore, India",
      industry: "CleanTech",
      expertise: ["Sustainability", "IoT", "Entrepreneurship"],
      email: "rajesh.kumar@example.com"
    },
    {
      id: 3,
      name: "Anjali Patel",
      role: "Senior Research Scientist",
      company: "ISRO",
      graduation: "2018",
      degree: "Aerospace Engineering",
      location: "Bangalore, India",
      industry: "Aerospace",
      expertise: ["Satellite Technology", "Research", "Project Management"],
      email: "anjali.patel@example.com"
    },
    {
      id: 4,
      name: "Arjun Menon",
      role: "Product Manager",
      company: "Flipkart",
      graduation: "2016",
      degree: "Information Technology",
      location: "Bangalore, India",
      industry: "Technology",
      expertise: ["Product Strategy", "UX Design", "Analytics"],
      email: "arjun.menon@example.com"
    },
    {
      id: 5,
      name: "Kavya Singh",
      role: "Investment Banker",
      company: "HDFC Bank",
      graduation: "2014",
      degree: "Business Administration",
      location: "Mumbai, India",
      industry: "Finance",
      expertise: ["Investment Banking", "Corporate Finance", "Risk Management"],
      email: "kavya.singh@example.com"
    },
    {
      id: 7,
      name: "Vikram Gupta",
      role: "AI Research Scientist",
      company: "Indian Institute of Science",
      graduation: "2017",
      degree: "Computer Science Engineering",
      location: "Bangalore, India",
      industry: "Research",
      expertise: ["Artificial Intelligence", "Deep Learning", "Computer Vision"],
      email: "vikram.gupta@example.com"
    },
    {
      id: 8,
      name: "Neha Agarwal",
      role: "Software Architect",
      company: "Infosys",
      graduation: "2013",
      degree: "Software Engineering",
      location: "Hyderabad, India",
      industry: "Technology",
      expertise: ["System Design", "Cloud Architecture", "Microservices"],
      email: "neha.agarwal@example.com"
    },
    {
      id: 6,
      name: "Dr. Amit Verma",
      role: "Cardiothoracic Surgeon",
      company: "All India Institute of Medical Sciences",
      graduation: "2010",
      degree: "Medicine",
      location: "New Delhi, India",
      industry: "Healthcare",
      expertise: ["Cardiac Surgery", "Medical Research", "Teaching"],
      email: "amit.verma@example.com"
    }
  ];

  const industries = ['all', 'Technology', 'Finance', 'Healthcare', 'CleanTech', 'Aerospace', 'Research'];
  const years = ['all', '2010', '2012', '2013', '2014', '2015', '2016', '2017', '2018'];

  const filteredAlumni = alumni.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = filterIndustry === 'all' || person.industry === filterIndustry;
    const matchesYear = filterYear === 'all' || person.graduation === filterYear;
    
    return matchesSearch && matchesIndustry && matchesYear;
  });

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
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
          <h1 className="text-3xl font-bold">Alumni Directory</h1>
          <p className="text-xl text-muted-foreground">
            Connect with {alumni.length}+ alumni across the globe
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="bg-card p-6 rounded-lg border space-y-4"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <motion.div 
              className="flex-1 relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, company, or role..."
                value={searchTerm}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Select value={filterIndustry} onValueChange={setFilterIndustry}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>
                      {industry === 'all' ? 'All Industries' : industry}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Select value={filterYear} onValueChange={setFilterYear}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Graduation Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex items-center justify-between text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.span
              key={filteredAlumni.length}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Showing {filteredAlumni.length} alumni
            </motion.span>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>Total: {alumni.length} members</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Alumni Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          <AnimatePresence>
            {filteredAlumni.map((person, index) => (
              <motion.div
                key={person.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ 
                  scale: 1.03,
                  y: -5
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300,
                  damping: 30
                }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Avatar className="h-12 w-12">
                          <AvatarFallback>{getInitials(person.name)}</AvatarFallback>
                        </Avatar>
                      </motion.div>
                      <div className="flex-1 space-y-1">
                        <CardTitle className="text-lg">{person.name}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-3 w-3" />
                            <span>{person.role}</span>
                          </div>
                          <div className="font-medium text-foreground">{person.company}</div>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{person.degree}, {person.graduation}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{person.location}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Badge variant="secondary">{person.industry}</Badge>
                      </motion.div>
                      <div className="flex flex-wrap gap-1">
                        {person.expertise.slice(0, 3).map((skill, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Badge variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <motion.div
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button variant="outline" size="sm" className="w-full">
                          <MessageCircle className="h-3 w-3 mr-1" />
                          Connect
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3>No alumni found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </motion.div>
  );
}