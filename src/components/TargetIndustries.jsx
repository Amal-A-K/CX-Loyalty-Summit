import { Building2, ShoppingBag, Phone, Hotel, Plane, Package, Globe } from 'lucide-react';

const TargetIndustries = () => {
  const industries = [
    { name: 'BFSI', icon: <Building2 className="w-8 h-8" /> },
    { name: 'RETAIL & E-COMMERCE', icon: <ShoppingBag className="w-8 h-8" /> },
    { name: 'TELECOMMUNICATION', icon: <Phone className="w-8 h-8" /> },
    { name: 'HOSPITALITY', icon: <Hotel className="w-8 h-8" /> },
    { name: 'TRAVEL & TOURISM', icon: <Plane className="w-8 h-8" /> },
    { name: 'AVIATION', icon: <Globe className="w-8 h-8" /> },
    { name: 'FMCG & CPG', icon: <Package className="w-8 h-8" /> },
    { name: 'OTHERS', icon: <Building2 className="w-8 h-8" /> }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Target Industries</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="card text-center"
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-primary-700 mb-3 rotate-0  hover:rotate-360 transition duration-900">
                    {industry.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetIndustries;