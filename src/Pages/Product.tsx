import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Product() {
  // Refs for animations
  const headerRef = useRef<HTMLDivElement | null>(null);
  const productRefs = useRef<(HTMLDivElement | null)[]>([]);

  gsap.registerPlugin(ScrollTrigger);

  // Function to add refs to productRefs array
  const addToProductRefs = (el:any) => {
    if (el && !productRefs.current.includes(el)) {
      productRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Animate Section Header
    gsap.fromTo(headerRef.current, {
      opacity: 0,
      y: 50,
    },
    {
    opacity: 1,
    y: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Animate Each Product List Item
    productRefs.current.forEach((item, index) => {
      gsap.fromTo(item, {
        opacity: 0,
        y: 50,
      },
      {
      opacity: 1,
      y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2, // Staggered delay for cascading effect
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);

  return (
    <div className="w-full bg-black bg-opacity-40 relative">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
  
      {/* Header Section */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold text-white mb-6"
          >
            Discover Our Innovative Products
          </h2>
          <p className="text-lg text-white leading-relaxed">
            Lateral Flow Immunoassay and Electrochemical Biosensor/Wearables technologies enable the development of diagnostic solutions that prioritize affordability, accessibility, and rapid results. These innovative approaches empower healthcare professionals to deliver timely interventions and improve patient outcomes, while addressing challenges of healthcare access and resource limitations globally.
          </p>
        </div>
      </section>
  
      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <ul className="space-y-6">
            
          <li ref={addToProductRefs} className="p-6 rounded-lg transition-shadow duration-300 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Vertical Flow Immunoassay (VFI)</h3>
            <p className="text-white mb-4">Basics and demos led by Dr. Amit Asthana. Includes certificate and kit for UG/PG/PhD, faculty, and industry professionals. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum blanditiis, tenetur laborum aspernatur et doloremque quis debitis quasi vero aperiam consectetur similique nisi a, corporis placeat, nesciunt voluptas beatae odit quod fugit. Asperiores quaerat veniam laudantium eius, fugiat voluptate.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-64 flex justify-center items-center mt-6 md:mt-0">
        <img src="solution1.png" alt="Vertical Flow Immunoassay" className="w-auto h-64 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
        </div>
      </li>


      <li ref={addToProductRefs} className="p-6 rounded-lg transition-shadow duration-300 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-64 flex justify-center items-center">
        <img src="solution2.png" alt="Vertical Flow Immunoassay" className="hidden md:block w-auto h-64 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0 mx-5">
          <div>
          <h3 className="text-2xl font-semibold text-white mb-2">Lateral Flow Immunoassay (LFI)</h3>
            <p className="text-white mb-4">Basics and demos led by Dr. Amit Asthana. Includes certificate and kit for UG/PG/PhD, faculty, and industry professionals. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum blanditiis, tenetur laborum aspernatur et doloremque quis debitis quasi vero aperiam consectetur similique nisi a, corporis placeat, nesciunt voluptas beatae odit quod fugit. Asperiores quaerat veniam laudantium eius, fugiat voluptate.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 justify-center items-center md:hidden block">
        <img src="solution2.png" alt="Vertical Flow Immunoassay" className="md:hidden block w-auto h-64 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
        </div>
      </li>

      <li ref={addToProductRefs} className="p-6 rounded-lg transition-shadow duration-300 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">Electro-chemical Biosensor Technology</h3>
            <p className="text-white mb-4">Basics and demos led by Dr. Amit Asthana. Includes certificate and kit for UG/PG/PhD, faculty, and industry professionals. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum blanditiis, tenetur laborum aspernatur et doloremque quis debitis quasi vero aperiam consectetur similique nisi a, corporis placeat, nesciunt voluptas beatae odit quod fugit. Asperiores quaerat veniam laudantium eius, fugiat voluptate.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 md:h-64 flex justify-center items-center mt-6 md:mt-0">
        <img src="solution3.jpg" alt="Vertical Flow Immunoassay" className="w-auto h-64 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
        </div>
      </li>

      <li ref={addToProductRefs} className="p-6 rounded-lg transition-shadow duration-300 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-1/2 md:h-64 flex justify-center items-center">
        <img src="solution1.png" alt="Vertical Flow Immunoassay" className="hidden md:block w-auto h-64 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0 mx-5">
          <div>
          <h3 className="text-2xl font-semibold text-white mb-2">Diagnostic Components</h3>
            <p className="text-white mb-4">Basics and demos led by Dr. Amit Asthana. Includes certificate and kit for UG/PG/PhD, faculty, and industry professionals. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem illum blanditiis, tenetur laborum aspernatur et doloremque quis debitis quasi vero aperiam consectetur similique nisi a, corporis placeat, nesciunt voluptas beatae odit quod fugit. Asperiores quaerat veniam laudantium eius, fugiat voluptate.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-1/2 justify-center items-center md:hidden block">
        <img src="solution1.png" alt="Vertical Flow Immunoassay" className="w-auto h-64 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300" />
        </div>
      </li>

          </ul>
        </div>
      </section>
    </div>
  );  
}

export default Product

