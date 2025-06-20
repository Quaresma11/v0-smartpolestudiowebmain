"use client"

import { Phone, Mail, MapPin, Instagram, MessageCircle, Heart } from "lucide-react"

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
                  href="#"
                  className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
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
                <p className="text-gray-400 text-sm">Пн-Вс: 9:00 - 22:00</p>
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
