import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Search, MapPin, Clock, Briefcase, Building, DollarSign, ChevronRight, Users, Star } from "lucide-react";

export function JobBoard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLocation, setFilterLocation] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Tata Consultancy Services",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "5-8 years",
      salary: "₹18,00,000 - ₹25,00,000",
      postedBy: "Dr. Priya Sharma (2015 Batch)",
      posted: "2 days ago",
      skills: ["React", "Node.js", "AWS", "TypeScript"],
      description: "Join our innovative team building next-generation cloud solutions for global clients.",
      featured: true,
      remote: true
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Flipkart",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "3-5 years",
      salary: "₹22,00,000 - ₹30,00,000",
      postedBy: "Rajesh Kumar (2016 Batch)",
      posted: "1 week ago",
      skills: ["Product Strategy", "Analytics", "UX Design", "Agile"],
      description: "Lead product development for India's largest e-commerce platform.",
      featured: false,
      remote: false
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Reliance Jio",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      salary: "₹15,00,000 - ₹20,00,000",
      postedBy: "Alumni Network",
      posted: "3 days ago",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow"],
      description: "Apply ML algorithms to analyze telecom data and improve customer experience.",
      featured: true,
      remote: true
    },
    {
      id: 4,
      title: "Investment Banking Analyst",
      company: "ICICI Bank",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "0-2 years",
      salary: "₹12,00,000 - ₹16,00,000",
      postedBy: "Anjali Patel (2014 Batch)",
      posted: "5 days ago",
      skills: ["Financial Modeling", "Excel", "Risk Analysis", "Communication"],
      description: "Join our corporate banking division and work with India's leading enterprises.",
      featured: false,
      remote: false
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "Infosys",
      location: "Hyderabad, Telangana",
      type: "Contract",
      experience: "3-6 years",
      salary: "₹14,00,000 - ₹18,00,000",
      postedBy: "Alumni Network",
      posted: "1 day ago",
      skills: ["Kubernetes", "Docker", "CI/CD", "Monitoring"],
      description: "Build and maintain scalable cloud infrastructure for global clients.",
      featured: false,
      remote: true
    },
    {
      id: 6,
      title: "UX Designer",
      company: "Zomato",
      location: "Gurugram, Haryana",
      type: "Full-time",
      experience: "2-5 years",
      salary: "₹12,00,000 - ₹18,00,000",
      postedBy: "Alumni Network",
      posted: "4 days ago",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      description: "Design intuitive user experiences for India's leading food delivery platform.",
      featured: false,
      remote: false
    },
    {
      id: 7,
      title: "Research Scientist",
      company: "Indian Space Research Organisation (ISRO)",
      location: "Bangalore, Karnataka",
      type: "Full-time",
      experience: "3-7 years",
      salary: "₹10,00,000 - ₹15,00,000",
      postedBy: "Dr. Amit Verma (2018 Batch)",
      posted: "6 days ago",
      skills: ["Satellite Technology", "MATLAB", "Research", "Project Management"],
      description: "Contribute to India's space missions and satellite technology development.",
      featured: true,
      remote: false
    },
    {
      id: 8,
      title: "Software Developer",
      company: "Wipro",
      location: "Pune, Maharashtra",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹6,00,000 - ₹10,00,000",
      postedBy: "Alumni Network",
      posted: "3 days ago",
      skills: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      description: "Develop enterprise software solutions for global clients.",
      featured: false,
      remote: true
    }
  ];

  const internships = [
    {
      id: 9,
      title: "Software Engineering Intern",
      company: "Microsoft India",
      location: "Hyderabad, Telangana",
      duration: "6 months",
      stipend: "₹50,000/month",
      postedBy: "Alumni Network",
      posted: "1 week ago",
      skills: ["C#", "Azure", "Git", "Algorithms"],
      description: "Summer internship program for computer science students at Microsoft India Development Center."
    },
    {
      id: 10,
      title: "Data Analytics Intern",
      company: "Paytm",
      location: "Noida, Uttar Pradesh",
      duration: "4 months",
      stipend: "₹40,000/month",
      postedBy: "Alumni Network",
      posted: "3 days ago",
      skills: ["Python", "R", "Tableau", "Statistics"],
      description: "Analyze fintech data and user behavior patterns for India's leading digital payments platform."
    },
    {
      id: 11,
      title: "Research Intern",
      company: "Indian Institute of Technology (IIT) Delhi",
      location: "New Delhi",
      duration: "3 months",
      stipend: "₹25,000/month",
      postedBy: "Dr. Priya Sharma (2015 Batch)",
      posted: "5 days ago",
      skills: ["Machine Learning", "Python", "Research Methodology", "Data Analysis"],
      description: "Research internship in AI/ML lab focusing on computer vision applications."
    }
  ];

  const locations = ['all', 'Bangalore, Karnataka', 'Mumbai, Maharashtra', 'Hyderabad, Telangana', 'Pune, Maharashtra', 'Gurugram, Haryana', 'New Delhi', 'Remote'];
  const jobTypes = ['all', 'Full-time', 'Part-time', 'Contract', 'Internship'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = filterLocation === 'all' || 
                           job.location === filterLocation || 
                           (filterLocation === 'Remote' && job.remote);
    const matchesType = filterType === 'all' || job.type === filterType;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Alumni Job Board</h1>
          <p className="text-xl text-muted-foreground">
            Discover opportunities posted by fellow alumni and partner companies
          </p>
        </div>

        {/* Job Categories */}
        <Tabs defaultValue="jobs" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="jobs">Job Opportunities</TabsTrigger>
            <TabsTrigger value="internships">Internships</TabsTrigger>
            <TabsTrigger value="post">Post a Job</TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            {/* Search and Filters */}
            <div className="bg-card p-6 rounded-lg border space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search jobs, companies, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={filterLocation} onValueChange={setFilterLocation}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>
                        {location === 'all' ? 'All Locations' : location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={filterType} onValueChange={setFilterType}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobTypes.map(type => (
                      <SelectItem key={type} value={type}>
                        {type === 'all' ? 'All Types' : type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Showing {filteredJobs.length} jobs</span>
                <div className="flex items-center space-x-1">
                  <Briefcase className="h-4 w-4" />
                  <span>New jobs posted weekly</span>
                </div>
              </div>
            </div>

            {/* Featured Jobs */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Featured Opportunities</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {filteredJobs
                  .filter(job => job.featured)
                  .map((job) => (
                    <Card key={job.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <CardTitle className="text-xl">{job.title}</CardTitle>
                            <div className="flex items-center space-x-2">
                              <Building className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{job.company}</span>
                            </div>
                          </div>
                          <Badge className="bg-yellow-500 hover:bg-yellow-600">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          {job.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>{job.location}</span>
                            {job.remote && <Badge variant="outline" className="ml-1">Remote</Badge>}
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                            <span>{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>{job.experience}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-sm text-muted-foreground">
                            Posted by: {job.postedBy} • {job.posted}
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {job.skills.slice(0, 4).map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button className="flex-1">
                            Apply Now
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                          <Button variant="outline">
                            Save Job
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* All Jobs */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">All Job Listings</h2>
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Building className="h-3 w-3" />
                              <span>{job.company}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{job.location}</span>
                              {job.remote && <Badge variant="outline" className="ml-1 text-xs">Remote</Badge>}
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-3 w-3" />
                              <span>{job.salary}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline">{job.type}</Badge>
                          <div className="text-xs text-muted-foreground mt-1">{job.posted}</div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {job.skills.slice(0, 3).map((skill, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {job.skills.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{job.skills.length - 3} more
                            </Badge>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button size="sm">Apply</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="internships" className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Internship Opportunities</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                {internships.map((internship) => (
                  <Card key={internship.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl">{internship.title}</CardTitle>
                      <CardDescription className="text-base">
                        {internship.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Building className="h-4 w-4 text-muted-foreground" />
                          <span>{internship.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{internship.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{internship.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span>{internship.stipend}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {internship.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button className="w-full">Apply for Internship</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="post" className="space-y-6">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Post a Job Opportunity</CardTitle>
                  <CardDescription>
                    Share job openings with the alumni community and help fellow graduates find their next opportunity.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Job Title</label>
                      <Input placeholder="e.g. Senior Software Engineer" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Company</label>
                      <Input placeholder="Company name" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Location</label>
                      <Input placeholder="City, State/Country" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Job Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="internship">Internship</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Job Description</label>
                    <textarea 
                      className="w-full p-3 border rounded-md resize-none" 
                      rows={4}
                      placeholder="Describe the role, responsibilities, and requirements..."
                    />
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button className="flex-1">Post Job</Button>
                    <Button variant="outline">Save as Draft</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}