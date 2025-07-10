import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Контакти
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Зв'яжіться з нами для запису на прийом або отримання консультації
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Записатися на прийом
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ім'я *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Ваше ім'я"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Прізвище *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Ваше прізвище"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="+380 67 123 45 67"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тип послуги
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option>Оберіть послугу</option>
                    <option>Загальна терапія</option>
                    <option>Профілактичний огляд</option>
                    <option>Вакцинація</option>
                    <option>Консультація онлайн</option>
                    <option>Медична довідка</option>
                    <option>Домашній візит</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Повідомлення
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Опишіть ваші скарги або питання..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Відправити заявку
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Контактна інформація
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Телефон</h3>
                      <p className="text-gray-600">+380 67 123 45 67</p>
                      <p className="text-sm text-gray-500">Цілодобово для екстрених випадків</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@petrenko-clinic.ua</p>
                      <p className="text-sm text-gray-500">Відповідь протягом 24 годин</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Адреса</h3>
                      <p className="text-gray-600">вул. Хрещатик, 25</p>
                      <p className="text-gray-600">Київ, 01001</p>
                      <p className="text-sm text-gray-500">2-й поверх, кабінет 205</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-amber-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Графік роботи</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Понеділок - П'ятниця: 9:00 - 18:00</p>
                        <p>Субота: 9:00 - 15:00</p>
                        <p>Неділя: Вихідний</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-6 w-6 text-red-600 mr-3" />
                  <h3 className="text-lg font-semibold text-red-900">
                    Екстрена допомога
                  </h3>
                </div>
                <p className="text-red-700 mb-3">
                  У випадку невідкладної медичної допомоги:
                </p>
                <p className="text-red-900 font-semibold text-lg">
                  +380 67 123 45 67
                </p>
                <p className="text-red-600 text-sm mt-2">
                  Доступний 24/7 для зареєстрованих пацієнтів
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}