
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Icon name="Scale" size={24} />
            <span>ЮристПро</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">Главная</Link>
          <Link to="/services" className="text-sm font-medium hover:text-primary">Услуги</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary">О нас</Link>
          <Link to="/blog" className="text-sm font-medium hover:text-primary">Блог</Link>
          <Link to="/faq" className="text-sm font-medium hover:text-primary">FAQ</Link>
          <Link to="/contacts" className="text-sm font-medium hover:text-primary">Контакты</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button size="sm" variant="outline" className="hidden md:flex gap-2">
            <Icon name="Phone" size={16} />
            <span>+7 (999) 123-45-67</span>
          </Button>
          <Button size="sm" className="gap-2">
            <Icon name="MessageSquare" size={16} />
            <span>Консультация</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
