"use client";

import { motion } from "framer-motion";

export default function MenuSection() {
  const menu = [
    {
      category: "Lunch Specials (from 12:00 PM)",
      items: [
        { name: "Half Chicken Biriyani", description: "", price: "$12.99" },
        { name: "Full Chicken Biriyani", description: "", price: "$15.99" },
        { name: "Vizhinjam Chicken Fry", description: "", price: "$12.99" },
      ],
    },
    {
      category: "Evening Combos (from 4:00 PM)",
      items: [
        { name: "2 Parottas + Chicken Kuruma", description: "", price: "$13.99" },
        { name: "2 Parottas + Chicken Kondattam", description: "", price: "$14.99" },
        { name: "2 Parottas + Beef Fry", description: "", price: "$16.99" },
        { name: "2 Parottas + Beef Roast", description: "", price: "$15.99" },
        { name: "3 Dosa + Sambar + Chutney + Omlette", description: "", price: "$15.99" },
      ],
    },
    {
      category: "Salkara Specials",
      items: [
        { name: "Kappa Biriyani", description: "", price: "$14.99" },
        { name: "Kerala Parottas", description: "", price: "$2.49" },
        { name: "Chicken Kuruma", description: "", price: "$11.99" },
        { name: "Chicken Kondattam", description: "", price: "$13.99" },
        { name: "Vizhinjam Chicken Fry", description: "", price: "$12.99" },
        { name: "Beef Fry", description: "", price: "$15.99" },
        { name: "Beef Roast", description: "", price: "$14.99" },
        { name: "Pomfret / Avoli Fry", description: "", price: "$12.99" },
        { name: "2 Chicken Cutlets", description: "", price: "$5.00" },
        { name: "2 Beef Cutlets", description: "", price: "$6.00" },
        { name: "2 Pazham Pori", description: "", price: "$5.00" },
      ],
    },
  ];

  return (
    <section id="menu" className="bg-neutral-50 text-black py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Menu
        </motion.h2>

        {menu.map((section, i) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 + 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {section.category}
            </h3>
            <ul className="space-y-6">
              {section.items.map((item, j) => (
                <motion.li
                  key={item.name}
                  className="flex justify-between items-start border-b pb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: j * 0.15 }}
                >
                  <div>
                    <h4 className="font-medium text-lg">{item.name}</h4>
                    {item.description && (
                      <p className="text-gray-600">{item.description}</p>
                    )}
                  </div>
                  <span className="text-gray-800 font-semibold">{item.price}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
