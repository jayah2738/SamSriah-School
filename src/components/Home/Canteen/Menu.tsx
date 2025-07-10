import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'breakfast' | 'lunch' | 'snacks';
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Healthy Breakfast Set",
    description: "Fresh fruits, yogurt, and whole grain bread",
    price: "7,000 Ar",
    image: "/images/canteen/healthybreakfast.jpg",
    category: "breakfast"
  },
  {
    id: 2,
    name: "Traditional Lunch",
    description: "Rice with vegetables and choice of protein",
    price: "7,000 Ar",
    image: "/images/canteen/traditionalunch.jpg",
    category: "lunch"
  },
  {
    id: 3,
    name: "Afternoon Snack",
    description: "Fresh juice and homemade cookies",
    price: "7,000 Ar",
    image: "/images/canteen/afternoonsnack.jpg",
    category: "snacks"
  }
];

const Menu = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Menu's Samples</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-64 w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-t-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-amber-600 font-bold">{item.price}</p>
                <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu; 