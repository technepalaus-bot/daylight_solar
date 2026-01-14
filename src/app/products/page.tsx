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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-700 text-white py-32 px-4 mt-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -right-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
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
                    <h3 className="text-lg font-bold">24/7 Energy Independence</h3>
                    <p className="text-gray-300">Utilize solar power around the clock</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Battery className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">Blackout Protection</h3>
                    <p className="text-gray-300">Backup power during grid outages</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Battery className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold">10+ Year Lifespan</h3>
                    <p className="text-gray-300">Industry-leading durability and performance</p>
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

      {/* Smart Inverters Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-900/10 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-gray-900">Smart Inverters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced conversion technology that maximizes efficiency and provides real-time monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">High Efficiency</h3>
              <p className="text-gray-600">98%+ conversion efficiency with minimal power loss</p>
            </div>

            <div className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-400">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                <Sliders className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Smart Control</h3>
              <p className="text-gray-600">Real-time monitoring and optimization of your system</p>
            </div>

            <div className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-2000">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Grid Compatible</h3>
              <p className="text-gray-600">Seamless integration with battery and grid systems</p>
            </div>

            <div className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Advanced Safety</h3>
              <p className="text-gray-600">Built-in protection with compliance certifications</p>
            </div>

            <div className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-400">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                <Sliders className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Easy Setup</h3>
              <p className="text-gray-600">Plug-and-play installation with professional support</p>
            </div>

            <div className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animation-delay-2000">
              <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">10 Year Warranty</h3>
              <p className="text-gray-600">Full replacement coverage and support</p>
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

      {/* Final CTA */}
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
