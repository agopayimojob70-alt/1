import React from 'react';
import { Course } from '../types';
import { ArrowLeft, CheckCircle2, Clock, BookOpen, GraduationCap, Calendar, ShieldCheck, Star } from 'lucide-react';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ course, onBack }) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      {/* Header / Breadcrumb */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button 
            onClick={onBack}
            className="flex items-center text-slate-600 hover:text-brand-600 transition-colors font-medium"
          >
            <ArrowLeft size={20} className="mr-2" />
            返回课程列表
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Hero Section */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-100">
              <div className="relative h-64 md:h-80 w-full">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-8 w-full">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-gold-500 text-brand-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {course.subject}
                      </span>
                      <span className="bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full flex items-center">
                        <Clock size={12} className="mr-1" />
                        {course.gradeLevel}
                      </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 shadow-sm">
                      {course.title}
                    </h1>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h2 className="text-xl font-bold text-brand-900 mb-4 flex items-center">
                  <BookOpen className="mr-2 text-brand-600" size={24} />
                  课程简介
                </h2>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {course.longDescription || course.description}
                </p>
              </div>
            </div>

            {/* Syllabus Section */}
            {course.syllabus && (
              <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
                <h2 className="text-xl font-bold text-brand-900 mb-6 flex items-center">
                  <GraduationCap className="mr-2 text-brand-600" size={24} />
                  课程大纲
                </h2>
                <div className="space-y-4">
                  {course.syllabus.map((item, index) => (
                    <div key={index} className="flex items-start p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-brand-200 transition-colors">
                      <div className="flex-shrink-0 w-8 h-8 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-0.5">
                        {index + 1}
                      </div>
                      <div className="text-slate-700 font-medium">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features Detail */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
              <h2 className="text-xl font-bold text-brand-900 mb-6 flex items-center">
                <Star className="mr-2 text-brand-600" size={24} />
                课程特色
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.features.map((feature, index) => (
                  <div key={index} className="flex items-center p-3">
                    <CheckCircle2 className="text-gold-500 mr-3 flex-shrink-0" size={20} />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 sticky top-24">
              <div className="mb-6">
                <p className="text-slate-500 text-sm mb-1">本期学费</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-brand-600 tracking-tight">{course.price}</span>
                </div>
              </div>

              <button className="w-full bg-brand-600 text-white text-lg font-bold py-4 rounded-xl shadow-lg hover:bg-brand-700 hover:shadow-xl transform transition hover:-translate-y-0.5 mb-4 flex items-center justify-center">
                立即报名 Enroll Now
              </button>
              
              <button className="w-full bg-white border-2 border-slate-200 text-slate-700 font-bold py-3 rounded-xl hover:border-brand-600 hover:text-brand-600 transition-colors mb-6">
                预约试听课
              </button>

              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="flex items-start">
                  <Calendar className="text-slate-400 mr-3 mt-1" size={18} />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">滚动开班</h4>
                    <p className="text-slate-500 text-xs">每两周开启新班级，灵活入学</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="text-slate-400 mr-3 mt-1" size={18} />
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">退款保障</h4>
                    <p className="text-slate-500 text-xs">首节课不满意全额退款</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetail;