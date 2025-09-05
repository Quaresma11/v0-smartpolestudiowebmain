"use client"

import { useEffect } from "react"

const SEOOptimized = () => {
  useEffect(() => {
    // Добавляем структурированные данные для поисковых систем
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://smartpolestudio.ru/#business",
          name: "Smart Pole Studio",
          alternateName: "Смарт Поул Студио",
          description:
            "Профессиональная студия пилонного спорта и воздушной акробатики в Москве. Занятия pole sport, воздушные полотна, кольцо, растяжка, экзотик, скульптура тела.",
          url: "https://smartpolestudio.ru",
          telephone: "+7 (999) 123-45-67",
          email: "info@smartpole.ru",
          priceRange: "750-18100 RUB",
          paymentAccepted: "Cash, Credit Card, Bank Transfer",
          currenciesAccepted: "RUB",
          openingHours: ["Mo-Su 08:00-23:00"],
          address: [
            {
              "@type": "PostalAddress",
              streetAddress: "ул. Семеновская, 15",
              addressLocality: "Москва",
              addressRegion: "Москва",
              postalCode: "105023",
              addressCountry: "RU",
            },
            {
              "@type": "PostalAddress",
              streetAddress: "ул. Преображенская, 25",
              addressLocality: "Москва",
              addressRegion: "Москва",
              postalCode: "107061",
              addressCountry: "RU",
            },
          ],
          geo: [
            {
              "@type": "GeoCoordinates",
              latitude: 55.7887,
              longitude: 37.7198,
            },
            {
              "@type": "GeoCoordinates",
              latitude: 55.7964,
              longitude: 37.7156,
            },
          ],
          image: [
            "https://smartpolestudio.ru/images/hero-pole-dancer.jpg",
            "https://smartpolestudio.ru/images/gallery/pole-element.jpg",
            "https://smartpolestudio.ru/images/gallery/aerial-silks-performance.jpg",
          ],
          logo: "https://smartpolestudio.ru/images/logo.png",
          sameAs: [
            "https://t.me/smartpolestudio",
            "https://vk.com/smartpolestudio",
            "https://instagram.com/smartpolestudio",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "150",
            bestRating: "5",
            worstRating: "1",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Услуги Smart Pole Studio",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Пробное занятие pole sport",
                  description: "Первое знакомство со студией и направлением",
                },
                price: "750",
                priceCurrency: "RUB",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Разовое занятие",
                  description: "Отдельное занятие без привязки к абонементу",
                },
                price: "1400",
                priceCurrency: "RUB",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Абонемент 8 занятий",
                  description: "Популярный абонемент на месяц",
                },
                price: "7400",
                priceCurrency: "RUB",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Аренда зала №1",
                  description: "Аренда зала с 8 пилонами, 80 кв.м",
                },
                price: "1400-2700",
                priceCurrency: "RUB",
              },
            ],
          },
        },
        {
          "@type": "SportsActivityLocation",
          "@id": "https://smartpolestudio.ru/#sports",
          name: "Smart Pole Studio",
          sport: ["Pole Sport", "Aerial Arts", "Pole Dance", "Aerial Silks", "Aerial Hoop"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Москва",
            addressCountry: "RU",
          },
        },
        {
          "@type": "ItemList",
          "@id": "https://smartpolestudio.ru/#services",
          name: "Направления Smart Pole Studio",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Pole Sport",
              description: "Спортивное направление пилонного спорта для развития силы и выносливости",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Pole Dance",
              description: "Танцевальное направление с элементами хореографии и акробатики",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Воздушные полотна",
              description: "Воздушная акробатика на полотнах для развития гибкости и силы",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Воздушное кольцо",
              description: "Акробатика на воздушном кольце для координации и грации",
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "Растяжка",
              description: "Занятия по развитию гибкости и подвижности суставов",
            },
            {
              "@type": "ListItem",
              position: 6,
              name: "Экзотик",
              description: "Танцевальное направление с элементами экзотических танцев",
            },
            {
              "@type": "ListItem",
              position: 7,
              name: "Скульптура тела",
              description: "Комплексные тренировки для формирования красивого тела",
            },
          ],
        },
        {
          "@type": "FAQPage",
          "@id": "https://smartpolestudio.ru/#faq",
          mainEntity: [
            {
              "@type": "Question",
              name: "Сколько стоит пробное занятие?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Пробное занятие стоит 750 рублей. При покупке абонемента пробное занятие предоставляется в подарок.",
              },
            },
            {
              "@type": "Question",
              name: "Какие направления есть в студии?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "В Smart Pole Studio представлены: Pole Sport, Pole Dance, воздушные полотна, воздушное кольцо, растяжка, экзотик, скульптура тела, детские направления.",
              },
            },
            {
              "@type": "Question",
              name: "Можно ли заморозить абонемент?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Да, абонемент можно заморозить. Бесплатная заморозка предоставляется только при наличии больничного листа. Платная заморозка: 7 дней - 1200₽, неопределенный срок - 4000₽.",
              },
            },
            {
              "@type": "Question",
              name: "За сколько можно отменить занятие?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Отменить запись можно минимум за 6 часов до начала занятия. При более поздней отмене занятие списывается с абонемента.",
              },
            },
          ],
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://smartpolestudio.ru/#breadcrumbs",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Главная",
              item: "https://smartpolestudio.ru",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Направления",
              item: "https://smartpolestudio.ru#directions",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Тренеры",
              item: "https://smartpolestudio.ru#trainers",
            },
            {
              "@type": "ListItem",
              position: 4,
              name: "Услуги и цены",
              item: "https://smartpolestudio.ru#services",
            },
            {
              "@type": "ListItem",
              position: 5,
              name: "Контакты",
              item: "https://smartpolestudio.ru#contact",
            },
          ],
        },
        {
          "@type": "Person",
          "@id": "https://smartpolestudio.ru/#trainer-alena",
          name: "Алена Данилова",
          jobTitle: "Главный тренер по Pole Sport",
          worksFor: {
            "@id": "https://smartpolestudio.ru/#business",
          },
          description: "Мастер спорта по pole sport, чемпионка России, опыт преподавания более 8 лет",
        },
        {
          "@type": "Person",
          "@id": "https://smartpolestudio.ru/#trainer-alexey",
          name: "Алексей Харитонов",
          jobTitle: "Тренер по Pole Sport",
          worksFor: {
            "@id": "https://smartpolestudio.ru/#business",
          },
          description: "Кандидат в мастера спорта, специалист по силовой подготовке",
        },
      ],
    }

    // Добавляем JSON-LD в head
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(structuredData)
    document.head.appendChild(script)

    return () => {
      // Очищаем при размонтировании
      const scripts = document.querySelectorAll('script[type="application/ld+json"]')
      scripts.forEach((script) => script.remove())
    }
  }, [])

  return null
}

export default SEOOptimized
