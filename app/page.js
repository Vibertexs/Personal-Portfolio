'use client'

// app/page.js
import { Raleway } from '@next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const raleway = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-raleway',
});

import NavbarComponent from '@/components/NavbarComponent'; // Import the Navbar component

import Landing from "@/components/Landing";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Cards from "@/components/RenderCards";
import Config from "@/data/config";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <div className={raleway.variable}>
      <NavbarComponent />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Contact/>
    </div>
  );
};

export default Home;
