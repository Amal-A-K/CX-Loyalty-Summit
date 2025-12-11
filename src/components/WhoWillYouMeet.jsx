import { Users, Briefcase, Award } from 'lucide-react';

const WhoWillYouMeet = () => {
  const attendees = [
    'CXOs, VPs, Directors',
    'Chief Marketing Officers',
    'Heads of Customer Experience & UX',
    'Heads of Customer Insights & Analytics',
    'Heads of Digital Transformation',
    'Heads of Customer Loyalty & Brand Loyalty',
    'Heads of Customer Value & Loyalty Partnerships',
    'Heads of Rewards and Loyalty'
  ];

  const iconMap = {
    0: <Users className="w-6 h-6 text-primary-600" />,
    1: <Briefcase className="w-6 h-6 text-primary-600" />,
    2: <Award className="w-6 h-6 text-primary-600" />
  };

  return (
    <section id="who" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Who Will You Meet?</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {attendees.map((attendee, index) => (
              <div key={index} className="card flex items-start gap-4 ">
                {iconMap[index % 3]}
                <p className="text-gray-700">{attendee}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWillYouMeet;