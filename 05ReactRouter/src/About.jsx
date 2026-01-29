const About = () => {
  return (
    <div className="bg-gray-50 min-h-[80vh]">
      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">About MA Solutions</h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl">
          At MA Solutions, we transform ideas into stunning web and mobile experiences.
          Our mission is to help individuals and businesses build projects that
          are beautiful, fast, and user-friendly.
        </p>
      </section>

      {/* Features / Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-center">Web Development</h3>
          <p className="text-gray-600 text-center">
            We build responsive and high-performing websites tailored to your business needs.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-center">Mobile Apps</h3>
          <p className="text-gray-600 text-center">
            Our team designs and develops mobile applications for iOS and Android platforms.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-center">Creative Solutions</h3>
          <p className="text-gray-600 text-center">
            From UI/UX design to digital strategy, we provide creative solutions to grow your brand.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
