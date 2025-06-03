"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Пробное занятие",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.")
    setFormData({ name: "", phone: "", service: "Пробное занятие", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-yellow-400">Контакты</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда готовы ответить на ваши вопросы и помочь с выбором
            программы тренировок
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-600">Как с нами связаться</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Телефон</h4>
                    <p className="text-gray-700">+7 (999) 123-45-67</p>
                    <p className="text-gray-500 text-sm">Звонки принимаем с 9:00 до 22:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Email</h4>
                    <p className="text-gray-700">info@smartpole.ru</p>
                    <p className="text-gray-500 text-sm">Отвечаем в течение 24 часов</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Адрес</h4>
                    <p className="text-gray-700">Москва, ул. Спортивная, 15</p>
                    <p className="text-gray-500 text-sm">5 минут от метро "Спортивная"</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Режим работы</h4>
                    <p className="text-gray-700">Понедельник - Воскресенье</p>
                    <p className="text-gray-700">9:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-600">Мы в социальных сетях</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-110"
                >
                  <Instagram className="w-6 h-6 text-black" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-110"
                >
                  <MessageCircle className="w-6 h-6 text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-yellow-600">Записаться на занятие</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Ваше имя</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Телефон</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Тип занятия</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:outline-none transition-colors"
                >
                  <option>Пробное занятие</option>
                  <option>Pole Sport для начинающих</option>
                  <option>Pole Sport средний уровень</option>
                  <option>Pole Sport продвинутый</option>
                  <option>Индивидуальное занятие</option>
                  <option>Растяжка и гибкость</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700">Сообщение (необязательно)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                  placeholder="Расскажите о своем опыте или задайте вопрос"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
              >
                Отправить заявку
              </button>
            </form>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-yellow-700 text-sm">
                <strong>Быстрая запись:</strong> Напишите нам в WhatsApp или Telegram, и мы поможем выбрать удобное
                время для занятия!
              </p>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16">
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-yellow-600">Карта проезда</h3>
              <p className="text-gray-700">Мы находимся в центре Москвы, рядом с метро "Спортивная"</p>
              <p className="text-gray-500 text-sm mt-2">Точный адрес: ул. Спортивная, 15, 2-й этаж</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
