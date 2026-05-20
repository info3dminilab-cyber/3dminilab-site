"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-start px-6 gap-20">

      {/* ===========================
          YOUR ORIGINAL HERO SECTION
      ============================ */}
      <section className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden flex items-center justify-center bg-white">
        
        {/* Логотип */}
        <img
          src="/logo.png"
          alt="3D MiniLAB Logo"
          className="absolute top-6 left-6 w-32 md:w-48 z-10"
        />

        {/* Текст "Скоро запуск!" и кнопки с анимацией */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-black text-5xl md:text-6xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Скоро запуск!
          </motion.h1>

          {/* Кнопка "Связаться" */}
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg transition shadow-lg"
            onClick={() =>
              (window.location.href =
                "mailto:info.3dministudio@gmail.com" +
                "?subject=Запрос%20на%203D-печать" +
                "&body=Здравствуйте!%0AЯ хочу заказать 3D-печать. Пожалуйста, свяжитесь со мной.%0AСпасибо!")
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            Связаться
          </motion.button>
        </motion.div>
      </section>

      {/* ===========================
          YOUR ORIGINAL 3 CARDS
      ============================ */}
      <section className="flex flex-col md:flex-row gap-6 justify-center mt-10 max-w-6xl w-full">
        
        {/* Precision */}
        <motion.div
          className="text-center p-6 border rounded-2xl shadow hover:shadow-2xl transition flex-1 bg-white"
          whileHover={{ y: -8 }}
        >
          <img
            src="/icons/precision.png"
            className="mx-auto mb-4 w-36 h-36 object-contain"
            alt="Precision"
          />
          <h3 className="font-bold mb-2 text-xl">
            Точная печать
          </h3>
          <p className="text-gray-600">
            Высокое качество деталей с точностью до ±0.1–0.2 мм
          </p>
        </motion.div>

        {/* Fast */}
        <motion.div
          className="text-center p-6 border rounded-2xl shadow hover:shadow-2xl transition flex-1 bg-white"
          whileHover={{ y: -8 }}
        >
          <img
            src="/icons/fast.png"
            className="mx-auto mb-4 w-36 h-36 object-contain"
            alt="Fast"
          />
          <h3 className="font-bold mb-2 text-xl">
            Быстро
          </h3>
          <p className="text-gray-600">
            Прототипирование и малые серии в короткие сроки
          </p>
        </motion.div>

        {/* Custom */}
        <motion.div
          className="text-center p-6 border rounded-2xl shadow hover:shadow-2xl transition flex-1 bg-white"
          whileHover={{ y: -8 }}
        >
          <img
            src="/icons/custom.png"
            className="mx-auto mb-4 w-36 h-36 object-contain"
            alt="Custom"
          />
          <h3 className="font-bold mb-2 text-xl">
            Индивидуально
          </h3>
          <p className="text-gray-600">
            Изделия и сувениры под ваши идеи и проекты
          </p>
        </motion.div>
      </section>

      {/* ===========================
          FULL HOMEPAGE SECTIONS ADDED BELOW
      ============================ */}

      {/* What we do */}
      <section id="services" className="w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Что мы делаем</h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { title: "3D‑печать", desc: "Функциональные детали и прототипы" },
            { title: "3D‑моделирование", desc: "Проектирование в FreeCAD" },
            { title: "Прототипирование", desc: "Проверка идей и концепций" },
            { title: "Производство деталей", desc: "Мелкие партии изделий" },
            { title: "Технические решения", desc: "Крепления, корпуса, адаптеры" },
            { title: "Сувениры", desc: "Индивидуальные подарки" },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="p-6 border rounded-2xl shadow bg-white hover:shadow-xl transition"
              whileHover={{ y: -6 }}
            >
              <div className="w-10 h-10 rounded-full bg-gray-200 mb-4" />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Решения для разных отраслей
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {[
            "Производство",
            "Инженеры",
            "Авто",
            "Архитекторы",
            "Дизайнеры",
            "Стартапы",
            "Медицина",
          ].map((tag) => (
            <span
              key={tag}
              className="px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-700 text-sm shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section id="why" className="w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Почему выбирают 3D MiniLAB?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Современное оборудование",
              desc: "Высокоскоростные принтеры с закрытой камерой.",
            },
            {
              title: "Точность и качество",
              desc: "Стабильная геометрия и аккуратная пост‑обработка.",
            },
            {
              title: "Быстрые сроки",
              desc: "Оперативное производство прототипов и партий.",
            },
            {
              title: "Поддержка и консультации",
              desc: "Помогаем выбрать материал и конструкцию.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="p-6 border rounded-2xl shadow bg-white hover:shadow-xl transition"
              whileHover={{ y: -6 }}
            >
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Materials */}
      <section className="w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Материалы
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Подбираем материал под задачу: от визуальных макетов до функциональных деталей.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          {["PLA", "PETG", "ABS", "ASA", "PA (Nylon)", "Инженерные материалы"].map(
            (m) => (
              <span
                key={m}
                className="px-6 py-3 rounded-full border border-gray-300 bg-white text-gray-700 text-sm shadow-sm"
              >
                {m}
              </span>
            )
          )}
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="w-full max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Как мы работаем
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Вы отправляете модель",
              desc: "Файл, фото или описание задачи.",
            },
            {
              step: "02",
              title: "Мы оцениваем стоимость",
              desc: "Подбираем материал и сроки.",
            },
            {
              step: "03",
              title: "Производим деталь",
              desc: "Печать, контроль качества, обработка.",
            },
            {
              step: "04",
              title: "Вы получаете изделие",
              desc: "Самовывоз или доставка.",
            },
          ].map((item) => (
            <motion.div
              key={item.step}
              className="p-6 border rounded-2xl shadow bg-white hover:shadow-xl transition"
              whileHover={{ y: -6 }}
            >
              <div className="text-gray-400 font-mono text-sm mb-2">
                {item.step}
              </div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-10 text-gray-500 text-sm mt-10 border-t">
        © {new Date().getFullYear()} 3D MiniLAB
      </footer>
    </main>
  );
}
