import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Quote, TrendingUp, Users, Award, Heart } from 'lucide-react';

export default function Results() {
  const testimonials = [
    {
      name: 'Марія Іванівна',
      age: 45,
      condition: 'Гіпертонія',
      text: 'Доктор Петренко допоміг мені нормалізувати тиск без сильнодіючих препаратів. Індивідуальний підхід та постійна підтримка - це те, що відрізняє справжнього професіонала.',
      rating: 5,
      result: 'Тиск знизився з 160/100 до 130/80'
    },
    {
      name: 'Олександр Петрович',
      age: 52,
      condition: 'Діабет 2 типу',
      text: 'Завдяки рекомендаціям доктора вдалося значно покращити показники цукру в крові. Тепер почуваюся набагато краще і маю енергію для активного життя.',
      rating: 5,
      result: 'HbA1c знизився з 9.2% до 6.8%'
    },
    {
      name: 'Анна Сергіївна',
      age: 38,
      condition: 'Хронічна втома',
      text: 'Після комплексного обстеження доктор виявив причину моєї постійної втоми. Лікування було ефективним, і зараз я знову відчуваю себе повною сил.',
      rating: 5,
      result: 'Повернення до нормального рівня енергії'
    },
    {
      name: 'Віктор Михайлович',
      age: 60,
      condition: 'Профілактика',
      text: 'Регулярні профілактичні огляди у доктора Петренка допомагають мені підтримувати здоров\'я. Завжди отримую детальні пояснення та корисні поради.',
      rating: 5,
      result: 'Раннє виявлення та профілактика захворювань'
    }
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: '2000+',
      label: 'Пацієнтів',
      description: 'Довіряють своє здоров\'я'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: '98%',
      label: 'Задоволених',
      description: 'Позитивні відгуки пацієнтів'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      number: '95%',
      label: 'Ефективність',
      description: 'Успішного лікування'
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: '15+',
      label: 'Років досвіду',
      description: 'У сімейній медицині'
    }
  ];

  const achievements = [
    'Зниження рівня захворюваності серед пацієнтів на 40%',
    'Успішне лікування понад 500 випадків гіпертонії',
    'Ефективна профілактика діабету у 200+ пацієнтів',
    'Покращення якості життя у 90% пацієнтів з хронічними захворюваннями',
    'Зменшення потреби в госпіталізації на 60%',
    'Високий рівень задоволеності пацієнтів - 4.9/5'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Результати лікування
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальні історії успіху наших пацієнтів та статистика ефективності лікування
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-lg transition-all duration-300">
                <div className="text-amber-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Відгуки пацієнтів
            </h2>
            <p className="text-xl text-gray-600">
              Реальні історії людей, які довірили нам своє здоров'я
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-amber-500 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}, {testimonial.age} років
                      </h4>
                      <p className="text-sm text-gray-500">
                        Діагноз: {testimonial.condition}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm font-medium text-green-800">
                      Результат: {testimonial.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ключові досягнення
            </h2>
            <p className="text-xl text-gray-600">
              Статистика ефективності нашої роботи
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4 flex-shrink-0"></div>
                <p className="text-gray-700 font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Станьте частиною наших успішних історій
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Запишіться на консультацію та отримайте професійну медичну допомогу
          </p>
          <a
            href="/contact"
            className="bg-white text-amber-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
          >
            Записатися на прийом
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}