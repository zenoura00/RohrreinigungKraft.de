"use client";

import { Phone, Truck, CheckCircle } from "lucide-react";
import { howItWorks } from "@/data/company";

const iconMap: Record<string, React.ElementType> = {
  phone: Phone,
  truck: Truck,
  check: CheckCircle,
};

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            So einfach geht&apos;s
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            In nur 3 Schritten zur schnellen Lösung Ihres Rohrproblems
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-24 left-[16.5%] right-[16.5%] h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />

            <div className="grid md:grid-cols-3 gap-8 md:gap-4">
              {howItWorks.map((step, index) => {
                const Icon = iconMap[step.icon] || Phone;
                return (
                  <div
                    key={step.step}
                    className="relative text-center group"
                  >
                    {/* Step number */}
                    <div className="relative inline-flex items-center justify-center mb-6">
                      <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center shadow-xl shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white text-sm font-bold flex items-center justify-center shadow-lg">
                        {step.step}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto">
                      {step.description}
                    </p>

                    {/* Arrow for mobile */}
                    {index < howItWorks.length - 1 && (
                      <div className="md:hidden flex justify-center my-6">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
