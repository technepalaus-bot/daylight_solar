'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Award, Users, Zap, Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const RotatingEarthAnimation = dynamic(() => import('@/components/RotatingEarthAnimation'), { ssr: false });

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What are the benefits of installing solar panels for your home?',
      answer: 'Solar panels reduce your electricity bills by up to 100%, increase your property value, reduce carbon emissions, and provide long-term energy independence. With federal government subsidies available in Australia, the upfront costs are significantly reduced.',
    },
    {
      question: 'Is solar power suitable for my house?',
      answer: 'Solar systems can be designed for most homes and businesses. Our free assessment helps determine if your property has adequate sun exposure and roof space. Even homes with shading can benefit from solar technology.',
    },
    {
      question: 'How does solar energy work for home use?',
      answer: 'Solar panels convert sunlight into DC electricity, which is converted to AC electricity by an inverter for use in your home. Any excess energy can be stored in a battery system or fed back to the grid for credits on your bill.',
    },
    {
      question: 'Can I generate solar electricity for my home and go off-grid?',
      answer: 'Yes, with battery storage systems like lithium-ion batteries, you can achieve complete energy independence and go off-grid. Our systems are designed to provide 24/7 power, even during outages.',
    },
    {
      question: 'Are household solar panels a good investment in Australia?',
      answer: 'Absolutely! Australia has excellent solar potential with high sunshine hours. Most homeowners see ROI within 5-7 years, with systems lasting 25+ years. Combined with federal incentives, solar is one of the best investments you can make.',
    },
    {
      question: 'What is a solar array for a home and how does it work?',
      answer: 'A solar array is a collection of solar panels connected together. The panels work together to generate more electricity than individual panels. The size of your array depends on your energy consumption and roof space.',
    },
    {
      question: 'What are sun panels for home and are they efficient?',
      answer: 'Solar panels for homes are photovoltaic (PV) panels that convert sunlight to electricity. Modern solar panels have efficiency ratings of 18-22%, meaning they convert that percentage of sunlight into usable electricity.',
    },
    {
      question: 'What are home PV panels and how are they different?',
      answer: 'PV (Photovoltaic) panels are solar panels that use the photovoltaic effect to directly convert light into electricity. They differ from solar thermal panels which heat water. PV panels are ideal for generating electricity for your home.',
    },
    {
      question: 'How does solar electricity reduce my power bill?',
      answer: 'Solar systems generate free electricity during the day, reducing the amount of grid electricity you need to purchase. Any excess energy can earn credits on your bill. Most customers see 50-80% reduction in electricity costs.',
    },
    {
      question: 'How to choose reliable solar installation companies?',
      answer: 'Choose companies that are SAA (Solar Accreditation Australia) accredited, have proven track records, offer warranties, and provide transparent pricing. Look for companies with excellent customer reviews and years of experience in your area.',
    },
    {
      question: 'What financing options are available?',
      answer: 'We offer zero-interest payment plans, federal government solar rebates, and flexible financing options. Many customers can install a complete solar system with zero upfront costs and start saving immediately.',
    },
    {
      question: 'How long does installation take?',
      answer: 'A typical residential solar installation takes 1-2 days. Commercial installations may take longer depending on system size. We work flexibly to minimize disruption to your daily activities.',
    },
    {
      question: 'What warranty do solar systems come with?',
      answer: 'Our solar panels come with 25+ year product and performance warranties. Inverters come with 10-year warranties. Battery systems typically have 10-15 year warranties. All workmanship is fully covered.',
    },
    {
      question: 'Do solar panels work on cloudy days?',
      answer: 'Yes! Solar panels still generate electricity on cloudy days, though at a reduced rate (about 25% of peak output). Our battery storage systems ensure you have power available even during cloudy periods.',
    },
  ];

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg hover:border-blue-300 transition">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-blue-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 flex-shrink-0 ml-4 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
  
 
}
