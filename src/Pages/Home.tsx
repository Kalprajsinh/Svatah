import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Marquee from "../components/ui/marquee";
import { useGSAP } from "@gsap/react";
import TypingAnimation from "@/components/ui/typing-animation";
import ShinyButton from "@/components/ui/shiny-button";
import { FaArrowRight, FaArrowUpRightDots, FaFontAwesome } from "react-icons/fa6";
 
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];
 
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
 
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // dark styles
        "border-gray-50/[.1] bg-gray-900 hover:bg-gray-950",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-300">{body}</blockquote>
    </figure>
  );
};

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const text3Ref = useRef(null);
  const featuresRef = useRef(null);
  const div1ref = useRef(null);
  const div2ref = useRef(null);
  const div3ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ['#text1', '#text2'], 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.5,
      }
    )
  }, []);

  useEffect(() => {

    gsap.fromTo(
      text3Ref.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: text3Ref.current,
          start: 'top 100%', // When the top of the element hits 80% of the viewport height
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      [div1ref.current, div2ref.current, div3ref.current],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1, // Adjust duration for each element
        stagger: 0.7, // Stagger time in seconds
        scrollTrigger: {
          trigger: text3Ref.current,
          start: 'top 80%', // When the top of the element hits 80% of the viewport height
          toggleActions: 'play none none reverse',
        },
      }
    );
    

  if (featuresRef.current) {
    const sections = featuresRef.current.querySelectorAll('.feature-section');

    sections.forEach((section) => {
      const text = section.querySelector('.feature-text');

      // Text Animation
      gsap.fromTo(
        text,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }
}, []);
  

  return (
    <>
    <div className="w-full h-[320vh]">
      <video
        autoPlay
        muted
        loop
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/bg2.mp4" type="video/mp4" />
      </video>
<section className="w-full h-[320vh] relative overflow-hidden bg-black bg-opacity-70">
      <div className="relative z-10 flex flex-col items-center h-screen justify-center">
        <h1 id='text1' className="text-white text-center text-4xl md:text-6xl font-bold">
          Svatah Bioinnovations
        </h1>
        <h2 id='text2' className="text-white text-xl text-center font-medium mt-4">
          <TypingAnimation className="text-white text-xl md:text-2xl text-center font-medium mt-4"
           text = '“We are a dedicated team on a mission to revolutionize healthcare by providing affordable, accessible, and rapid point-of-care diagnostic solutions.”'
        />
        </h2>
        <ShinyButton className="mt-8 px-8 py-4 bg-gradient-to-tr from-gray-500 to-zinc-700 text-white text-xl rounded-full shadow-lg hover:bg-zinc-950 transition-all transform hover:scale-105"><p className="flex gap-2 justify-center items-center">CALL TO ACTION <FaArrowRight className="mt-0.5" /></p> </ShinyButton>;

      </div>

    

      <div className="w-full h-screen justify-center items-center relative mt-20 md:mt-0 md:-top-44">        
    <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-full h-full rounded-full bg-violet-600 blur-3xl bg-opacity-10"></div>
    </div>

    

    <section className="w-full h-full flex justify-center items-center relative">       
        <div className="flex flex-col items-center">         
            <h1 ref={text3Ref} id='text3' className="text-white text-center text-3xl font-bold mt-10">         
                Innovating the Future of Diagnostics for Better Patient Outcomes.         
            </h1> 
            <div className="h-20"></div>         
            <div className="grid grid-cols-1 md:grid-cols-3 m-5 gap-10">
            <div ref={div1ref} className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg w-full">         
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">           
                    Vertical Flow Immunoassay (VFI)         
                </h3>         
                <p className="text-gray-200">           
                    VFI technology offers cost-effective diagnostic solutions by utilizing           
                    inexpensive materials and streamlined manufacturing processes. Designed to be           
                    user-friendly, VFI tests require minimal training for healthcare professionals           
                    or even self-testing by patients at home, providing rapid results within minutes.         
                </p>       
            </div>  
            <div ref={div2ref} className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg w-full">         
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">           
                    Vertical Flow Immunoassay (VFI)         
                </h3>         
                <p className="text-gray-200">           
                    VFI technology offers cost-effective diagnostic solutions by utilizing           
                    inexpensive materials and streamlined manufacturing processes. Designed to be           
                    user-friendly, VFI tests require minimal training for healthcare professionals           
                    or even self-testing by patients at home, providing rapid results within minutes.         
                </p>       
            </div>  
            <div ref={div3ref} className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg w-full">         
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-4">           
                    Vertical Flow Immunoassay (VFI)         
                </h3>         
                <p className="text-gray-200">           
                    VFI technology offers cost-effective diagnostic solutions by utilizing           
                    inexpensive materials and streamlined manufacturing processes. Designed to be           
                    user-friendly, VFI tests require minimal training for healthcare professionals           
                    or even self-testing by patients at home, providing rapid results within minutes.         
                </p>       
            </div>  
            
            </div>
                 
        </div>     
    </section>  

    <section className="w-full py-20" ref={featuresRef}>
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
              Our Innovative Features
            </h2>
            <div className="relative">

              {/* Text Sections */}
              <div className="space-y-16">
                {/* Feature 1 */}
                <div className="feature-section flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 feature-text text-white text-center">
                    <h3 className="text-2xl font-semibold mb-4">Advanced Diagnostics</h3>
                    <p>
                      Our advanced diagnostic tools leverage the latest in biosensor technology to provide
                      accurate and rapid results, ensuring timely interventions and improved patient care.
                    </p>
                  </div>
                  <div className="md:w-1/2"></div> {/* Placeholder for alignment */}
                </div>

                {/* Feature 2 */}
                <div className="feature-section flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 feature-text text-white order-2 md:order-1 text-center">
                    <h3 className="text-2xl font-semibold mb-4">User-Friendly Interface</h3>
                    <p>
                      Our diagnostic devices come with intuitive interfaces, making them easy to use for
                      healthcare professionals and patients alike, regardless of technical expertise.
                    </p>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>

                {/* Feature 3 */}
                <div className="feature-section flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 feature-text text-white text-center">
                    <h3 className="text-2xl font-semibold mb-4">Scalable Solutions</h3>
                    <p>
                      Designed to be scalable, our solutions can adapt to varying healthcare settings,
                      ensuring that quality diagnostics are accessible in both urban and remote areas.
                    </p>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>

                {/* Add more feature sections as needed */}
              </div>
            </div>
          </div>
        </section>     
</div>

    
      <div className="flex h-[1200px] w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-900 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-900 to-transparent"></div> */}
    </div>

    
    </section>
    
    </div>
    
    </>
  );
}

export default Home;
