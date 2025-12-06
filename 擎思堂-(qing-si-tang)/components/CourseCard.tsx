import React from 'react';
import { Course } from '../types';
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onClick: (courseId: string) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, onClick }) => {
  return (
    <div 
      onClick={() => onClick(course.id)}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 border border-slate-100 flex flex-col h-full group cursor-pointer"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-900 shadow-sm">
          {course.subject}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
           <h3 className="text-xl font-bold text-slate-800 line-clamp-1 group-hover:text-brand-600 transition-colors">{course.title}</h3>
        </div>
        
        <p className="text-sm text-slate-500 mb-4 flex items-center">
          <Clock size={14} className="mr-1" />
          {course.gradeLevel}
        </p>
        
        <p className="text-slate-600 text-sm mb-6 line-clamp-2 flex-1">
          {course.description}
        </p>
        
        <div className="space-y-2 mb-6">
          {course.features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center text-xs text-slate-500">
              <CheckCircle2 size={12} className="text-gold-500 mr-2" />
              {feature}
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
          <span className="text-2xl font-bold text-brand-600">{course.price}</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onClick(course.id);
            }}
            className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg hover:bg-brand-600 hover:text-white transition-colors flex items-center"
          >
            查看详情
            <ArrowRight size={14} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;