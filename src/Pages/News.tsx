function News() {
  return (
<>
    <section className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-lg text-gray-900 mb-6 text-center">Stay updated with Svatah Bioinnovation's latest breakthroughs and achievements. Our news section highlights our pioneering research, innovative projects, and milestones that are advancing biotechnology. Check back often to see how we're driving progress and shaping the future of science.  </h2>
<div className="h-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="flex flex-col items-center">
              <img src="news1.jpg" alt="Rapid Diagnostic Test Workshop" className="w-full h-80 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mt-4 text-center">Rapid DNA Diagnostic Technology</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="news2.jpg" alt="Electrochemical Biosensor Workshop" className="w-full h-80 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mt-4 text-center">WEARABLE BIOSENSO TECHNOLOGY</h3>
            </div>

            
            <div className="flex flex-col items-center">
              <img src="workshop5.png" alt="Electrochemical Biosensor Workshop" className="w-full h-80 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mt-4 text-center">Electrochemical Biosensor Workshop</h3>
            </div>

            <div className="flex flex-col items-center">
              <img src="workshop4.png" alt="Rapid Diagnostic Test Workshop" className="w-full h-80 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mt-4 text-center">Rapid Diagnostic Test Workshop</h3>
            </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default News