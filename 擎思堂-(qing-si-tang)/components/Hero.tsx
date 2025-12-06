import React from 'react';
import { ViewState } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative bg-brand-900 overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-800 border border-brand-700 mb-6">
            <Sparkles size={16} className="text-gold-400 mr-2" />
            <span className="text-brand-100 text-sm font-medium">全新 AI 智能辅导系统上线</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6">
            启迪智慧 <span className="text-gold-400">成就未来</span>
            <br />
            Ignite Your Thinking Engine
          </h1>
          
          <p className="text-lg md:text-xl text-brand-100 mb-10 leading-relaxed max-w-2xl">
            擎思堂致力于将传统精英教育与前沿人工智能技术相结合。我们提供个性化学习方案，帮助每一位学子突破思维瓶颈，在学术道路上行稳致远。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate('courses')}
              className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-brand-900 font-bold rounded-lg shadow-lg transform transition hover:-translate-y-1 flex items-center justify-center"
            >
              浏览课程
              <ArrowRight size={20} className="ml-2" />
            </button>
            <button 
              onClick={() => onNavigate('tutor')}
              className="px-8 py-4 bg-transparent border-2 border-brand-100 text-brand-50 font-semibold rounded-lg hover:bg-brand-800 transition flex items-center justify-center"
            >
              试用 AI 助教
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Image */}
      <div className="hidden lg:block absolute right-0 bottom-0 h-full w-1/3">
         <img 
            src="https://picsum.photos/id/175/600/800" 
            alt="Student studying" 
            className="h-full w-full object-cover object-center opacity-80 mask-image-gradient"
            style={{ maskImage: 'linear-gradient(to right, transparent, black)' }}
         />
      </div>
    </div>
  );
};

export default Hero;