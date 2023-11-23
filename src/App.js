import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Refer from './components/Refer';
import Faq from './components/Faq';
import EMICalculator from './components/EMICalculator';
import Feedback from './components/Feedback';
import Process from './components/Process';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />

<Process />
<Feedback />
<EMICalculator />
<Refer /> 
<Faq />
      <Footer />
    </div>
  );
}

export default App;
