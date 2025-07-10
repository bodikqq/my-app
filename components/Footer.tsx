import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ІП</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Доктор Іван Петренко</h3>
                <p className="text-amber-400 text-sm">Сімейний лікар</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Професійна медична допомога з індивідуальним підходом до кожного пацієнта. 
              Більше 15 років досвіду в галузі сімейної медицини.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Контакти</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-amber-400" />
                <span className="text-gray-300">+380 67 123 45 67</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-amber-400" />
                <span className="text-gray-300">info@petrenko-clinic.ua</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-amber-400" />
                <span className="text-gray-300">вул. Хрещатик, 25, Київ</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Графік роботи</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-3 text-amber-400" />
                <div>
                  <p className="text-gray-300">Пн-Пт: 9:00-18:00</p>
                  <p className="text-gray-300">Сб: 9:00-15:00</p>
                  <p className="text-gray-300">Нд: Вихідний</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Доктор Іван Петренко. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}