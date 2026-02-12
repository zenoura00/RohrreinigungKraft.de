"use client";

import { useState } from "react";
import { Send, Upload, X, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { company } from "@/data/company";

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    message: "",
  });
  const [images, setImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImages([...images, ...files].slice(0, 5)); // Max 5 images
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        service: "",
        message: "",
      });
      setImages([]);
    }, 3000);
  };

  const services = [
    "Rohrreinigung",
    "Kanalreinigung",
    "Abflussreinigung",
    "Notdienst",
    "Kamera-Inspektion",
    "Rohrsanierung",
    "Sonstiges",
  ];

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  Schnelle Hilfe anfordern
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Beschreiben Sie Ihr Problem und wir melden uns umgehend bei Ihnen.
                </p>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6 animate-scale-in">
                    <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Vielen Dank!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ihr Name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Ihre Telefonnummer"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ihre E-Mail"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Ort *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Ihr Standort"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Gewünschte Leistung</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Bitte wählen...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Beschreiben Sie das Problem..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  {/* Image Upload */}
                  <div className="space-y-3">
                    <Label>Fotos hochladen (optional)</Label>
                    <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center hover:border-primary transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <Upload className="w-10 h-10 text-gray-400 mb-3" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Klicken oder Dateien hierher ziehen
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          Max. 5 Bilder
                        </span>
                      </label>
                    </div>

                    {/* Image previews */}
                    {images.length > 0 && (
                      <div className="flex flex-wrap gap-3 mt-3">
                        {images.map((image, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={URL.createObjectURL(image)}
                              alt={`Upload ${index + 1}`}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 gradient-primary text-white text-lg font-semibold btn-shimmer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Wird gesendet...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Anfrage senden
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 md:p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Sofort-Hilfe</h3>
                <a
                  href={`tel:${company.contact.phone}`}
                  className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors mb-4"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Jetzt anrufen</p>
                    <p className="text-xl font-bold">{company.contact.phoneDisplay}</p>
                  </div>
                </a>
                <p className="text-sm opacity-80">
                  Rund um die Uhr erreichbar - auch an Sonn- und Feiertagen
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                  Kontaktdaten
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Einsatzgebiet</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Nürnberg & 100km Umkreis
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Erreichbarkeit</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        24/7 Notdienst verfügbar
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                  Faire Preise
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {company.pricing.text}. Transparente Beratung vor Ort -
                  keine versteckten Kosten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
