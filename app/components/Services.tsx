"use client"

import { Clock, Users, Star, Flame } from "lucide-react"

const Services = () => {
  const services = [
    {
      title: "Pole Sport для начинающих",
      description: "Изучение базовых элементов и правильной техники",
      duration: "60 мин",
      maxStudents: "8 человек",
      price: "1,500 ₽",
      level: "Начальный",
      icon: Star,
    },
    {
      title: "Pole Sport средний уровень",
      description: "Сложные элементы, комбинации и художественность",
      duration: "75 мин",
      maxStudents: "6 человек",
      price: "1,800 ₽",
      level: "Средний",
      icon: Flame,
    },
    {
      title: "Pole Sport продвинутый",
      description: "Мастерство исполнения и подготовка к соревнованиям",
      duration: "90 мин",
      maxStudents: "4 человека",
      price: "2,200 ₽",
      level: "Продвинутый",
      icon: Star,
    },
    {
      title: "Индивидуальные занятия",
      description: "Персональный подход и ускоренное обучение",
      duration: "60 мин",
      maxStudents: "1 человек",
      price: "4,000 ₽",
      level: "Любой",
      icon: Users,
    },
    {
      title: "Растяжка и гибкость",
      description: "Развитие гибкости для лучшего выполнения элементов",
      duration: "45 мин",
      maxStudents: "10 человек",
      price: "1,200 ₽",
      level: "Любой",
      icon: Star,
    },
    {
      title: "Pole Dance хореография",
      description: "Танцевальные связки и работа с музыкой",
      duration: "60 мин",
      maxStudents: "8 человек",
      price: "1,600 ₽",
      level: "Средний",
      icon: Flame,
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Наши <span className="text-yellow-400">услуги</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Выберите программу, которая подходит именно вам. От первых шагов в pole sport до мастерского уровня — у нас
            есть всё для вашего развития
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all group hover:transform hover:scale-105 shadow-lg"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-semibold">
                    {service.level}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-yellow-400">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-600">Длительность:</span>
                    </div>
                    <span className="text-gray-900 font-semibold">{service.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-600">Группа:</span>
                    </div>
                    <span className="text-gray-900 font-semibold">{service.maxStudents}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-yellow-400">{service.price}</div>
                  <button
                    onClick={scrollToContact}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
                  >
                    Записаться
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 p-8 rounded-2xl border border-yellow-400/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Пробное занятие</h3>
            <p className="text-gray-300 mb-6">
              Не знаете, с чего начать? Приходите на бесплатное пробное занятие! Мы поможем определить ваш уровень и
              подберем подходящую программу.
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
            >
              Записаться на пробное занятие
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
