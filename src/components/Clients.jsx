export default function Clients() {
  const clients = [
    { name: "Srivedha Stones", logo: "🪨" }, // Replace with your logo image paths
    { name: "IKC", logo: "🏢" },
    { name: "Praneeth Technologies", logo: "💻" },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
            Trusted Partners
          </h2>
          <p className="text-3xl md:text-4xl font-black text-black">
            Our Valued Clients
          </p>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group flex flex-col items-center justify-center p-10 border-2 border-gray-50 rounded-2xl bg-gray-50/30 hover:border-blue-600 hover:bg-white hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 cursor-default"
            >
              {/* Logo Placeholder */}
              <div className="w-20 h-20 mb-6 bg-white rounded-xl shadow-sm flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                {client.logo}
              </div>
              
              <h3 className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors">
                {client.name}
              </h3>
              
              <p className="mt-2 text-sm text-gray-500 font-medium">
                Official Partner
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}