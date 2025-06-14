'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CustomerStats = () => {
  const statsRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Animate the container
      gsap.from(statsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });

      // Animate the number with a counting effect
      const number = numberRef.current;
      const finalNumber = 10000;
      let currentNumber = 0;
      
      gsap.to({}, {
        duration: 2,
        ease: "power1.out",
        onUpdate: function() {
          currentNumber = Math.floor(this.progress() * finalNumber);
          if (number) {
            number.textContent = `${currentNumber.toLocaleString()}+`;
          }
        },
        scrollTrigger: {
          trigger: number,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-[#181818]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={statsRef}
          className="flex items-center justify-between"
        >
          <div className="text-left max-w-xl">
            <h2 className="text-2xl font-inter font-bold text-[#FFFFF0] mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-md font-inter font-light text-[#FFFFF0]/80 mb-4">
              Experience the luxury of fashion with thousands of satisfied customers worldwide. Our commitment to quality and style has made us a trusted destination for fashion enthusiasts.
            </p>
            <p className="text-sm font-inter font-light text-[#FFFFF0]/70">
              From casual elegance to sophisticated style, our customers trust us to deliver exceptional fashion experiences that exceed expectations.
            </p>
          </div>
          <div className="text-right ml-12">
            <span 
              ref={numberRef}
              className="text-9xl font-inter font-bold text-[#FFFFF0] block"
            >
              100,000
            </span>
            <p className="text-lg font-inter font-light text-[#FFFFF0]/80 mt-2">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStats; 