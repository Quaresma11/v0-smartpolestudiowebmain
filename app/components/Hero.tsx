"use client"

import { Star, Award, Users } from "lucide-react"

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gray-900 text-white overflow-hidden"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/15 via-transparent to-yellow-600/10"></div>

      <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight" itemProp="name">
                <span className="text-yellow-400">Smart</span>
                <br />
                <span className="text-white">Pole</span>
                <br />
                <span className="text-gray-300 text-3xl lg:text-4xl">Studio</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg" itemProp="description">
                Профессиональная студия пилонного спорта и воздушной гимнастики в центре Москвы. Развивайте силу, грацию
                и уверенность в себе вместе с нами!
              </p>

              {/* Скрытая информация для SEO */}
              <div className="sr-only">
                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="addressLocality">Москва</span>,
                  <span itemProp="streetAddress">ул. Спортивная, 15</span>
                </span>
                <span itemProp="telephone">+7 (999) 123-45-67</span>
                <span itemProp="email">info@smartpole.ru</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://t.me/smartpolestudio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg text-center"
                aria-label="Записаться на пробное занятие pole sport в Smart Pole Studio"
              >
                Записаться на пробное занятие
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-8 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">1500+</div>
                <div className="text-sm text-gray-400">Учеников</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="w-8 h-8 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">10</div>
                <div className="text-sm text-gray-400">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="w-8 h-8 text-yellow-400" aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">4.9</div>
                <div className="text-sm text-gray-400">Рейтинг</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 rounded-3xl p-8 backdrop-blur-sm border border-yellow-400/20">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/images/hero-pole-dancer.jpg"
                  alt="Профессиональные занятия pole sport в Smart Pole Studio - спортсменка выполняет элемент на пилоне"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full opacity-80 animate-pulse"
              aria-hidden="true"
            ></div>
            <div
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-60 animate-pulse delay-300"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
