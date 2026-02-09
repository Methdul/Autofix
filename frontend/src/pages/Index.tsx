import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Navbar } from '@/components/navigation/Navbar';
import {
  Search, MapPin, Star, Shield, Car, Wrench, Droplets, CheckCircle,
  Clock, Users, TrendingUp, Award, Quote, Briefcase, Settings, UserPlus, ChevronDown
} from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('services');

  const handleSearch = () => {
    const page = searchType === 'services' ? '/services' : '/providers';
    navigate(searchTerm.trim() ? `${page}?search=${encodeURIComponent(searchTerm)}` : page);
  };

  const features = [
    { icon: Shield, title: 'Verified Providers', desc: 'Thoroughly vetted for your peace of mind.' },
    { icon: Clock, title: 'Quick Booking', desc: 'Book easily, get confirmed in minutes.' },
    { icon: Star, title: 'Quality Guaranteed', desc: 'Reviews ensure best service every time.' },
    { icon: Award, title: 'Professional Service', desc: 'Experienced pros who care.' },
  ];

  const testimonials = [
    { name: "Samantha Silva", location: "Colombo", comment: "Amazing! Found a reliable car wash. Smooth booking, exceeded expectations." },
    { name: "Rajesh Patel", location: "Kandy", comment: "As a provider, AutoFix helped grow my business. Easy platform, quality customers." },
    { name: "Priya Fernando", location: "Galle", comment: "Great for finding trusted providers. The verification gives me confidence." },
  ];

  const [backendStatus, setBackendStatus] = useState<{ connected: boolean; message: string } | null>(null);

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const res = await fetch('http://localhost:3000/health');
        const data = await res.json();
        if (data.database && data.database.connected) {
          setBackendStatus({ connected: true, message: 'Backend & DB Connected' });
        } else {
          setBackendStatus({ connected: false, message: 'Backend Connected, DB Failed' });
        }
      } catch (error) {
        setBackendStatus({ connected: false, message: 'Backend Connection Failed' });
        console.error('Backend check failed:', error);
      }
    };

    checkBackend();
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />

      {/* Backend Status Indicator */}
      {backendStatus && (
        <div className={`fixed bottom-4 right-4 z-50 px-4 py-2 rounded-full text-xs font-semibold text-white shadow-lg ${backendStatus.connected ? 'bg-green-500' : 'bg-red-500'
          }`}>
          {backendStatus.message}
        </div>
      )}

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-24 md:py-32">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6">
            Sri Lanka's Premier{' '}
            <span className="text-primary">Vehicle Service</span> Platform
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect with verified professionals. From maintenance to repairs, find trusted experts for all your vehicle needs.
          </p>

          {/* Search */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex justify-center mb-4">
              <div className="inline-flex bg-background/80 rounded-2xl p-1 border">
                <button
                  onClick={() => setSearchType('services')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all ${searchType === 'services' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  <Wrench className="h-4 w-4" />
                  Services
                </button>
                <button
                  onClick={() => setSearchType('providers')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all ${searchType === 'providers' ? 'bg-primary text-primary-foreground shadow-md' : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  <Users className="h-4 w-4" />
                  Providers
                </button>
              </div>
            </div>

            <div className="flex items-center bg-background rounded-2xl shadow-xl border p-2 gap-2">
              <Search className="h-5 w-5 text-muted-foreground ml-4" />
              <Input
                placeholder={`Search for ${searchType}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="flex-1 border-0 bg-transparent focus-visible:ring-0 text-lg"
              />
              <Button onClick={handleSearch} size="lg" className="rounded-xl px-8">
                Search <ChevronDown className="h-4 w-4 ml-2 -rotate-90" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background border-b">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Service Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-1">Car Wash</h3>
              <p className="text-sm text-muted-foreground">Professional cleaning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                <Wrench className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-1">Repairs</h3>
              <p className="text-sm text-muted-foreground">Expert mechanical services</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-50 border-2 border-purple-200 flex items-center justify-center">
                <Droplets className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-1">Detailing</h3>
              <p className="text-sm text-muted-foreground">Premium vehicle care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-50 border-2 border-orange-200 flex items-center justify-center">
                <Settings className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-1">Maintenance</h3>
              <p className="text-sm text-muted-foreground">Routine upkeep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose AutoFix?</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Quality, trust, and convenience for customers and providers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <f.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-primary">How to Use AutoFix</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get started in just a few simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary to-primary/70 flex flex-col items-center justify-center shadow-2xl group-hover:scale-105 transition-transform">
                <UserPlus className="h-12 w-12 text-white mb-2" />
                <span className="text-white font-bold text-xs">STEP 1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Create Account</h3>
              <p className="text-lg text-muted-foreground">Sign up free. Choose customer or provider.</p>
            </div>
            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-green-500 to-green-500/70 flex flex-col items-center justify-center shadow-2xl group-hover:scale-105 transition-transform">
                <Settings className="h-12 w-12 text-white mb-2" />
                <span className="text-white font-bold text-xs">STEP 2</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Complete Profile</h3>
              <p className="text-lg text-muted-foreground">Add your details and preferences.</p>
            </div>
            <div className="text-center group">
              <div className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-500/70 flex flex-col items-center justify-center shadow-2xl group-hover:scale-105 transition-transform">
                <CheckCircle className="h-12 w-12 text-white mb-2" />
                <span className="text-white font-bold text-xs">STEP 3</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Start Using</h3>
              <p className="text-lg text-muted-foreground">Book services or manage your business!</p>
            </div>
          </div>

          {/* Provider Section */}
          <div className="bg-white rounded-2xl p-8 md:p-12 border shadow-sm">
            <div className="text-center mb-10">
              <Briefcase className="h-12 w-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-3xl font-bold mb-4">For Service Providers</h3>
              <p className="text-muted-foreground">Turn your expertise into a thriving business.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4">
                    <span className="text-purple-600 font-bold text-lg">4</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">List Services</h4>
                  <p className="text-muted-foreground text-sm">Add services with pricing and images.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                    <span className="text-orange-600 font-bold text-lg">5</span>
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Manage Orders</h4>
                  <p className="text-muted-foreground text-sm">Handle bookings efficiently.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Build Reputation</h4>
                  <p className="text-muted-foreground text-sm">Great reviews = more business.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">What is AutoFix?</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Sri Lanka's premier platform connecting vehicle owners with verified professionals.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">For Vehicle Owners</h3>
                <p className="text-muted-foreground">Find and book reliable services near you. From car washes to major repairs.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">For Service Providers</h3>
                <p className="text-muted-foreground">Grow your business, manage bookings, and build your reputation.</p>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Easy Booking</h4>
                    <p className="text-muted-foreground text-sm">Book with a few clicks, track your history.</p>
                  </div>
                </div>
              </Card>
              <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 p-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center shrink-0">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Growth</h4>
                    <p className="text-muted-foreground text-sm">Expand your customer base easily.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button size="lg" onClick={() => navigate('/providers')}>Explore Services</Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/business-signup')}>Join as Provider</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4">What Our Users Say</h2>
          <p className="text-xl text-muted-foreground text-center mb-16">Trusted by thousands across Sri Lanka.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-0 bg-gradient-to-br from-background to-muted/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{t.comment}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{t.name}</h4>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />{t.location}
                      </p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join our community of satisfied customers and professional providers.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">For Customers</h3>
              <p className="opacity-80 mb-6">Book trusted services with verified professionals.</p>
              <Button size="lg" variant="secondary" onClick={() => navigate('/signup')} className="w-full">
                Book a Service
              </Button>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <Briefcase className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">For Providers</h3>
              <p className="opacity-80 mb-6">Grow your business with our platform.</p>
              <Button size="lg" variant="outline" onClick={() => navigate('/business-signup')} className="w-full border-white text-primary hover:bg-white hover:text-primary">
                Become a Provider
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-muted/50 border-t">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="AutoFix" className="h-8 mr-2" />
                <span className="text-xl font-bold">AutoFix</span>
              </div>
              <p className="text-sm text-muted-foreground">Sri Lanka's premier vehicle service platform.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/services" className="hover:text-primary transition-colors">Browse Services</Link></li>
                <li><Link to="/providers" className="hover:text-primary transition-colors">Find Providers</Link></li>
                <li><Link to="/signup" className="hover:text-primary transition-colors">Book Service</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms</Link></li>
                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link></li>
                <li><Link to="/help" className="hover:text-primary transition-colors">Help</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 AutoFix. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
