import Link from 'next/link';

export default function FreeConsultant() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center py-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Free Solar Consultation
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Get a personalized solar assessment from our experts. No obligation, completely free.
          </p>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <form className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Phone Number</label>
              <input
                type="tel"
                placeholder="0712345678"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">Home Address</label>
              <input
                type="text"
                placeholder="Your address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Preferred Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Preferred Time</label>
                <input
                  type="time"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Schedule Free Consultation
            </button>

            <p className="text-sm text-gray-600 text-center">
              We'll contact you to confirm your appointment
            </p>
          </form>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What You'll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Site Assessment',
                desc: 'Expert evaluation of your roof and energy needs'
              },
              {
                title: 'Savings Estimate',
                desc: 'Personalized calculation of your potential savings'
              },
              {
                title: 'Zero Pressure',
                desc: 'No obligation - just helpful information'
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-4">{i + 1}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Have Questions?</h2>
          <div className="space-y-4">
            <p className="text-xl text-gray-600">
              <span className="font-semibold">Phone:</span> 0734226150
            </p>
            <p className="text-xl text-gray-600">
              <span className="font-semibold">Email:</span> hello@daylightsolar.com.au
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
