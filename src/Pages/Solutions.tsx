import ShinyButton from '@/components/ui/shiny-button'

function Solutions() {
  return (
    <div className="w-full bg-black bg-opacity-40 relative">
     
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <section className="">
        <div className="max-w-screen-xl mx-auto py-20">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">Discover Your Solutions</h2>
          <div className='w-full mt-5'>
          <p className="text-lg text-gray-300 p-5 text-center">
      Combining Vertical Flow Immunoassay, Lateral Flow Immunoassay and Electrochemical Biosensor/Wearables technologies enables the development of diagnostic solutions that prioritize affordability, accessibility, and rapid results. These innovative approaches empower healthcare professionals to deliver timely interventions and improve outcomes, while addressing the challenges of healthcare access and resource limitations in diverse settings worldwide.
      </p>
          </div>
          
        </div>
      </section>

      <section className="pb-5">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
  
            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg w-full">
              <img src="solution1.png" className="opacity-90 w-auto h-80 mx-auto rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-white">Vertical Flow Immunoassay (VFI)</h3>
              <br />
              <a href="/Solutions">
              <ShinyButton className="mt-4 px-6 py-3 bg-gradient-to-tr from-gray-700 to-zinc-900 text-white text-xl rounded-full shadow-lg hover:bg-zinc-950 transition-all transform hover:scale-105"><p className="text-base flex gap-2 justify-center items-center">For more info </p> </ShinyButton>;
              
              </a>
            </div>
    
            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg w-full">
              <img src="solution2.png" className="opacity-90 w-auto h-80 mx-auto rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-white">Lateral Flow Immunoassay (LFI)</h3>
              <br />
              <a href="/Solutions">
              <ShinyButton className="mt-4 px-6 py-3 bg-gradient-to-tr from-gray-700 to-zinc-900 text-white text-xl rounded-full shadow-lg hover:bg-zinc-950 transition-all transform hover:scale-105"><p className="text-base flex gap-2 justify-center items-center">For more info </p> </ShinyButton>;
              
              </a>
            </div>
    
            <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg w-full">
              <img src="solution3.jpg" className="opacity-90 w-auto h-80 mx-auto rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-white">Electro-chemical Biosensor Technology (EBT)</h3>
              <a href="/Solutions">
              <ShinyButton className="mt-4 px-6 py-3 bg-gradient-to-tr from-gray-700 to-zinc-900 text-white text-xl rounded-full shadow-lg hover:bg-zinc-950 transition-all transform hover:scale-105"><p className="text-base flex gap-2 justify-center items-center">For more info </p> </ShinyButton>;
              
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions