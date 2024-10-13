
function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row bg-blue-50 p-16">
     
      <div className="w-full md:w-1/2 pr-0 md:pr-8">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="mb-4">
          Feel free to let us know how we can assist you and what you can expect from our responsive team. Looking forward to hearing from you!
        </p>
        <p className="mb-4">svatahbio@gmail.com</p>
        <p className="mb-8">9499515142</p>
        
        <form className="space-y-4">
          <div className="flex space-x-2">
            <div className="flex-1">
              <label className="block mb-1" htmlFor="first-name">First Name (required)</label>
              <input
                type="text"
                id="first-name"
                placeholder="First Name"
                className="w-full p-2 border border-black rounded-full bg-blue-50"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1" htmlFor="last-name">Last Name</label><br className='block md:hidden' />
              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                className="w-full p-2 border border-black rounded-full bg-blue-50"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">Email (required)</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 border border-black rounded-full bg-blue-50"
              required
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="message">Message (required)</label>
            <textarea
              id="message"
              placeholder="Message"
              className="w-full p-2 border border-black rounded-lg bg-blue-50"
              required
            />
          </div>
          <div className='flex justify-end items-center'>
          <button className="mt-4 bg-black text-white py-2 px-4 rounded">
            SEND
          </button>
          </div>
        </form>
      </div>
      <div className="w-full h-auto md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
        <img src="contact.png" alt="Contact Us" className="w-auto h-80" />
      </div>
    </div>
  );
}

export default ContactUs;
