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
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Cards from "@/components/RenderCards";
import Config from "@/data/config";
import Portfolio from "@/components/Portfolio";
import Connect from '@/components/Connect';

const Home = () => {
  return (
    <div className={raleway.variable}>
      <NavbarComponent />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Portfolio/>
      <Connect/>
    </div>
  );
};

export default Home;
