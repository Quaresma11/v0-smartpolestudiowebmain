"use client"

import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, Navigation } from "lucide-react"

const Contact = () => {
  // Данные филиалов - замените на актуальные
  const locations = [
    {
      id: "branch1",
      name: "Филиал м. Семеновская",
      address: "Москва, ул. Ткацкая д.5 с.7",
      metro: "м. Семеновская",
      mapUrl:
        "https://yandex.ru/maps/213/moscow/?from=mapframe&ll=37.719237%2C55.785524&mode=usermaps&source=mapframe&um=constructor%3Af07b72429ebc732cc8fd368c993724d19495bfb4a83d81501ef24e023edf1d14&utm_source=mapframe&z=16",
    },
    {
      id: "branch2",
      name: "Филиал м. Бульвар Рокоссовского",
      address: "Москва, ул.Ивантеевская 13 к.1",
      metro: "м.Бульвар Рокоссовского",
      mapUrl:
        "https://yandex.ru/maps/213/moscow/?from=mapframe&ll=37.730745%2C55.816359&mode=usermaps&source=mapframe&um=constructor%3A05e053f38dc9d2ec1a824f49ada7bd3fca2bdfee52e9b3868668c2afe6f50db4&utm_source=mapframe&z=16",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-yellow-400">Контакты</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. У нас 2 филиала в Москве для вашего удобства
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Общая контактная информация */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6 text-yellow-600">Общие контакты</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Телефон</h4>
                    <p className="text-gray-700">+7-993-366-23-68</p>
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
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900">Режим работы</h4>
                    <p className="text-gray-700">Понедельник - Воскресенье</p>
                    <p className="text-gray-700">9:00 - 22:00</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold mb-4 text-yellow-600">Мы в социальных сетях</h4>
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
          </div>

          {/* Информация о филиалах */}
          <div className="lg:col-span-2">
            <div className="grid gap-8">
              {locations.map((location, index) => (
                <div key={location.id} className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-yellow-600">{location.name}</h3>

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-gray-900">Адрес</h4>
                        <p className="text-gray-700">{location.address}</p>
                        <p className="text-gray-500 text-sm">{location.metro}</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <a
                        href={location.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105"
                      >
                        <Navigation className="w-4 h-4" />
                        <span>Как добраться</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
