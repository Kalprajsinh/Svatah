import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "../components/ui/marquee";
import { cn } from "@/lib/utils";

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

function AboutUs() {
  const storyRef = useRef<HTMLDivElement | null>(null);
  const teamSectionRef = useRef<HTMLDivElement | null>(null);
  const valuesRef = useRef<HTMLDivElement | null>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const text2Refs = useRef<(HTMLDivElement | null)[]>([]);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const teamSectionElement = teamSectionRef.current;
    if (teamSectionElement) {
    gsap.fromTo(
      teamSectionElement.querySelectorAll(".team-member"),
      { opacity: 0, x:-100,y:100 },
      {
        opacity: 1,
        x: 0,
        y:0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: teamSectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }
    gsap.fromTo(
      textRefs.current,
      {
        opacity: 0,
        x:-100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
        stagger: 0.3,
      }
    );
    text2Refs.current.forEach((text) => {
      if (text) {
        gsap.fromTo(
          text,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 2,
            stagger: 0.3,
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

   
    gsap.fromTo(
      valuesRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

   
    gsap.fromTo(
      featureRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: featureRefs.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="w-full bg-black bg-opacity-40 relative">
     
      <div className="fixed top-0 left-0 w-full h-full object-cover -z-20 bg-gradient-to-br from-gray-800 to-sky-800">

      </div>

      <section
        ref={storyRef}
        className="w-full pt-20 md:py-20 py-0 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center"
      >
        
        <div className="md:w-1/2 text-white pl-0 md:pl-12">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p ref={el => textRefs.current[0] = el} className="text-lg mb-4 text-gray-300">
            Our journey began with a simple, yet profound dream shared by every human being: the dream of accessible and equitable healthcare. We started as a small initiative that has blossomed into a global movement, touching countless lives across the world.
          </p>
          <p ref={el => textRefs.current[1] = el} className="text-lg text-gray-300">
            Driven by a relentless pursuit of innovation, our team has continually pushed the boundaries of what is possible in point-of-care diagnostics. From developing cutting-edge technologies to creating affordable diagnostic tools, our efforts have been fueled by a commitment to making healthcare accessible to everyone, everywhere.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center md:mb-0 mt-5 md:mt-0">
          <img
            src="/Aboutus1.png"
            alt="Our Story"
            className="rounded-lg w-full h-auto max-w-md object-cover"
          />
        </div>
      </section>

      <section
        className="w-full md:py-20 py-0 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center"
      >
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/Aboutus2.png"
            alt="Our Story"
            className="rounded-lg w-full h-auto max-w-md object-cover hidden md:block"
          />
        </div>
        <div className="md:w-1/2 text-white pl-0 md:pl-12">
          <h2 className="text-4xl font-bold mb-6">Our Mission: Creating affordable diagnostic tools</h2>
          <p ref={el => text2Refs.current[0] = el} className="text-lg mb-4 text-gray-300">
            Our journey began with a simple, yet profound dream shared by every human being: the dream of accessible and equitable healthcare. We started as a small initiative that has blossomed into a global movement, touching countless lives across the world.
          </p>
          <p ref={el => text2Refs.current[1] = el} className="text-lg text-gray-300">
            Driven by a relentless pursuit of innovation, our team has continually pushed the boundaries of what is possible in point-of-care diagnostics. From developing cutting-edge technologies to creating affordable diagnostic tools, our efforts have been fueled by a commitment to making healthcare accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      <section
        ref={teamSectionRef}
        className="bg-gray-90 0 w-full py-6 md:py-20 px-6 md:px-12 lg:px-24"
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="team-member bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            {/* <img
              src="/team-member1.jpg"
              
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            /> */}
            <h3 className="text-xl font-semibold text-white"></h3>
            <p className="text-gray-400"></p>
          </div>

          <div className="team-member bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            {/* <img
              src="/team-member2.jpg"
              
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            /> */}
            <div className="h-32"></div>
            <h3 className="text-xl font-semibold text-white"></h3>
            <p className="text-gray-400"></p>
          </div>
  
          <div className="team-member bg-gray-700 p-6 rounded-lg shadow-lg text-center">
            {/* <img
              src="/team-member3.jpg"
              
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            /> */}
            <h3 className="text-xl font-semibold text-white"></h3>
            <p className="text-gray-400"></p>
          </div>
        </div>
      </section>

      <section
        ref={valuesRef}
        className="w-full md:py-20 py-0 px-6 md:px-12 lg:px-24 flex justify-center items-center"
      >
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold text-white mb-8">Our Values</h2>
          <ul className="space-y-6">
            <li className="text-lg text-gray-300">
              <strong>Innovation:</strong> We innovate continuously to provide cost-effective and rapid point-of-care solutions.
            </li>
            <li className="text-lg text-gray-300">
              <strong>Reach:</strong> We aim to expand our reach to the most vulnerable and hard-to-reach populations.
            </li>
            <li className="text-lg text-gray-300">
              <strong>Partnership:</strong> We foster partnerships and create ecosystems that enhance our ability to respond swiftly and effectively to emerging health threats.
            </li>
          </ul>
        </div>
      </section>

      

      <section
        className="bg-gray-90 0 w-full py-20"
      >
        <h2 className="text-4xl font-bold text-white mb-12 text-center">What Our Customers Say</h2>
        <p className="text-xl font-bold text-gray-300 mb-12 text-center">See how Svatah customers are use product and getting incredible results.</p>
        <div className="flex w-full flex-col items-center justify-center overflow-hidden">
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
  );
}

export default AboutUs;