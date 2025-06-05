import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-01.png"
          alt="Hero Background"
          className="hidden h-full w-full object-cover md:block"
        />
        <img
          src="/hero-mobile.jpg"
          alt="Hero Background Mobile"
          className="block h-full w-full object-cover md:hidden"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Vicinity Image */}
      <div className="absolute left-[5%] top-[58%] -translate-y-1/2 hidden md:block">
        <Image
          src="/vicinity-01.png"
          alt="Vicinity"
          width={500}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Hero; 