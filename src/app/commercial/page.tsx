'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const SolarPanelRotating3D = dynamic(() => import('@/components/SolarPanelRotating3D'), { ssr: false });

export default function Commercial() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h1 className="text-5xl font-bold mb-4">Commercial Solar Solutions</h1>
              <p className="text-xl text-blue-100">Reduce operational costs and boost your bottom line</p>
            </div>
            <div className="flex justify-center">
              <SolarPanelRotating3D />
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Business Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '💼', title: 'Reduce Costs', desc: 'Cut operational expenses with free solar energy' },
              { icon: '📊', title: 'ROI Guaranteed', desc: 'Positive return on investment within 5-7 years' },
              { icon: '🏆', title: 'Competitive Edge', desc: 'Attract eco-conscious customers and investors' },
              { icon: '💰', title: 'Tax Benefits', desc: 'Access government incentives and tax credits' },
              { icon: '🌱', title: 'Sustainability', desc: 'Meet corporate environmental goals' },
              { icon: '⚡', title: 'Energy Security', desc: 'Protect against rising electricity rates' }
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200 hover:shadow-lg transition">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Tailored Solutions for Your Business</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Small Businesses',
                desc: 'Perfect for retail stores, offices, and service businesses looking to reduce overhead costs.',
                systems: '5-15 kW'
              },
              {
                title: 'Medium Enterprises',
                desc: 'Scalable solutions for manufacturing facilities, warehouses, and multi-unit properties.',
                systems: '15-50 kW'
              },
              {
                title: 'Large Corporations',
                desc: 'Enterprise-level solar systems with battery storage and advanced monitoring.',
                systems: '50+ kW'
              }
            ].map((solution, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-32 bg-gradient-to-r from-purple-400 to-blue-500"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.desc}</p>
                  <p className="text-purple-600 font-semibold">{solution.systems}</p>
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
