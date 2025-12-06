import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AITutor from './components/AITutor';
import CourseCard from './components/CourseCard';
import CourseDetail from './components/CourseDetail';
import TeacherCard from './components/TeacherCard';
import Footer from './components/Footer';
import { ViewState } from './types';
import { COURSES, TEACHERS } from './constants';
import { ArrowRight, BookOpen, Users } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedCourseId]);

  const handleViewCourse = (courseId: string) => {
    setSelectedCourseId(courseId);
    setCurrentView('course-detail');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero onNavigate={setCurrentView} />
            
            {/* Featured Courses Preview */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-brand-900 mb-2">热门课程</h2>
                    <p className="text-slate-600">精心打磨的教学体系，助力学业腾飞</p>
                  </div>
                  <button 
                    onClick={() => setCurrentView('courses')}
                    className="hidden sm:flex items-center text-brand-600 font-semibold hover:text-brand-800 transition-colors"
                  >
                    查看全部 <ArrowRight size={18} className="ml-1" />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {COURSES.slice(0, 4).map(course => (
                    <CourseCard 
                      key={course.id} 
                      course={course} 
                      onClick={handleViewCourse}
                    />
                  ))}
                </div>
                 <div className="mt-8 text-center sm:hidden">
                    <button 
                    onClick={() => setCurrentView('courses')}
                    className="text-brand-600 font-semibold"
                  >
                    查看全部课程 &rarr;
                  </button>
                 </div>
              </div>
            </section>

            {/* AI Teaser Section */}
            <section className="py-20 bg-brand-50 border-y border-brand-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <h2 className="text-3xl font-serif font-bold text-brand-900 mb-4">7x24小时 AI 智能助教</h2>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                    遇到难题不用等明天。擎思堂独家研发的 AI 助教系统，基于 Google Gemini 技术，为您提供即时、准确的学科解答与思维引导。
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                      多学科支持：数理化、英语、编程
                    </li>
                    <li className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                      苏格拉底式引导教学，而非直接给答案
                    </li>
                    <li className="flex items-center text-slate-700">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                      智能生成练习题与知识点总结
                    </li>
                  </ul>
                  <button 
                    onClick={() => setCurrentView('tutor')}
                    className="px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition shadow-lg flex items-center"
                  >
                    立即体验 AI 助教
                  </button>
                </div>
                <div className="flex-1 w-full relative">
                   {/* Abstract representation of AI chat */}
                   <div className="bg-white rounded-xl shadow-xl p-6 border border-slate-200 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="w-8 h-8 rounded-full bg-gold-500 flex-shrink-0"></div>
                        <div className="bg-slate-100 p-3 rounded-r-lg rounded-bl-lg text-sm text-slate-600 w-3/4">
                          请解释一下微积分中的导数概念？
                        </div>
                      </div>
                       <div className="flex items-start space-x-3 flex-row-reverse mb-2">
                        <div className="w-8 h-8 rounded-full bg-brand-900 flex-shrink-0"></div>
                        <div className="bg-brand-50 p-3 rounded-l-lg rounded-br-lg text-sm text-slate-800 w-5/6">
                           导数描述了函数在某一点的变化率。想象一下你在开车，位置随时间变化...
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </section>
            
            {/* Faculty Preview */}
             <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-serif font-bold text-brand-900 mb-4">名师风采</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    我们的教师团队均来自国内外顶尖学府，拥有丰富的教学经验与教育热情。
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {TEACHERS.slice(0, 3).map(teacher => (
                    <TeacherCard key={teacher.id} teacher={teacher} />
                  ))}
                </div>
              </div>
            </section>
          </>
        );

      case 'courses':
        return (
          <div className="py-12 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center mb-8">
                <BookOpen className="text-brand-600 mr-3" size={32} />
                <h1 className="text-3xl font-serif font-bold text-brand-900">全部课程</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {COURSES.map(course => (
                  <CourseCard 
                    key={course.id} 
                    course={course} 
                    onClick={handleViewCourse}
                  />
                ))}
                {/* Duplicate for demo to fill grid */}
                {COURSES.map(course => (
                  <CourseCard 
                    key={`${course.id}-dup`} 
                    course={{...course, id: `${course.id}-dup`, title: `${course.title} (二期)`}} 
                    onClick={handleViewCourse}
                  />
                ))}
              </div>
            </div>
          </div>
        );

      case 'course-detail':
        const selectedCourse = COURSES.find(c => c.id === selectedCourseId) || COURSES.find(c => `${c.id}-dup` === selectedCourseId);
        // Fallback or find duplicate for demo purposes if basic find fails
        const courseToShow = selectedCourse || COURSES[0];
        
        return (
          <CourseDetail 
            course={courseToShow} 
            onBack={() => setCurrentView('courses')} 
          />
        );

      case 'tutor':
        return (
          <div className="bg-slate-50 min-h-screen py-8">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <AITutor />
             </div>
          </div>
        );

      case 'faculty':
         return (
          <div className="py-12 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center mb-12 justify-center">
                <Users className="text-brand-600 mr-3" size={32} />
                <h1 className="text-3xl font-serif font-bold text-brand-900">金牌讲师团</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                {TEACHERS.map(teacher => (
                  <TeacherCard key={teacher.id} teacher={teacher} />
                ))}
                 {TEACHERS.map(teacher => (
                  <TeacherCard key={`${teacher.id}-dup`} teacher={{...teacher, id: `${teacher.id}-dup`}} />
                ))}
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="py-20 bg-slate-50 min-h-screen">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 rounded-xl shadow-lg">
              <h1 className="text-3xl font-serif font-bold text-brand-900 mb-8 text-center">联系我们</h1>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-700">姓名</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-slate-50 p-3 border" placeholder="您的姓名" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">联系电话</label>
                  <input type="tel" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-slate-50 p-3 border" placeholder="您的手机号码" />
                </div>
                 <div>
                  <label className="block text-sm font-medium text-slate-700">感兴趣的课程</label>
                  <select className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-slate-50 p-3 border">
                    <option>数学竞赛班</option>
                    <option>雅思/托福</option>
                    <option>物理提升班</option>
                    <option>少儿编程</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">留言</label>
                  <textarea className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 bg-slate-50 p-3 border" rows={4} placeholder="请填写您的具体需求..."></textarea>
                </div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500">
                  提交咨询
                </button>
              </form>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800">
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;