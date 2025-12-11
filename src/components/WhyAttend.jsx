import { Users, Network, Handshake, BookOpen, Globe } from 'lucide-react';

const WhyAttend = () => {
  const reasons = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Gain Knowledge and Insights',
      description: 'Learn from Top Industry Leaders and Experts from across the globe'
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: 'Network with Peers',
      description: 'Connect with Industry Peers in a solution-oriented environment'
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Form Partnerships',
      description: 'Discuss Significant Partnerships and Collaborations with Industry leaders'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Real-time Case Studies',
      description: 'Deep Dive into Insights derived from real-time case studies'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Build Ecosystem',
      description: 'Build Industry Ecosystem Collaboration to address latest challenges'
    }
  ];

  return (
    <section id="why-attend" className="py-16 bg-linear-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Why Attend?</h2>
        
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card hover:shadow-primary-500 hover:shadow-md hover:scale-105">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The 2nd Annual CX & Loyalty Summit MENA 2023 will bring together senior 
              industry professionals across all industries and verticals to talk all 
              things CX, EX, Loyalty, Customer Service, Digital Trends and much more.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Summit will explore emerging CX strategies, the latest technologies -- 
              Digital, Automation and best practices that will keep your organization at 
              the forefront of CX, EX & CL excellence.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="card  ">
              <div className="text-primary-600 mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-700">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            Register Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;