import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, GraduationCap, Users, Heart } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: 'Освіта',
      description: 'Національний медичний університет імені О.О. Богомольця, 2008 рік'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Сертифікація',
      description: 'Сертифікований сімейний лікар, категорія вища'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Досвід',
      description: 'Більше 15 років практики в галузі сімейної медицини'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Пацієнти',
      description: 'Понад 2000 задоволених пацієнтів'
    }
  ];

  const specializations = [
    'Загальна терапія',
    'Сімейна медицина',
    'Профілактична медицина',
    'Гериатрія',
    'Кардіологія (базовий рівень)',
    'Ендокринологія (базовий рівень)'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Доктор Іван Петренко
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Досвідчений сімейний лікар, який присвятив своє життя турботі про здоров'я пацієнтів. 
                Індивідуальний підхід та професіоналізм - основа моєї роботи.
              </p>
            </div>
            
            {/* Doctor Photo Placeholder */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-[3/4] bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-white text-4xl font-bold">ІП</span>
                    </div>
                    <p className="text-gray-600 text-sm">Доктор Іван Петренко</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Професійні досягнення
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-lg transition-all duration-300">
                <div className="text-amber-600 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Біографія
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Народився в 1985 році в Києві. З дитинства мріяв стати лікарем, 
                  щоб допомагати людям зберігати та відновлювати здоров'я.
                </p>
                <p>
                  У 2008 році закінчив Національний медичний університет імені О.О. Богомольця 
                  за спеціальністю "Лікувальна справа" з відзнакою.
                </p>
                <p>
                  Пройшов інтернатуру та спеціалізацію з сімейної медицини. 
                  Постійно підвищує кваліфікацію, відвідуючи медичні конференції та семінари.
                </p>
                <p>
                  З 2010 року працює сімейним лікарем. У 2018 році відкрив власну приватну практику, 
                  щоб надавати пацієнтам більше часу та уваги.
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Спеціалізації
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {specializations.map((spec, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <span className="text-gray-700 font-medium">{spec}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Філософія лікування
                </h3>
                <p className="text-gray-600">
                  "Кожен пацієнт унікальний, тому підхід до лікування має бути індивідуальним. 
                  Моя мета - не просто вилікувати хворобу, а допомогти людині досягти 
                  оптимального стану здоров'я та якості життя."
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