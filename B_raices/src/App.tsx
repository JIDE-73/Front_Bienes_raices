import { Home } from "lucide-react";
import { Hero } from "./components/Hero";
import { PropertyCard } from "./components/PropertyCard";
import { Contact } from "./components/Contact";
/*
Desarrollado por Jimenez Delgado Leonardo Sebastian
https://github.com/JIDE-73
*/
function App() {
  const properties = [
    {
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80",
      title: "Casa Moderna con Jardín",
      price: "$4,500,000 MXN",
      location: "Polanco, Ciudad de México",
      beds: 3,
      baths: 2,
      area: 180,
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
      title: "Penthouse de Lujo",
      price: "$8,900,000 MXN",
      location: "Santa Fe, Ciudad de México",
      beds: 4,
      baths: 3,
      area: 250,
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      title: "Residencia Familiar",
      price: "$6,200,000 MXN",
      location: "Lomas de Chapultepec, CDMX",
      beds: 5,
      baths: 4,
      area: 320,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">
                InmobiliariaMX
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Inicio
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Propiedades
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Servicios
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* Featured Properties */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Propiedades Destacadas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Home className="w-6 h-6" />
              <span className="text-xl font-bold">InmobiliariaMX</span>
            </div>
            <div className="text-center md:text-right">
              <p>© 2024 InmobiliariaMX. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
