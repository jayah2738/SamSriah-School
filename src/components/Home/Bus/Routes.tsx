import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface Route {
  id: number;
  name: string;
  stops: string[];
  schedule: string;
  image: string;
}

const routes: Route[] = [
  {
    id: 1,
    name: "Route A",
    stops: ["Antananarivo Center", "Ambohibao", "Ivandry", "School"],
    schedule: "Morning: 6:30 AM - 7:30 AM\nAfternoon: 4:00 PM - 5:00 PM",
    image: "/images/bus/route-a.jpg"
  },
  {
    id: 2,
    name: "Route B",
    stops: ["Analakely", "Ankorondrano", "School"],
    schedule: "Morning: 6:45 AM - 7:45 AM\nAfternoon: 4:15 PM - 5:15 PM",
    image: "/images/bus/route-b.jpg"
  }
];

const Routes = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Bus Routes</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {routes.map((route) => (
          <motion.div
            key={route.id}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-50 rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Icon icon="mdi:bus" className="text-amber-600" />
                {route.name}
              </h4>
              <div className="mt-4">
                <h5 className="font-medium text-gray-700 mb-2">Stops:</h5>
                <ul className="space-y-1">
                  {route.stops.map((stop, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <Icon icon="mdi:map-marker" className="text-amber-600" />
                      {stop}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <h5 className="font-medium text-gray-700 mb-2">Schedule:</h5>
                <p className="text-gray-600 whitespace-pre-line">{route.schedule}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Routes; 