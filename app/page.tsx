"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-start px-6 gap-10">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden flex items-center justify-center bg-white">
                

        {/* Логотип */}
        <img
          src="/logo.png" // Положи сюда свой логотип в public/logo.png
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
            className="text-black text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Скоро запуск!
          </motion.h1>

          {/* Кнопка "Связаться" синяя */}
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg transition"
            onClick={() =>
              (window.location.href =
                "mailto:info.3dministudio@gmail.com" +
                "?subject=Запрос%20на%203D-печать" +
                "&body=Здравствуйте!%0AЯ хочу заказать 3D-печать. Пожалуйста, свяжитесь со мной.%0AСпасибо!")
            }
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Связаться
          </motion.button>
        </motion.div>
      </section>

      {/* Advantages Section */}
      <section className="flex flex-col md:flex-row gap-6 justify-center mt-10 max-w-5xl w-full">
        <div className="text-center p-6 border rounded-lg shadow hover:shadow-lg transition flex-1">
          <img src="/icons/precision.png" className="mx-auto mb-4 w-36 h-36" />
          <h3 className="font-bold mb-2 text-xl">Точная печать</h3>
          <p className="text-gray-600">
            Высокое качество деталей с точностью до ±0.1-0.2 мм
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg shadow hover:shadow-lg transition flex-1">
          <img src="/icons/fast.webp" className="mx-auto mb-4 w-36 h-36" />
          <h3 className="font-bold mb-2 text-xl">Быстро</h3>
          <p className="text-gray-600">
            Прототипирование и малые серии в короткие сроки
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg shadow hover:shadow-lg transition flex-1">
          <img src="/icons/custom.png" className="mx-auto mb-4 w-36 h-36" />
          <h3 className="font-bold mb-2 text-xl">Индивидуально</h3>
          <p className="text-gray-600">
            Изделия и сувениры под ваши идеи и проекты
          </p>
        </div>
      </section>
    </main>
  );
}