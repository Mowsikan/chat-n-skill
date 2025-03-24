
import React from 'react';
import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Clock, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

// Sample data for the charts
const subjectsData = [
  { name: 'Math', progress: 78 },
  { name: 'Science', progress: 65 },
  { name: 'History', progress: 42 },
  { name: 'English', progress: 85 },
  { name: 'Physics', progress: 53 },
];

// Sample data for recent questions
const recentTopics = [
  { id: 1, topic: 'Photosynthesis', subject: 'Biology', date: '2 hours ago', completed: true },
  { id: 2, topic: 'Quadratic Equations', subject: 'Math', date: 'Yesterday', completed: true },
  { id: 3, topic: 'World War II', subject: 'History', date: '3 days ago', completed: false },
  { id: 4, topic: 'Newton\'s Laws', subject: 'Physics', date: '1 week ago', completed: true },
];

// Progress Card component
const ProgressCard = ({ title, value, icon: Icon, color }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-500 text-sm mb-1">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
        </div>
        <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center`}>
          <Icon size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};

// Subject Progress component
const SubjectProgress = ({ subject, progress }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium">{subject.name}</h3>
        <span className="text-sm font-semibold">{subject.progress}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${
            subject.progress < 50 
              ? 'bg-gradient-to-r from-orange-400 to-red-400' 
              : subject.progress < 75 
                ? 'bg-gradient-to-r from-yellow-300 to-orange-400'
                : 'bg-gradient-to-r from-green-300 to-green-500'
          }`}
          style={{ width: `${subject.progress}%` }}
        ></div>
      </div>
    </div>
  );
};

// Recent Topic Card component
const RecentTopicCard = ({ topic }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex items-center justify-between">
      <div>
        <h3 className="font-medium">{topic.topic}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600">
            {topic.subject}
          </span>
          <span className="text-xs text-gray-500">{topic.date}</span>
        </div>
      </div>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${topic.completed ? 'bg-green-100 text-green-500' : 'bg-orange-100 text-orange-500'}`}>
        {topic.completed ? <CheckCircle2 size={16} /> : <Clock size={16} />}
      </div>
    </div>
  );
};

const Progress = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header pageTitle="Learning Progress" />
        
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-6xl mx-auto">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <ProgressCard 
                title="Study Streak" 
                value="7 Days" 
                icon={Award} 
                color="bg-gradient-to-r from-brand-purple to-brand-purple-dark" 
              />
              <ProgressCard 
                title="Hours This Week" 
                value="12.5 hrs" 
                icon={Clock} 
                color="bg-gradient-to-r from-brand-blue to-brand-blue-dark" 
              />
              <ProgressCard 
                title="Topics Mastered" 
                value="24" 
                icon={CheckCircle2} 
                color="bg-gradient-to-r from-green-400 to-green-600" 
              />
              <ProgressCard 
                title="Overall Progress" 
                value="67%" 
                icon={TrendingUp} 
                color="bg-gradient-to-r from-brand-teal to-teal-600" 
              />
            </div>
            
            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold mb-6">Subject Progress</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={subjectsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          borderRadius: '0.5rem',
                          border: '1px solid #f1f5f9',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }} 
                      />
                      <Bar 
                        dataKey="progress" 
                        fill="url(#colorGradient)" 
                        radius={[4, 4, 0, 0]} 
                        barSize={40} 
                      />
                      <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#60A5FA" />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold mb-6">Detailed Progress</h2>
                <div className="space-y-4">
                  {subjectsData.map((subject, index) => (
                    <SubjectProgress key={index} subject={subject} progress={subject.progress} />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Recent Topics Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recent Topics</h2>
                <button className="btn-secondary text-sm py-1.5">View All</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recentTopics.map(topic => (
                  <RecentTopicCard key={topic.id} topic={topic} />
                ))}
              </div>
            </div>
            
            {/* Continue Learning Section */}
            <div className="bg-gradient-to-r from-brand-blue/90 to-brand-teal/90 rounded-xl shadow-md p-6 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Keep up the good work!</h2>
                  <p className="opacity-90 mb-4 md:mb-0">
                    You're making great progress. Continue where you left off in Physics.
                  </p>
                </div>
                <button className="px-6 py-3 bg-white text-brand-blue-dark rounded-lg font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  Continue Learning
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
