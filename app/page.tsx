export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold mb-6">
          3D MiniLAB
        </h1>

        <p className="text-2xl text-gray-600 mb-8">
          Мечта + 3D печать = реальность
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg transition">
            Скоро запуск
          </button>

          <button className="border border-gray-300 hover:border-black px-8 py-4 rounded-2xl text-lg transition">
            Связаться
          </button>
        </div>
      </div>
    </main>
  );
}

