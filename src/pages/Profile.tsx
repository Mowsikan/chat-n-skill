
import React from 'react';
import { BarChart, ResponsiveContainer, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { 
  UserCircle2, 
  Calendar, 
  Clock, 
  Award, 
  Bookmark, 
  Settings, 
  LogOut,
  Edit2,
  GraduationCap,
  Target
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { cn } from '@/lib/utils';

// Sample data for the charts
const weeklyActivity = [
  { day: 'Mon', hours: 1.5 },
  { day: 'Tue', hours: 2.2 },
  { day: 'Wed', hours: 0.8 },
  { day: 'Thu', hours: 3.0 },
  { day: 'Fri', hours: 2.1 },
  { day: 'Sat', hours: 1.0 },
  { day: 'Sun', hours: 0.5 },
];

// Sample achievements data
const achievements = [
  { id: 1, title: 'Early Bird', description: 'Completed 5 study sessions before 9 AM', icon: Clock, color: 'bg-blue-500' },
  { id: 2, title: 'Knowledge Seeker', description: 'Asked 50 questions to LearnBuddy', icon: GraduationCap, color: 'bg-purple-500' },
  { id: 3, title: 'Perfect Streak', description: 'Maintained a 7-day study streak', icon: Award, color: 'bg-green-500' },
  { id: 4, title: 'Quiz Master', description: 'Scored 100% on 3 consecutive quizzes', icon: Target, color: 'bg-amber-500' },
];

// Badge component
const Badge = ({ achievement }) => {
  const { title, description, icon: Icon, color } = achievement;
  
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white", color)}>
        <Icon size={20} />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

const ProfileCard = ({ icon: Icon, title, value, color }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
      <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-white", color)}>
        <Icon size={20} />
      </div>
      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="font-semibold text-lg">{value}</p>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header pageTitle="My Profile" showSearch={false} />
        
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-6xl mx-auto">
            {/* Profile Header */}
            <div className="mb-8 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-brand-blue to-brand-purple relative">
                <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors">
                  <Edit2 size={16} />
                </button>
              </div>
              <div className="px-6 pb-6 relative flex flex-col md:flex-row gap-6 items-start md:items-end">
                <div className="w-24 h-24 rounded-full bg-white p-1 shadow-md -mt-12">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-teal flex items-center justify-center text-white text-xl font-bold">
                    JS
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-1">John Student</h1>
                  <p className="text-gray-500">High School Student, Grade 11</p>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-brand-blue text-white rounded-lg hover:bg-brand-blue-dark transition-colors">
                    Edit Profile
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Settings
                  </button>
                </div>
              </div>
            </div>
            
            {/* Profile Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <ProfileCard 
                icon={Calendar} 
                title="Member Since" 
                value="June 2023" 
                color="bg-brand-blue" 
              />
              <ProfileCard 
                icon={Clock} 
                title="Study Time" 
                value="87 hours" 
                color="bg-brand-teal" 
              />
              <ProfileCard 
                icon={Award} 
                title="Badges Earned" 
                value="12 of 24" 
                color="bg-brand-purple" 
              />
              <ProfileCard 
                icon={Bookmark} 
                title="Saved Materials" 
                value="27 items" 
                color="bg-amber-500" 
              />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Weekly Activity */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h2 className="text-xl font-bold mb-6">Weekly Activity</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyActivity} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} />
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
                        dataKey="hours" 
                        fill="url(#colorGradient)" 
                        radius={[4, 4, 0, 0]} 
                        barSize={40} 
                      />
                      <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#A78BFA" />
                          <stop offset="100%" stopColor="#C4B5FD" />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Study Goals */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Study Goals</h2>
                  <button className="text-sm text-brand-blue hover:underline">Edit Goals</button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">Weekly Study Hours</h3>
                      <span className="text-sm font-semibold">11/15 hrs</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-brand-blue"
                        style={{ width: `${(11/15) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">Topics Mastered</h3>
                      <span className="text-sm font-semibold">24/50</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-brand-purple"
                        style={{ width: `${(24/50) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">Practice Quizzes</h3>
                      <span className="text-sm font-semibold">8/12</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-brand-teal"
                        style={{ width: `${(8/12) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <button className="mt-6 w-full py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                  Set New Goal
                </button>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">My Badges</h2>
                <button className="text-sm text-brand-blue hover:underline">View All</button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map(achievement => (
                  <Badge key={achievement.id} achievement={achievement} />
                ))}
              </div>
            </div>
            
            {/* Account Settings */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
              <h2 className="text-xl font-bold mb-6">Account Settings</h2>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-500">Receive email updates about your learning progress</p>
                  </div>
                  <div className="h-6 w-12 bg-brand-blue rounded-full relative flex items-center cursor-pointer">
                    <div className="h-5 w-5 bg-white rounded-full absolute right-0.5 shadow"></div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                  <div>
                    <h3 className="font-medium">Study Reminders</h3>
                    <p className="text-sm text-gray-500">Get notifications to maintain your study schedule</p>
                  </div>
                  <div className="h-6 w-12 bg-gray-200 rounded-full relative flex items-center cursor-pointer">
                    <div className="h-5 w-5 bg-white rounded-full absolute left-0.5 shadow"></div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    <Settings size={16} />
                    <span>Settings</span>
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-red-200 text-red-500 rounded-lg hover:bg-red-50 transition-colors">
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
