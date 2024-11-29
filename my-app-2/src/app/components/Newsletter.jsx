import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Newsletter() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold border border-black rounded-full inline-block px-4 py-2">
          Stay In The Know
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-10">
          <div className=''>
            <p>Acount</p>
            <p>Get in Touch</p>
            <p>Delivery & Returns</p>
            <p>Terms & Conditions</p>
          </div>
          
          <div className=''>
            <p>Account Policy</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>FAQS</p>
          </div>
          
          {/* Column 3 - Social Media Links */}
          <div className="space-y-4 justify-items-center">
            <div className="flex items-center space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                <FaFacebook />
              </a>
              <p>Facebook Policy</p>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600">
                <FaInstagram />
              </a>
              <p>Instagram</p>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
                <FaTwitter />
              </a>
              <p>Twitter</p>
            </div>
          </div>
          
          <div>
            <p>&copy; 2023 VITAPRO*</p>
            <p>Wellness Centers</p>
          </div>
        </div>

        <form className="mt-6 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-32 py-2 border rounded-l-md"
          />
          <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded-r-md">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
