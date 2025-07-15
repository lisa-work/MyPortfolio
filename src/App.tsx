import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toaster } from 'react-hot-toast';
import { AboutMe } from './components/AboutMe';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <Hero />
      <AboutMe/>
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />

      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          // Global default styles
          style: {
            background: '#333',
            color: '#fff',
          },
          // Success specific
          success: {
            duration: 5000,
            style: {
              background: '#060517',
              color: '#fff',
              fontSize: '16px'
            },
          },
          // Error specific
          error: {
            duration: 5000,
            style: {
              background: '#ef4444',
              color: '#fff',
            },
          },
        }}
        />
    </div>
  );
}

export default App;