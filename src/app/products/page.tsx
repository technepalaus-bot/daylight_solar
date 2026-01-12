'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { CheckCircle, Zap, Battery, Sliders } from 'lucide-react';

const SolarPanelRotating3D = dynamic(() => import('@/components/SolarPanelRotating3D'), { ssr: false });
const BatteryStorage3D = dynamic(() => import('@/components/BatteryStorage3D'), { ssr: false });

export default function Products() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-700 text-white py-32 px-4 pt-40">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -right-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-6xl lg:text-7xl font-black">
            Premium Solar <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-2xl text-cyan-100 max-w-3xl mx-auto">
            Complete solar solutions from world-leading manufacturers with 25+ year warranties
          </p>
        </div>
      </section>

      {/* Solar Panels Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1 flex justify-center">
              <SolarPanelRotating3D />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <h2 className="text-5xl font-bold mb-4 text-gray-900">Premium Solar Panels</h2>
                <p className="text-xl text-gray-600">
                  High-efficiency monocrystalline panels engineered for maximum output and durability.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">18-22% Efficiency</h3>
                    <p className="text-gray-600">Industry-leading energy conversion rates</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">25+ Year Warranty</h3>
                    <p className="text-gray-600">Full coverage on products and performance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Weather Resistant</h3>
                    <p className="text-gray-600">Built to withstand Australia's harsh elements</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Global Manufacturers</h3>
                    <p className="text-gray-600">Proven brands with decades of experience</p>
                  </div>
                </div>
              </div>

              <Link href="/consultant" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-full hover:shadow-xl transform hover:scale-105 transition">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Storage Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <BatteryStorage3D />
            </div>
            <div className="space-y-8 text-white">
              <div>
                <h2 className="text-5xl font-bold mb-4">Advanced Battery Storage</h2>
                <p className="text-xl text-gray-300">
                  Store excess solar energy for 24/7 power independence and blackout protection.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Battery className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Lithium-Ion Technology</h3>
                    <p className="text-gray-300">Latest battery technology for maximum efficiency</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Battery className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white">24/7 Energy Independence</h3>
                    <p className="text-gray-300">Generate and store your own clean electricity</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Battery className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Smart Monitoring</h3>
                    <p className="text-gray-300">Track energy production and consumption in real-time</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Battery className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-white">Blackout Protection</h3>
                    <p className="text-gray-300">Automatic backup power during grid outages</p>
                  </div>
                </div>
              </div>

              <Link href="/consultant" className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold text-lg rounded-full hover:shadow-xl transform hover:scale-105 transition">
                Explore Battery Systems
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inverters Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">Smart Inverters</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Intelligent power conversion with maximum efficiency and real-time monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition duration-300">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg inline-block mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">High Efficiency</h3>
              <p className="text-gray-700">98%+ conversion efficiency with minimal power loss</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition duration-300">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg inline-block mb-6">
                <Sliders className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Smart Control</h3>
              <p className="text-gray-700">Real-time monitoring and optimization of your system</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition duration-300">
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg inline-block mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Grid Compatible</h3>
              <p className="text-gray-700">Seamless integration with battery and grid systems</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition duration-300">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg inline-block mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Advanced Safety</h3>
              <p className="text-gray-700">Built-in protection with compliance certifications</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl border-2 border-red-200 hover:border-red-400 hover:shadow-xl transition duration-300">
              <div className="p-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg inline-block mb-6">
                <Sliders className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Easy Setup</h3>
              <p className="text-gray-700">Plug-and-play installation with professional support</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl transition duration-300">
              <div className="p-4 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg inline-block mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">10 Year Warranty</h3>
              <p className="text-gray-700">Full replacement coverage and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why Our Products?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium Quality</h3>
              <p className="text-gray-700 text-lg">
                We partner exclusively with world-leading manufacturers. Every component is rigorously tested and certified for durability and peak performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Proven Track Record</h3>
              <p className="text-gray-700 text-lg">
                Over 5000 installations across Australia. Our customers enjoy consistent, reliable performance and measurable savings month after month.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Installation</h3>
              <p className="text-gray-700 text-lg">
                All installations completed by SAA-accredited professionals. We ensure perfect system setup, configuration, and optimal performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Maximum Savings</h3>
              <p className="text-gray-700 text-lg">
                Government subsidies, flexible financing, and zero-interest payment plans make solar accessible and affordable for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold">Ready to Upgrade Your Energy?</h2>
          <p className="text-xl text-blue-100">Get expert recommendations for your specific needs and budget.</p>
          <Link href="/consultant" className="inline-block px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-full hover:shadow-2xl transform hover:scale-105 transition duration-300">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

      {/* Solar Panels */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Solar Panels</h2>
              <p className="text-gray-600 text-lg mb-6">
                High-efficiency monocrystalline panels from leading global manufacturers with 25+ year warranty
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-2xl">✓</span>
                  <span className="text-gray-700">25+ year warranty on products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-2xl">✓</span>
                  <span className="text-gray-700">Premium efficiency ratings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-2xl">✓</span>
                  <span className="text-gray-700">Weather resistant design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 text-2xl">✓</span>
                  <span className="text-gray-700">Industry leading performance</span>
                </li>
              </ul>
              <Link href="/consultant" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-xl transition">
                Get Free Quote
              </Link>
            </div>
            <div className="flex justify-center">
              <SolarPanelRotating3D />
            </div>
          </div>
        </div>
      </section>

      {/* Battery Storage */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <BatteryStorage3D />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6 text-white">Battery Storage Systems</h2>
              <p className="text-gray-300 text-lg mb-6">
                Advanced lithium-ion battery systems to store excess energy for use during peak demand or outages
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <span className="text-gray-300">24/7 energy independence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <span className="text-gray-300">Blackout protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <span className="text-gray-300">Smart monitoring system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-400 text-2xl">✓</span>
                  <span className="text-gray-300">10+ year warranty</span>
                </li>
              </ul>
              <Link href="/consultant" className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-xl transition">
                Explore Battery Systems
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inverters */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Smart Inverters</h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Smart inverters that convert DC power to AC with maximum efficiency and monitoring
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'High Efficiency',
                desc: 'Convert 98%+ of solar energy with minimal losses',
              },
              {
                icon: '📊',
                title: 'Real-time Monitoring',
                desc: 'Track your energy production from your smartphone',
              },
              {
                icon: '🔒',
                title: 'Advanced Safety',
                desc: 'Built-in protection with grid compliance features',
              },
              {
                icon: '🌐',
                title: 'Smart Grid Ready',
                desc: 'Compatible with battery storage systems',
              },
              {
                icon: '🔧',
                title: 'Easy Installation',
                desc: 'Plug-and-play setup with professional support',
              },
              {
                icon: '🛡️',
                title: '10 Year Warranty',
                desc: 'Full coverage and replacement guarantee',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200 hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Choose Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600 mb-6">
                We partner with world-leading manufacturers to bring you the best solar technology available. Every component is rigorously tested for durability and performance.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Proven Performance</h3>
              <p className="text-gray-600 mb-6">
                Our products have been installed in thousands of homes and businesses across Australia, delivering consistent results and customer satisfaction.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Support</h3>
              <p className="text-gray-600 mb-6">
                Our SAA accredited installers and designers ensure proper installation and optimal system performance from day one.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Massive Savings</h3>
              <p className="text-gray-600 mb-6">
                Qualify for federal government solar subsidies and financing options that make going solar more affordable than ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Power Your Home?</h2>
          <p className="text-xl mb-8">Get a free, obligation-free consultation and discover your personalized solar solution today.</p>
          <Link href="/consultant" className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
