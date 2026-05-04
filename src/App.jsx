import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Technologies from "./components/Technologies";
import ContactForm from "./components/ContactForm";
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Clients />
      <Technologies />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
