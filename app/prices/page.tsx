import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check, Clock, Phone, Star } from 'lucide-react';

export default function Prices() {
  const services = [
    {
      category: 'Консультації та огляди',
      items: [
        {
          name: 'Первинна консультація сімейного лікаря',
          duration: '45-60 хв',
          price: '800',
          description: 'Детальний збір анамнезу, огляд, рекомендації'
        },
        {
          name: 'Повторна консультація',
          duration: '30 хв',
          price: '600',
          description: 'Контрольний огляд, корекція лікування'
        },
        {
          name: 'Профілактичний огляд',
          duration: '60 хв',
          price: '900',
          description: 'Комплексне обстеження стану здоров\'я'
        },
        {
          name: 'Консультація онлайн',
          duration: '30 хв',
          price: '500',
          description: 'Відеоконсультація через Zoom/Skype'
        }
      ]
    },
    {
      category: 'Процедури та маніпуляції',
      items: [
        {
          name: 'Вакцинація (без вартості вакцини)',
          duration: '15 хв',
          price: '300',
          description: 'Проведення щеплення з консультацією'
        },
        {
          name: 'Вимірювання артеріального тиску',
          duration: '10 хв',
          price: '100',
          description: 'З інтерпретацією результатів'
        },
        {
          name: 'ЕКГ з розшифровкою',
          duration: '20 хв',
          price: '400',
          description: 'Електрокардіограма та висновок лікаря'
        },
        {
          name: 'Перев\'язка',
          duration: '15 хв',
          price: '200',
          description: 'Обробка ран, накладання пов\'язки'
        }
      ]
    },
    {
      category: 'Довідки та документи',
      items: [
        {
          name: 'Довідка для роботи/навчання',
          duration: '15 хв',
          price: '250',
          description: 'Стандартна медична довідка'
        },
        {
          name: 'Довідка для водійських прав',
          duration: '30 хв',
          price: '400',
          description: 'Медогляд для отримання посвідчення водія'
        },
        {
          name: 'Довідка для спорту',
          duration: '30 хв',
          price: '350',
          description: 'Допуск до занять спортом'
        },
        {
          name: 'Довідка про стан здоров\'я',
          duration: '20 хв',
          price: '300',
          description: 'Детальна довідка про стан здоров\'я'
        }
      ]
    },
    {
      category: 'Спеціальні послуги',
      items: [
        {
          name: 'Домашній візит (в межах Києва)',
          duration: '60-90 хв',
          price: '1500',
          description: 'Виїзд лікаря додому + консультація'
        },
        {
          name: 'Супровід до лікарні',
          duration: '2-4 год',
          price: '2000',
          description: 'Супровід пацієнта в медичний заклад'
        },
        {
          name: 'Розробка індивідуального плану лікування',
          duration: '90 хв',
          price: '1200',
          description: 'Детальний план лікування та профілактики'
        }
      ]
    }
  ];

  const packages = [
    {
      name: 'Базовий',
      price: '2500',
      period: 'на місяць',
      description: 'Для тих, хто цінує базову медичну підтримку',
      features: [
        '2 консультації на місяць',
        'Телефонні консультації',
        'Базові аналізи',
        'Профілактичні рекомендації'
      ],
      popular: false
    },
    {
      name: 'Стандартний',
      price: '4000',
      period: 'на місяць',
      description: 'Оптимальний вибір для більшості пацієнтів',
      features: [
        '4 консультації на місяць',
        'Необмежені телефонні консультації',
        'Розширені аналізи',
        'ЕКГ та базові процедури',
        'Домашній візит (1 раз)',
        'Знижка 20% на додаткові послуги'
      ],
      popular: true
    },
    {
      name: 'Преміум',
      price: '6500',
      period: 'на місяць',
      description: 'Максимальна турбота про ваше здоров\'я',
      features: [
        'Необмежені консультації',
        'Цілодобова підтримка',
        'Повний спектр аналізів',
        'Всі процедури включені',
        '2 домашні візити',
        'Індивідуальний план здоров\'я',
        'Знижка 30% на додаткові послуги',
        'Пріоритетний запис'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ціни на послуги
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Прозорі ціни на всі медичні послуги. Якісна медична допомога за доступними цінами
          </p>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {category.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.items.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {service.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {service.description}
                          </p>
                          <div className="flex items-center text-amber-600">
                            <Clock className="h-4 w-4 mr-2" />
                            <span className="text-sm">{service.duration}</span>
                          </div>
                        </div>
                        <div className="text-right ml-4">
                          <div className="text-2xl font-bold text-amber-600">
                            {service.price}
                          </div>
                          <div className="text-sm text-gray-500">грн</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Пакети медичного обслуговування
            </h2>
            <p className="text-xl text-gray-600">
              Оберіть оптимальний пакет для постійного медичного супроводу
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 ${pkg.popular ? 'ring-2 ring-amber-500 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Популярний
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {pkg.description}
                  </p>
                  <div className="text-4xl font-bold text-amber-600 mb-2">
                    {pkg.price}
                  </div>
                  <div className="text-gray-500">
                    {pkg.period}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-lg hover:shadow-xl' 
                    : 'border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white'
                }`}>
                  Обрати пакет
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Способи оплати
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-3" />
                  Готівка
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-3" />
                  Банківська картка
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-3" />
                  Безготівковий розрахунок
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-3" />
                  Оплата через банк
                </li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Знижки та акції
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-3" />
                  Пенсіонерам - 10%
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-3" />
                  Студентам - 15%
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-3" />
                  Сімейним парам - 20%
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-3" />
                  При оплаті пакету на рік - 15%
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-8 text-white">
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Потрібна консультація щодо цін?
              </h3>
              <p className="mb-4">
                Зателефонуйте нам, і ми допоможемо обрати оптимальний варіант
              </p>
              <a
                href="tel:+380671234567"
                className="bg-white text-amber-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 inline-block"
              >
                +380 67 123 45 67
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}