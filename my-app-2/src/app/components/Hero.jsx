import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative h-[500px] bg-black">
      <div className="grid grid-cols-2 h-full">
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3762768/pexels-photo-3762768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3762768/pexels-photo-3762768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-white z-20">
        <p className='text-3xl text-red-600'>VITAPRO *</p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 px-4">
        <h1 className="text-4xl font-bold">
          Your Unique Complex of Natural Components
        </h1>
        <p className="mt-4 text-lg">
          Discover the best products for your beauty and energy.
        </p>
        {/* Redes Sociales */}
        <div className="mt-6 flex space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-pink-500 text-white rounded-md flex items-center justify-center hover:bg-pink-600"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center justify-center hover:bg-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-400 text-white rounded-md flex items-center justify-center hover:bg-blue-500"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}
