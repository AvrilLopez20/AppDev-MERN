import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-100 border-b p-4 flex gap-6 text-gray-700 font-medium">
      <Link to="/" className="hover:text-blue-600">Home</Link>
      <Link to="/students" className="hover:text-blue-600">Student Lists</Link>
      <Link to="/add-student" className="hover:text-blue-600">Add Students</Link>
    </nav>
  );
}

export default Navbar;