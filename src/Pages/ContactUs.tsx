import { FaEnvelope, FaUser, FaCommentDots } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

function ContactUs() {
  return (
    <div className="w-full bg-black bg-opacity-40 relative">
     
      {/* <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video> */}
      <div className="fixed top-0 left-0 w-full h-full object-cover -z-20 bg-gradient-to-br from-gray-800 to-sky-800">

</div>

    
      <div className="flex flex-col md:flex-row p-16 text-white relative z-10">

        <div className="w-full h-auto md:w-1/2 mt-8 md:mt-0 flex justify-start items-start">
          <div>
            <h1 className="text-4xl font-bold mb-4">Let's Get In Touch</h1>
            <p className="mb-4">
              Feel free to let us know how we can assist you and what you can
              expect from our responsive team. Looking forward to hearing from
              you!
            </p>
            <div className="flex items-center gap-2 mb-4">
              <FaEnvelope className="text-blue-300" />
              <p className="text-blue-300">svatahbio@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 mb-8">
              <FaPhone className="text-blue-300" />
              <p>+91-9499515142</p>
            </div>
          </div>
        </div>

      
        <div className="w-full md:w-1/2 pr-0 md:pr-8 mt-8 md:mt-0">
          <form className="pl-8 rounded-lg">
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="firstName">
                First Name *
              </label>
              <div className="flex items-center border bg-transparent w-full px-3 py-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  className="bg-transparent w-full focus:outline-none"
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="lastName">
                Last Name *
              </label>
              <div className="flex items-center border bg-transparent w-full px-3 py-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <FaUser className="text-gray-400 mr-2" />
                <input
                  className="bg-transparent w-full focus:outline-none"
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <div className="flex items-center border bg-transparent w-full px-3 py-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  className="bg-transparent w-full focus:outline-none"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <div className="flex items-start border bg-transparent w-full px-3 py-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <FaCommentDots className="text-gray-400 mr-2 mt-1" />
                <textarea
                  className="bg-transparent w-full focus:outline-none"
                  id="message"
                  rows={5}
                  placeholder="Write your message"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
