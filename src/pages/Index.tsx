import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ClipboardCheck, Award, UserCheck, BarChart3, Shield } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: ClipboardCheck,
      title: "Attendance Tracker",
      description: "Real-time attendance monitoring and academic performance tracking",
      link: "/attendance",
      color: "bg-blue-500"
    },
    {
      icon: UserCheck,
      title: "Faculty Panel",
      description: "Faculty approval system for validating student achievements",
      link: "/faculty",
      color: "bg-accent"
    },
    {
      icon: Award,
      title: "Student Achievements",
      description: "Upload and showcase your academic and extracurricular accomplishments",
      link: "/achievements",
      color: "bg-blue-600"
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Holistic Student Profile",
      description: "Build a complete digital portfolio from day one"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Generate institutional reports for NAAC and accreditation"
    },
    {
      icon: Shield,
      title: "Verified Credentials",
      description: "Faculty-approved achievements with digital verification"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Smart Student Hub
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
                Your centralized platform for tracking achievements, managing attendance, 
                and building a verified digital portfolio that showcases your complete academic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Students collaborating on digital projects" 
                className="rounded-2xl shadow-hero w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Platform Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access all the tools you need to track, verify, and showcase your academic journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-hero transition-all duration-300 group cursor-pointer bg-gradient-card border-0">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground mb-6">
                      {feature.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                      onClick={() => {
                        // For now, show alert since other pages aren't ready yet
                        alert(`${feature.title} will be integrated once your team completes their modules!`);
                      }}
                    >
                      Access Module
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Smart Student Hub?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering students and institutions with comprehensive digital portfolio management
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Build Your Digital Portfolio?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students already using Smart Student Hub to track their achievements and prepare for their future careers.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-12 py-4">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Smart Student Hub</h3>
            <p className="text-muted-foreground mb-6">
              Empowering students with verified digital portfolios
            </p>
            <p className="text-sm text-muted-foreground">
              Built with ❤️ for the hackathon by our amazing team
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;