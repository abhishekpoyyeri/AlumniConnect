import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Progress } from "./ui/progress";
import { 
  User, 
  MapPin, 
  Briefcase, 
  Calendar, 
  MessageCircle, 
  Users, 
  Star, 
  Award,
  TrendingUp,
  Mail,
  Phone,
  Globe,
  Edit,
  Settings,
  Bell
} from "lucide-react";

export function Dashboard() {
  const userProfile = {
    name: "abhishek p",
    email: "abhishekp454504@gmail.com",
    phone: "+91 98765 43210",
    graduation: "2018",
    degree: "Computer Science Engineering",
    currentRole: "Senior Software Engineer",
    company: "Tata Consultancy Services",
    location: "Bangalore, Karnataka",
    bio: "Passionate software engineer with 6+ years of experience in full-stack development. Alumni mentor and active contributor to India's tech community.",
    skills: ["React", "Node.js", "Python", "AWS", "Docker", "Machine Learning"],
    connections: 145,
    profileCompletion: 85
  };

  const recentActivities = [
    {
      id: 1,
      type: "connection",
      message: "Connected with Dr. Priya Sharma",
      time: "2 hours ago",
      icon: Users
    },
    {
      id: 2,
      type: "event",
      message: "Registered for Tech Innovation Summit",
      time: "1 day ago",
      icon: Calendar
    },
    {
      id: 3,
      type: "job",
      message: "Applied for Senior Developer position at Infosys",
      time: "3 days ago",
      icon: Briefcase
    },
    {
      id: 4,
      type: "message",
      message: "Received message from Vikram Gupta",
      time: "5 days ago",
      icon: MessageCircle
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      name: "Annual Alumni Reunion 2024",
      date: "March 15, 2024",
      status: "registered"
    },
    {
      id: 2,
      name: "Tech Innovation Summit",
      date: "February 20, 2024",
      status: "registered"
    },
    {
      id: 3,
      name: "Women in Leadership Panel",
      date: "March 8, 2024",
      status: "interested"
    }
  ];

  const recommendations = [
    {
      id: 1,
      type: "connection",
      title: "Connect with Kavya Singh",
      description: "Fellow CS graduate working at HDFC Bank",
      action: "Connect"
    },
    {
      id: 2,
      type: "event",
      title: "Entrepreneurship Workshop",
      description: "Learn from successful alumni entrepreneurs",
      action: "Register"
    },
    {
      id: 3,
      type: "job",
      title: "DevOps Engineer at Infosys",
      description: "Matches your skills in AWS and Docker",
      action: "View Job"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Profile Pioneer",
      description: "Completed 85% of your profile",
      icon: User,
      progress: 85
    },
    {
      id: 2,
      title: "Network Builder",
      description: "Connected with 100+ alumni",
      icon: Users,
      unlocked: true
    },
    {
      id: 3,
      title: "Event Enthusiast",
      description: "Attended 5+ alumni events",
      icon: Calendar,
      progress: 60
    }
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {userProfile.name.split(' ')[0]}!</h1>
            <p className="text-muted-foreground">Here's what's happening in your alumni network</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4 mr-1" />
              Notifications
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-1" />
              Settings
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-8 w-8 text-blue-500" />
                    <div>
                      <div className="text-2xl font-bold">{userProfile.connections}</div>
                      <div className="text-sm text-muted-foreground">Connections</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-8 w-8 text-green-500" />
                    <div>
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-sm text-muted-foreground">Upcoming Events</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-8 w-8 text-purple-500" />
                    <div>
                      <div className="text-2xl font-bold">7</div>
                      <div className="text-sm text-muted-foreground">New Messages</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Star className="h-8 w-8 text-yellow-500" />
                    <div>
                      <div className="text-2xl font-bold">4.8</div>
                      <div className="text-sm text-muted-foreground">Profile Rating</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Dashboard Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3">
                          <activity.icon className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm">{activity.message}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="w-full">
                        View All Activity
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Upcoming Events */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Upcoming Events</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">{event.name}</p>
                            <p className="text-xs text-muted-foreground">{event.date}</p>
                          </div>
                          <Badge variant={event.status === 'registered' ? 'default' : 'secondary'}>
                            {event.status}
                          </Badge>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="w-full">
                        Browse All Events
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recommendations for You</CardTitle>
                    <CardDescription>
                      Personalized suggestions to enhance your alumni experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {recommendations.map((rec) => (
                        <Card key={rec.id}>
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base">{rec.title}</CardTitle>
                            <CardDescription className="text-sm">
                              {rec.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <Button variant="outline" size="sm" className="w-full">
                              {rec.action}
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Profile Information</CardTitle>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit Profile
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start space-x-6">
                      <Avatar className="h-24 w-24">
                        <AvatarFallback className="text-2xl">
                          {userProfile.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-2xl font-semibold">{userProfile.name}</h3>
                          <p className="text-muted-foreground">{userProfile.currentRole} at {userProfile.company}</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-muted-foreground" />
                              <span>{userProfile.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <span>{userProfile.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span>{userProfile.location}</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Award className="h-4 w-4 text-muted-foreground" />
                              <span>{userProfile.degree}, {userProfile.graduation}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Briefcase className="h-4 w-4 text-muted-foreground" />
                              <span>{userProfile.currentRole}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4 text-muted-foreground" />
                              <span>{userProfile.connections} connections</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Bio</h4>
                        <p className="text-muted-foreground">{userProfile.bio}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {userProfile.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Profile Completion</h4>
                        <div className="space-y-2">
                          <Progress value={userProfile.profileCompletion} className="h-2" />
                          <p className="text-sm text-muted-foreground">
                            {userProfile.profileCompletion}% complete • Add more details to improve visibility
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Timeline</CardTitle>
                    <CardDescription>
                      Your recent interactions and engagements
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <activity.icon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.message}</p>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Achievements</CardTitle>
                    <CardDescription>
                      Track your progress and unlock new badges
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {achievements.map((achievement) => (
                        <div key={achievement.id} className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className={`p-3 rounded-full ${achievement.unlocked ? 'bg-green-100 text-green-600' : 'bg-muted'}`}>
                              <achievement.icon className="h-6 w-6" />
                            </div>
                            <div>
                              <h4 className="font-semibold">{achievement.title}</h4>
                              <p className="text-sm text-muted-foreground">{achievement.description}</p>
                            </div>
                          </div>
                          {achievement.progress && (
                            <div className="space-y-1">
                              <Progress value={achievement.progress} className="h-2" />
                              <p className="text-xs text-muted-foreground">
                                {achievement.progress}% complete
                              </p>
                            </div>
                          )}
                          {achievement.unlocked && (
                            <Badge className="bg-green-500 hover:bg-green-600">
                              Unlocked
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Quick View */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Profile Quick View</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-3">
                    <AvatarFallback className="text-xl">
                      {userProfile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="font-semibold">{userProfile.name}</h4>
                  <p className="text-sm text-muted-foreground">{userProfile.currentRole}</p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Profile Completion</span>
                    <span>{userProfile.profileCompletion}%</span>
                  </div>
                  <Progress value={userProfile.profileCompletion} className="h-2" />
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  View Public Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Find Alumni
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Browse Jobs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}