import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-blue-800 text-white pt-16 pb-8">
      {/* Logo color overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-blue-500/10 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Logo Only - Hidden on Mobile */}
       

        {/* Divider - Hidden on Mobile */}
        <div className="hidden md:block border-t border-yellow-400/30 my-10"></div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info - Updated */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <span className="text-white drop-shadow-lg">About</span>
            </h3>
            <ul className="space-y-3 text-blue-100 text-sm leading-relaxed">
              <li>
                <p className="font-semibold text-white mb-1">Professional Installation</p>
                <p>SAA-accredited solar experts</p>
              </li>
              <li>
                <p className="font-semibold text-white mb-1">25+ Year Warranty</p>
                <p>Industry-leading protection</p>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <span className="text-white drop-shadow-lg">Quick Links</span>
            </h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><a href="/" className="hover:text-yellow-300 transition font-medium">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-300 transition font-medium">About Us</a></li>
              <li><a href="/products" className="hover:text-yellow-300 transition font-medium">Products</a></li>
              <li><a href="/blog" className="hover:text-yellow-300 transition font-medium">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <span className="text-white drop-shadow-lg">Services</span>
            </h3>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><a href="/residential" className="hover:text-yellow-300 transition font-medium">Residential Solar</a></li>
              <li><a href="/commercial" className="hover:text-yellow-300 transition font-medium">Commercial Solar</a></li>
              <li><a href="/solar" className="hover:text-yellow-300 transition font-medium">Solar Batteries</a></li>
              <li><a href="/consultant" className="hover:text-yellow-300 transition font-medium">Free Consultation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <span className="text-white drop-shadow-lg">Contact Us</span>
            </h3>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-lg">📞</span>
                <div>
                  <p className="text-white font-semibold">0734226150</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-lg">✉</span>
                <div>
                  <p className="text-white font-semibold break-all">hello@daylightsolar.com.au</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 text-lg">📍</span>
                <div>
                  <p className="text-white text-xs font-semibold">1/30 Chancellor Village Blvd, Sippy Downs, 4556, QLD</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links - Hidden on Mobile */}
        <div className="hidden md:flex justify-center gap-6 mb-12">
          <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-blue-900 font-bold hover:scale-110 transition duration-300 shadow-lg">f</a>
          <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold hover:scale-110 transition duration-300 shadow-lg">in</a>
          <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-blue-900 font-bold hover:scale-110 transition duration-300 shadow-lg">tw</a>
        </div>

        {/* Divider - Hidden on Mobile */}
        <div className="hidden md:block border-t border-yellow-400/30 pt-8">
          <p className="text-blue-100 text-center text-sm font-medium drop-shadow-lg">
            © 2026 Daylight Solar. All Rights Reserved. | Transforming Energy, One Home at a Time.
          </p>
        </div>

        {/* Copyright - Always Visible */}
        <div className="block md:hidden pt-8 text-center">
          <p className="text-blue-100 text-sm font-medium drop-shadow-lg">
            © 2026 Daylight Solar. All Rights Reserved. | Transforming Energy, One Home at a Time.
          </p>
        </div>
      </div>
    </footer>
  );
}
