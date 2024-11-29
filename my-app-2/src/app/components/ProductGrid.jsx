import Image from 'next/image';

const products = [
  { id: 1, name: "Product 1", price: "$20", image: "/collection.jpg" },
  { id: 2, name: "Product 2", price: "$30", image: "/collection.jpg" },
  { id: 3, name: "Product 3", price: "$40", image: "/collection.jpg" },
  { id: 4, name: "Product 4", price: "$50", image: "/collection.jpg" },
  { id: 5, name: "Product 5", price: "$60", image: "/collection.jpg" },
  { id: 6, name: "Product 6", price: "$70", image: "/collection.jpg" },
  { id: 7, name: "Product 7", price: "$80", image: "/collection.jpg" },
  { id: 8, name: "Product 8", price: "$90", image: "/collection.jpg" },
];

export default function ProductGrid() {
  return (
    <div>
      <section className="py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2">
          {products.map((product) => (
            <div key={product.id} className="border p-2 rounded-lg text-center"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255, 0, 0, 0.7), rgba(255, 165, 0, 0.7))',
            }}
       >
         <Image
           src={product.image} 
           alt={product.name} 
           width={160} 
           height={160} 
           className="mx-auto w-72 h-52 rounded-xl"
         />
         <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
         <p className="mt-2 text-gray-700">{product.price}</p>
       </div>
       
          ))}
        </div>
      </section>
      <section className="relative h-[500px] bg-black">
        <div className="grid grid-cols-2 h-full">
          <div
            className="bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/20895581/pexels-photo-20895581/free-photo-of-parque-joven-retrato-precioso.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          ></div>
          <div
            className="bg-cover bg-center "
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/19384237/pexels-photo-19384237/free-photo-of-moda-gente-mujer-arte.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}
          ></div>
        </div>

        {/* Overlay negro */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Contenido del Hero */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-4">
          <h1 className="text-4xl font-semibold text-red-700">
            ARE * BRAIN & BODY * MEND BALANCED
          </h1>
        </div>
      </section>
    </div>
  );
}
