"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 text-center space-y-6 mb-24" id="about">
      <motion.p
        className="text-gray-300 text-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Salkara, an authentic South Indian Kerala restaurant in Sudbury, welcomes you daily from 12 PM to 9 PM at 499 Notre Dame Ave, Greater Sudbury, serving traditional Kerala flavors that delight every palate.
      </motion.p>

      <motion.div
        className="flex justify-center mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Image
          src="/images/chef.jpg"
          alt="Our Chef"
          width={500}
          height={500}
          className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </motion.div>
    </section>
  )
}
