import Image from 'next/image';

export default function SummerCollection() {
  return (
    <section className="bg-white">
      {/* Tarjetas de la colección */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Producto 1 */}
        <div className="border rounded-lg p-4 flex items-center space-x-4">
          <Image
            src="https://images.pexels.com/photos/29544077/pexels-photo-29544077/free-photo-of-elegante-frasco-de-perfume-sobre-fondo-minimalista.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product 1"
            className="w-24 h-24 object-cover"
            width={96}
            height={96}/>

          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-800">Perfect Condition Vita</h3>
            <p className="text-gray-500 mt-2">$42.00</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 flex items-center space-x-4">
          <Image
            src="https://images.pexels.com/photos/29544077/pexels-photo-29544077/free-photo-of-elegante-frasco-de-perfume-sobre-fondo-minimalista.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product 1"
            className="w-24 h-24 object-cover"
            width={96}
            height={96}/>
            
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-800">Perfect Condition Vita</h3>
            <p className="text-gray-500 mt-2">$42.00</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 flex items-center space-x-4">
          <Image
            src="https://images.pexels.com/photos/29544077/pexels-photo-29544077/free-photo-of-elegante-frasco-de-perfume-sobre-fondo-minimalista.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product 1"
            className="w-24 h-24 object-cover"
            width={96}
            height={96}/>
            
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-800">Perfect Condition Vita</h3>
            <p className="text-gray-500 mt-2">$42.00</p>
          </div>
        </div>
        <div className="border rounded-lg p-4 flex items-center space-x-4">
          <Image
            src="https://images.pexels.com/photos/29544077/pexels-photo-29544077/free-photo-of-elegante-frasco-de-perfume-sobre-fondo-minimalista.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product 1"
            className="w-24 h-24 object-cover"
            width={96}
            height={96}/>
            
          <div className="text-left">
            <h3 className="text-xl font-semibold text-gray-800">Perfect Condition Vita</h3>
            <p className="text-gray-500 mt-2">$42.00</p>
          </div>
        </div>

      </div>

      <div className="flex flex-col lg:flex-row bg-white my-10">
  {/* Imagen */}
  <div className="w-full lg:w-1/2">
    <Image
      src="https://images.pexels.com/photos/29508060/pexels-photo-29508060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Summer Collection"
      className="w-full h-auto object-cover rounded-2xl"
      width={1260}
      height={750}
    />
  </div>

  {/* Contenedor de texto */}
  <div className="container mx-auto text-center py-6 lg:py-0">
    <h2 className="text-4xl font-bold text-gray-900">
      New limited summer collection
    </h2>
    <p className="mt-4 text-lg text-gray-600">
      Don’t let fatigue or lack of energy hinder your summer adventures.
      Our vitamins are specifically designed to support your body during
      summer escapades. They contain natural ingredients that provide the
      optimal dose of vitamins and minerals.
    </p>
    <div className="mt-6 flex justify-center space-x-4">
      <button className="px-6 py-2 bg-gray-300 rounded-full text-gray-800 hover:bg-gray-400">
        Previous
      </button>
      <button className="px-6 py-2 bg-gray-300 rounded-full text-gray-800 hover:bg-gray-400">
        Next
      </button>
    </div>
  </div>
</div>

    </section>
  );
}
