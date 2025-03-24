
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Search, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  showSearch?: boolean;
  showNotifications?: boolean;
  pageTitle?: string;
}

export const Header = ({ showSearch = true, showNotifications = true, pageTitle }: HeaderProps) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 md:px-6 flex items-center justify-between">
      <div className="flex items-center">
        <div className="md:hidden mr-4">
          <button className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100">
            <Menu size={20} className="text-gray-500" />
          </button>
        </div>
        
        {pageTitle && (
          <h1 className="text-xl font-semibold text-gray-800">{pageTitle}</h1>
        )}
      </div>
      
      <div className="flex items-center gap-3">
        {showSearch && (
          <div className={cn(
            "relative transition-all duration-300 ease-in-out",
            isSearchActive ? "w-60" : "w-9 md:w-40"
          )}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search..." 
              className={cn(
                "py-2 pl-9 pr-3 w-full bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-all",
                isSearchActive ? "opacity-100" : "opacity-0 md:opacity-100"
              )}
              onFocus={() => setIsSearchActive(true)}
              onBlur={() => setIsSearchActive(false)}
            />
            {!isSearchActive && (
              <button 
                className="md:hidden absolute inset-0 flex items-center justify-center"
                onClick={() => setIsSearchActive(true)}
              >
                <Search size={16} className="text-gray-400" />
              </button>
            )}
          </div>
        )}
        
        {showNotifications && (
          <button className="relative flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100">
            <Bell size={18} className="text-gray-500" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-blue rounded-full"></span>
          </button>
        )}
        
        <Link to="/profile" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-brand-blue to-brand-teal flex items-center justify-center text-white font-medium">
            JS
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
