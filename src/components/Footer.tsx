function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 px-6 w-full">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
 
    <div>
      <h2 className="text-xl font-bold mb-4">Location</h2>
      <p className="text-sm">
        SVATAH BIOINNOVATIONS
        <br />
        Atal Incubation Center, GTU,
        <br />
        Nr. Campus of Vishwakarma Eng. College,
        <br />
        Sabarmati Koba Highway,
        <br />
        Ahmedabad Gujarat 382424
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold mb-4">Hours</h2>
      <p className="text-sm">
        Monday – Friday
        <br />
        10am – 6pm
      </p>
    </div>

    <div>
      <h2 className="text-xl font-bold mb-4">Follow</h2>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
        Instagram
      </a>
    </div>
  </div>
  <div className="mt-6 text-center flex justify-center items-center gap-4">
  Supported by
  <div className='flex justify-center items-center font-bold'>
  Institute for the <br />Global Entrepreneur
    <img src="IGE-logo.png" className='w-auto h-20' alt="" />
  </div>
  </div>
</footer>
  )
}

export default Footer