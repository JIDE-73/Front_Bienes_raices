import { Heart, Bed, Bath, Square } from "lucide-react";
/*
Desarrollado por Jimenez Delgado Leonardo Sebastian
https://github.com/JIDE-73
*/
interface PropertyCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  area: number;
}

export function PropertyCard({
  image,
  title,
  price,
  location,
  beds,
  baths,
  area,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100">
          <Heart className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800">{price}</h3>
        <h4 className="text-xl font-semibold text-gray-700 mt-2">{title}</h4>
        <p className="text-gray-600 mt-2">{location}</p>
        <div className="flex justify-between mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center">
            <Bed className="w-5 h-5 text-gray-500" />
            <span className="ml-2 text-gray-600">{beds} hab.</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-5 h-5 text-gray-500" />
            <span className="ml-2 text-gray-600">{baths} baños</span>
          </div>
          <div className="flex items-center">
            <Square className="w-5 h-5 text-gray-500" />
            <span className="ml-2 text-gray-600">{area} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
}
