import { Calendar, MapPin, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-linear-to-r from-teal-500 to-primary-700 text-white"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6">
            <span className="text-sm font-semibold">2nd Annual</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CX & LOYALTY SUMMIT
            <span className="block text-2xl md:text-3xl mt-2">MENA 2023</span>
          </h1>

          <p className="text-xl md:text-2xl font-light mb-8 italic">
            Driving revenue building relations through CX transformation &
            increased brand Loyalty
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span className="text-lg">1st - 2nd November 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">Dubai, UAE</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <a
                href="http://www.cxloyaltymena.com/"
                className="text-lg hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.cxloyaltymena.com
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-slide-ltr bg-white text-primary-700 hover:text-white">
              <span>Register Now</span>
            </button>

            <button className="btn-slide-rtl bg-transparent border-2 border-white text-white hover:text-white">
              <span>Download Brochure</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
