import { useEffect, useRef } from 'react';
import ShinyButton from '@/components/ui/shiny-button';
import {
  FaLightbulb,
  FaTools,
  FaClipboardCheck,
  FaIndustry,
  FaShieldAlt,
  FaCheckCircle,
  FaChalkboardTeacher,
} from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Services() {

  const sectionTitleRef = useRef<HTMLDivElement | null>(null);
  const serviceRefs =  useRef<(HTMLDivElement | null)[]>([]);
  const keyBenefitsRefs =  useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {

    gsap.fromTo(sectionTitleRef.current, 
      {
        opacity: 0,
        y: 50,
      },
      {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionTitleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });


    serviceRefs.current.forEach((card, index) => {
      const isLastCard = index === serviceRefs.current.length - 1;
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 50,
        },
        {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: isLastCard ? 0.2 : index * 0.2,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });


    gsap.fromTo("#certification",
      {
        opacity: 0,
        y: 50,
      },
      {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.2,
      scrollTrigger: {
        trigger: "#certification",
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.fromTo(keyBenefitsRefs.current, {
      opacity: 0,
      y: 50,
    },
    {
    opacity: 1,
    y: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: keyBenefitsRefs.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

  }, []);


  const addToServiceRefs = (el:any) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
    }
  };


  const addToKeyBenefitsRefs = (el:any) => {
    if (el && !keyBenefitsRefs.current.includes(el)) {
      keyBenefitsRefs.current.push(el);
    }
  };

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

         <section className="pt-12 py-8 text-white">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold mb-6"
          >
            Our Services
          </h2>
          <h1 ref={sectionTitleRef} className="text-xl font-bold mb-4">
            Your One-Stop Service for Affordable, Accessible, and Accurate
            Diagnostic Kit/Devices Development
          </h1>
        </div>
      </section>

       <section className="pb-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   <div
              ref={addToServiceRefs}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 transform translate-y-50"
            >
              <div className="flex justify-center items-center">
                <FaLightbulb className="text-blue-600 w-8 h-8 mb-4" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3 text-center">
                Strategic Consulting
              </h2>
              <p className="text-white mb-2">
                Strategic planning and roadmap development for diagnostic product
                development and commercialization.
              </p>
              <p className="text-white">
                Market analysis and opportunity assessment to identify target
                markets and key stakeholders.
              </p>
            </div>

                   <div
              ref={addToServiceRefs}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 transform translate-y-50"
            >
              <div className="flex justify-center items-center">
                <FaTools className="text-green-600 w-8 h-8 mb-4" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3 text-center">
                Technology Assessment
              </h2>
              <p className="text-white mb-2">
                Evaluation of VFI, LFIA, and electrochemical biosensor
                technologies to determine suitability for specific diagnostic
                applications.
              </p>
              <p className="text-white">
                Comparative analysis of alternative technologies to optimize
                performance and cost-effectiveness.
              </p>
            </div>

                   <div
              ref={addToServiceRefs}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 transform translate-y-50"
            >
              <div className="flex justify-center items-center">
                <FaClipboardCheck className="text-purple-600 w-8 h-8 mb-4" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3 text-center">
                Assay Development
              </h2>
              <p className="text-white mb-2">
                Custom assay design and optimization based on client
                specifications and target analytes.
              </p>
              <p className="text-white">
                Prototyping and validation of diagnostic assays to ensure
                sensitivity, specificity, and rapid detection.
              </p>
            </div>

                   <div
              ref={addToServiceRefs}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 transform translate-y-50"
            >
              <div className="flex justify-center items-center">
                <FaShieldAlt className="text-red-600 w-8 h-8 mb-4" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3 text-center">
                Regulatory Compliance
              </h2>
              <p className="text-white mb-2">
                Regulatory strategy development and guidance for navigating
                complex regulatory requirements across global markets.
              </p>
              <p className="text-white">
                Assistance with regulatory submissions, including preparation
                of documentation and interaction with regulatory authorities.
              </p>
            </div>

                   <div
              ref={addToServiceRefs}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 transform translate-y-50"
            >
              <div className="flex justify-center items-center">
                <FaIndustry className="text-yellow-600 w-8 h-8 mb-4" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3 text-center">
                Manufacturing Optimization
              </h2>
              <p className="text-white mb-2">
                Manufacturing process optimization to enhance efficiency,
                scalability, and cost-effectiveness.
              </p>
              <p className="text-white">
                Supplier evaluation and management to ensure quality and
                reliability of components and materials.
              </p>
            </div>

                   <div
              ref={addToServiceRefs}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 transform translate-y-50"
            >
              <div className="flex justify-center items-center">
                <FaCheckCircle className="text-teal-600 w-8 h-8 mb-4" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3 text-center">
                Quality Assurance and Control
              </h2>
              <p className="text-white mb-2">
                Implementation of quality management systems to meet regulatory
                standards and ensure product consistency.
              </p>
              <p className="text-white">
                Quality control testing and validation to verify assay performance
                and reliability.
              </p>
            </div>
          </div>
          <div
              ref={addToServiceRefs}
              className="mt-7 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0 transform translate-y-50"
            >
              <div className="flex justify-center items-center">
                <FaChalkboardTeacher className="text-indigo-600 w-8 h-8 mb-4" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-3 text-center">
                Training and Capacity Building
              </h2>
              <p className="text-white mb-2 text-center">
                Training programs for laboratory technicians, healthcare
                professionals, and end-users on assay operation and
                interpretation.
              </p>
              <p className="text-white text-center">
                Capacity building initiatives to enhance local capabilities for
                diagnostic testing and healthcare delivery.
              </p>
            </div>
        </div>
      </section>

      <section
        className="py-16 bg-black bg-opacity-50"
      >
        <div className="max-w-screen-xl mx-auto px-6">
         
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              CERTIFICATE COURSES & INTERNSHIP
            </h2>
            <p className="text-lg text-gray-300">
              We have certificate courses and internships available that focus on advanced research topics like
            </p>
          </div>

       
          <div id="certification" className="flex flex-col lg:flex-row gap-8">

            <div
            
              className="w-full lg:w-1/2 bg-white bg-opacity-15 p-6 rounded-lg"
            >
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li>Nanobiotechnology</li>
                <li>Advanced Molecular</li>
                <li>Biology Biotechnology Techniques</li>
                <li>Enzymatic Biosensors</li>
                <li>Immunosensors</li>
                <li>DNA-based Biosensors</li>
                <li>Microfluidics Microbiology Environmental</li>
                <li>Biomedical</li>
              </ul>
            </div>

            
            <div
            
              className="w-full lg:w-1/2 bg-white bg-opacity-15 p-6 rounded-lg flex flex-col space-y-6 justify-center"
            >
        
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2 text-center">
                  SHORT-TERM PROFESSIONAL COURSES
                </h3>
                <p className="text-gray-300 text-center">
                  International courses for the biosensors development program
                </p>
                  <p className='text-center text-white text-lg'>6 Months</p>
              </div>

          
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2 text-center">
                  SHORT-TERM INTERNSHIP
                </h3>
                <p className="text-gray-300 text-center">
                  <strong>15-20 Days</strong> - INTERNSHIP OR DISSERTATION PROGRAMS
                </p>
                <p className='text-center text-white text-lg'>3-4 Months</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 ">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
              ref={addToKeyBenefitsRefs}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center opacity-0 transform translate-y-50"
            >
              <div className="flex items-center justify-center">
                <FaCheckCircle className="text-blue-600 w-8 h-8 mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Affordability
              </h3>
              <p className="text-white">
                Our services are designed to optimize cost-effectiveness
                throughout the diagnostic product lifecycle, enabling
                affordable solutions for diverse markets.
              </p>
            </div>

              <div
              ref={addToKeyBenefitsRefs}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center opacity-0 transform translate-y-50"
            >
              <div className="flex items-center justify-center">
                <FaShieldAlt className="text-green-600 w-8 h-8 mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Accessibility
              </h3>
              <p className="text-white">
                By leveraging portable and user-friendly technologies, we
                facilitate decentralized testing and expand access to
                diagnostics in underserved regions.
              </p>
            </div>

              <div
              ref={addToKeyBenefitsRefs}
              className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center opacity-0 transform translate-y-50"
            >
              <div className="flex items-center justify-center">
                <FaLightbulb className="text-purple-600 w-8 h-8 mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Rapid Results
              </h3>
              <p className="text-white">
                Our expertise in rapid detection technologies ensures timely
                diagnosis and intervention, improving patient outcomes and
                public health outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <p className="text-lg text-white mb-8">
            With our contract and consulting services, centered around VFI,
            LFIA, and electrochemical biosensor technologies, we are committed
            to supporting clients in developing and commercializing affordable,
            accessible, and rapid diagnostic solutions. Partner with us to drive
            innovation and make a meaningful impact on healthcare delivery
            worldwide.
          </p>
          <a href="/Contact-Us">
            <ShinyButton
              className="mt-4 px-6 py-3 bg-gradient-to-tr from-gray-700 to-zinc-900 text-white text-xl rounded-full shadow-lg hover:bg-zinc-950 transition-all transform hover:scale-105"
            >
              <p className="text-base flex gap-2 justify-center items-center">
                Get in Touch
              </p>
            </ShinyButton>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Services;
