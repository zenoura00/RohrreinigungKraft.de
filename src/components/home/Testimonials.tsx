"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/company";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
            Kundenstimmen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Überzeugen Sie sich selbst von unserem Service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-700 hover-lift transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-6">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 dark:bg-green-900/20 rounded-full">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              4.9/5 basierend auf über 200 Bewertungen
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
