import React from 'react';

const AboutUs = () => {
  return (
    <div className="p-8 bg-yellow-50 min-h-screen">
      <h1 className="text-5xl font-extrabold text-yellow-900 mb-8 text-center">About EchoShelf</h1>
      
      <section className="mb-10">
        <p className="text-lg text-gray-800 leading-relaxed mb-6">
          Welcome to <strong>EchoShelf</strong>, your ultimate destination for sustainable and smart book sharing! Our platform unites book enthusiasts to buy, sell, donate, and exchange books effortlessly, fostering eco-friendly practices. By choosing EchoShelf, you contribute to a greener planet while enjoying a tailored book-sharing experience powered by advanced AI technology.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-yellow-900 mb-4">Our Mission</h2>
        <ul className="list-disc pl-8 text-lg text-gray-800 leading-relaxed">
          <li>Promote sustainability by reducing waste and encouraging the reuse of books.</li>
          <li>Provide an inclusive platform for seamless book sharing, accessible to everyone.</li>
          <li>Enhance user engagement through AI-powered personalized recommendations and tools.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-yellow-900 mb-4">Our Story</h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-4">
          EchoShelf began as a simple idea as a book lover who wanted to make a difference. Witnessing the environmental impact of discarded books and the challenges people face in accessing affordable reading materials, we set out to create a platform that bridges this gap. Today, EchoShelf is a thriving community where books find new homes, and readers connect with stories that inspire them.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-yellow-900 mb-4">Why Choose EchoShelf?</h2>
        <ul className="list-disc pl-8 text-lg text-gray-800 leading-relaxed">
          <li><strong>Eco-Friendly:</strong> By reusing books, you help save resources and reduce waste.</li>
          <li><strong>Community-Driven:</strong> Join a growing network of readers and book lovers.</li>
          <li><strong>Advanced Features:</strong> Enjoy AI-powered recommendations, smart search, and user-friendly interfaces.</li>
          <li><strong>Affordability:</strong> Access books at a fraction of their original cost or even for free.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-yellow-900 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Have questions, feedback, or need support? We'd love to hear from you! Reach out to us at:
        </p>
        <ul className="text-lg text-gray-800">
          <li><strong>Email:</strong> <a href="mailto:support@echoshelf.com" className="text-blue-600 hover:underline">support@echoshelf.com</a></li>
          <li><strong>Phone:</strong> +1 (555) 123-4567</li>
          <li><strong>Address:</strong> 123 Green Street, EcoCity, Planet Earth</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-yellow-900 mb-4">Follow Us</h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-4">
          Stay connected with us on social media to keep up with the latest updates and features:
        </p>
        <ul className="text-lg text-gray-800">
          <li><strong>Facebook:</strong> <a href="https://facebook.com/echoshelf" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">facebook.com/echoshelf</a></li>
          <li><strong>Twitter:</strong> <a href="https://twitter.com/echoshelf" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">twitter.com/echoshelf</a></li>
          <li><strong>Instagram:</strong> <a href="https://instagram.com/echoshelf" className="text-pink-500 hover:underline" target="_blank" rel="noreferrer">instagram.com/echoshelf</a></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-yellow-900 mb-4">Our Vision for the Future</h2>
        <p className="text-lg text-gray-800 leading-relaxed mb-4">
          At EchoShelf, we’re constantly evolving. Our future plans include integrating gamified rewards for active users, expanding our AI capabilities for smarter recommendations, and building a global community of book lovers dedicated to sustainability. Together, we can create a world where books are shared, cherished, and reused for generations to come.
        </p>
        <p className="text-lg text-gray-800 leading-relaxed">
          Additionally, we aim to partner with schools, libraries, and non-profits to ensure books reach underserved communities. By leveraging technology and collaboration, EchoShelf envisions a future where no book is wasted, and knowledge is accessible to all.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-yellow-900 text-white p-4 text-center">
        <p>© 2024 EchoShelf. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
