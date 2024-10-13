import React from 'react';
import { FaLightbulb, FaTools, FaClipboardCheck, FaIndustry, FaShieldAlt, FaCheckCircle, FaChalkboardTeacher } from 'react-icons/fa'; 

function Services() {
  const services = [
    {
      title: 'Strategic Consulting',
      description1: 'Strategic planning and roadmap development for diagnostic product development and commercialization.',
      description2: 'Market analysis and opportunity assessment to identify target markets and key stakeholders.',
      icon: <FaLightbulb className="text-blue-600 w-8 h-8 mb-4" />,
    },
    {
      title: 'Technology Assessment',
      description1: 'Evaluation of VFI, LFIA, and electrochemical biosensor technologies to determine suitability for specific diagnostic applications.',
      description2: 'Comparative analysis of alternative technologies to optimize performance and cost-effectiveness.',
      icon: <FaTools className="text-green-600 w-8 h-8 mb-4" />,
    },
    {
      title: 'Assay Development',
      description1: 'Custom assay design and optimization based on client specifications and target analytes.',
      description2: 'Prototyping and validation of diagnostic assays to ensure sensitivity, specificity, and rapid detection.',
      icon: <FaClipboardCheck className="text-purple-600 w-8 h-8 mb-4" />,
    },
    {
      title: 'Regulatory Compliance',
      description1: 'Regulatory strategy development and guidance for navigating complex regulatory requirements across global markets.',
      description2: 'Assistance with regulatory submissions, including preparation of documentation and interaction with regulatory authorities.',
      icon: <FaShieldAlt className="text-red-600 w-8 h-8 mb-4" />,
    },
    {
      title: 'Manufacturing Optimization',
      description1: 'Manufacturing process optimization to enhance efficiency, scalability, and cost-effectiveness.',
      description2: 'Supplier evaluation and management to ensure quality and reliability of components and materials.',
      icon: <FaIndustry className="text-yellow-600 w-8 h-8 mb-4" />,
    },
    {
      title: 'Quality Assurance and Control',
      description1: 'Implementation of quality management systems to meet regulatory standards and ensure product consistency.',
      description2: 'Quality control testing and validation to verify assay performance and reliability.',
      icon: <FaCheckCircle className="text-teal-600 w-8 h-8 mb-4" />,
    },
    {
      title: 'Training and Capacity Building',
      description1: 'Training programs for laboratory technicians, healthcare professionals, and end-users on assay operation and interpretation.',
      description2: 'Capacity building initiatives to enhance local capabilities for diagnostic testing and healthcare delivery.',
      icon: <FaChalkboardTeacher className="text-indigo-600 w-8 h-8 mb-4" />,
    },
  ];

  return (
    <>

      <section className="bg-white py-8">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Your One-Stop Service for Affordable, Accessible, and Accurate Diagnostic Kit/Devices Development
          </h1>
        </div>
      </section>

      <section className="bg-sky-50 py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Strategic Consulting</h2>
              <p className="text-gray-700 mb-2">
                Strategic planning and roadmap development for diagnostic product development and commercialization.
              </p>
              <p className="text-gray-700">
                Market analysis and opportunity assessment to identify target markets and key stakeholders.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Technology Assessment</h2>
              <p className="text-gray-700 mb-2">
                Evaluation of VFI, LFIA, and electrochemical biosensor technologies to determine suitability for specific diagnostic applications.
              </p>
              <p className="text-gray-700">
                Comparative analysis of alternative technologies to optimize performance and cost-effectiveness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Assay Development</h2>
              <p className="text-gray-700 mb-2">
                Custom assay design and optimization based on client specifications and target analytes.
              </p>
              <p className="text-gray-700">
                Prototyping and validation of diagnostic assays to ensure sensitivity, specificity, and rapid detection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Regulatory Compliance</h2>
              <p className="text-gray-700 mb-2">
                Regulatory strategy development and guidance for navigating complex regulatory requirements across global markets.
              </p>
              <p className="text-gray-700">
                Assistance with regulatory submissions, including preparation of documentation and interaction with regulatory authorities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Manufacturing Optimization</h2>
              <p className="text-gray-700 mb-2">
                Manufacturing process optimization to enhance efficiency, scalability, and cost-effectiveness.
              </p>
              <p className="text-gray-700">
                Supplier evaluation and management to ensure quality and reliability of components and materials.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Quality Assurance and Control</h2>
              <p className="text-gray-700 mb-2">
                Implementation of quality management systems to meet regulatory standards and ensure product consistency.
              </p>
              <p className="text-gray-700">
                Quality control testing and validation to verify assay performance and reliability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3 text-center">Training and Capacity Building</h2>
              <p className="text-gray-700 mb-2">
                Training programs for laboratory technicians, healthcare professionals, and end-users on assay operation and interpretation.
              </p>
              <p className="text-gray-700">
                Capacity building initiatives to enhance local capabilities for diagnostic testing and healthcare delivery.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                className="bg-sky-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center">
                <FaCheckCircle className="text-blue-600 w-8 h-8 mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Affordability
                </h3>
                <p className="text-gray-600">
                Our services are designed to optimize cost-effectiveness throughout the diagnostic product lifecycle, enabling affordable solutions for diverse markets.
                </p>
              </div>

              <div
                className="bg-sky-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center">
                <FaShieldAlt className="text-green-600 w-8 h-8 mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Accessibility
                </h3>
                <p className="text-gray-600">
                By leveraging portable and user-friendly technologies, we facilitate decentralized testing and expand access to diagnostics in underserved regions.
                </p>
              </div>

              <div
                className="bg-sky-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <div className="flex items-center justify-center">
                <FaLightbulb className="text-purple-600 w-8 h-8 mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Rapid Results
                </h3>
                <p className="text-gray-600">
                Our expertise in rapid detection technologies ensures timely diagnosis and intervention, improving patient outcomes and public health outcomes.
                </p>
              </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-50 to-sky-50 py-16">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <p className="text-lg text-gray-600 mb-8">
            With our contract and consulting services, centered around VFI, LFIA, and electrochemical biosensor technologies, we are committed to supporting clients in developing and commercializing affordable, accessible, and rapid diagnostic solutions. Partner with us to drive innovation and make a meaningful impact on healthcare delivery worldwide.
          </p>
          <a href="/Contact-Us">
          <button className="mt-4 px-6 py-3 bg-gray-800 text-white hover:bg-gray-950 rounded-full">
              Get in Touch
            </button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Services;
