
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, Brain, Users, BarChart2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-blue-50 pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDYwMCA2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDJkOGRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMTUiIGQ9Ik0zMDAsMzAwIGw0MCwtNTAgbDUwLDAgbDQwLDUwIGwtNDAsNTAgbC01MCwwIHoiIC8+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDJkOGRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMTUiIGQ9Ik0zMDAsMzAwIGw0MCw1MCBsLTQwLDUwIGwtNTAsMCBsLTQwLC01MCBsNDAsLTUwIHoiIC8+CiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDJkOGRlIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMTUiIGQ9Ik0zMDAsMzAwIGwtNDAsLTUwIGwtNTAsMCBsLTQwLDUwIGw0MCw1MCBsNTAsMCB6IiAvPgogIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QyZDhkZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjE1IiBkPSJNMzAwLDMwMCBsLTQwLDUwIGwwLDUwIGw0MCw1MCBsNTAsMCBsNDAsLTUwIGwwLC01MCBsLTQwLC01MCB6IiAvPgogIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QyZDhkZSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjE1IiBkPSJNMzAwLDMwMCBsNDAsLTUwIGwwLC01MCBsLTQwLC01MCBsLTUwLDAgbC00MCw1MCBsMCw1MCBsNDAsNTAgeiIgLz4KPC9zdmc+')]"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 max-w-xl">
              <div className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium mb-6 animate-fade-in">
                Meet your new study companion
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Your Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">Learning Assistant</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Boost your studies with AI-powered learning. Get instant help with difficult concepts, track your progress, and access personalized resources - all in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Link to="/chat" className="btn-primary flex items-center justify-center gap-2 text-center">
                  Get Started <ArrowRight size={18} />
                </Link>
                <Link to="/login" className="btn-secondary flex items-center justify-center text-center">
                  Sign In
                </Link>
              </div>
            </div>
            
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-72 h-72 bg-brand-purple/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl"></div>
                <div className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-6 animate-float">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal flex items-center justify-center text-white">
                      <Sparkles size={16} />
                    </div>
                    <div className="font-medium">LearnBuddy AI</div>
                  </div>
                  <div className="chat-bubble-ai ml-auto">
                    How can I help with your studies today?
                  </div>
                  <div className="chat-bubble-user mr-auto mt-4">
                    Can you explain how photosynthesis works?
                  </div>
                  <div className="chat-bubble-ai ml-auto mt-4">
                    Photosynthesis is the process where plants convert sunlight, CO₂ and water into glucose and oxygen. It happens in chloroplasts and has two main stages: light-dependent reactions and the Calvin cycle.
                  </div>
                  <div className="mt-6 flex gap-2">
                    <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">Explain More</button>
                    <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">Show Examples</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Supercharge Your Learning Journey</h2>
            <p className="text-lg text-gray-600">
              Unlock your full potential with intelligent tools designed to help you learn faster and retain more.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-blue/10 flex items-center justify-center mb-5">
                <Brain className="text-brand-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Tutoring</h3>
              <p className="text-gray-600">
                Get instant answers to your questions and personalized explanations that adapt to your learning style.
              </p>
            </div>
            
            <div className="card hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-5">
                <BarChart2 className="text-brand-purple" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Track Your Progress</h3>
              <p className="text-gray-600">
                Visualize your learning journey with detailed analytics and insights on your strengths and areas for improvement.
              </p>
            </div>
            
            <div className="card hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 rounded-lg bg-brand-teal/10 flex items-center justify-center mb-5">
                <BookOpen className="text-brand-teal" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Study Materials Library</h3>
              <p className="text-gray-600">
                Access a curated collection of notes, videos, and quizzes to enhance your understanding of any subject.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Learning?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of students who are already using LearnBuddy to achieve their academic goals.
          </p>
          <Link to="/chat" className="btn-primary inline-flex items-center justify-center gap-2">
            Start Learning Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Sparkles className="text-brand-blue" size={20} />
              <span className="font-bold text-lg">LearnBuddy</span>
            </div>
            <div className="text-sm text-gray-500">
              © 2023 LearnBuddy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
