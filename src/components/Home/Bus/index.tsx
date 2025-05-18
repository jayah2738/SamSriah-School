"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Routes from './Routes';

const Bus = () => {
  const [activeTab, setActiveTab] = useState<'routes' | 'safety'>('routes');

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            School Bus Service
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Safe and reliable transportation for our students
          </motion.p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('routes')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
              activeTab === 'routes'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Icon icon="mdi:bus" className="text-xl" />
            View Routes
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('safety')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
              activeTab === 'safety'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Icon icon="mdi:shield-check" className="text-xl" />
            Safety Info
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {activeTab === 'routes' ? (
            <Routes />
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Icon icon="mdi:account-group" className="text-amber-600" />
                    Driver Qualifications
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Licensed and experienced drivers</li>
                    <li>• Regular training and certification</li>
                    <li>• Background checks and clearances</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Icon icon="mdi:bus-alert" className="text-amber-600" />
                    Vehicle Safety
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Regular maintenance checks</li>
                    <li>• GPS tracking system {"(Pending...)"}</li>
                    <li>• Emergency equipment onboard</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Icon icon="mdi:account-child" className="text-amber-600" />
                    Student Safety
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Seat belts for all passengers</li>
                    <li>• Supervised boarding and drop-off</li>
                    <li>• Emergency contact system</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Icon icon="mdi:phone-message" className="text-amber-600" />
                    Communication
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Real-time updates for parents</li>
                    <li>• Emergency notification system</li>
                    <li>• Direct contact with drivers</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Bus; 