import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Lock } from 'lucide-react';

export function Navbar() {
  // User will be null until auth is implemented by Member 1
  const user = null;
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="AutoFix Logo"
              className="h-28 object-contain"
            />
          </Link>

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>

            {/* TODO: Member 4 will implement checking providers */}
            <div className="flex items-center gap-1 text-muted-foreground opacity-60 cursor-not-allowed font-medium">
              <Lock className="h-3 w-3" />
              Providers
            </div>

            {/* TODO: Member 2 & 4 will implement services */}
            <div className="flex items-center gap-1 text-muted-foreground opacity-60 cursor-not-allowed font-medium">
              <Lock className="h-3 w-3" />
              Services
            </div>

            {/* TODO: Member 6 (You) needs to implement Contact page later if requested */}
            <div className="flex items-center gap-1 text-muted-foreground opacity-60 cursor-not-allowed font-medium">
              <Lock className="h-3 w-3" />
              Contact
            </div>
          </div>

          {/* Desktop Navigation - Auth Section */}
          <div className="hidden md:flex items-center space-x-6">
            {user ? (
              <div className="flex items-center space-x-2">
                {/* User menu will be added by Member 1 */}
                <span>Logged In</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                {/* Auth buttons - functionality to be added by Member 1 */}
                <Button variant="ghost" disabled className="opacity-50 cursor-not-allowed">
                  Sign In
                </Button>
                <Button disabled className="opacity-50 cursor-not-allowed">
                  Sign Up
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="touch-manipulation"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="block px-3 py-2 text-base font-medium text-muted-foreground opacity-60">
                Providers (Coming Soon)
              </div>

              <div className="block px-3 py-2 text-base font-medium text-muted-foreground opacity-60">
                Services (Coming Soon)
              </div>

              <div className="block px-3 py-2 text-base font-medium text-muted-foreground opacity-60">
                Contact (Coming Soon)
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
