import React from 'react';
import { FaCalendarAlt, FaVideo, FaCertificate } from 'react-icons/fa'; // Importing icons from react-icons
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Import from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

function Workshop() {

  return (
    <div>
      <section className="bg-sky-100 h-96">

              <Swiper
  modules={[Autoplay, Pagination]} // Add modules here
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 2700,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  className="w-full h-full"
>
  <SwiperSlide>
    <img src="https://via.placeholder.com/400x300" alt="Image 1" className="w-full h-full object-cover" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://via.placeholder.com/400x300" alt="Image 2" className="w-full h-full object-cover" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://via.placeholder.com/400x300" alt="Image 3" className="w-full h-full object-cover" />
  </SwiperSlide>
</Swiper>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="workshop1.jfif" alt="Interactive Presentations" className="w-full h-72 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Interactive Presentations</h3>
              <p className="text-gray-700">
                Engaging sessions that blend theoretical knowledge with practical insights, fostering a deeper understanding of diagnostic technologies.
              </p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="workshop2.jfif" alt="Hands-on Training" className="w-full h-72 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hands-on Training</h3>
              <p className="text-gray-700">
                Practical training sessions that allow participants to apply their knowledge using real-world diagnostic tools and technologies.
              </p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src="workshop3.png" alt="Networking Opportunities" className="w-full h-72 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Networking Opportunities</h3>
              <p className="text-gray-700">
                Connect with industry experts, researchers, and peers to build valuable relationships and explore collaborative opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className=" mt-5 p-6 bg-white">

    <div className="pl-9 flex items-center">
      <div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our flagship upcoming workshops are as follows:</h2>
      <br />
      <ul className="text-lg text-gray-700 leading-7 space-y-4">
          <li>
            <strong>1.</strong>Hands on training on rapid diagnostic test kit technology
          </li>
          <li>
            <strong>2.</strong>Hands on training on electrochemical biosensor technology
          </li>
          <li>
            <strong>3.</strong>Hands on training on rapid DNA diagnostics technology
          </li>
          <li>
            <strong>4.</strong>Hands on training on wearable biosensor technology
          </li>
        </ul>
      </div>
    </div>
  </div>

  <section className="bg-sky-100 py-12">
  <div className="max-w-screen-xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Events</h2>
    <ul className="space-y-6">
      
      <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div>
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-blue-600 w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">Oct 28-29, 2023</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Electrochemical Biosensor Workshop</h3>
            <p className="text-gray-700 mb-4">Basics and demos led by Dr. Amit Asthana. Includes certificate and kit for UG/PG/PhD, faculty, and industry professionals.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-64 flex justify-center items-center mt-6 md:mt-0">
          <video
            className="w-full h-full rounded-lg shadow-md"
            controls
            poster="workshop1.jfif"
          >
            <source src="Event1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </li>

      <li className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-64 flex justify-center items-center">
        <video
            className="w-full h-full rounded-lg shadow-md hidden md:block"
            controls
            poster="workshop3.png"
          >
            <source src="Event1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0 mx-5">
          <div>
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-blue-600 w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">Oct 7-8, 2023</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Rapid Diagnostic Test Workshop</h3>
            <p className="text-gray-700 mb-4">Hands-on LFA training with certificate and kit. Open to UG/PG/PhD, faculty, and industry professionals.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 justify-center items-center md:hidden block">
        <video
            className="w-full h-full rounded-lg shadow-md"
            controls
            poster="workshop3.png"
          >
            <source src="Event1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </li>

    </ul>
  </div>
</section>


      <section className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Workshop Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="flex flex-col items-center">
              <img src="workshop4.png" alt="Rapid Diagnostic Test Workshop" className="w-full h-80 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mt-4 text-center">Rapid Diagnostic Test Workshop</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <img src="workshop5.png" alt="Electrochemical Biosensor Workshop" className="w-full h-80 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mt-4 text-center">Electrochemical Biosensor Workshop</h3>
            </div>
          </div>
        </div>
      </section>

      <div className="h-20"></div>
    </div>
  );
}

export default Workshop;
