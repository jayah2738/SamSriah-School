"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Menu from './Menu';

const Canteen = () => {
  const [activeTab, setActiveTab] = useState<'menu' | 'schedule'>('menu');

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
            School Canteen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Enjoy healthy and delicious meals prepared with care by our professional staff
          </motion.p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('menu')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
              activeTab === 'menu'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Icon icon="mdi:food" className="text-xl" />
            View Menu
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('schedule')}
            className={`px-6 py-3 rounded-lg flex items-center gap-2 ${
              activeTab === 'schedule'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Icon icon="mdi:calendar-clock" className="text-xl" />
            View Schedule
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {activeTab === 'menu' ? (
            <Menu />
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Canteen Schedule</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Monday - Friday</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Breakfast</span>
                      <span className="text-gray-900 font-medium">6:30 AM - 7:30 AM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Lunch</span>
                      <span className="text-gray-900 font-medium">11:30 AM - 1:30 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Snack Time</span>
                      <span className="text-gray-900 font-medium">3:00 PM - 3:30 PM</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Special Events</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Weekend Events</span>
                      <span className="text-gray-900 font-medium">As announced</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Holiday Schedule</span>
                      <span className="text-gray-900 font-medium">Special arrangements</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Canteen; 