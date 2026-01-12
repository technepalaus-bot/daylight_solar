'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
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

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100">Get answers to common questions about solar energy</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
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

      {/* Additional Help */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Still have questions?</h2>
          <p className="text-xl mb-8">Our solar experts are ready to help. Contact us today for a free consultation.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition"
          >
            Get Free Consultation
          </a>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Trust Daylight Solar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Industry Leaders</h3>
              <p className="text-gray-600">The fastest growing solar company with proven expertise</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Expert Team</h3>
              <p className="text-gray-600">SAA accredited installers and designers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">5000+ Happy Customers</h3>
              <p className="text-gray-600">Trusted by thousands of Australian families</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Best Pricing</h3>
              <p className="text-gray-600">Affordable solutions with financing options</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
