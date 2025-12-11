import Header from './components/Header';
import Hero from './components/Hero';
import EventOverview from './components/EventOverview';
import WhoWillYouMeet from './components/WhoWillYouMeet';
import TargetIndustries from './components/TargetIndustries';
import WhyAttend from './components/WhyAttend';
import TopicHighlights from './components/TopicHighlights';
import WhySponsor from './components/WhySponsor';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <EventOverview />
      <WhoWillYouMeet />
      <TargetIndustries />
      <WhyAttend />
      <TopicHighlights />
      <WhySponsor />
      <Footer />
    </div>
  );
}

export default App;