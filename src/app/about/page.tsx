'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Award, Users, Zap, Globe, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const RotatingEarthAnimation = dynamic(() => import('@/components/RotatingEarthAnimation'), { ssr: false });
const SolarSystemAnimation = dynamic(() => import('@/components/SolarSystemAnimation'), { ssr: false });

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

  const impactStats = [
    { label: 'MILLIONS of kW GENERATED', value: '1M+' },
    { label: 'MORE THAN HALF A MILLION CO2 REDUCED', value: '500K+' },
    { label: 'THOUSANDS of HOUSEHOLD POWERED', value: '1000+' },
  ];

  const coreValues = [
    {
      title: 'Innovation',
      description: 'Pioneering AI-driven solar optimization.',
      icon: '⚡',
    },
    {
      title: 'Sustainability',
      description: 'Every panel installed = Less carbon, more savings',
      icon: '🌱',
    },
    {
      title: 'Community',
      description: 'Providing solar installations across rural & urban Australia, including underserved areas.',
      icon: '🤝',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-32 px-4 mt-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 via-orange-400/10 to-yellow-500/20 -z-10"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -right-40 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center space-y-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div className="space-y-6">
            <h1 className="text-6xl lg:text-7xl font-black drop-shadow-lg">
              About <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Daylight Solar</span>
            </h1>
            <p className="text-2xl text-blue-100 max-w-3xl">
              We don't just sell solar—we build a sustainable future.
            </p>
          </div>
          <div className="h-64 lg:h-80 flex items-center justify-center">
            <RotatingEarthAnimation />
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 relative">
        <div className="absolute inset-0 bg-gradient-to-bl from-yellow-400/15 via-transparent to-orange-500/10 -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="p-8 bg-blue-800/50 backdrop-blur-sm border-2 border-yellow-400/40 rounded-2xl text-center animate-fade-in-up transition-all duration-300 hover:border-yellow-300 hover:bg-blue-700/60 hover:shadow-2xl hover:shadow-yellow-400/20 hover:scale-105 cursor-default" style={{ animationDelay: `${index * 200}ms` }}>
                <p className="text-4xl font-black bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-2">{stat.value}</p>
                <p className="text-blue-100 font-semibold text-sm leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-950 to-blue-800 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/15 via-transparent to-yellow-400/10 -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white drop-shadow-lg">What Drives Us – The Core of Our Mission</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Our commitment to innovation, sustainability, and community sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="p-8 bg-blue-800/50 backdrop-blur-sm rounded-2xl border-2 border-yellow-400/40 shadow-sm transition-all duration-300 hover:border-yellow-300 hover:bg-blue-700/60 hover:shadow-xl hover:shadow-yellow-400/20 hover:scale-105 cursor-default animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="text-6xl mb-4 transform transition-transform duration-300 hover:scale-110">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-blue-100 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Earth Animation Section */}
      <section className="py-24 px-4 bg-gradient-to-t from-blue-900 via-blue-800 to-blue-700 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/12 via-transparent to-orange-400/12 -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-5xl font-bold text-white drop-shadow-lg">Our Global Impact</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Connecting renewable energy across Australia and making a difference worldwide
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <RotatingEarthAnimation />
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-gradient-to-l from-blue-900 via-blue-800 to-blue-700 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/15 via-transparent to-yellow-400/12 -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-5xl font-bold text-white drop-shadow-lg">Our Mission</h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                Our mission is to make clean, renewable energy accessible to all while helping our customers save money and protect the planet.
              </p>
              <p className="text-blue-100 text-lg leading-relaxed">
                Join us in leading the charge towards a brighter, greener future! We believe that sustainable energy shouldn't be a luxury—it should be available to everyone, everywhere.
              </p>
              
              <div className="flex items-center gap-4 pt-4">
                <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 font-bold rounded-lg hover:shadow-lg transition transform hover:-translate-y-1">
                  See Our Impact in Action
                </Link>
                <Link href="/consultant" className="px-6 py-3 border-2 border-yellow-400 text-yellow-300 font-bold rounded-lg hover:bg-yellow-400/10 transition">
                  Book Solar Assessment
                </Link>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-gradient-to-br from-blue-900/50 via-blue-800/50 to-blue-700/50 border-2 border-yellow-400/20">
              <SolarSystemAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/12 via-transparent to-orange-400/15 -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <h2 className="text-5xl font-bold text-white drop-shadow-lg">Why Daylight Solar?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Industry-leading expertise combined with customer-first service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-blue-800/50 backdrop-blur-sm border-2 border-yellow-400/40 rounded-xl text-center animate-fade-in-up transition-all duration-300 hover:border-yellow-300 hover:bg-blue-700/60 hover:shadow-xl hover:shadow-yellow-400/20 hover:scale-105 cursor-default">
              <div className="text-4xl mb-3 transform transition-transform duration-300 hover:scale-125">⭐</div>
              <h3 className="text-lg font-bold mb-2 text-white">Premium Quality</h3>
              <p className="text-blue-100 text-sm">Premium Solar Panels, Batteries & Investors</p>
            </div>

            <div className="p-6 bg-blue-800/50 backdrop-blur-sm border-2 border-yellow-400/40 rounded-xl text-center animate-fade-in-up transition-all duration-300 hover:border-yellow-300 hover:bg-blue-700/60 hover:shadow-xl hover:shadow-yellow-400/20 hover:scale-105 cursor-default" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl mb-3 transform transition-transform duration-300 hover:scale-125">✓</div>
              <h3 className="text-lg font-bold mb-2 text-white">Free Assessment</h3>
              <p className="text-blue-100 text-sm">Free Solar Assessment at your home</p>
            </div>

            <div className="p-6 bg-blue-800/50 backdrop-blur-sm border-2 border-yellow-400/40 rounded-xl text-center animate-fade-in-up transition-all duration-300 hover:border-yellow-300 hover:bg-blue-700/60 hover:shadow-xl hover:shadow-yellow-400/20 hover:scale-105 cursor-default" style={{ animationDelay: '400ms' }}>
              <div className="text-4xl mb-3 transform transition-transform duration-300 hover:scale-125">💰</div>
              <h3 className="text-lg font-bold mb-2 text-white">Pay Itself</h3>
              <p className="text-blue-100 text-sm">Solar Paying for Itself</p>
            </div>

            <div className="p-6 bg-blue-800/50 backdrop-blur-sm border-2 border-yellow-400/40 rounded-xl text-center animate-fade-in-up transition-all duration-300 hover:border-yellow-300 hover:bg-blue-700/60 hover:shadow-xl hover:shadow-yellow-400/20 hover:scale-105 cursor-default" style={{ animationDelay: '600ms' }}>
              <div className="text-4xl mb-3 transform transition-transform duration-300 hover:scale-125">📈</div>
              <h3 className="text-lg font-bold mb-2 text-white">Fast Growing</h3>
              <p className="text-blue-100 text-sm">The Fastest Growing Company</p>
            </div>

            <div className="p-6 bg-blue-800/50 backdrop-blur-sm border-2 border-yellow-400/40 rounded-xl text-center animate-fade-in-up transition-all duration-300 hover:border-yellow-300 hover:bg-blue-700/60 hover:shadow-xl hover:shadow-yellow-400/20 hover:scale-105 cursor-default" style={{ animationDelay: '800ms' }}>
              <div className="text-4xl mb-3 transform transition-transform duration-300 hover:scale-125">🏅</div>
              <h3 className="text-lg font-bold mb-2 text-white">SAA Accredited</h3>
              <p className="text-blue-100 text-sm">Solar Accreditation Australia Certified</p>
            </div>

            <div className="p-6 bg-blue-800/50 backdrop-blur-sm border-2 border-yellow-400/40 rounded-xl text-center animate-fade-in-up transition-all duration-300 hover:border-yellow-300 hover:bg-blue-700/60 hover:shadow-xl hover:shadow-yellow-400/20 hover:scale-105 cursor-default" style={{ animationDelay: '1000ms' }}>
              <div className="text-4xl mb-3 transform transition-transform duration-300 hover:scale-125">🔧</div>
              <h3 className="text-lg font-bold mb-2 text-white">Tailor-Made</h3>
              <p className="text-blue-100 text-sm">Customized Systems for Your Needs</p>
            </div>

            <div className="p-6 bg-blue-800/50 backdrop-blur-sm border-2 border-yellow-400/40 rounded-xl text-center animate-fade-in-up transition-all duration-300 hover:border-yellow-300 hover:bg-blue-700/60 hover:shadow-xl hover:shadow-yellow-400/20 hover:scale-105 cursor-default" style={{ animationDelay: '1200ms' }}>
              <div className="text-4xl mb-3 transform transition-transform duration-300 hover:scale-125">✨</div>
              <h3 className="text-lg font-bold mb-2 text-white">25+ Warranty</h3>
              <p className="text-blue-100 text-sm">Product & Performance Warranty</p>
            </div>

            <div className="p-6 bg-blue-800/50 backdrop-blur-sm border-2 border-yellow-400/40 rounded-xl text-center animate-fade-in-up transition-all duration-300 hover:border-yellow-300 hover:bg-blue-700/60 hover:shadow-xl hover:shadow-yellow-400/20 hover:scale-105 cursor-default" style={{ animationDelay: '1400ms' }}>
              <div className="text-4xl mb-3 transform transition-transform duration-300 hover:scale-125">💡</div>
              <h3 className="text-lg font-bold mb-2 text-white">Save 100%</h3>
              <p className="text-blue-100 text-sm">Power Bill Saving Up to 100%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tl from-yellow-400/15 via-transparent to-orange-400/10 -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white drop-shadow-lg">Our Journey</h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="space-y-12">
              <div className="flex gap-6 animate-fade-in-up md:ml-0 ml-4 group transition-all duration-300 hover:translate-x-2 cursor-default">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-yellow-300 rounded-full flex items-center justify-center text-blue-900 font-bold shadow-md group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300 group-hover:scale-125">
                  1
                </div>
                <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border-2 border-yellow-400/40 flex-1 transition-all duration-300 hover:border-yellow-300 hover:bg-blue-700/60 hover:shadow-lg hover:shadow-yellow-400/20">
                  <h3 className="font-bold text-xl text-white mb-2">Founded with Vision</h3>
                  <p className="text-blue-100">Started with a clear mission to make solar energy accessible to every household and business.</p>
                </div>
              </div>
              
              <div className="flex gap-6 animate-fade-in-up animation-delay-200 md:ml-0 ml-4 group transition-all duration-300 hover:translate-x-2 cursor-default">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-yellow-300 rounded-full flex items-center justify-center text-blue-900 font-bold shadow-md group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300 group-hover:scale-125">
                  2
                </div>
                <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border-2 border-yellow-400/40 flex-1 transition-all duration-300 hover:border-yellow-300 hover:bg-blue-700/60 hover:shadow-lg hover:shadow-yellow-400/20">
                  <h3 className="font-bold text-xl text-white mb-2">Growing Strong</h3>
                  <p className="text-blue-100">Became the fastest growing solar company by consistently delivering quality and value.</p>
                </div>
              </div>

              <div className="flex gap-6 animate-fade-in-up animation-delay-400 md:ml-0 ml-4 group transition-all duration-300 hover:translate-x-2 cursor-default">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-yellow-300 rounded-full flex items-center justify-center text-blue-900 font-bold shadow-md group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300 group-hover:scale-125">
                  3
                </div>
                <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border-2 border-yellow-400/40 flex-1 transition-all duration-300 hover:border-yellow-300 hover:bg-blue-700/60 hover:shadow-lg hover:shadow-yellow-400/20">
                   <h3 className="font-bold text-xl text-white mb-2">Industry Recognition</h3>
                   <p className="text-blue-100">Achieved certifications and partnerships with leading global solar brands.</p>
                </div>
              </div>
              
              <div className="flex gap-6 animate-fade-in-up animation-delay-2000 md:ml-0 ml-4 group transition-all duration-300 hover:translate-x-2 cursor-default">
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-yellow-300 rounded-full flex items-center justify-center text-blue-900 font-bold shadow-md group-hover:shadow-lg group-hover:shadow-yellow-400/50 transition-all duration-300 group-hover:scale-125">
                  4
                </div>
                <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm border-2 border-yellow-400/40 flex-1 transition-all duration-300 hover:border-yellow-300 hover:bg-blue-700/60 hover:shadow-lg hover:shadow-yellow-400/20">
                   <h3 className="font-bold text-xl text-white mb-2">Continuing Innovation</h3>
                   <p className="text-blue-100">Constantly innovating to provide cutting-edge solar solutions for the future.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-tl from-blue-900 via-blue-800 to-blue-700 text-white py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-transparent to-yellow-400/15 -z-10"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -right-40 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold drop-shadow-lg">Free Solar Consultation</h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Get Your Free Solar Assessment at your home. Our expert consultants will help you understand your solar needs and potential savings.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-blue-900 font-bold rounded-lg hover:shadow-lg transition transform hover:-translate-y-1">
            Book Your Free Assessment
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-blue-900 to-blue-800 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/12 via-transparent to-orange-400/10 -z-10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-12 text-white drop-shadow-lg">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-blue-800/50 backdrop-blur-sm border-2 border-yellow-400/40 rounded-lg hover:border-yellow-400/60 transition animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                <button
                  onClick={() => toggleAnswer(index)}
                  className="w-full flex items-center justify-between p-6 hover:bg-blue-700/30 transition"
                >
                  <h3 className="text-lg font-semibold text-white text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-yellow-300 flex-shrink-0 ml-4 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 border-t border-yellow-400/20">
                    <p className="text-blue-100 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
