import { motion } from 'motion/react';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Calendar, Briefcase, BookOpen, Award, TrendingUp } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const features = [
    {
      icon: Users,
      title: "Alumni Network",
      description: "Connect with 50,000+ alumni worldwide across all industries and career levels."
    },
    {
      icon: Calendar,
      title: "Events & Reunions",
      description: "Join exclusive alumni events, webinars, and annual reunions."
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description: "Access job postings, mentorship programs, and career guidance."
    },
    {
      icon: BookOpen,
      title: "Lifelong Learning",
      description: "Continuous education programs and skill development workshops."
    }
  ];

  const stats = [
    { icon: Users, label: "Active Alumni", value: "50,000+" },
    { icon: Briefcase, label: "Job Placements", value: "5,000+" },
    { icon: Award, label: "Success Stories", value: "1,200+" },
    { icon: TrendingUp, label: "Network Growth", value: "25%" }
  ];

  const successStories = [
    {
      name: "Dr. Priya Sharma",
      role: "Chief Technology Officer at Tata Consultancy Services",
      graduation: "Computer Science, 2015",
      story: "The alumni network helped me connect with industry leaders and advance to CTO role at India's largest IT services company."
    },
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO, GreenTech Solutions",
      graduation: "Environmental Engineering, 2012",
      story: "Through alumni mentorship, I built a sustainable technology company that's now valued at ₹400 Crores and creating clean energy solutions across India."
    },
    {
      name: "Anjali Patel",
      role: "Senior Research Scientist, ISRO",
      graduation: "Aerospace Engineering, 2018",
      story: "Alumni connections opened doors to research opportunities that led to my current role at ISRO, contributing to Chandrayaan and Mars missions."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Badge variant="secondary" className="mb-4">
                Smart Education Initiative
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold tracking-tight"
              variants={itemVariants}
            >
              Connect. Collaborate. <span className="text-primary">Succeed.</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Join our thriving alumni community and unlock endless opportunities for personal and professional growth.
              Your university journey doesn't end at graduation—it evolves.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button size="lg" className="text-lg px-8">
                Join the Network
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button variant="outline" size="lg" className="text-lg px-8">
                Explore Features
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-12"
            variants={itemVariants}
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
            >
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop" 
                alt="University campus with students"
                className="rounded-lg shadow-xl mx-auto max-w-4xl w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center space-y-2"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -2
                }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "tween", duration: 0.2 }}
                >
                  <stat.icon className="h-8 w-8 mx-auto text-primary" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-display font-bold"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1 + 0.3, 
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground font-display">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center space-y-4 mb-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-display font-bold">Platform Features</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to stay connected with your alma mater
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                    </motion.div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Success Stories */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center space-y-4 mb-12"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-display font-bold">Success Stories</h2>
            <p className="text-xl text-muted-foreground">
              See how our alumni are making a difference worldwide
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <CardTitle className="text-lg">{story.name}</CardTitle>
                    <CardDescription>
                      {story.role}
                    </CardDescription>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Badge variant="outline" className="mt-1 w-fit">
                        {story.graduation}
                      </Badge>
                    </motion.div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground italic">
                      "{story.story}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2 
            className="text-3xl font-display font-bold"
            variants={itemVariants}
          >
            Ready to Join Our Community?
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground"
            variants={itemVariants}
          >
            Take the next step in your professional journey. Connect with alumni, 
            discover opportunities, and give back to your alma mater.
          </motion.p>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Button size="lg" className="text-lg px-8">
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}