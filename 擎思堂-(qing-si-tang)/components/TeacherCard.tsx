import React from 'react';
import { Teacher } from '../types';

interface TeacherCardProps {
  teacher: Teacher;
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 text-center">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <div className="absolute inset-0 bg-brand-100 rounded-full transform rotate-6 scale-105"></div>
        <img 
          src={teacher.image} 
          alt={teacher.name} 
          className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white shadow-sm"
        />
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mb-1">{teacher.name}</h3>
      <p className="text-brand-600 font-medium text-sm mb-3">{teacher.title}</p>
      
      <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-600 mb-4">
        {teacher.education}
      </div>
      
      <p className="text-slate-600 text-sm leading-relaxed">
        {teacher.bio}
      </p>
    </div>
  );
};

export default TeacherCard;