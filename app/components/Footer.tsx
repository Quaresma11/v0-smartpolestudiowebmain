"use client"

import { Phone, Mail, MapPin, Instagram, Send, Heart } from "lucide-react"

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-gray-900 text-white border-t border-yellow-400/20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/15 via-transparent to-yellow-600/10"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">
                <span className="text-yellow-400">Smart</span>
                <span className="text-white"> Pole</span>
              </div>
              <p className="text-gray-400">
                Профессиональная студия pole sport с 2 филиалами в Москве. Развивайте силу, грацию и уверенность в себе!
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/_smartpole_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
                  aria-label="Instagram Smart Pole"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://t.me/smartpole"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
                  aria-label="Telegram Smart Pole"
                >
                  <Send className="w-5 h-5" />
                </a>
                <a
                  href="https://apps.apple.com/sc/app/smart-pole/id1607099495"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
                  aria-label="Скачать приложение Smart Pole для iOS"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.appeventru.fitapp_4866&hl=ru&gl=US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
                  aria-label="Скачать приложение Smart Pole для Android"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                </a>
              </div>
              <p className="text-gray-500 text-xs mt-2">Следите за нами в соцсетях и скачивайте мобильное приложение</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Навигация</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("home")}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Главная
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    О нас
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("directions")}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Направления
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Услуги
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("trainers")}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Тренеры
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("gallery")}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Галерея
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("schedule")}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Расписание
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Контакты
                  </button>
                </li>
              </ul>
            </div>

            {/* Directions */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Направления</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-gray-400">Pole Sport</span>
                </li>
                <li>
                  <span className="text-gray-400">Pole Kids</span>
                </li>
                <li>
                  <span className="text-gray-400">Pole Choreo</span>
                </li>
                <li>
                  <span className="text-gray-400">Stretching</span>
                </li>
                <li>
                  <span className="text-gray-400">Body Fitness</span>
                </li>
                <li>
                  <span className="text-gray-400">Aerial Sport</span>
                </li>
                <li>
                  <span className="text-gray-400">Exotic Dance</span>
                </li>
                <li>
                  <span className="text-gray-400">Aerial Sport Kids</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Контакты</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-400">+7-993-366-23-68</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-400">info@smartpole.ru</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400 text-sm">2 филиала в Москве</p>
                    <p className="text-gray-400 text-sm">Удобное расположение</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
                <p className="text-yellow-400 text-sm font-semibold">Режим работы:</p>
                <p className="text-gray-400 text-sm">Пн-Вс: 10:00 - 22:00</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 Smart Pole Studio. Все права защищены.</p>
              <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
                <span>Сделано с</span>
                <Heart className="w-4 h-4 text-yellow-400 fill-current" />
                <span>для наших учеников</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
