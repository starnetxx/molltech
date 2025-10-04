import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const VALID_EMAIL = 'mollelectechnigltd@gmail.com';
  const VALID_PASSWORD = '17241522';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate loading
    setTimeout(() => {
      if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        // Store authentication token
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', email);
        navigate('/billing');
      } else {
        setError('Invalid email or password');
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md relative z-10 shadow-2xl bg-slate-800 border-slate-700">
                <CardHeader className="space-y-1 text-center bg-slate-800 border-slate-700">
                  <div className="mx-auto w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg mb-4 overflow-hidden bg-slate-700 p-2">
                    <img 
                      src="/molllogo.png" 
                      alt="Moll Technologies Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-3xl font-bold text-white">
                    Moll Technologies
                  </CardTitle>
                  <CardDescription className="text-sky-300 font-medium">
                    Billing System Access
                  </CardDescription>
                  <p className="text-xs text-sky-200 font-medium pt-2">
                    RC: 7262696
                  </p>
                </CardHeader>

        <CardContent className="bg-slate-800 border-slate-700">
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Error Message */}
            {error && (
              <div className="bg-red-900/50 border border-red-700 rounded-lg p-3 flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
                <span className="text-sm text-red-400">{error}</span>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-sky-300">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="mollelectechnigltd@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-sky-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-sky-400"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                'Sign In'
              )}
            </Button>

            {/* Back to Home */}
            <Button
              type="button"
              variant="outline"
              className="w-full h-12 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </form>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-slate-700">
            <p className="text-xs text-center text-slate-400">
              Secure access to Moll Technologies billing system.
              <br />
              For support, contact: mollelectechnigltd@gmail.com
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
