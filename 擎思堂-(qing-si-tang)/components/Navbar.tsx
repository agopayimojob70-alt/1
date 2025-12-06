import React, { useState } from 'react';
import { ViewState } from '../types';
import { Menu, X, GraduationCap, BookOpen, BrainCircuit, Users, Phone } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { id: ViewState; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: '首页', icon: <GraduationCap size={18} /> },
    { id: 'courses', label: '精品课程', icon: <BookOpen size={18} /> },
    { id: 'tutor', label: 'AI 助教', icon: <BrainCircuit size={18} /> },
    { id: 'faculty', label: '名师风采', icon: <Users size={18} /> },
    { id: 'contact', label: '联系我们', icon: <Phone size={18} /> },
  ];

  const handleNavClick = (view: ViewState) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-8 h-8 bg-brand-900 rounded-lg flex items-center justify-center mr-2">
              <span className="text-brand-50 font-serif font-bold text-lg">擎</span>
            </div>
            <span className="font-serif text-2xl font-bold text-brand-900 tracking-wide">
              擎思堂
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                  ${currentView === item.id 
                    ? 'text-brand-600 bg-brand-50' 
                    : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-brand-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-3 w-full px-3 py-3 rounded-md text-base font-medium
                  ${currentView === item.id 
                    ? 'text-brand-600 bg-brand-50' 
                    : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;