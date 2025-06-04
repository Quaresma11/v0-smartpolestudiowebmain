"use client"

import { useEffect } from "react"
import { Calendar, Clock, Users } from "lucide-react"

const Schedule = () => {
  useEffect(() => {
    // Загружаем скрипт виджета CRM системы
    const script = document.createElement("script")
    script.id = "aeWidgetScript"
    script.type = "text/javascript"
    script.src = "//appevent.ru/widgets/widgethandle.min.js?widget_key=e217277e3679060b3767998e9fae937a"
    script.async = true
    script.charset = "UTF-8"

    // Проверяем, не загружен ли уже скрипт
    if (!document.getElementById("aeWidgetScript")) {
      document.head.appendChild(script)
    }

    return () => {
      // Очищаем скрипт при размонтировании компонента
      const existingScript = document.getElementById("aeWidgetScript")
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="schedule" className="py-20 bg-black text-white">
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

        {/* Контейнер для виджета CRM с стилизацией */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 border border-yellow-400/20 shadow-2xl">
            <div className="bg-white rounded-xl overflow-hidden">
              {/* Здесь будет загружен виджет CRM системы */}
              <div id="ae-widget-container" className="min-h-[600px] w-full">
                {/* Заглушка пока загружается виджет */}
                <div className="flex items-center justify-center h-[600px] bg-gray-50">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
                    <p className="text-gray-600">Загружается система записи...</p>
                  </div>
                </div>
              </div>
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
            <p className="text-gray-300 text-sm">Видите количество свободных мест и можете выбрать оптимальное время</p>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 p-8 rounded-2xl border border-yellow-400/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Важная информация</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-white">Правила записи:</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Запись открывается за 7 дней до занятия</li>
                  <li>• Отмена записи не позднее чем за 4 часа</li>
                  <li>• При опоздании более 15 минут вход на занятие запрещен</li>
                  <li>• Пропущенные занятия не компенсируются</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Что взять с собой:</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Удобную спортивную одежду</li>
                  <li>• Воду для питья</li>
                  <li>• Полотенце</li>
                  <li>• Хорошее настроение!</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-yellow-400/20">
              <p className="text-gray-300 text-sm">
                Возникли вопросы с записью? Свяжитесь с нами по телефону или через форму обратной связи
              </p>
              <button
                onClick={scrollToContact}
                className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
              >
                Связаться с нами
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
