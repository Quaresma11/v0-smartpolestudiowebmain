"use client"

import { Calendar, Clock, Users } from "lucide-react"

const Schedule = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const headerHeight = 120 // Высота хедера
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="schedule" className="relative py-20 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/15 via-transparent to-yellow-600/10"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-yellow-400">Расписание</span> и запись
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Выберите удобное время для занятий и запишитесь онлайн. Система покажет актуальное расписание и свободные
              места
            </p>
          </div>

          {/* Контейнер для виджета CRM */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8 border border-yellow-400/20 shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden">
                {/* Виджет через iframe */}
                <iframe
                  className="aeCustomWidget w-full"
                  src="//appevent.ru/widget/embeded?widget_key=0e19a6a4ee97bfa48ce41bd1cc471f2d&hall_id=6677"
                  width="100%"
                  height="1120px"
                  style={{ background: "#ffffff", border: "none" }}
                  title="Система записи Smart Pole"
                />
              </div>
            </div>
          </div>

          {/* Информационные карточки */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-gray-900 rounded-xl p-6 border border-yellow-400/20 text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">Онлайн запись</h3>
              <p className="text-gray-300 text-sm">
                Записывайтесь на занятия в любое время через удобную систему онлайн-записи
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-yellow-400/20 text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">Актуальное расписание</h3>
              <p className="text-gray-300 text-sm">
                Система показывает только актуальные занятия с учетом изменений и отмен
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-yellow-400/20 text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-yellow-400">Контроль мест</h3>
              <p className="text-gray-300 text-sm">
                Видите количество свободных мест и можете выбрать оптимальное время
              </p>
            </div>
          </div>

          {/* Альтернативные способы записи */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 p-8 rounded-2xl border border-yellow-400/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">Альтернативные способы записи</h3>
              <p className="text-gray-300 mb-6">
                Если система записи недоступна, вы всегда можете записаться на занятия по телефону
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+79933662368"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
                >
                  Позвонить: +7-993-366-23-68
                </a>
              </div>

              <div className="text-left">
                <h4 className="font-semibold mb-2 text-white">Что взять с собой:</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Удобную спортивную одежду</li>
                  <li>• Воду для питья</li>
                  <li>• Полотенце</li>
                  <li>• Хорошее настроение!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
