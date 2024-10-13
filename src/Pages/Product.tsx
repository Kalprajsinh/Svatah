import React from 'react'

function Product() {
  return (
    <div className="w-full">
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
    {/* Main Heading Section */}
    <section className="py-12 bg-black bg-opacity-70">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Discover Our Innovative Products</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lateral Flow Immunoassay and Electrochemical Biosensor/Wearables technologies enable the development of diagnostic solutions that prioritize affordability, accessibility, and rapid results. These innovative approaches empower healthcare professionals to deliver timely interventions and improve patient outcomes, while addressing challenges of healthcare access and resource limitations globally.
        </p>
      </div>
    </section>

    {/* Product Grid Section */}
    <section className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Product Card */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="solution1.png" alt="Vertical Flow Immunoassay" className="w-full h-64 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Vertical Flow Immunoassay (VFI)</h3>
          <div className='flex justify-center items-center'>
          <a href="/Product">
          <button className="mt-4 px-6 py-3 bg-gray-800 text-white hover:bg-gray-950 rounded-full">
                For more info
          </button>
          </a>
          </div>
        </div>

        {/* Product Card */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="solution2.png" alt="Lateral Flow Immunoassay" className="w-full h-64 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Lateral Flow Immunoassay (LFI)</h3>
          <div className='flex justify-center items-center'>
          <a href="/Product">
          <button className="mt-4 px-6 py-3 bg-gray-800 text-white hover:bg-gray-950 rounded-full">
                For more info
          </button>
          </a>
          </div>
        </div>

        {/* Product Card */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="solution3.jpg" alt="Electro-chemical Biosensor Technology" className="w-full h-64 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Electro-chemical Biosensor Technology</h3>
          <div className='flex justify-center items-center'>
          <a href="/Product">
          <button className="mt-4 px-6 py-3 bg-gray-800 text-white hover:bg-gray-950 rounded-full">
                For more info
          </button>
          </a>
          </div>
        </div>

        {/* Product Card */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="solution1.png" alt="Diagnostic Components" className="w-full h-64 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Diagnostic Components</h3><br />
          <div className='flex justify-center items-center'>
          <a href="/Product">
          <button className="mt-4 px-6 py-3 bg-gray-800 text-white hover:bg-gray-950 rounded-full">
                For more info
          </button>
          </a>
          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default Product
