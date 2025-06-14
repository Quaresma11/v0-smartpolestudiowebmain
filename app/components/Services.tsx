"use client"

import { useState } from "react"
import {
  Users,
  Star,
  Flame,
  Calendar,
  MapPin,
  Zap,
  Gift,
  AlertCircle,
  Pause,
  Clock,
  CreditCard,
  XCircle,
  CheckCircle,
} from "lucide-react"

const Services = () => {
  const [activeTab, setActiveTab] = useState("classes")

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      const headerHeight = 120
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  // Абонементы
  const subscriptions = [
    {
      title: "5 занятий",
      price: "5,300 ₽",
      pricePerClass: "1,060 ₽/занятие",
      duration: "1 месяц",
      popular: false,
      savings: "",
    },
    {
      title: "8 занятий",
      price: "7,200 ₽",
      pricePerClass: "900 ₽/занятие",
      duration: "1 месяц",
      popular: true,
      savings: "Экономия 400 ₽",
    },
    {
      title: "12 занятий",
      price: "9,600 ₽",
      pricePerClass: "800 ₽/занятие",
      duration: "1 месяц",
      popular: false,
      savings: "Экономия 1,200 ₽",
    },
    {
      title: "16 занятий",
      price: "11,700 ₽",
      pricePerClass: "731 ₽/занятие",
      duration: "1 месяц",
      popular: false,
      savings: "Экономия 2,700 ₽",
    },
    {
      title: "25 занятий",
      price: "15,300 ₽",
      pricePerClass: "612 ₽/занятие",
      duration: "1 месяц",
      popular: true,
      savings: "Экономия 6,700 ₽",
    },
    {
      title: "32 занятия",
      price: "17,500 ₽",
      pricePerClass: "547 ₽/занятие",
      duration: "1 месяц",
      popular: false,
      savings: "Экономия 10,300 ₽",
    },
  ]

  // Залы для аренды
  const halls = [
    {
      id: 1,
      name: "Зал №1",
      area: "80 кв.м",
      equipment: "8 пилонов",
      height: "4.2 метра",
      floor: "Ламинат",
      features: ["Маты", "Колонка", "Коврики и кубики", "Подсветка", "Новый ремонт"],
      pricing: {
        weekdayBefore17: "1,200 ₽/час",
        weekdayAfter17: "2,700 ₽/час",
        weekend: "2,200 ₽/час",
        equipment: "Аренда пилона: 600 ₽/час",
      },
      icon: Star,
    },
    {
      id: 2,
      name: "Зал №2",
      area: "40 кв.м",
      equipment: "5 подвесов (кольца, полотна)",
      height: "4.2 метра",
      floor: "Ламинат",
      features: ["Маты", "Колонка", "Коврики и кубики", "Подсветка", "Новый ремонт"],
      pricing: {
        weekdayBefore17: "1,200 ₽/час",
        weekdayAfter17: "2,000 ₽/час",
        weekend: "1,700 ₽/час",
        equipment: "Аренда подвеса: 600 ₽/час",
      },
      icon: Users,
    },
    {
      id: 3,
      name: "Зал №3",
      area: "45 кв.м",
      equipment: "3 пилона",
      height: "4.2 метра",
      floor: "Ламинат",
      features: ["Маты", "Колонка", "Коврики и кубики", "Подсветка", "Новый ремонт"],
      pricing: {
        weekdayBefore17: "1,200 ₽/час",
        weekdayAfter17: "2,000 ₽/час",
        weekend: "1,700 ₽/час",
        equipment: "Аренда подвеса: 600 ₽/час",
      },
      icon: Flame,
    },
  ]

  return (
    <section id="services" className="relative py-20 bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/15 via-transparent to-yellow-600/10"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Наши <span className="text-yellow-400">услуги</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Выберите подходящий формат занятий или арендуйте зал для индивидуальных тренировок
            </p>
          </div>

          {/* Табы */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 rounded-xl p-2 border border-yellow-400/20">
              <button
                onClick={() => setActiveTab("classes")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "classes"
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                Занятия и абонементы
              </button>
              <button
                onClick={() => setActiveTab("rental")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "rental"
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                Аренда залов
              </button>
              <button
                onClick={() => setActiveTab("rules")}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === "rules"
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                Правила и условия
              </button>
            </div>
          </div>

          {/* Контент вкладки "Занятия и абонементы" */}
          {activeTab === "classes" && (
            <div className="space-y-16">
              {/* Пробное и разовое */}
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-xl p-8 border border-yellow-400/20 hover:border-yellow-400/40 transition-all group shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Gift className="w-6 h-6 text-black" />
                    </div>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                      Подарок
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-yellow-400">Пробное занятие</h3>
                  <p className="text-gray-600 mb-4">
                    Первое знакомство со студией и направлением. В подарок при покупке абонемента!
                  </p>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <CreditCard className="w-4 h-4 text-orange-500" />
                      <span className="text-orange-700 text-sm font-medium">100% предоплата при записи</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-yellow-400 mb-6">700 ₽</div>
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
                  >
                    Записаться
                  </button>
                </div>

                <div className="bg-white rounded-xl p-8 border border-yellow-400/20 hover:border-yellow-400/40 transition-all group shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-yellow-400">Разовое занятие</h3>
                  <p className="text-gray-600 mb-6">
                    Отдельное занятие без привязки к абонементу. Идеально для гостей города.
                  </p>
                  <div className="text-3xl font-bold text-yellow-400 mb-6">1,400 ₽</div>
                  <button
                    onClick={scrollToContact}
                    className="w-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 border border-yellow-400/40 text-yellow-600 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all"
                  >
                    Записаться
                  </button>
                </div>
              </div>

              {/* Абонементы */}
              <div>
                <h3 className="text-3xl font-bold text-center mb-8 text-yellow-400">Абонементы на месяц</h3>

                {/* Важное уведомление об активации */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Важно! Активация абонемента</h4>
                      <p className="text-blue-700 text-sm">
                        Новые абонементы необходимо активировать в течение 12 дней с момента покупки. С 13-го дня
                        абонемент активируется автоматически.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {subscriptions.map((sub, index) => (
                    <div
                      key={index}
                      className={`bg-white rounded-xl p-8 border transition-all group shadow-lg relative ${
                        sub.popular
                          ? "border-yellow-400 ring-2 ring-yellow-400/20 transform scale-105"
                          : "border-yellow-400/20 hover:border-yellow-400/40"
                      }`}
                    >
                      {sub.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                            Популярный
                          </span>
                        </div>
                      )}

                      <div className="text-center">
                        <h4 className="text-2xl font-bold mb-2 text-yellow-400">{sub.title}</h4>
                        <div className="text-4xl font-bold text-gray-900 mb-2">{sub.price}</div>
                        <div className="text-gray-500 mb-4">{sub.pricePerClass}</div>

                        {sub.savings && (
                          <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                            {sub.savings}
                          </div>
                        )}

                        <div className="flex items-center justify-center space-x-2 text-gray-600 mb-6">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{sub.duration}</span>
                        </div>

                        <button
                          onClick={scrollToContact}
                          className={`w-full py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                            sub.popular
                              ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600"
                              : "bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 border border-yellow-400/40 text-yellow-600 hover:bg-yellow-400 hover:text-black"
                          }`}
                        >
                          Выбрать абонемент
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Условия заморозки */}
              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 p-8 rounded-2xl border border-yellow-400/20 max-w-4xl mx-auto">
                <div className="flex items-center space-x-3 mb-6">
                  <Pause className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-yellow-400">Заморозка абонемента</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/10 rounded-xl p-6 border border-yellow-400/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Gift className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Бесплатная заморозка</h4>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Только при наличии больничного листа. Предоставьте документ для активации бесплатной заморозки.
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 border border-yellow-400/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Pause className="w-4 h-4 text-black" />
                      </div>
                      <h4 className="text-lg font-bold text-white">Платная заморозка</h4>
                    </div>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <p>• 7 дней — 1,200 ₽</p>
                      <p>• Неопределённый срок — 4,000 ₽</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Краткое напоминание об отмене */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-4xl mx-auto">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-red-500" />
                  <div>
                    <h4 className="font-semibold text-red-900 mb-1">Отмена занятий</h4>
                    <p className="text-red-700 text-sm">
                      Отменить запись можно за 6 часов до начала занятия. При более поздней отмене занятие списывается с
                      абонемента.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Контент вкладки "Аренда залов" */}
          {activeTab === "rental" && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 text-yellow-400">Аренда залов</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Три современных зала с профессиональным оборудованием для индивидуальных тренировок и мероприятий
                </p>
              </div>

              {/* Важное уведомление о предоплате */}
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 max-w-4xl mx-auto">
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Условия оплаты</h4>
                    <div className="space-y-1 text-orange-700 text-sm">
                      <p>• Разовая аренда — 100% предоплата при бронировании</p>
                      <p>• Долгосрочное бронирование — ТОЛЬКО 100% предоплата</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {halls.map((hall) => (
                  <div
                    key={hall.id}
                    className="bg-white rounded-xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all group shadow-lg"
                  >
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                          <hall.icon className="w-6 h-6 text-black" />
                        </div>
                        <span className="bg-yellow-400/20 text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {hall.area}
                        </span>
                      </div>

                      <h4 className="text-2xl font-bold mb-4 text-yellow-400">{hall.name}</h4>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-600 text-sm">{hall.equipment}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Zap className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-600 text-sm">Высота: {hall.height}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-gray-600 text-sm">Пол: {hall.floor}</span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h5 className="font-semibold mb-3 text-gray-900">Оборудование:</h5>
                        <div className="flex flex-wrap gap-2">
                          {hall.features.map((feature, index) => (
                            <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <h5 className="font-semibold text-gray-900">Тарифы:</h5>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Будни до 17:00</span>
                            <span className="font-semibold text-gray-900">{hall.pricing.weekdayBefore17}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Будни после 17:00</span>
                            <span className="font-semibold text-gray-900">{hall.pricing.weekdayAfter17}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Выходные</span>
                            <span className="font-semibold text-gray-900">{hall.pricing.weekend}</span>
                          </div>
                          <div className="pt-2 border-t border-gray-200">
                            <span className="text-gray-500 text-xs">{hall.pricing.equipment}</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={scrollToContact}
                        className="w-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/10 border border-yellow-400/40 text-yellow-600 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all"
                      >
                        Забронировать зал
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Дополнительная информация */}
              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 p-8 rounded-2xl border border-yellow-400/20 max-w-4xl mx-auto">
                <div className="flex items-center space-x-3 mb-6">
                  <AlertCircle className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-yellow-400">Условия аренды</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                  <div>
                    <h4 className="font-semibold mb-3 text-white">Что включено:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Профессиональное оборудование</li>
                      <li>• Звуковая система</li>
                      <li>• Освещение и подсветка</li>
                      <li>• Маты и коврики</li>
                      <li>• Кубики для растяжки</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-white">Правила аренды:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Минимальная аренда — 1 час</li>
                      <li>• Предоплата 50% при бронировании</li>
                      <li>• Отмена за 24 часа без штрафа</li>
                      <li>• Максимум участников по согласованию</li>
                      <li>• Соблюдение правил безопасности</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Контент вкладки "Правила и условия" */}
          {activeTab === "rules" && (
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4 text-yellow-400">Правила и условия</h3>
                <p className="text-gray-300">Ознакомьтесь с важными правилами посещения студии и использования услуг</p>
              </div>

              {/* Отмена занятий */}
              <div className="bg-white rounded-xl p-8 border border-red-200 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-red-600">Отмена занятий</h4>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Отмена за 6 часов и позже:</strong> занятие списывается с абонемента без возможности
                      восстановления
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Безлимитные абонементы:</strong> при поздней отмене срок действия абонемента сокращается
                      на один день
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Своевременная отмена:</strong> отменяйте запись минимум за 6 часов до начала занятия
                    </p>
                  </div>
                </div>
              </div>

              {/* Предоплата */}
              <div className="bg-white rounded-xl p-8 border border-orange-200 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-orange-600">Условия оплаты</h4>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <Gift className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Пробное занятие:</strong> оплачивается полностью (100%) при записи
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Разовая аренда зала:</strong> требует 100% предоплаты при бронировании
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Долгосрочное бронирование:</strong> осуществляется ТОЛЬКО по 100% предоплате
                    </p>
                  </div>
                </div>
              </div>

              {/* Штрафы за неявку */}
              <div className="bg-white rounded-xl p-8 border border-red-200 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-red-600">Штрафы за неявку</h4>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-medium">
                    Если вы забронировали зал или записались на занятие и не пришли, внесенные денежные средства
                    удерживаются в качестве штрафных санкций и не возвращаются.
                  </p>
                </div>
              </div>

              {/* Активация абонементов */}
              <div className="bg-white rounded-xl p-8 border border-blue-200 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-blue-600">Активация абонементов</h4>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Срок активации:</strong> новые абонементы необходимо активировать в течение 12 дней с
                      момента покупки
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>Автоматическая активация:</strong> с 13-го дня абонемент активируется автоматически
                    </p>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <p className="text-yellow-800 font-medium">
                        <strong>Важно:</strong> денежные средства за неиспользованный абонемент не возвращаются
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Контактная информация */}
              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 p-8 rounded-2xl border border-yellow-400/20 text-center">
                <h4 className="text-xl font-bold mb-4 text-yellow-400">Остались вопросы?</h4>
                <p className="text-gray-300 mb-6">
                  Если у вас есть вопросы по правилам или условиям, свяжитесь с нами любым удобным способом
                </p>
                <button
                  onClick={scrollToContact}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-lg font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
                >
                  Связаться с нами
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Services
