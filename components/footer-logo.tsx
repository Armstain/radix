import Image from 'next/image';

export function FooterLogo() {
  return (
    <div className="relative w-24 h-24">
      <Image
        src="/radix_logo.png"
        alt="RADIX Logo"
        fill
        className="object-contain"
        sizes="96px"
      />

    </div>
  );
}
