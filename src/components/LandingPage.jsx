import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Star, Cloud, Zap } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToLearnMore = () => {
    const learnMoreSection = document.getElementById('learn-more');
    learnMoreSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-vh-100 bg-gradient bg-primary position-relative overflow-hidden">
      {/* Animated background */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')`,
            opacity: 0.2,
            animation: 'move 20s linear infinite',
          }}
        ></div>
      </div>

      {/* Floating icons */}
      <FloatingIcon Icon={Star} className="text-warning position-absolute top-25 start-25" />
      <FloatingIcon Icon={Cloud} className="text-white position-absolute top-33 end-25" />
      <FloatingIcon Icon={Zap} className="text-warning position-absolute bottom-25 start-33" />

      {/* Header */}
      <header className="position-relative bg-white bg-opacity-10 backdrop-blur shadow">
        <div className="container px-4 py-4 d-flex justify-content-between align-items-center">
          <div className="fs-2 fw-bold text-white">Logo</div>

          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="d-md-none text-white bg-transparent border-0">
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <nav className="d-none d-md-flex align-items-center gap-3">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">Result</a>
            <a href="#" className="text-white">History</a>
            <a href="#" className="text-white">About</a>
            <button className="btn btn-primary">Sign Up</button>
            <button className="btn btn-outline-light">Login</button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="d-md-none bg-white bg-opacity-10 backdrop-blur py-4">
            <div className="container d-flex flex-column gap-3">
              <a href="#" className="text-white">Home</a>
              <a href="#" className="text-white">Result</a>
              <a href="#" className="text-white">History</a>
              <a href="#" className="text-white">About</a>
              <button className="btn btn-primary">Sign Up</button>
              <button className="btn btn-outline-light">Login</button>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="container px-4 py-5 text-center">
        <h1 className="display-4 fw-bold mb-4 text-white">Welcome to Our Amazing Platform</h1>
        <p className="fs-5 text-white mb-5 mx-auto" style={{ maxWidth: '700px' }}>
          Discover a world of possibilities with our innovative solution. We're here to help you achieve your goals and transform your ideas into reality.
        </p>
        <div className="d-inline-flex gap-3">
          <button className="btn btn-primary d-flex align-items-center">
            Get Started <ArrowRight className="ms-2" />
          </button>
          <button onClick={scrollToLearnMore} className="btn btn-outline-light">
            Learn More
          </button>
        </div>
      </main>

      {/* Learn More Section */}
      <section id="learn-more" className="py-5 bg-white bg-opacity-10 backdrop-blur">
        <div className="container">
          <h2 className="text-white text-center mb-4">Learn More About Us</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-3 backdrop-blur">
                <h3 className="fs-5 text-white mb-3">Our Mission</h3>
                <p className="text-white">
                  We strive to provide innovative solutions that empower individuals and businesses to reach their full potential. Our platform is designed to simplify complex processes and deliver exceptional results.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-3 backdrop-blur">
                <h3 className="fs-5 text-white mb-3">Why Choose Us</h3>
                <ul className="text-white list-unstyled">
                  <li>Cutting-edge technology</li>
                  <li>User-friendly interface</li>
                  <li>Exceptional customer support</li>
                  <li>Continuous innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FloatingIcon = ({ Icon, className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const animateFloat = () => {
      const newX = Math.sin(Date.now() / 1000) * 10;
      const newY = Math.cos(Date.now() / 1500) * 10;
      setPosition({ x: newX, y: newY });
      requestAnimationFrame(animateFloat);
    };

    const animationId = requestAnimationFrame(animateFloat);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div
      className={`position-absolute ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 1s ease-in-out',
      }}
    >
      <Icon size={24} />
    </div>
  );
};

export default LandingPage;
