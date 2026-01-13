'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Zap, Leaf, TrendingUp } from 'lucide-react';

const SolarSystemAnimation = dynamic(() => import('@/components/SolarSystemAnimation'), { ssr: false });
const SolarPanelRotating3D = dynamic(() => import('@/components/SolarPanelRotating3D'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section - Modern with Background Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-800 text-white min-h-screen flex items-center pt-20">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight">
                Power Your <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Future</span>
              </h1>
              <p className="text-xl lg:text-2xl text-cyan-100 leading-relaxed">
                Harness the sun's energy with cutting-edge solar solutions. Save money, reduce emissions, and gain energy independence.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
                <span className="text-lg text-white">Save up to 80% on electricity bills</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
                <span className="text-lg text-white">25+ year system warranty</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-yellow-400" />
                <span className="text-lg text-white">Government subsidies available</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/consultant" className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg rounded-full hover:shadow-2xl transform hover:scale-105 transition duration-300">
                Get Free Consultation
              </Link>
              <Link href="/solar" className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-gray-900 transition duration-300">
                Explore Products
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <SolarPanelRotating3D />
          </div>
        </div>
      </section>

      {/* 3D Solar System Animation Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            Our Solar Solution
          </h2>
          <p className="text-center text-slate-300 mb-12 text-lg">
            Harness the power of the sun with our advanced solar technology
          </p>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <SolarSystemAnimation />
          </div>
        </div>
      </section>

      {/* Benefits Section - Modern Cards */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">
              Why Choose Solar?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of Australians who are saving money and helping the planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-200 hover:border-yellow-400 transition duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <div className="text-6xl mb-4 group-hover:scale-110 transition duration-300">💰</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Save 50-80%</h3>
              <p className="text-gray-700 text-lg">On your electricity bills, starting immediately and growing with time.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 hover:border-green-400 transition duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <div className="text-6xl mb-4 group-hover:scale-110 transition duration-300">🌱</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Help the Planet</h3>
              <p className="text-gray-700 text-lg">Reduce your carbon footprint with clean, renewable energy every day.</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition duration-300 hover:shadow-xl transform hover:-translate-y-2">
              <div className="text-6xl mb-4 group-hover:scale-110 transition duration-300">📈</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Increase Home Value</h3>
              <p className="text-gray-700 text-lg">Solar systems add 4-5% to your property value instantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">What Makes Us Different</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Feature 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-gray-600 text-lg">Industry-leading solar panels with 25+ year warranties from top manufacturers globally.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Fast ROI</h3>
                <p className="text-gray-600 text-lg">Most customers see return on investment within 5-7 years with continued savings beyond.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Expert Installation</h3>
                <p className="text-gray-600 text-lg">SAA-accredited installers ensure perfect setup and maximum system performance.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="p-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Government Support</h3>
                <p className="text-gray-600 text-lg">Access federal subsidies and flexible financing with zero interest options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Modern Cards */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">
              Our Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Customized solar systems for every need and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/residential" className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 hover:border-blue-400 transition duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white group-hover:bg-transparent p-8 md:p-12 min-h-64 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-white transition duration-300">
                    Residential Solar
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-50 text-lg transition duration-300">
                    Custom solar systems designed for your home's unique energy needs and budget.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-lg font-semibold text-blue-600 group-hover:text-white group-hover:gap-3 transition duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>

            <Link href="/commercial" className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 hover:border-orange-400 transition duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-400 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-white group-hover:bg-transparent p-8 md:p-12 min-h-64 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-white transition duration-300">
                    Commercial Solar
                  </h3>
                  <p className="text-gray-600 group-hover:text-red-50 text-lg transition duration-300">
                    Scale your business with ROI-focused solar solutions and massive energy savings.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-lg font-semibold text-orange-600 group-hover:text-white group-hover:gap-3 transition duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <p className="text-5xl md:text-6xl font-bold mb-2">5000+</p>
              <p className="text-lg text-blue-100">Happy Customers</p>
            </div>
            <div className="text-center text-white">
              <p className="text-5xl md:text-6xl font-bold mb-2">15MWh</p>
              <p className="text-lg text-blue-100">Power Installed</p>
            </div>
            <div className="text-center text-white">
              <p className="text-5xl md:text-6xl font-bold mb-2">12+</p>
              <p className="text-lg text-blue-100">Years Experience</p>
            </div>
            <div className="text-center text-white">
              <p className="text-5xl md:text-6xl font-bold mb-2">80%</p>
              <p className="text-lg text-blue-100">Avg Bill Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of happy customers saving money and protecting the planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-yellow-100 hover:border-yellow-400 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  JD
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">John Davis</h3>
                  <p className="text-sm text-gray-600">Sydney, NSW</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "The team at Daylight Solar was incredibly professional. My installation was completed in one day and I've already saved over $2000 in electricity bills in the first 6 months!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-100 hover:border-blue-400 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  SM
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Sarah Mitchell</h3>
                  <p className="text-sm text-gray-600">Melbourne, VIC</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "I was skeptical at first, but the free consultation and detailed ROI analysis convinced me. Now my energy bills are minimal and I'm generating clean energy!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-100 hover:border-green-400 transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  ML
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Michael Lee</h3>
                  <p className="text-sm text-gray-600">Brisbane, QLD</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "Best investment I've made for my home! The quality is outstanding and customer support is exceptional. Highly recommend Daylight Solar to everyone."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl font-bold text-gray-900">
            Ready to Go Solar?
          </h2>
          <p className="text-2xl text-gray-600">
            Get your free, personalized solar assessment today. No obligation, no hidden fees.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/consultant" className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg rounded-full hover:shadow-2xl transform hover:scale-105 transition duration-300">
              Get Free Assessment
            </Link>
            <Link href="/contact" className="px-10 py-4 border-2 border-gray-900 text-gray-900 font-bold text-lg rounded-full hover:bg-gray-900 hover:text-white transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
