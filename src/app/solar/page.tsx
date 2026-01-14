'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const SolarPanelRotating3D = dynamic(() => import('@/components/SolarPanelRotating3D'), { ssr: false });
const EnergyFlowAnimation = dynamic(() => import('@/components/EnergyFlowAnimation'), { ssr: false });

export default function Solar() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-32 px-4 mt-20">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 via-orange-400/10 to-yellow-500/20 -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">Solar Products & Solutions</h1>
              <p className="text-xl text-blue-100">Premium solar panels, batteries, and inverters</p>
            </div>
            <div className="flex justify-center">
              <SolarPanelRotating3D />
            </div>
          </div>
        </div>
      </section>

      {/* 3D Energy Flow Animation */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-800 to-blue-900 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-orange-400/10 -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 text-white drop-shadow-lg">How Solar Energy Works</h2>
          <p className="text-center text-blue-100 mb-12 text-lg">From sunlight to stored energy in your home</p>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <EnergyFlowAnimation />
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-900 to-blue-800 relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-orange-400/10 -z-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white drop-shadow-lg">Our Premium Product Range</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Comparing systems to find your perfect energy match
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '☀️',
                title: 'Solar Panels',
                desc: 'High-efficiency monocrystalline panels from leading global manufacturers with 25+ year warranty',
                gradient: 'from-yellow-400 to-orange-500'
              },
              {
                icon: '🔋',
                title: 'Battery Storage',
                desc: 'Advanced lithium-ion battery systems to store excess energy and provide backup power',
                gradient: 'from-green-400 to-emerald-500'
              },
              {
                icon: '⚙️',
                title: 'Inverters',
                desc: 'Smart inverters that convert DC power to AC with maximum efficiency and monitoring',
                gradient: 'from-blue-400 to-indigo-500'
              }
            ].map((product, i) => (
              <div key={i} className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up animation-delay-200">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center text-5xl text-white shadow-lg group-hover:scale-110 transition duration-300`}>
                  {product.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900 text-center">{product.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Panels Details */}
      <section className="py-24 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Solar Panels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative animate-fade-in-up">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 blur-2xl opacity-20 transform -rotate-6 rounded-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 h-80 flex items-center justify-center border border-gray-100">
                <span className="text-9xl filter drop-shadow-xl animate-float">☀️</span>
              </div>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">High-Efficiency Solar Panels</h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our solar panels are engineered to deliver maximum efficiency even in challenging Australian conditions. With an efficiency rating of 20%+, they convert more sunlight into electricity.
              </p>
              <ul className="space-y-4">
                {[
                  'High Efficiency (20%+ rating)',
                  '25 Year Product Warranty',
                  '25 Year Performance Warranty',
                  'Weather Resistant Design',
                  'Sustainable Manufacturing'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-gray-50">
                    <span className="text-green-500 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center font-bold text-xs">✓</div>
                    </span> 
                    {item}
                  </li>
                ))}
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
