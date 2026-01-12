'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Award, Users, Zap, Globe } from 'lucide-react';

const RotatingEarthAnimation = dynamic(() => import('@/components/RotatingEarthAnimation'), { ssr: false });

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-700 text-white py-32 px-4 pt-40">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -right-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-6xl lg:text-7xl font-black">
            About <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Daylight Solar</span>
          </h1>
          <p className="text-2xl text-cyan-100 max-w-3xl mx-auto">
            Pioneering sustainable energy solutions since the beginning. Leading Australia towards a greener future.
          </p>
        </div>
      </section>

      {/* 3D Earth Animation Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">Our Global Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connecting renewable energy across Australia and making a difference worldwide
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <RotatingEarthAnimation />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold mb-6 text-gray-900">Our Mission</h2>
                <p className="text-gray-700 text-xl mb-4 leading-relaxed">
                  We are dedicated to making clean, renewable energy accessible and affordable for all while helping our customers save money and protect the planet.
                </p>
                <p className="text-gray-700 text-xl leading-relaxed">
                  Our mission is to drive innovation and sustainability to create a healthier planet for future generations. We empower communities to take charge of their energy needs and promote a shift towards greener living.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Environmental Commitment</h3>
                    <p className="text-gray-700">Every system we install reduces carbon emissions and contributes to a healthier planet.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl bg-gradient-to-br from-green-400 via-emerald-400 to-cyan-400 p-8 flex items-center justify-center shadow-2xl">
              <div className="text-8xl animate-bounce">🌱</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-bold text-gray-900">Why We Stand Out</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading expertise combined with customer-first service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-400 hover:shadow-xl transition duration-300">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg inline-block mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Industry Leaders</h3>
              <p className="text-gray-700 text-lg">The fastest growing company in the solar industry with proven track record of excellence.</p>
            </div>

            <div className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-purple-400 hover:shadow-xl transition duration-300">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg inline-block mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Expert Team</h3>
              <p className="text-gray-700 text-lg">SAA accredited installers and designers with years of professional experience.</p>
            </div>

            <div className="group p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-yellow-400 hover:shadow-xl transition duration-300">
              <div className="p-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg inline-block mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Premium Quality</h3>
              <p className="text-gray-700 text-lg">Top-grade solar panels, inverters, and batteries with 25+ years warranty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Journey</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Founded with Vision</h3>
                  <p className="text-gray-600">Started with a clear mission to make solar energy accessible to every household and business.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Growing Strong</h3>
                  <p className="text-gray-600">Became the fastest growing solar company by consistently delivering quality and value.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Industry Recognition</h3>
                  <p className="text-gray-600">Achieved certifications and partnerships with leading global solar brands.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Continuing Innovation</h3>
                  <p className="text-gray-600">Constantly innovating to provide cutting-edge solar solutions for the future.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Join Our Growing Family</h2>
          <p className="text-lg text-white mb-8 opacity-90">
            Be part of the solar revolution and start saving today.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-orange-500 font-bold rounded-lg hover:shadow-lg transition">
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
