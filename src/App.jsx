import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Technologies from "./components/Technologies";
import ContactForm from "./components/ContactForm";
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <Hero />
      <Clients />
      <Technologies />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
