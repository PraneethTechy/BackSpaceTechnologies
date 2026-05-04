export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="text-xl font-bold">BackSpaceTechnologies</div>
      <ul className="flex gap-6 ">
        <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
        <li><a href="#clients" className="hover:text-blue-500">Abouts</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
}