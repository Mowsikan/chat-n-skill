
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  MessageSquare, 
  BarChart2, 
  Book, 
  User, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Lightbulb
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ElementType;
  text: string;
  to: string;
  isActive?: boolean;
  isCollapsed?: boolean;
}

const SidebarItem = ({ icon: Icon, text, to, isActive, isCollapsed }: SidebarItemProps) => {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex items-center gap-3 px-3 py-3 my-1 rounded-lg transition-all duration-200 group",
        isActive 
          ? "bg-brand-blue-light/20 text-brand-blue-dark" 
          : "text-gray-500 hover:bg-gray-100"
      )}
    >
      <Icon className={cn("flex-shrink-0", isActive ? "text-brand-blue" : "text-gray-400")} size={20} />
      {!isCollapsed && <span className="font-medium">{text}</span>}
      {isCollapsed && (
        <div className="absolute left-16 rounded-md px-2 py-1 ml-6 bg-gray-900 text-white text-sm opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none z-50">
          {text}
        </div>
      )}
    </Link>
  );
};

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, text: 'Home', to: '/' },
    { icon: MessageSquare, text: 'Chat', to: '/chat' },
    { icon: BarChart2, text: 'Progress', to: '/progress' },
    { icon: Book, text: 'Library', to: '/library' },
    { icon: User, text: 'Profile', to: '/profile' },
    { icon: Settings, text: 'Settings', to: '/settings' },
  ];
  
  return (
    <div className={cn(
      "flex flex-col bg-white border-r border-gray-200 h-screen relative transition-all duration-300 ease-in-out",
      isCollapsed ? "w-[70px]" : "w-[240px]"
    )}>
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-100">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <Lightbulb className="text-brand-blue" size={24} />
            <span className="font-bold text-lg tracking-tight">LearnBuddy</span>
          </div>
        )}
        {isCollapsed && <Lightbulb className="text-brand-blue mx-auto" size={24} />}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="p-1 rounded-md hover:bg-gray-100 text-gray-400"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-3 px-2">
        {menuItems.map((item) => (
          <SidebarItem 
            key={item.text}
            icon={item.icon} 
            text={item.text} 
            to={item.to} 
            isActive={location.pathname === item.to}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-100">
        {!isCollapsed && (
          <div className="flex items-center gap-3 p-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal flex items-center justify-center text-white font-medium text-sm">
              JS
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">John Student</div>
              <div className="text-xs text-gray-500">Premium Plan</div>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="flex justify-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal flex items-center justify-center text-white font-medium text-sm">
              JS
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
