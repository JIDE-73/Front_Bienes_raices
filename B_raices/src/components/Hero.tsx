import { Search } from "lucide-react";
/*
Desarrollado por Jimenez Delgado Leonardo Sebastian
https://github.com/JIDE-73
*/
export function Hero() {
  return (
    <div className="relative h-[600px]">
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
        alt="Luxury home"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
          Encuentra tu hogar ideal
        </h1>
        <p className="text-xl text-white text-center mb-8">
          Las mejores propiedades en las mejores ubicaciones
        </p>
        <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-lg">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Buscar por ubicación..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <Search className="w-5 h-5" />
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
