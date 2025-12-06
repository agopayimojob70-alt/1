import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-brand-100 py-12 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-white mb-4">擎思堂</h2>
            <p className="text-brand-200 text-sm leading-relaxed mb-6">
              致力于培养具备全球视野与创新思维的未来领袖。我们不仅仅是补习，更是思维的引擎。
            </p>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 bg-brand-800 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors cursor-pointer">
                <span className="font-bold text-xs">WX</span>
              </div>
              <div className="w-8 h-8 bg-brand-800 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors cursor-pointer">
                <span className="font-bold text-xs">WB</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold-400 transition-colors">关于我们</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">课程体系</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">师资力量</a></li>
              <li><a href="#" className="hover:text-gold-400 transition-colors">招贤纳士</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">联系方式</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-gold-400 shrink-0" />
                <span>北京市海淀区中关村大街 88 号<br/>擎思教育大厦 12 层</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-gold-400 shrink-0" />
                <span>010-8888-9999</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-gold-400 shrink-0" />
                <span>contact@qingsitang.edu.cn</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-800 mt-12 pt-8 text-center text-xs text-brand-300">
          <p>&copy; {new Date().getFullYear()} Qing Si Tang Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;