import Hero from './components/Hero';
import ProfileSummary from './components/ProfileSummary';
import Skills from './components/Skills';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ApiAnimation from './components/ApiAnimation';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <ApiAnimation />
      <Hero />
      <ProfileSummary />
      <Skills />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

