import { TrendingUp, Users, Target, BarChart, MessageSquare, Smartphone, Award, Heart } from 'lucide-react';

const TopicHighlights = () => {
  const topics = [
    'Corporate Culture Focus: Top tips to successfully spearhead Customer Experience Transformation internally',
    'Brand communities driving Loyalty, Retention & Advocacy - How to transform your loyal customers to brand advocates',
    'Delivering the "Unattainable" CX dream and transformation towards Hyper Personalization',
    'Unveiling how exceptional brands retain their customers and build loyalty',
    'How to simultaneously improve Customer Experience and Operational Excellence to make customers loyal',
    'Using Data, CRM, and Marketing Automation to drive friction-free experiences',
    'Multichannel Focus: Strategies to deliver a world-class customer experience across multiple channels',
    'Driving Customer Loyalty and Top-line revenue through Gamification',
    'Strategies to tailor the multi-channel experience while delivering a consistent Brand promise',
    'Linking Voice of the Employee and Voice of the Customer - A critical key to CX success',
    'Using social media to improve brand perception and shape the Customer Experience',
    'Exploring advances in Customer Analytics and Segmentation -- Getting to really know your customer',
    'Ensuring effective complaint handling as the foundation of a Customer Retention Strategy',
    'How loyalty programs boost revenue and how to measure it'
  ];

  const icons = [
    <TrendingUp />,
    <Users />,
    <Target />,
    <Award />,
    <BarChart />,
    <MessageSquare />,
    <Smartphone />,
    <Heart />
  ];

  return (
    <section id="topics" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Topic Highlights</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {topics.map((topic, index) => (
              <div key={index} className="card flex items-start gap-4">
                <div className="text-primary-600 shrink-0 mt-1">
                  {icons[index % icons.length]}
                </div>
                <p className="text-gray-700">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicHighlights;