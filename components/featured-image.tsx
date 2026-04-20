import Image from 'next/image';

export function FeaturedImage() {
  return (
    <Image
      className="featured-img"
      src="/assets/sonia_garments/9c20755a-dcff-4fa3-b66e-1cc6686a0ec1.jpg"
      alt="Impress Newtex"
      width={800}
      height={600}
    />
  );
}
