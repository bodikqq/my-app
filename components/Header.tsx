'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Головна', href: '/' },
    { name: 'Послуги', href: '/services' },
    { name: 'Про лікаря', href: '/about' },
    { name: 'Результати', href: '/results' },
    { name: 'Ціни', href: '/prices' },
    { name: 'Контакти', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-amber-800">
                <Phone className="h-4 w-4 mr-2" />
                <span>+380 67 123 45 67</span>
              </div>
              <div className="flex items-center text-amber-800">
                <MapPin className="h-4 w-4 mr-2" />
                <span>вул. Хрещатик, 25, Київ</span>
              </div>
            </div>
            <div className="text-amber-800 font-medium">
              Пн-Пт: 9:00-18:00 | Сб: 9:00-15:00
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">ІП</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Доктор Іван Петренко</h1>
                <p className="text-sm text-amber-600">Сімейний лікар</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Записатися на прийом
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-amber-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white block px-3 py-2 text-base font-medium rounded-lg mx-3 mt-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Записатися на прийом
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}