import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-neutral-100 text-black py-20 px-6 border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Visit Us</h2>

        <div className="space-y-4 text-gray-600 text-base md:text-lg">
          <p className="flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-gray-700" />
            499 Notre Dame Ave, Greater Sudbury
          </p>
          <p className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-gray-700" />
            +1 (249) 532-0248
          </p>
          <p className="flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-gray-700" />
            info@salkara.ca
          </p>
        </div>

        <div className="mt-6">
          <iframe
            className="w-full h-80 rounded-lg border"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.1871945795037!2d-80.98978532065429!3d46.5044048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x205fd9c33ceb8ff%3A0xd268dcaf9c8ef025!2sSalkara%20Restaurant%20%26%20Caterers!5e0!3m2!1sen!2sca!4v1757384480962!5m2!1sen!2sca"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
