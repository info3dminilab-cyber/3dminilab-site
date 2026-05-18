"use client"; // Важно: делает компонент клиентским

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 gap-10">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold mb-6">3D MiniLAB</h1>
        <p className="text-2xl text-gray-600 mb-8">
          Инженерная 3D-печать для ваших задач
        </p>

        <div className="flex gap-4 justify-center mb-10">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg transition">
            Скоро запуск
          </button>

          <button
            className="border border-gray-300 hover:border-black px-8 py-4 rounded-2xl text-lg transition"
            onClick={() =>
              alert("Связаться: info.3dministudio@gmail.com")
            }
          >
            Связаться
          </button>
        </div>
      </div>
    </main>
  );
}