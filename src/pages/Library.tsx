
import React, { useState } from 'react';
import { Search, Filter, Book, FileText, Video, AlertCircle, Clock, Plus } from 'lucide-react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import { cn } from '@/lib/utils';

// Sample data for the library
const materials = [
  { 
    id: 1, 
    title: 'Introduction to Calculus', 
    type: 'notes', 
    subject: 'Mathematics', 
    dateAdded: '3 days ago',
    thumbnail: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22232%22%20height%3D%22131%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20232%20131%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17e704cfbe4%20text%20%7B%20fill%3A%236495ED%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A12pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17e704cfbe4%22%3E%3Crect%20width%3D%22232%22%20height%3D%22131%22%20fill%3D%22%236495ED%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2284.8046875%22%20y%3D%2270.9%22%3EMath%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E' 
  },
  { 
    id: 2, 
    title: 'Cell Structure and Function', 
    type: 'video', 
    subject: 'Biology', 
    dateAdded: '1 week ago',
    thumbnail: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22232%22%20height%3D%22131%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20232%20131%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17e704cfbe4%20text%20%7B%20fill%3A%2375D5A4%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A12pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17e704cfbe4%22%3E%3Crect%20width%3D%22232%22%20height%3D%22131%22%20fill%3D%22%2375D5A4%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2284.8046875%22%20y%3D%2270.9%22%3EBiology%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
  },
  { 
    id: 3, 
    title: 'American Civil War', 
    type: 'quiz', 
    subject: 'History', 
    dateAdded: '2 weeks ago',
    thumbnail: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22232%22%20height%3D%22131%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20232%20131%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17e704cfbe4%20text%20%7B%20fill%3A%23FFA07A%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A12pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17e704cfbe4%22%3E%3Crect%20width%3D%22232%22%20height%3D%22131%22%20fill%3D%22%23FFA07A%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2284.8046875%22%20y%3D%2270.9%22%3EHistory%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
  },
  { 
    id: 4, 
    title: 'Laws of Motion', 
    type: 'notes', 
    subject: 'Physics', 
    dateAdded: '3 weeks ago',
    thumbnail: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22232%22%20height%3D%22131%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20232%20131%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17e704cfbe4%20text%20%7B%20fill%3A%23AC8FE9%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A12pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17e704cfbe4%22%3E%3Crect%20width%3D%22232%22%20height%3D%22131%22%20fill%3D%22%23AC8FE9%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2284.8046875%22%20y%3D%2270.9%22%3EPhysics%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
  },
  { 
    id: 5, 
    title: 'Literary Devices in Shakespeare', 
    type: 'video', 
    subject: 'English', 
    dateAdded: '1 month ago',
    thumbnail: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22232%22%20height%3D%22131%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20232%20131%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17e704cfbe4%20text%20%7B%20fill%3A%2387CEEB%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A12pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17e704cfbe4%22%3E%3Crect%20width%3D%22232%22%20height%3D%22131%22%20fill%3D%22%2387CEEB%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2284.8046875%22%20y%3D%2270.9%22%3EEnglish%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
  },
  { 
    id: 6, 
    title: 'Chemical Bonds', 
    type: 'quiz', 
    subject: 'Chemistry', 
    dateAdded: '1 month ago',
    thumbnail: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22232%22%20height%3D%22131%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20232%20131%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17e704cfbe4%20text%20%7B%20fill%3A%23FFD580%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A12pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17e704cfbe4%22%3E%3Crect%20width%3D%22232%22%20height%3D%22131%22%20fill%3D%22%23FFD580%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2275%22%20y%3D%2270.9%22%3EChemistry%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
  },
];

// Material Type Badge component
const TypeBadge = ({ type }) => {
  const getTypeInfo = () => {
    switch(type) {
      case 'notes':
        return { icon: FileText, color: 'bg-blue-100 text-blue-600' };
      case 'video':
        return { icon: Video, color: 'bg-brand-teal/10 text-brand-teal' };
      case 'quiz':
        return { icon: AlertCircle, color: 'bg-purple-100 text-purple-600' };
      default:
        return { icon: Book, color: 'bg-gray-100 text-gray-600' };
    }
  };
  
  const { icon: Icon, color } = getTypeInfo();
  
  return (
    <div className={cn("inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium", color)}>
      <Icon size={12} />
      <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
    </div>
  );
};

// Material Card component
const MaterialCard = ({ material }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="relative h-32 overflow-hidden">
        <img 
          src={material.thumbnail} 
          alt={material.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <TypeBadge type={material.type} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2 line-clamp-2">{material.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
            {material.subject}
          </span>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock size={12} />
            <span>{material.dateAdded}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Library = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'All Materials' },
    { id: 'notes', label: 'Notes' },
    { id: 'video', label: 'Videos' },
    { id: 'quiz', label: 'Quizzes' },
  ];
  
  const filteredMaterials = activeFilter === 'all' 
    ? materials 
    : materials.filter(material => material.type === activeFilter);
  
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header pageTitle="Study Materials" />
        
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-6xl mx-auto">
            {/* Search and Filter */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search for study materials..." 
                    className="pl-10 pr-4 py-2.5 w-full bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 p-2.5 bg-gray-50 border border-gray-200 rounded-lg">
                    <Filter size={18} className="text-gray-500" />
                    <select className="bg-transparent text-gray-500 focus:outline-none text-sm">
                      <option value="">All Subjects</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Biology">Biology</option>
                      <option value="Physics">Physics</option>
                      <option value="Chemistry">Chemistry</option>
                      <option value="History">History</option>
                      <option value="English">English</option>
                    </select>
                  </div>
                  <button className="p-2.5 bg-brand-blue text-white rounded-lg flex items-center justify-center">
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Filters */}
            <div className="mb-8 flex flex-wrap gap-2">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    activeFilter === filter.id
                      ? "bg-brand-blue text-white shadow-sm"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  )}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            
            {/* Materials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredMaterials.map(material => (
                <MaterialCard key={material.id} material={material} />
              ))}
            </div>
            
            {/* Empty State */}
            {filteredMaterials.length === 0 && (
              <div className="text-center py-12">
                <Book size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold mb-2">No materials found</h3>
                <p className="text-gray-500">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
