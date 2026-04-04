import Image from 'next/image';

export function FooterLogo() {
  return (
    <div className="relative w-10 h-10">
      <Image 
        src="/radix_logo.png" 
        alt="RADIX Logo" 
        fill 
        className="object-contain" 
        sizes="40px"
      />

    </div>
  );
}
