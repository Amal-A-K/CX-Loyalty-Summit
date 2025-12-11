import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '#hero' },
    { label: 'OVERVIEW', href: '#overview' },
    { label: 'SPEAKERS', href: '#who' },
    { label: 'AGENDA', href: '#why-attend' },
    { label: 'TOPICS', href: '#topics' },
    { label: 'SPONSOR', href: '#sponsor' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">CX</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">CX & Loyalty Summit</h1>
              <p className="text-sm text-gray-600">MENA 2023</p>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 font-bold transition duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button className="btn-primary hidden lg:block">
            Register Now
          </button>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="btn-primary mt-2">Register Now</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;