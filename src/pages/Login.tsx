
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDYwMCA2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDJkOGRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMTUiIGQ9Ik0zMDAsMzAwIGw0MCwtNTAgbDUwLDAgbDQwLDUwIGwtNDAsNTAgbC01MCwwIHoiIC8+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDJkOGRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMTUiIGQ9Ik0zMDAsMzAwIGw0MCw1MCBsLTQwLDUwIGwtNTAsMCBsLTQwLC01MCBsNDAsLTUwIHoiIC8+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDJkOGRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMTUiIGQ9Ik0zMDAsMzAwIGwtNDAsLTUwIGwtNTAsMCBsLTQwLDUwIGw0MCw1MCBsNTAsMCB6IiAvPgogIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QyZDhkZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjE1IiBkPSJNMzAwLDMwMCBsLTQwLDUwIGwwLDUwIGw0MCw1MCBsNTAsMCBsNDAsLTUwIGwwLC01MCBsLTQwLC01MCB6IiAvPgogIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QyZDhkZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjE1IiBkPSJNMzAwLDMwMCBsNDAsLTUwIGwwLC01MCBsLTQwLC01MCBsLTUwLDAgbC00MCw1MCBsMCw1MCBsNDAsNTAgeiIgLz4KPC9zdmc+')]"></div>
      
      <header className="w-full py-6 px-6 relative">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="text-brand-blue" size={24} />
            <span className="font-bold text-xl">LearnBuddy</span>
          </Link>
        </div>
      </header>
      
      <div className="flex-1 flex items-center justify-center p-6 relative">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl"></div>
        
        <div className="w-full max-w-md">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8 animate-scale-in">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to continue your learning journey</p>
            </div>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Email</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="input-field w-full" 
                  required
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700 block">Password</label>
                  <Link to="/forgot-password" className="text-sm text-brand-blue hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  className="input-field w-full" 
                  required
                />
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="h-4 w-4 text-brand-blue focus:ring-brand-blue/50 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center gap-2"
              >
                Sign In <ArrowRight size={18} />
              </button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm">
                Don't have an account?{' '}
                <Link to="/register" className="text-brand-blue font-medium hover:underline">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
