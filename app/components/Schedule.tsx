"use client"

import { useState } from "react"
import { Clock, Users, Calendar } from "lucide-react"

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState("Понедельник")

  const schedule = {
    Понедельник: [
      { time: "10:00", title: "Pole Sport для начинающих", trainer: "Екатерина", duration: "60 мин", spots: "3/8" },
      { time: "12:00", title: "Растяжка", trainer: "Екатерина", duration: "45 мин", spots: "5/10" },
      { time: "18:00", title: "Pole Sport средний", trainer: "Мария", duration: "75 мин", spots: "2/6" },
      { time: "20:00", title: "Pole Dance хореография", trainer: "Анна", duration: "60 мин", spots: "4/8" },
    ],
    Вторник: [
      { time: "11:00", title: "Pole Sport продвинутый", trainer: "Анна", duration: "90 мин", spots: "1/4" },
      { time: "17:00", title: "Pole Sport для начинающих", trainer: "Мария", duration: "60 мин", spots: "6/8" },
      { time: "19:00", title: "Растяжка", trainer: "Екатерина", duration: "45 мин", spots: "8/10" },
    ],
    Среда: [
      { time: "09:00", title: "Растяжка", trainer: "Екатерина", duration: "45 мин", spots: "2/10" },
      { time: "18:30", title: "Pole Sport средний", trainer: "Мария", duration: "75 мин", spots: "3/6" },
      { time: "20:30", title: "Pole Dance хореография", trainer: "Анна", duration: "60 мин", spots: "5/8" },
    ],
    Четверг: [
      { time: "10:30", title: "Pole Sport для начинающих", trainer: "Екатерина", duration: "60 мин", spots: "4/8" },
      { time: "17:30", title: "Pole Sport продвинутый", trainer: "Анна", duration: "90 мин", spots: "2/4" },
      { time: "19:30", title: "Pole Sport средний", trainer: "Мария", duration: "75 мин", spots: "1/6" },
    ],
    Пятница: [
      { time: "12:00", title: "Растяжка", trainer: "Екатерина", duration: "45 мин", spots: "7/10" },
      { time: "18:00", title: "Pole Sport для начинающих", trainer: "Мария", duration: "60 мин", spots: "5/8" },
      { time: "20:00", title: "Pole Dance хореография", trainer: "Анна", duration: "60 мин", spots: "3/8" },
    ],
    Суббота: [
      { time: "10:00", title: "Pole Sport средний", trainer: "Мария", duration: "75 мин", spots: "4/6" },
      { time: "12:00", title: "Pole Sport для начинающих", trainer: "Екатерина", duration: "60 мин", spots: "2/8" },
      { time: "14:00", title: "Pole Sport продвинутый", trainer: "Анна", duration: "90 мин", spots: "3/4" },
      { time: "16:00", title: "Растяжка", trainer: "Екатерина", duration: "45 мин", spots: "6/10" },
    ],
    Воскресенье: [
      { time: "11:00", title: "Pole Dance хореография", trainer: "Анна", duration: "60 мин", spots: "4/8" },
      { time: "13:00", title: "Pole Sport для начинающих", trainer: "Мария", duration: "60 мин", spots: "7/8" },
      { time: "15:00", title: "Растяжка", trainer: "Екатерина", duration: "45 мин", spots: "5/10" },
    ],
  }

  const days = Object.keys(schedule)

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
            <span className="text-yellow-400">Расписание</span> занятий
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Удобное расписание с занятиями в разное время дня. Выберите подходящее время и уровень сложности
          </p>
        </div>

        {/* Day selector */}
        <div className="flex overflow-x-auto space-x-2 mb-8 pb-2">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all ${
                selectedDay === day ? "bg-yellow-400 text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule for selected day */}
        <div className="grid gap-4">
          {schedule[selectedDay as keyof typeof schedule].map((class_, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-yellow-400/20 hover:border-yellow-400/40 transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-bold text-lg">{class_.time}</div>
                    <h3 className="text-xl font-bold text-yellow-400">{class_.title}</h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-yellow-400" />
                      <span>Тренер: {class_.trainer}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      <span>{class_.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-yellow-400" />
                      <span>Свободно мест: {class_.spots}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={scrollToContact}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
                  >
                    Записаться
                  </button>
                  <button className="border border-yellow-400/40 text-yellow-400 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400/10 transition-all">
                    Подробнее
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 p-8 rounded-2xl border border-yellow-400/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Важная информация</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2 text-white">Правила записи:</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  <li>• Запись на занятие до 18:00 накануне</li>
                  <li>• Отмена записи не позднее чем за 4 часа</li>
                  <li>• При опоздании более 15 минут вход на занятие запрещен</li>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Schedule
