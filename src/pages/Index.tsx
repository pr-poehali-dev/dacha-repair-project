import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Hammer',
      title: 'Ремонт дома',
      description: 'Капитальный и косметический ремонт домов любой сложности'
    },
    {
      icon: 'Trees',
      title: 'Благоустройство участка',
      description: 'Озеленение, дорожки, беседки и ландшафтный дизайн'
    },
    {
      icon: 'Fence',
      title: 'Строительство',
      description: 'Пристройки, веранды, заборы и малые архитектурные формы'
    },
    {
      icon: 'Wrench',
      title: 'Коммуникации',
      description: 'Электрика, водоснабжение, отопление и канализация'
    },
    {
      icon: 'PaintBucket',
      title: 'Отделочные работы',
      description: 'Штукатурка, покраска, обои, укладка плитки'
    },
    {
      icon: 'Home',
      title: 'Кровельные работы',
      description: 'Монтаж и ремонт крыш любой конфигурации'
    }
  ];

  const prices = [
    { service: 'Косметический ремонт', unit: 'м²', price: 'от 2 500 ₽' },
    { service: 'Капитальный ремонт', unit: 'м²', price: 'от 5 000 ₽' },
    { service: 'Укладка плитки', unit: 'м²', price: 'от 1 800 ₽' },
    { service: 'Монтаж забора', unit: 'м.п.', price: 'от 3 000 ₽' },
    { service: 'Ландшафтный дизайн', unit: 'сотка', price: 'от 15 000 ₽' },
    { service: 'Кровельные работы', unit: 'м²', price: 'от 2 000 ₽' }
  ];

  const testimonials = [
    {
      name: 'Александр П.',
      text: 'Отличная работа! Сделали капитальный ремонт дачи под ключ. Все быстро, качественно и в срок. Рекомендую!',
      rating: 5
    },
    {
      name: 'Марина К.',
      text: 'Благоустроили участок: газон, дорожки, цветники. Результат превзошел ожидания. Профессионалы своего дела!',
      rating: 5
    },
    {
      name: 'Дмитрий В.',
      text: 'Построили веранду и установили забор. Качество материалов и работы на высоте. Спасибо за терпение и понимание!',
      rating: 5
    }
  ];

  const portfolio = [
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      title: 'Ремонт загородного дома',
      description: 'Капитальный ремонт дома 120 м²',
      category: 'Ремонт'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      title: 'Благоустройство участка',
      description: 'Ландшафтный дизайн, 15 соток',
      category: 'Благоустройство'
    },
    {
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      title: 'Строительство веранды',
      description: 'Пристройка веранды 30 м²',
      category: 'Строительство'
    },
    {
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
      title: 'Кровельные работы',
      description: 'Замена кровли, металлочерепица',
      category: 'Кровля'
    },
    {
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
      title: 'Отделка фасада',
      description: 'Облицовка фасада камнем',
      category: 'Отделка'
    },
    {
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
      title: 'Монтаж забора',
      description: 'Забор из профлиста, 50 м.п.',
      category: 'Строительство'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" className="text-primary" size={28} />
            <span className="text-xl font-heading font-bold text-foreground">ДачаМастер</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
            <a href="#prices" className="text-muted-foreground hover:text-primary transition-colors">Прайс</a>
            <a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Консультация
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Ремонт и благоустройство вашей дачи
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональные услуги по ремонту домов и благоустройству участков. Работаем быстро, качественно и с гарантией.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" onClick={() => document.getElementById('prices')?.scrollIntoView({ behavior: 'smooth' })}>
                  Смотреть цены
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-1">12+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">гарантия</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                <img 
                  src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80" 
                  alt="Дача" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к ремонту и благоустройству вашей дачи
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Прайс-лист</h2>
            <p className="text-lg text-muted-foreground">Прозрачные цены на все виды работ</p>
          </div>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary/50">
                    <tr>
                      <th className="text-left p-4 font-heading">Услуга</th>
                      <th className="text-left p-4 font-heading">Единица</th>
                      <th className="text-right p-4 font-heading">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prices.map((item, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="p-4">{item.service}</td>
                        <td className="p-4 text-muted-foreground">{item.unit}</td>
                        <td className="p-4 text-right font-semibold text-primary">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-6">
            * Точная стоимость рассчитывается индивидуально после осмотра объекта
          </p>
        </div>
      </section>

      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-foreground mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                ДачаМастер — это команда профессионалов с 12-летним опытом работы в сфере ремонта и благоустройства загородной недвижимости.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Мы гордимся каждым выполненным проектом и гарантируем качество всех работ. Используем только проверенные материалы и современное оборудование.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Гарантия качества</div>
                    <div className="text-muted-foreground">На все виды работ предоставляем гарантию до 3 лет</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Соблюдение сроков</div>
                    <div className="text-muted-foreground">Выполняем работы точно в оговоренные сроки</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Award" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Опытные мастера</div>
                    <div className="text-muted-foreground">В команде только квалифицированные специалисты</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80" 
                alt="Работа мастеров" 
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&q=80" 
                alt="Благоустройство" 
                className="rounded-lg w-full h-48 object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80" 
                alt="Инструменты" 
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&q=80" 
                alt="Готовый дом" 
                className="rounded-lg w-full h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground">Галерея выполненных проектов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">Что говорят о нас наши заказчики</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-primary fill-current" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{testimonial.text}</p>
                  <div className="font-semibold">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">Закажите бесплатную консультацию и расчёт стоимости работ</p>
          </div>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Опишите, какие работы вас интересуют..."
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Icon name="Phone" className="mx-auto mb-2 text-primary" size={24} />
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                  <div>
                    <Icon name="Mail" className="mx-auto mb-2 text-primary" size={24} />
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">info@dachamaster.ru</div>
                  </div>
                  <div>
                    <Icon name="MapPin" className="mx-auto mb-2 text-primary" size={24} />
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">Московская область</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" className="text-primary" size={24} />
                <span className="text-lg font-heading font-bold">ДачаМастер</span>
              </div>
              <p className="text-sm text-gray-400">
                Профессиональный ремонт и благоустройство дач с 2012 года
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Ремонт домов</li>
                <li>Благоустройство</li>
                <li>Строительство</li>
                <li>Коммуникации</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Наши работы</li>
                <li>Отзывы</li>
                <li>Контакты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (999) 123-45-67</li>
                <li>info@dachamaster.ru</li>
                <li>Московская область</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2024 ДачаМастер. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;