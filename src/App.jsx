import Hero from './components/Hero';
import ProfileSummary from './components/ProfileSummary';
import Skills from './components/Skills';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from "./components/Experience"
import Contact from './components/Contact';
import ApiAnimation from './components/ApiAnimation';
import Certificates from "./components/Certificates";

function App() {
  return (
  <div className="min-h-screen bg-dark-bg">
   <ApiAnimation />
   <Hero />
   <ProfileSummary />
   <About />
   <Skills />
   <Projects />
   <Experience />
   <Certificates/>
   <Education />
   <Contact />
  </div>
  );
}

export default App;

