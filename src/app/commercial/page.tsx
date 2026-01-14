'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const SolarPanelRotating3D = dynamic(() => import('@/components/SolarPanelRotating3D'), { ssr: false });

export default function Commercial() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-32 px-4 mt-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 via-orange-400/10 to-yellow-500/20 -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">Commercial Solar Solutions</h1>
              <p className="text-xl text-blue-100">Reduce operational costs and boost your bottom line</p>
            </div>
            <div className="flex justify-center">
              <SolarPanelRotating3D />
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-900 to-blue-800 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-orange-400/10 -z-10"></div>
         <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg animate-fade-in-up">Business Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '💼', title: 'Reduce Costs', desc: 'Cut operational expenses with free solar energy' },
              { icon: '📊', title: 'ROI Guaranteed', desc: 'Positive return on investment within 5-7 years' },
              { icon: '🏆', title: 'Competitive Edge', desc: 'Attract eco-conscious customers and investors' },
              { icon: '💰', title: 'Tax Benefits', desc: 'Access government incentives and tax credits' },
              { icon: '🌱', title: 'Sustainability', desc: 'Meet corporate environmental goals' },
              { icon: '⚡', title: 'Energy Security', desc: 'Protect against rising electricity rates' }
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-2xl border-2 border-yellow-400/40 bg-blue-800/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up animation-delay-${(i % 3) * 200 + 200}`}>
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-white">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Tailored Solutions for Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Small Businesses',
                desc: 'Perfect for retail stores, offices, and service businesses looking to reduce overhead costs.',
                systems: '5-15 kW',
                gradient: 'from-blue-400 to-indigo-500'
              },
              {
                title: 'Medium Enterprises',
                desc: 'Scalable solutions for manufacturing facilities, warehouses, and multi-unit properties.',
                systems: '15-50 kW',
                gradient: 'from-indigo-400 to-purple-500'
              },
              {
                title: 'Large Corporations',
                desc: 'Enterprise-level solar systems with battery storage and advanced monitoring.',
                systems: '50+ kW',
                gradient: 'from-purple-400 to-pink-500'
              }
            ].map((solution, i) => (
               <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-2xl transition hover:-translate-y-2 duration-300 animate-fade-in-up">
                <div className={`h-40 bg-gradient-to-r ${solution.gradient} flex items-center justify-center p-6 text-white text-center`}>
                    <div className="text-4xl font-black opacity-30">{solution.systems}</div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{solution.desc}</p>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-800 text-sm font-semibold">
                    Capacity: {solution.systems}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Daniel Michaels - Manufacturing',
                challenge: 'High operational costs were impacting profit margins',
                solution: 'Installed 50 kW commercial solar system',
                result: 'Reduced energy expenses by 60%, Completed over weekend with zero disruption'
              },
              {
                name: 'Business Owner - Retail Chain',
                challenge: 'Rising electricity bills affecting multiple locations',
                solution: 'Customized solar solutions for each store',
                result: 'Positive ROI achieved in 6 years, Enhanced brand image'
              }
            ].map((study, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-bold text-lg mb-3 text-gray-900">{study.name}</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Challenge:</span> {study.challenge}</p>
                  <p><span className="font-semibold">Solution:</span> {study.solution}</p>
                  <p><span className="font-semibold text-green-600">Result:</span> {study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Implementation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { num: '1', title: 'Energy Audit', desc: 'Comprehensive analysis of your energy consumption' },
              { num: '2', title: 'Design', desc: 'Custom solar system designed for maximum efficiency' },
              { num: '3', title: 'Installation', desc: 'Professional installation with minimal disruption' },
              { num: '4', title: 'Monitoring', desc: 'Real-time performance tracking and optimization' }
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
                <div className="text-4xl font-bold text-purple-500 mb-3">{step.num}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Transform Your Business with Solar</h2>
          <p className="text-lg mb-8 opacity-90">Start reducing operational costs and improving your bottom line today.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:shadow-lg transition">
            Schedule Business Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
