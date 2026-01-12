export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">☀</span>
              </div>
              <span className="font-bold text-lg">Daylight Solar</span>
            </div>
            <p className="text-gray-400 text-sm">
              Making clean, renewable energy accessible to all while helping customers save money and protect the planet.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">f</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">in</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition">tw</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-orange-500 transition">Home</a></li>
              <li><a href="/about" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="/products" className="hover:text-orange-500 transition">Products</a></li>
              <li><a href="/faq" className="hover:text-orange-500 transition">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/residential" className="hover:text-orange-500 transition">Residential Solar</a></li>
              <li><a href="/commercial" className="hover:text-orange-500 transition">Commercial Solar</a></li>
              <li><a href="/solar" className="hover:text-orange-500 transition">Solar Batteries</a></li>
              <li><a href="/consultant" className="hover:text-orange-500 transition">Free Consultation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <span>📞</span>
                <div>
                  <p className="text-white">0734226150</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span>✉</span>
                <div>
                  <p className="text-white">hello@daylightsolar.com.au</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <div>
                  <p className="text-white text-xs">1/30 Chancellor Village Blvd,<br/>Sippy Downs, 4556, QLD</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-center text-sm">
            © 2026 DaylightSolar. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
