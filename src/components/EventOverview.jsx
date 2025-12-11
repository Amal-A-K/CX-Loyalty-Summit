const EventOverview = () => {
  return (
    <section id="overview" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Event Overview</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="card mb-8 ">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A strong customer experience, employee experience and customer loyalty 
              program management are the hallmark of many of the world's most successful 
              brands -- setting the bar for organizations across all industries to prioritize 
              their CX, EX & CL strategies and deliver superior experiences across all channels.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It's no secret that over the past two years, customer expectations have evolved -- 
              making CX as one of the biggest differentiators between one's brand and the competition. 
              Two thirds of organizations globally now compete on customer experience alone with 
              87% of business leaders having identified CX as their top growth engine.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The 2nd Annual CX & Loyalty Summit MENA 2023 shifts focus on innovative approaches 
              that the world's leading organizations are deploying to manage customer interactions 
              and maximize customer value.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              A stellar line-up featuring leading brands and organizations who have established 
              CX, EX & Customer Loyalty at the top of their boardroom agenda will share insights 
              into how digital experiences are transforming the way we work, deliver, transact, 
              communicate, and live in an ever-changing world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">87%</div>
              <p className="text-gray-700">of business leaders identify CX as top growth engine</p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">2/3</div>
              <p className="text-gray-700">of organizations compete on customer experience</p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">2nd</div>
              <p className="text-gray-700">Annual Edition in MENA Region</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventOverview;