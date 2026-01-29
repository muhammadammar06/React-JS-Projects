import technology from "../assets/technology.jpg" 

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-[80vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Contact Us
          </h1>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-md font-semibold hover:bg-gray-600 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={technology}
            alt="Technology"
            className="rounded-lg shadow-lg object-cover w-full max-h-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
