import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Star, Award, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Загальна терапія',
      description: 'Комплексне обстеження та лікування загальних захворювань',
      icon: '🩺'
    },
    {
      title: 'Профілактичні огляди',
      description: 'Регулярні медичні огляди для підтримання здоров\'я',
      icon: '🔍'
    },
    {
      title: 'Вакцинація',
      description: 'Планова та екстрена вакцинація для дітей та дорослих',
      icon: '💉'
    },
    {
      title: 'Консультації',
      description: 'Професійні медичні консультації та рекомендації',
      icon: '💬'
    }
  ];

  const stats = [
    { number: '15+', label: 'Років досвіду' },
    { number: '2000+', label: 'Задоволених пацієнтів' },
    { number: '98%', label: 'Позитивних відгуків' },
    { number: '24/7', label: 'Підтримка' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Ваше здоров'я - 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> наш пріоритет</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Професійна медична допомога від досвідченого сімейного лікаря. 
                Індивідуальний підхід, сучасні методи діагностики та лікування.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Записатися на прийом
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-amber-500 hover:text-white transition-all duration-200 text-center"
                >
                  Переглянути послуги
                </Link>
              </div>
            </div>
            
            {/* Doctor Image Placeholder */}
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-[3/4] bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">ІП</span>
                    </div>
                    <p className="text-gray-600 text-sm">Фото доктора Івана Петренка</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-amber-400 to-red-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наші послуги
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Надаємо повний спектр медичних послуг для підтримання вашого здоров'я
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="text-amber-600 font-medium hover:text-amber-700 flex items-center"
                >
                  Детальніше <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Про доктора Івана Петренка
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Досвідчений сімейний лікар з більш ніж 15-річним стажем роботи. 
                Спеціалізується на загальній терапії, профілактичній медицині та 
                комплексному підході до лікування пацієнтів.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Вища медична освіта, НМУ ім. Богомольця</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Сертифікований сімейний лікар</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Регулярне підвищення кваліфікації</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span className="text-gray-700">Член Асоціації сімейних лікарів України</span>
                </div>
              </div>
              
              <Link
                href="/about"
                className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700"
              >
                Дізнатися більше <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 shadow-xl">
                <div className="aspect-square bg-white rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Award className="h-16 w-16 text-amber-500 mx-auto mb-4" />
                    <p className="text-gray-600">Сертифікати та нагороди</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готові подбати про своє здоров'я?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Запишіться на консультацію вже сьогодні та отримайте професійну медичну допомогу
          </p>
          <Link
            href="/contact"
            className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
          >
            Записатися на прийом
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}