import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, ClipboardCheck, Award, UserCheck, LogIn, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useState } from "react";

const Index = () => {
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      color: "bg-purple-500"
    },
    {
      icon: Award,
      title: "Student Achievements",
      description: "Upload and showcase your academic and extracurricular accomplishments",
      link: "/achievements",
      color: "bg-orange-500"
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, show alert - actual authentication would need Supabase integration
    alert(`Login attempt for ${userType}: ${email}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Login */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-accent opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500 rounded-full blur-lg opacity-25 animate-pulse"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Sparkles className="w-8 h-8 text-orange-500 mr-3" />
                <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                  Smart Student Hub
                </h1>
              </div>
              
              {/* Login Form */}
              <Card className="w-full max-w-md mx-auto lg:mx-0 shadow-glow border-0 bg-background/95 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent flex items-center justify-center gap-2">
                    <LogIn className="w-6 h-6 text-primary" />
                    Login to Continue
                  </CardTitle>
                  <CardDescription>
                    Access your digital portfolio
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="userType">I am a:</Label>
                      <Select value={userType} onValueChange={setUserType}>
                        <SelectTrigger id="userType" className="border-primary/20 focus:ring-primary">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="faculty">Faculty</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-primary/20 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-primary/20 focus:ring-primary"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-accent hover:opacity-90 transition-all duration-300 shadow-glow font-semibold"
                      size="lg"
                    >
                      Login
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent rounded-3xl blur opacity-20"></div>
              <img 
                src={heroImage} 
                alt="Students collaborating on digital projects" 
                className="relative rounded-2xl shadow-hero w-full h-auto border-2 border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500 rounded-full blur-2xl opacity-10"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-6">
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
                <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-500 group cursor-pointer bg-gradient-card border-0 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-gradient-accent group-hover:text-white group-hover:border-transparent transition-all duration-300 font-semibold"
                      onClick={() => {
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

      {/* Footer */}
      <footer className="bg-foreground/5 py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-24 h-24 bg-blue-500 rounded-full blur-2xl opacity-20"></div>
          <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-15"></div>
        </div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-orange-500 mr-3" />
              <h3 className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                Smart Student Hub
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 text-lg">
              Empowering students with verified digital portfolios
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>Built with ❤️ for the hackathon by our amazing team</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;