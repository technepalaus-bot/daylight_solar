'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Home, Zap, TrendingUp, Shield, Leaf, DollarSign } from 'lucide-react';

const SolarPanelRotating3D = dynamic(() => import('@/components/SolarPanelRotating3D'), { ssr: false });

export default function Residential() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-32 px-4 mt-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 via-orange-400/10 to-yellow-500/20 -z-10"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-40 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-black drop-shadow-lg">
                Solar for Your <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Home</span>
              </h1>
              <p className="text-2xl text-blue-100">
                Reduce energy bills, increase home value, and enjoy energy independence with custom residential solar solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/consultant" className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 font-bold text-lg rounded-full hover:shadow-2xl transform hover:scale-105 transition duration-300">
                  Get Free Assessment
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-blue-900 transition duration-300">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <SolarPanelRotating3D />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-900 to-blue-800 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-orange-400/10 -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white drop-shadow-lg">Benefits for Your Home</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Everything you need to know about residential solar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg inline-block mb-6 text-white group-hover:scale-110 transition duration-300">
                <DollarSign className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Lower Bills</h3>
              <p className="text-gray-600 text-lg">Reduce your monthly electricity bills by up to 100%</p>
            </div>

            <div className="group p-8 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-400">
              <div className="p-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl shadow-lg inline-block mb-6 text-white group-hover:scale-110 transition duration-300">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Increase Home Value</h3>
              <p className="text-gray-600 text-lg">Solar systems increase your property value by 4-5%</p>
            </div>

            <div className="group p-8 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-2000">
              <div className="p-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl shadow-lg inline-block mb-6 text-white group-hover:scale-110 transition duration-300">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Environmental Impact</h3>
              <p className="text-gray-600 text-lg">Reduce your carbon footprint and help the planet</p>
            </div>

            <div className="group p-8 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <div className="p-4 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl shadow-lg inline-block mb-6 text-white group-hover:scale-110 transition duration-300">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Energy Independence</h3>
              <p className="text-gray-600 text-lg">Generate your own clean electricity daily</p>
            </div>

            <div className="group p-8 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-400">
              <div className="p-4 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl shadow-lg inline-block mb-6 text-white group-hover:scale-110 transition duration-300">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">25+ Year Warranty</h3>
              <p className="text-gray-600 text-lg">Long term protection and reliable performance</p>
            </div>

            <div className="group p-8 bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-2000">
              <div className="p-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-lg inline-block mb-6 text-white group-hover:scale-110 transition duration-300">
                <Home className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">For Every Home</h3>
              <p className="text-gray-600 text-lg">Custom solutions for all home sizes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: '1', title: 'Free Assessment', desc: 'We analyze your home and energy needs' },
              { num: '2', title: 'Custom Design', desc: 'Tailored system designed for your home' },
              { num: '3', title: 'Installation', desc: 'Professional SAA certified installation' },
              { num: '4', title: 'Monitoring', desc: 'Track your savings with our app' }
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <div className="text-4xl font-bold text-orange-500 mb-3">{step.num}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Happy Homeowners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Mike Timberlake',
                location: 'Brisbane',
                text: 'Our household has high energy consumption. This company was fantastic and we\'ve seen significant reduction in energy bills.',
                savings: 'Saves $3,500/year'
              },
              {
                name: 'Emma Robak',
                location: 'Gold Coast',
                text: 'As a single parent with a tight budget, this was perfect. They helped me navigate subsidies and financing options.',
                savings: 'Saves $2,800/year'
              }
            ].map((review, i) => (
              <div key={i} className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500 mb-2">{review.location}</p>
                <p className="text-green-600 font-bold">{review.savings}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Make Your Home Solar-Powered Today</h2>
          <p className="text-lg mb-8 opacity-90">Start saving on electricity bills and contribute to a cleaner environment.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:shadow-lg transition">
            Book Free Home Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
