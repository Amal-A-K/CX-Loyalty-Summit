import { Target, Users, Award, Mail, Phone } from 'lucide-react';

const WhySponsor = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Demonstrate Thought Leadership',
      description: 'Position your company as a thought leader by delivering a standalone presentation or moderating a panel discussion to a pre-qualified audience comprising of decision makers.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Network & Generate Leads',
      description: 'Optimize your networking opportunities by getting right in front of key decision makers that are prequalified based on seniority, budget availability and motivation.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Brand Positioning',
      description: 'Establish, strengthen and re-position your brand in front of CMOs, Heads of CX & Loyalty who are looking to re-align and strengthen their CX & Loyalty strategies.'
    }
  ];

  return (
    <section id="sponsor" className="py-16 bg-linear-to-r from-primary-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Why Sponsor?</h2>
        
        <div className="max-w-4xl mx-auto mb-8">
          <div className="card">
            <p className="text-lg text-gray-700 leading-relaxed">
              2nd Annual CX & Loyalty Summit MENA 2023 presents the perfect opportunity 
              for solution providers to engage with key decision-makers from diverse 
              industries to differentiate their product and put forward their value 
              proposition in this crowded marketplace.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="card ">
              <div className="text-primary-600 mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="card text-center bg-white/90 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Interested in Sponsoring?
            </h3>
            
            <p className="text-gray-700 mb-8">
              To find out more about the ROI-driven sponsorship and exhibition opportunities,
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-primary-600" />
                <a 
                  href="tel:+919876543210" 
                  className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition"
                >
                  +91 98765 43210
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-primary-600" />
                <a 
                  href="mailto:abcd@gmail.com" 
                  className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition"
                >
                  abcd@gmail.com
                </a>
              </div>
            </div>
            
            <button className="btn-primary mt-8">
              Contact Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySponsor;