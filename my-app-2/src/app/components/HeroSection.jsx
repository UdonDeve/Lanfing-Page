import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative flex justify-center items-center py-24 bg-white">  {/* Aumentamos py-12 a py-24 */}
  <div className="absolute inset-0 z-0">
    <Image
      src="https://images.pexels.com/photos/7233376/pexels-photo-7233376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Product Image"
      layout="fill"
      objectFit="cover"
    />
  </div>
  <div className="relative z-10 text-center max-w-2xl text-white px-4">
    <h1 className="text-4xl font-bold text-red-600 leading-tight">
      UNLOCK THE SECRET TO YOUR INNER BEAUTY AND ENERGY
    </h1>
    <p className="mt-4 text-lg text-black">
      Our summer vitamins not only support your physical health but also help maintain mental clarity and alertness.
    </p>
  </div>
</section>

  );
}
