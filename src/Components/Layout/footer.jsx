import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" text-white mt-8">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            {/* Replace with your logo */}
            <img src="/logo.png"  height={140} width={140}/>
          </div>
          <p className="text-sm">
            Your Data-Driven Marketing & Software Partner. We craft strategic campaigns & develop custom solutions to propel your business forward.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Portfolio</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Web Design</a></li>
            <li><a href="#" className="hover:underline">Logo & Branding</a></li>
            <li><a href="#" className="hover:underline">Social Media Marketing</a></li>
            <li><a href="#" className="hover:underline">App Development</a></li>
            <li><a href="#" className="hover:underline">Web Applications</a></li>
            <li><a href="#" className="hover:underline">Google & Meta Ads</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <span>📧</span>
              <a href="mailto:info@benzify.us" className="hover:underline">info@benzify.us</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>📞</span>
              <a href="tel:+4789012403" className="hover:underline">(+478) 901-2403</a>
            </li>
            <li className="flex items-center space-x-2">
              <span>📍</span>
              <span>Atlanta, Georgia</span>
            </li>
          </ul>
          <h3 className="text-lg font-semibold mt-6 mb-3">Other</h3>
          <ul>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy;2025 BenzifyAgency. All Rights Reserved</p>
        <div className="flex space-x-3 mt-3 md:mt-0">
          <a href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"><FaFacebookF /></a>
          <a href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"><FaInstagram /></a>
          <a href="#" className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"><FaLinkedinIn /></a>
          <a href="#" className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600"><FaWhatsapp /></a>
        </div>
      </div>
    </footer>
  );
}
