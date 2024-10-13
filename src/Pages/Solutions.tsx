import React from 'react'

function Solutions() {
  return (
    <div className='w-full'>
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
    <div className='bg-black opacity-70'>
    <section className="">
        <div className="max-w-screen-xl mx-auto p-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Discover Your Solutions</h2>
          <div className='w-full mt-5'>
          <p className="text-lg text-gray-700 ">
      Combining Vertical Flow Immunoassay, Lateral Flow Immunoassay and Electrochemical Biosensor/Wearables technologies enables the development of diagnostic solutions that prioritize affordability, accessibility, and rapid results. These innovative approaches empower healthcare professionals to deliver timely interventions and improve patient outcomes, while also addressing the challenges of healthcare access and resource limitations in diverse settings worldwide.
      </p>
          </div>
          
        </div>
      </section>

      <section className="">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
  
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg w-full">
              <img src="solution1.png" className="w-auto h-80 mx-auto rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-semibold">Vertical Flow Immunoassay (VFI)</h3>
              <a href="/Solutions">
              <button className="mt-4 px-6 py-3 bg-gray-800 text-white hover:bg-gray-950 rounded-full">
                For more info
              </button>
              </a>
            </div>
    
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg w-full">
              <img src="solution2.png" className="w-auto h-80 mx-auto rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-semibold">Lateral Flow Immunoassay (LFI)</h3>
              <a href="/Solutions">
              <button className="mt-4 px-6 py-3 bg-gray-800 text-white hover:bg-gray-950 rounded-full">
                For more info
              </button>
              </a>
            </div>
    
            <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg w-full">
              <img src="solution3.jpg" className="w-auto h-80 mx-auto rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-semibold">Electro-chemical Biosensor Technology (EBT)</h3>
              <a href="/Solutions">
              <button className="mt-4 px-6 py-3 bg-gray-800 text-white hover:bg-gray-950 rounded-full">
                For more info
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

export default Solutions