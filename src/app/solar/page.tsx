'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const SolarPanelRotating3D = dynamic(() => import('@/components/SolarPanelRotating3D'), { ssr: false });
const EnergyFlowAnimation = dynamic(() => import('@/components/EnergyFlowAnimation'), { ssr: false });

export default function Solar() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-cyan-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h1 className="text-5xl font-bold mb-4">Solar Products & Solutions</h1>
              <p className="text-xl text-blue-100">Premium solar panels, batteries, and inverters</p>
            </div>
            <div className="flex justify-center">
              <SolarPanelRotating3D />
            </div>
          </div>
        </div>
      </section>

      {/* 3D Energy Flow Animation */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">How Solar Energy Works</h2>
          <p className="text-center text-gray-300 mb-12 text-lg">From sunlight to stored energy in your home</p>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <EnergyFlowAnimation />
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Our Premium Product Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '☀️',
                title: 'Solar Panels',
                desc: 'High-efficiency monocrystalline panels from leading global manufacturers with 25+ year warranty'
              },
              {
                icon: '🔋',
                title: 'Battery Storage',
                desc: 'Advanced lithium-ion battery systems to store excess energy and provide backup power'
              },
              {
                icon: '⚙️',
                title: 'Inverters',
                desc: 'Smart inverters that convert DC power to AC with maximum efficiency and monitoring'
              }
            ].map((product, i) => (
              <div key={i} className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-lg border border-cyan-200 hover:shadow-lg transition text-center">
                <div className="text-6xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{product.title}</h3>
                <p className="text-gray-600">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Panels Details */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Solar Panels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg h-64 flex items-center justify-center mb-6">
                <span className="text-7xl">☀️</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">High-Efficiency Solar Panels</h3>
              <p className="text-gray-600 mb-4">
                Our solar panels are engineered to deliver maximum efficiency even in challenging Australian conditions. With an efficiency rating of 20%+, they convert more sunlight into electricity.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> High Efficiency (20%+ rating)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 25 Year Product Warranty
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 25 Year Performance Warranty
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Weather Resistant Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Sustainable Manufacturing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Battery Storage */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Solar Battery Storage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Store Your Solar Energy</h3>
              <p className="text-gray-600 mb-4">
                Maximize your energy independence with our advanced battery storage solutions. Store excess solar energy during the day and use it during peak hours or when the sun isn't shining.
              </p>
              <h4 className="font-bold text-lg mb-3 text-gray-900">Key Benefits:</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 24/7 Energy Availability
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Backup Power During Outages
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Maximize Bill Savings
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Complete Energy Independence
                </li>
              </ul>
            </div>
            <div>
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg h-64 flex items-center justify-center">
                <span className="text-7xl">🔋</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inverters */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Smart Inverters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg h-64 flex items-center justify-center mb-6">
                <span className="text-7xl">⚙️</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Advanced Inverter Technology</h3>
              <p className="text-gray-600 mb-4">
                Our smart inverters convert DC power from your solar panels into AC power for your home or business with maximum efficiency. Built-in monitoring and control features give you complete visibility.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 97%+ Efficiency
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Real-Time Monitoring App
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Remote Software Updates
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Grid-Compatible Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> 10 Year Warranty
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">System Configurations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Solar Only',
                price: 'Starting from $8,000',
                features: ['Panels & Inverter', 'Day-time energy generation', 'Perfect for day use homes', 'Lower investment cost']
              },
              {
                title: 'Solar + Battery',
                price: 'Starting from $15,000',
                features: ['Panels, Inverter & Battery', '24/7 Energy availability', '100% bill reduction possible', 'Complete independence', 'Most popular choice']
              },
              {
                title: 'Hybrid System',
                price: 'Custom pricing',
                features: ['Advanced configuration', 'Grid-connected with backup', 'Scalable storage', 'Future-proof design']
              }
            ].map((config, i) => (
              <div key={i} className={`p-6 rounded-lg border-2 transition hover:shadow-lg ${i === 1 ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-yellow-50' : 'border-gray-200 bg-white'}`}>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{config.title}</h3>
                <p className="text-lg text-orange-500 font-bold mb-4">{config.price}</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {config.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Choose Your Perfect Solar Solution</h2>
          <p className="text-lg mb-8 opacity-90">Get expert guidance on the best products and configuration for your needs.</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-cyan-600 font-bold rounded-lg hover:shadow-lg transition">
            Get Free Product Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
