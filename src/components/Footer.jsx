import { Calendar, MapPin, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CX</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">CX & Loyalty Summit</h2>
                <p className="text-sm text-gray-400">MENA 2023</p>
              </div>
            </div>
            <p className="text-gray-400">
              Driving revenue building relations through CX transformation & increased brand Loyalty
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Event Details</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>1st - 2nd November 2023</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Globe className="w-4 h-4" />
                <a 
                  href="http://www.cxloyaltymena.com/" 
                  className="hover:text-white transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cxloyaltymena.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#overview" className="text-gray-400 hover:text-white transition">Event Overview</a></li>
              <li><a href="#who" className="text-gray-400 hover:text-white transition">Attendees</a></li>
              <li><a href="#why-attend" className="text-gray-400 hover:text-white transition">Why Attend</a></li>
              <li><a href="#topics" className="text-gray-400 hover:text-white transition">Topics</a></li>
              <li><a href="#sponsor" className="text-gray-400 hover:text-white transition">Sponsor</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <button className="btn-primary mt-6 w-full">
              Register Now
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2023 CX & Loyalty Summit MENA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;