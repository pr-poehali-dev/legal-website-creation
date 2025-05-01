
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Icon name="Scale" size={24} />
              <span>ЮристПро</span>
            </Link>
            <p className="text-sm mb-4">Профессиональная юридическая помощь для физических и юридических лиц. Решаем сложные правовые вопросы с 2010 года.</p>
            <div className="flex space-x-4">
              <Link to="#" aria-label="Facebook"><Icon name="Facebook" size={20} /></Link>
              <Link to="#" aria-label="Twitter"><Icon name="Twitter" size={20} /></Link>
              <Link to="#" aria-label="Instagram"><Icon name="Instagram" size={20} /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white">Главная</Link></li>
              <Link to="/services" className="hover:text-white">Услуги</Link>
              <li><Link to="/about" className="hover:text-white">О нас</Link></li>
              <li><Link to="/blog" className="hover:text-white">Блог</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link to="/contacts" className="hover:text-white">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-white">Консультация юриста</Link></li>
              <li><Link to="/services" className="hover:text-white">Составление документов</Link></li>
              <li><Link to="/services" className="hover:text-white">Представительство в суде</Link></li>
              <li><Link to="/services" className="hover:text-white">Правовая экспертиза</Link></li>
              <li><Link to="/services" className="hover:text-white">Корпоративное право</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>г. Москва, ул. Юридическая, 10</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@yuristpro.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>Пн-Пт: 9:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} ЮристПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
