
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Профессиональная юридическая помощь для решения ваших проблем</h1>
            <p className="text-xl mb-8 text-blue-100">Команда квалифицированных юристов с многолетним опытом готова защитить ваши права и интересы в любых правовых вопросах.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/services">Наши услуги</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contacts" className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>Бесплатная консультация</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative shape */}
        <div className="hidden md:block absolute right-0 bottom-0 w-1/3 h-full bg-white/5 -skew-x-12 transform origin-bottom-right"></div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Юридические услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Мы предоставляем широкий спектр юридических услуг для частных лиц и бизнеса, гарантируя индивидуальный подход к каждому клиенту.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "FileText",
                title: "Составление документов",
                description: "Профессиональное составление договоров, заявлений, претензий и других юридических документов."
              },
              {
                icon: "ScaleIcon",
                title: "Представительство в суде",
                description: "Защита ваших интересов в судах всех инстанций по гражданским, административным и арбитражным делам."
              },
              {
                icon: "MessageSquare",
                title: "Юридическая консультация",
                description: "Квалифицированная консультация юриста по любым правовым вопросам с учетом актуального законодательства."
              }
            ].map((service, idx) => (
              <Card key={idx} className="transition-transform hover:scale-105">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="link" asChild>
                    <Link to="/services" className="text-primary">Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/services">Все услуги</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Основные принципы нашей работы — профессионализм, ответственность и индивидуальный подход к каждому клиенту.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: "Award", title: "10+ лет опыта", description: "Более десяти лет успешной юридической практики" },
              { icon: "Users", title: "Команда экспертов", description: "Квалифицированные юристы с опытом в различных отраслях права" },
              { icon: "CheckCircle", title: "98% выигранных дел", description: "Высокий процент успешно разрешенных правовых споров" },
              { icon: "Clock", title: "Оперативность", description: "Быстрое реагирование на запросы и соблюдение сроков" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Что говорят о нас те, кто уже воспользовался нашими услугами</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "Обратился по вопросу раздела имущества после развода. Благодаря профессиональной работе юриста, удалось отстоять мои интересы в суде и получить справедливую долю имущества.",
                author: "Александр В.",
                position: "Клиент по семейному праву"
              },
              {
                text: "Потребовалась помощь в регистрации ООО с нестандартной структурой. Юрист компании не только составил все необходимые документы, но и сопровождал всю процедуру регистрации от начала до конца.",
                author: "Елена С.",
                position: "Директор компании"
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 text-center italic">"{testimonial.text}"</p>
                  <div className="text-center">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/about">Все отзывы</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна юридическая помощь?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Свяжитесь с нами сегодня для получения бесплатной первичной консультации</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-primary">
              <Link to="tel:+79991234567" className="flex items-center gap-2">
                <Icon name="Phone" size={18} />
                <span>+7 (999) 123-45-67</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Последние статьи</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Полезная информация, советы и новости из мира права</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                date: "15 апреля 2025",
                title: "Изменения в трудовом законодательстве: что нужно знать работодателям",
                excerpt: "Обзор ключевых изменений в трудовом законодательстве 2025 года и рекомендации для работодателей по их применению."
              },
              {
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                date: "2 апреля 2025",
                title: "Как защитить свои права при покупке недвижимости",
                excerpt: "Пошаговая инструкция по проверке документов и юридической чистоты недвижимости перед покупкой."
              },
              {
                image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                date: "25 марта 2025",
                title: "Судебная практика по делам о защите прав потребителей",
                excerpt: "Анализ актуальной судебной практики и рекомендации по защите прав потребителей в спорных ситуациях."
              }
            ].map((post, idx) => (
              <Card key={idx} className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
                </div>
                <CardContent className="pt-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="link" asChild className="p-0">
                    <Link to="/blog" className="text-primary">Читать далее</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/blog">Все статьи</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
