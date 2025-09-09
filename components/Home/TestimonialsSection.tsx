"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ealu Merin Anil",
      text: "Salkara Restaurant is hands down the best place to go! Their biriyani is simply the best—fragrant, perfectly spiced, and cooked to perfection.",
      rating: 5,
      date: "6 months ago",
      role: "Local Guide · 4 reviews",
    },
    {
      name: "Sandra Maria Antony",
      text: "Staying here felt like being welcomed into a friend’s home—comforting food, a warm, cozy atmosphere, and staff who are genuinely friendly and helpful.",
      rating: 5,
      date: "1 month ago",
      role: "4 reviews",
    },
    {
      name: "Jyothish M J",
      text: "Food was really delicious, especially the porotta and chicken curry. I am really satisfied with the service.",
      rating: 5,
      date: "5 months ago",
      role: "3 reviews",
    },
    {
      name: "Sandeep Sathian",
      text: "Had an exceptional dining experience at Salkara with delicious cuisines and captivating hospitality. All the very best to Salkara and Abinsha. Recommended for all food enthusiasts.",
      rating: 5,
      date: "7 months ago",
      role: "8 reviews · 1 photo",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 px-6 bg-white text-black border-t border-gray-200">
      <div className="max-w-xl mx-auto text-center space-y-12 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold">What our guests say</h2>

        <div className="relative h-44">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-6 bg-neutral-50 rounded-lg shadow-sm flex flex-col justify-center"
            >
              <p className="text-lg text-gray-700 italic">
                “{testimonials[index].text}”
              </p>

              {/* Stars */}
              <div className="mt-4 flex justify-center items-center gap-1 text-yellow-500 text-lg">
                {Array.from({ length: testimonials[index].rating }, (_, i) => (
                  <span key={i}>★</span>
                ))}
                {testimonials[index].rating < 5 && (
                  <>
                    {Array.from(
                      { length: 5 - testimonials[index].rating },
                      (_, i) => (
                        <span key={`empty-${i}`} className="text-gray-300">
                          ★
                        </span>
                      )
                    )}
                  </>
                )}
              </div>

              <p className="mt-2 font-semibold text-gray-800">
                — {testimonials[index].name},{" "}
                <span className="font-normal text-gray-500">
                  {testimonials[index].date}
                </span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
