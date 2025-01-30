import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-800 py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Branding */}
          <div className="col-span-1">
            <h1 className="text-3xl font-bold mb-4 text-lightblue-600">CashBash</h1>
            <p className="text-gray-600">
              The AI-powered full-stack finance platform built with Next.js 15, React 19, and cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-lightblue-600">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-lightblue-500 transition-colors duration-300">About</a></li>
              <li><a href="#features" className="hover:text-lightblue-500 transition-colors duration-300">Features</a></li>
              <li><a href="#pricing" className="hover:text-lightblue-500 transition-colors duration-300">Pricing</a></li>
              <li><a href="#faq" className="hover:text-lightblue-500 transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-lightblue-600">Resources</h2>
            <ul className="space-y-2">
              <li><a href="#docs" className="hover:text-lightblue-500 transition-colors duration-300">Documentation</a></li>
              <li><a href="#blog" className="hover:text-lightblue-500 transition-colors duration-300">Blog</a></li>
              <li><a href="#support" className="hover:text-lightblue-500 transition-colors duration-300">Support</a></li>
              <li><a href="#api" className="hover:text-lightblue-500 transition-colors duration-300">API</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-lightblue-600">Get in Touch</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Email: support@cashbash.com</li>
              <li>Phone: +1 (234) 567-890</li>
              <li>Location: Silicon Valley, USA</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-lightblue-600">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-lightblue-500 transition-colors duration-300 text-2xl" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="text-gray-800 hover:text-lightblue-500 transition-colors duration-300 text-2xl" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="text-gray-800 hover:text-lightblue-500 transition-colors duration-300 text-2xl" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" className="text-gray-800 hover:text-lightblue-500 transition-colors duration-300 text-2xl" aria-label="GitHub"><FaGithub /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-300"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} CashBash. All rights reserved.</p>
          <p className="text-gray-600 text-sm">Built with ❤️ by <span className="text-lightblue-600">Aditya Sharma</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
