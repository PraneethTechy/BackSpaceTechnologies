
import HeroImage from '../assets/Hero.png';
export default function Hero() {
  return (
    <section className="relative bg-white min-h-[80vh] flex items-center overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-black text-black leading-tight">
            Backspace <span className="text-blue-600">Solutions</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-lg">
            Empowering learners through personalized teaching and innovative 
            educational resources. Let's rewrite the future of education together.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
              Explore Courses
            </button>
            <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative flex justify-center items-center z-10">
          {/* Subtle Blue Shape behind image */}
          <div className="absolute inset-0  rounded-3xl rotate-3 scale-105"></div>
          
          <img 
            src={HeroImage} // Replace with your actual PNG path
            alt="Backspace Solutions Education"
            className="relative z-20 w-full max-w-md md:max-w-xl h-auto drop-shadow-2xl rounded-2xl"
          />
          
          {/* Floating Badge (Optional for extra design flair) */}
          {/* <div className="absolute bottom-10 -left-5 z-30 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-bounce">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.75 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.75 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="font-bold text-black text-sm">Interactive Learning</span>
          </div> */}
        </div>

      </div>
    </section>
  );
}