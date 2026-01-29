import { NavLink } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Web Development",
    "UI/UX Design",
    "SEO Optimization",
    "Mobile Apps",
    "Consulting",
  ];

  return (
    <footer className="bg-gray-900 text-gray-200 pt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 md:px-12 pb-12">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">MASolutions</h3>
          <p className="text-gray-400">
            MA Solutions your go-to solution for web development and digital services.  
            We craft beautiful, fast, and user-friendly websites and apps.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className="hover:text-indigo-500 transition-colors"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service} className="hover:text-indigo-500 transition-colors">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-gray-400 mb-2">123 Web St., Tech City</p>
          <p className="text-gray-400 mb-2">Email: info@masolutions.com</p>
          <p className="text-gray-400 mb-4">Phone: +123 456 7890</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-indigo-500 transition-colors">FaceBook</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Instagram </a>
            <a href="#" className="hover:text-indigo-500 transition-colors">LinkedinIn </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MASolutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
