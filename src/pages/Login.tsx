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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md relative z-10 shadow-2xl bg-white">
        <CardHeader className="space-y-1 text-center bg-white">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg mb-4">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-gray-900">
            Moll Technologies
          </CardTitle>
          <CardDescription className="text-gray-600 font-medium">
            Billing System Access
          </CardDescription>
          <p className="text-xs text-gray-600 font-medium pt-2">
            RC: 7262696
          </p>
        </CardHeader>

        <CardContent className="bg-white">
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                <span className="text-sm text-red-600">{error}</span>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="mollelectechnigltd@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
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
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200"
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
              className="w-full h-12 border-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </form>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-center text-gray-500">
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
