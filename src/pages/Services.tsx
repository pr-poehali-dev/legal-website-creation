
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/Icon';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';

const Services = () => {
  const services = [
    {
      id: "civil-law",
      icon: "FileText",
      title: "Гражданское право",
      price: "от 3 000 ₽",
      description: "Правовое сопровождение сделок, защита прав потребителей, жилищные споры, имущественные отношения.",
      details: [
        "Составление и анализ договоров",
        "Представительство в суде по гражданским делам",
        "Защита прав потребителей",
        "Споры с недвижимостью и ЖКХ",
        "Наследственные дела"
      ]
    },
    {
      id: "corporate-law",
      icon: "Briefcase",
      title: "Корпоративное право",
      price: "от 5 000 ₽",
      description: "Юридическое сопровождение бизнеса, регистрация компаний, защита интересов в корпоративных спорах.",
      details: [
        "Регистрация компаний и внесение изменений",
        "Корпоративные споры",
        "Сопровождение сделок M&A",
        "Правовой аудит компаний",
        "Реорганизация и ликвидация предприятий"
      ]
    },
    {
      id: "tax-law",
      icon: "Calculator",
      title: "Налоговое право",
      price: "от 4 000 ₽",
      description: "Консультации по налогообложению, оптимизация налогов, представительство в налоговых органах.",
      details: [
        "Налоговое планирование и консультирование",
        "Представительство в налоговых органах",
        "Оптимизация налогообложения",
        "Обжалование решений налоговых органов",
        "Сопровождение налоговых проверок"
      ]
    },
    {
      id: "labor-law",
      icon: "Users",
      title: "Трудовое право",
      price: "от 3 500 ₽",
      description: "Разрешение трудовых споров, составление трудовых договоров, защита прав работников и работодателей.",
      details: [
        "Составление и проверка трудовых договоров",
        "Разрешение индивидуальных трудовых споров",
        "Консультации по кадровым вопросам",
        "Представительство в трудовых инспекциях",
        "Сопровождение сокращений и увольнений"
      ]
    },
    {
      id: "family-law",
      icon: "Heart",
      title: "Семейное право",
      price: "от 3 000 ₽",
      description: "Бракоразводные процессы, раздел имущества, алименты, установление отцовства, усыновление.",
      details: [
        "Бракоразводные процессы",
        "Раздел совместно нажитого имущества",
        "Взыскание алиментов",
        "Вопросы опеки и усыновления",
        "Брачные договоры"
      ]
    },
    {
      id: "criminal-law",
      icon: "Shield",
      title: "Уголовное право",
      price: "от 6 000 ₽",
      description: "Защита прав и интересов по уголовным делам, юридическое сопровождение на всех стадиях процесса.",
      details: [
        "Защита на следствии и в суде",
        "Обжалование приговоров и постановлений",
        "Экономические преступления",
        "Сопровождение на допросах и следственных действиях",
        "Условно-досрочное освобождение"
      ]
    }
  ];

  const servicePackages = [
    {
      title: "Базовая консультация",
      price: "3 000 ₽",
      description: "Идеально для первичной оценки ситуации и получения рекомендаций",
      features: [
        "Устная консультация до 60 минут",
        "Анализ предоставленных документов",
        "Рекомендации по разрешению вопроса",
        "Определение судебной перспективы"
      ],
      isPopular: false
    },
    {
      title: "Стандартный пакет",
      price: "8 000 ₽",
      description: "Оптимально для решения конкретной юридической проблемы",
      features: [
        "Устная и письменная консультация",
        "Составление 1-2 документов",
        "Правовой анализ документов до 10 листов",
        "Разработка правовой позиции",
        "2 повторные консультации"
      ],
      isPopular: true
    },
    {
      title: "Комплексное сопровождение",
      price: "от 20 000 ₽",
      description: "Полное юридическое сопровождение в сложных правовых ситуациях",
      features: [
        "Неограниченные консультации по делу",
        "Составление всех необходимых документов",
        "Представительство в судах и госорганах",
        "Правовой анализ неограниченного объема документов",
        "Ежедневное информирование о ходе дела"
      ],
      isPopular: false
    }
  ];

  return (
    <Layout>
      <div className="flex flex-col">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Юридические услуги для решения ваших задач</h1>
              <p className="text-xl mb-8 text-blue-100">Команда опытных юристов предлагает широкий спектр правовых услуг для частных лиц и бизнеса</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contacts">Получить консультацию</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white hover:bg-white hover:text-primary">
                  <Link to="tel:+79991234567" className="flex items-center gap-2">
                    <Icon name="Phone" size={18} />
                    <span>+7 (999) 123-45-67</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Мы предлагаем полный спектр юридических услуг для решения любых правовых вопросов</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="overflow-hidden transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="font-semibold text-lg mb-4 text-primary">{service.price}</p>
                    <ul className="space-y-2 mb-6">
                      {service.details.slice(0, 3).map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link to={`/services#${service.id}`}>Подробнее</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Пакеты услуг</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Выберите оптимальный вариант юридического сопровождения под ваши потребности</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {servicePackages.map((pkg, idx) => (
                <Card key={idx} className={`relative overflow-hidden ${pkg.isPopular ? 'border-primary shadow-md' : ''}`}>
                  {pkg.isPopular && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-3 py-1">
                      Популярный выбор
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                    <p className="text-3xl font-bold mb-4">{pkg.price}</p>
                    <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Icon name="Check" size={18} className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant={pkg.isPopular ? 'default' : 'outline'} className="w-full">
                      Заказать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Tabs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Области практики</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Подробная информация о наших специализациях и опыте работы в различных отраслях права</p>
            </div>
            
            <Tabs defaultValue="individuals" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="individuals">Для физических лиц</TabsTrigger>
                <TabsTrigger value="businesses">Для бизнеса</TabsTrigger>
              </TabsList>

              <TabsContent value="individuals" className="border rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">Юридические услуги для физических лиц</h3>
                <p className="text-gray-600 mb-6">Мы предоставляем комплексную юридическую поддержку по самым распространенным вопросам, с которыми сталкиваются частные лица.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Home" className="text-primary" size={20} />
                      Жилищные споры
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">Помощь в разрешении споров с застройщиками, ЖКХ, соседями. Защита прав при покупке и продаже недвижимости.</p>
                    
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Heart" className="text-primary" size={20} />
                      Семейные споры
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">Юридическое сопровождение при разводе, разделе имущества, определении места жительства детей и взыскании алиментов.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icon name="ShoppingBag" className="text-primary" size={20} />
                      Защита прав потребителей
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">Помощь при возврате товаров ненадлежащего качества, взыскании неустойки с продавцов и исполнителей услуг.</p>
                    
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Landmark" className="text-primary" size={20} />
                      Наследственные дела
                    </h4>
                    <p className="text-gray-600 text-sm">Сопровождение процедуры принятия наследства, оспаривание завещаний, составление наследственных документов.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="businesses" className="border rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-4">Юридические услуги для бизнеса</h3>
                <p className="text-gray-600 mb-6">Профессиональное юридическое сопровождение бизнеса любого масштаба — от стартапа до крупной корпорации.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Briefcase" className="text-primary" size={20} />
                      Корпоративное право
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">Регистрация юридических лиц, внесение изменений в учредительные документы, сопровождение сделок M&A.</p>
                    
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icon name="FileText" className="text-primary" size={20} />
                      Договорное право
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">Составление, анализ и правовая экспертиза договоров, минимизация правовых рисков в сделках.</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Calculator" className="text-primary" size={20} />
                      Налоговое право
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">Консультации по налогообложению, сопровождение проверок, оптимизация налоговой нагрузки.</p>
                    
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Icon name="Users" className="text-primary" size={20} />
                      Трудовое право
                    </h4>
                    <p className="text-gray-600 text-sm">Разработка кадровой документации, сопровождение проверок трудовой инспекции, разрешение трудовых споров.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-xl max-w-2xl mx-auto text-blue-100">Наш подход к работе с клиентами основан на профессионализме, честности и результативности</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: "Award", title: "Опыт и квалификация", description: "Юристы с опытом работы от 10 лет и профильным образованием" },
                { icon: "Clock", title: "Оперативность", description: "Быстрое реагирование на запросы и соблюдение сроков" },
                { icon: "Check", title: "Гарантия результата", description: "Подписание договора с четким определением ожидаемого результата" },
                { icon: "User", title: "Индивидуальный подход", description: "Внимательное отношение к каждому клиенту и его делу" }
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

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Нужна юридическая помощь?</h2>
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
    </Layout>
  );
};

export default Services;
