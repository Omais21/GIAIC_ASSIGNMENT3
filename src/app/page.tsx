import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
Hello! I'm Omais, a passionate and driven learner focused on the latest advancements in technology. I'm currently pursuing web and app development through the Saylani Mass IT Training Program, where I'm honing my skills in building dynamic, user-friendly applications. Alongside this, I'm diving into the world of artificial intelligence with a specialization in Generative Cloud AI Engineering through GIAIC. This dual focus on development and AI enables me to combine technical skills with innovative AI solutions, preparing me to create impactful and future-ready applications.
           </p>
        </section>
        <section id="portfolio" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">My Portfolio</h2>
          <p className="text-lg text-gray-700">Check out some of my latest work.</p>
          <ul className="list-disc ml-6">
            <li><a href="https://github.com/Omais21/Facebook-Content-page" target="_blank" rel="noopener noreferrer">Assignment</a></li>
            <li><a href="https://github.com/Omais21/Github_Profiles" target="_blank" rel="noopener noreferrer">Assignment</a></li>
            <li><a href="https://github.com/Omais21/Grade-Generating-System" target="_blank" rel="noopener noreferrer">Assignment</a></li>
            <li><a href="https://github.com/Omais21/Stop-Watch" target="_blank" rel="noopener noreferrer">Assignment</a></li>
            <li><a href="https://github.com/Omais21/Table-App-With-JS" target="_blank" rel="noopener noreferrer">Assignment</a></li>
            <li><a href="https://github.com/Omais21/First-Website-With-Firebase" target="_blank" rel="noopener noreferrer">Assignment</a></li>
            <li><a href="https://github.com/Omais21/Matrix-Cal" target="_blank" rel="noopener noreferrer">Assignment</a></li>
            <li><a href="https://github.com/Omais21/GIAIC-ASSIGNMENT2" target="_blank" rel="noopener noreferrer">Assignment</a></li>
          </ul>            

        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
