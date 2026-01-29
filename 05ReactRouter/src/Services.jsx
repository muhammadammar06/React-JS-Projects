const Services = () => {
  return (
    <div className="bg-gray-50 min-h-[80vh]">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
          At MA Solutions, we offer a range of services to help your business
          grow and succeed in the digital world. We focus on quality, creativity,
          and efficiency.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-center">Web Development</h3>
          <p className="text-gray-600 text-center">
            Custom websites built for speed, performance, and responsive design.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-center">UI/UX Design</h3>
          <p className="text-gray-600 text-center">
            User-friendly and visually appealing designs for web and mobile applications.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-center">SEO Optimization</h3>
          <p className="text-gray-600 text-center">
            Improve your website’s visibility and rank higher in search engines.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-center">Mobile App Development</h3>
          <p className="text-gray-600 text-center">
            Build robust mobile applications for iOS and Android platforms.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-center">Digital Consulting</h3>
          <p className="text-gray-600 text-center">
            Expert advice and strategies to grow your online presence and business.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-center">Digital Consulting</h3>
          <p className="text-gray-600 text-center">
            Expert advice and strategies to grow your online presence and business.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
