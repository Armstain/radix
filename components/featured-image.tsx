import Image from 'next/image';

export function FeaturedImage() {
  return (
    <Image
      className="featured-img"
      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&fit=crop"
      alt="Impress Newtex"
      width={800}
      height={600}
    />
  );
}
