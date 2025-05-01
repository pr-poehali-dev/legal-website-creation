
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Александр Иванов",
      position: "Управляющий партнер",
      specialization: "Корпоративное право, M&A",
      experience: "15+ лет",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      education: "МГЮА им. О.Е. Кутафина",
      description: "Специализируется на сложных корпоративных сделках, имеет обширный опыт сопровождения сделок M&A и реструктуризации бизнеса.",
    },
    {
      id: 2,
      name: "Елена Петрова",
      position: "Старший юрист",
      specialization: "Гражданское право, недвижимость",
      experience: "12 лет",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      education: "Санкт-Петербургский государственный университет",
      description: "Эксперт в области недвижимости и жилищных споров, имеет успешную практику защиты клиентов в суде по гражданским делам.",
    },
    {
      id: 3,
      name: "Михаил Сидоров",
      position: "Юрист",
      specialization: "Налоговое право, финансы",
      experience: "8 лет",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      education: "Финансовый университет при Правительстве РФ",
      description: "Специализируется на налоговом планировании и консультировании бизнеса по вопросам оптимизации налогообложения.",
    },
    {
      id: 4,
      name: "Анна Козлова",
      position: "Юрист",
      specialization: "Семейное и наследственное право",
      experience: "10 лет",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      education: "МГУ им. М.В. Ломоносова",
      description: "Помогает клиентам в решении семейных споров, в том числе при разводе, разделе имущества и наследственных делах.",
    }
  ];

  const awards = [
    { 
      year: "2024", 
      title: "Лучшая юридическая фирма года", 
      organization: "Юридический вестник" 
    },
    { 
      year: "2023", 
      title: "Топ-5 юридических компаний в сфере корпоративного права", 
      organization: "Бизнес-журнал" 
    },
    { 
      year: "2022", 
      title: "Награда за инновации в юридической практике", 
      organization: "Ассоциация юристов России" 
    }
  ];

  const companyStages = [
    {
      year: "2010",
      title: "Основание компании",
      description: "Юридическая фирма была основана командой опытных юристов с целью предоставления качественных юридических услуг."
    },
    {
      year: "2015",
      title: "Расширение практики",
      description: "Открытие новых направлений практики: налоговое право, интеллектуальная собственность, международное право."
    },
    {
      year: "2018",
      title: "Открытие филиалов",
      description: "Открытие офисов в крупных городах России, расширение команды специалистов."
    },
    {
      year: "2021",
      title: "Цифровая трансформация",
      description: "Внедрение цифровых технологий и онлайн-консультаций для повышения доступности юридических услуг."
    },
    {
      year: "2024",
      title: "Настоящее время",
      description: "Признанный лидер рынка юридических услуг с командой высококвалифицированных специалистов и тысячами успешных дел."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">О нашей юридической компании</h1>
            <p className="text-xl mb-8 text-blue-100">Мы команда опытных юристов, предоставляющих профессиональную правовую помощь с 2010 года</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contacts">Связаться с нами</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-primary">
                <Link to="/services">Наши услуги</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6">Юридическая компания, которой можно доверять</h2>
              <p className="text-gray-700 mb-4">
                С 2010 года наша юридическая фирма предоставляет качественные адвокатские услуги и юридические консультации физическим и юридическим лицам. 
                Мы специализируемся на широком спектре правовых вопросов, включая гражданское, корпоративное, налоговое, трудовое и семейное право.
              </p>
              <p className="text-gray-700 mb-6">
                Наша миссия — обеспечивать надежную правовую защиту интересов наших клиентов, предоставляя грамотные юридические консультации и эффективное представительство в судах.
                Мы гордимся высоким качеством наших услуг и индивидуальным подходом к каждому клиенту.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-semibold">100+ корпоративных клиентов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-semibold">1000+ выигранных дел</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-semibold">15+ лет опыта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-green-500" />
                  <span className="font-semibold">20+ экспертов в команде</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] md:h-full">
              <img 
                src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Офис юридической компании" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <p className="text-3xl font-bold">14</p>
                <p className="font-medium">лет успешной работы</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши ценности</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Ключевые принципы, которыми мы руководствуемся в работе с каждым клиентом</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: "Scale", title: "Справедливость", description: "Защита законных прав и интересов наших клиентов — наш главный приоритет" },
              { icon: "ShieldCheck", title: "Надежность", description: "Мы берем на себя ответственность за результат нашей работы" },
              { icon: "FileText", title: "Профессионализм", description: "Постоянное повышение квалификации и глубокое знание законодательства" },
              { icon: "UserCheck", title: "Конфиденциальность", description: "Гарантия полной конфиденциальности информации наших клиентов" }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={value.icon} size={30} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наша команда</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Квалифицированные юристы с обширным опытом в различных областях права</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <div className="h-64 overflow-hidden relative group">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="text-white">
                      <p className="font-medium">{member.education}</p>
                      <p className="text-sm opacity-80">{member.experience} опыта</p>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.specialization}</p>
                  <p className="text-gray-700 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild>
              <Link to="/contacts">Получить консультацию</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">История компании</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Ключевые этапы развития нашей юридической фирмы</p>
          </div>
          
          <div className="relative border-l-4 border-primary ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-8 space-y-12">
            {companyStages.map((stage, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-12 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white font-bold">{idx + 1}</span>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-sm font-semibold text-primary">{stage.year}</p>
                  <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                  <p className="text-gray-600">{stage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Награды и признание</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Профессиональные достижения нашей юридической компании</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {awards.map((award, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={30} className="text-yellow-500" />
                </div>
                <p className="text-primary font-semibold mb-2">{award.year}</p>
                <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
                <p className="text-gray-500 text-sm">{award.organization}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gray-50 p-8 rounded-lg max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <Icon name="Award" size={48} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Юридическое превосходство</h3>
                <p className="text-gray-600">Наша компания регулярно входит в рейтинги ведущих юридических фирм России и получает признание профессионального сообщества за выдающиеся достижения в области правовой практики и инновационный подход к решению сложных юридических задач.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl max-w-2xl mx-auto text-blue-100">Ключевые преимущества сотрудничества с нашей юридической компанией</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "Users", title: "Опытная команда", description: "Наши юристы имеют многолетний опыт и высокую квалификацию в различных отраслях права" },
              { icon: "Briefcase", title: "Комплексный подход", description: "Мы предлагаем полный спектр юридических услуг и сопровождаем клиентов на всех этапах" },
              { icon: "Target", title: "Индивидуальные решения", description: "Разрабатываем стратегию под конкретные задачи и особенности каждого клиента" },
              { icon: "Clock", title: "Оперативность", description: "Быстро реагируем на запросы и соблюдаем все сроки выполнения работы" },
              { icon: "Shield", title: "Конфиденциальность", description: "Гарантируем полную конфиденциальность информации наших клиентов" },
              { icon: "Headphones", title: "Доступность", description: "Поддерживаем связь с клиентами и всегда готовы ответить на вопросы" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши клиенты</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Нам доверяют компании из различных отраслей бизнеса</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((_, idx) => (
              <div key={idx} className="grayscale hover:grayscale-0 transition-all">
                <img 
                  src={`https://images.unsplash.com/photo-1516876437184-593fda40c542?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80`} 
                  alt={`Клиент ${idx + 1}`} 
                  className="max-w-[120px] h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto shadow-sm">
            <h2 className="text-3xl font-bold mb-4">Готовы обсудить ваш правовой вопрос?</h2>
            <p className="text-xl text-gray-600 mb-8">Запишитесь на бесплатную консультацию с нашими юристами</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contacts">Записаться на консультацию</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="tel:+79991234567" className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
