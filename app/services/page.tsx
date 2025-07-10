import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Загальна терапія',
      description: 'Комплексне обстеження та лікування загальних захворювань',
      duration: '30-45 хв',
      includes: [
        'Первинний огляд та консультація',
        'Збір анамнезу',
        'Фізикальне обстеження',
        'Призначення лікування',
        'Рекомендації щодо профілактики'
      ]
    },
    {
      title: 'Профілактичні огляди',
      description: 'Регулярні медичні огляди для підтримання здоров\'я',
      duration: '45-60 хв',
      includes: [
        'Повний медичний огляд',
        'Вимірювання основних показників',
        'Оцінка ризиків захворювань',
        'Індивідуальні рекомендації',
        'План профілактичних заходів'
      ]
    },
    {
      title: 'Вакцинація',
      description: 'Планова та екстрена вакцинація для дітей та дорослих',
      duration: '15-20 хв',
      includes: [
        'Консультація перед вакцинацією',
        'Огляд стану здоров\'я',
        'Проведення вакцинації',
        'Спостереження після процедури',
        'Видача сертифіката'
      ]
    },
    {
      title: 'Консультації онлайн',
      description: 'Дистанційні консультації через відеозв\'язок',
      duration: '20-30 хв',
      includes: [
        'Відеоконсультація',
        'Аналіз результатів аналізів',
        'Корекція лікування',
        'Відповіді на питання',
        'Письмові рекомендації'
      ]
    },
    {
      title: 'Медичні довідки',
      description: 'Оформлення різних видів медичних довідок',
      duration: '15-30 хв',
      includes: [
        'Довідка для роботи',
        'Довідка для навчання',
        'Довідка для спорту',
        'Довідка для водійських прав',
        'Інші види довідок'
      ]
    },
    {
      title: 'Домашні візити',
      description: 'Медична допомога вдома для тяжкохворих пацієнтів',
      duration: '60-90 хв',
      includes: [
        'Виїзд лікаря додому',
        'Повний медичний огляд',
        'Необхідні процедури',
        'Призначення лікування',
        'Подальше спостереження'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наші послуги
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Надаємо повний спектр медичних послуг з індивідуальним підходом до кожного пацієнта
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-amber-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">{service.duration}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Що включено:</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}