import React, { useState } from 'react';
import VideoCoverflow from './components/VideoCoverflow';

function ResultsSection() {
  return (
    <section id="results" className="bg-black text-white section-pad border-t border-zinc-900">
      <div className="container">
        
        {/* Header Layout */}
        <div className="text-center mb-16">
          <h2 className="section-title text-white mb-4">Results<br/><span className="text-gold">Speak</span></h2>
        </div>

        {/* Video Showcase Slider */}
        <div className="mb-8">
          <VideoCoverflow />
        </div>

      </div>
    </section>
  );
}


export default function App() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <>
      
      {/* 1. Sticky Navigation Bar */}
      <nav className="navbar">
        <a href="#" className="nav-logo">
          The Detail <span>Lab</span>
        </a>
        <div className="nav-links">
          <a href="#services" className="hide-mobile">Services</a>
          <a href="#results" className="hide-mobile">Results</a>
          <a href="#why-us" className="hide-mobile">Why Us</a>
          <a href="#reviews" className="hide-mobile">Reviews</a>
          <a href="#contact" className="hide-mobile">Contact</a>
          <a href="tel:+919998100878" className="btn" style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>
            Call Now
          </a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header className="hero">
        <div className="container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '3rem', flexWrap: 'wrap', padding: '2rem 5%' }}>
          <div style={{ flex: '1 1 600px', minWidth: '300px' }}>
            <div className="gold-rule"></div>
            <h1>Premium Car<br/>&amp; Bike Care.</h1>
            <p style={{ maxWidth: '600px' }}>
              Experience unparalleled auto detailing, washing, and coating services in Ahmedabad. 
              We restore, protect, and perfect your vehicle inside and out.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
               <a href="https://wa.me/917665456952" target="_blank" rel="noopener noreferrer" className="btn">Get a Quote</a>
               <a href="#services" className="btn btn-outline" style={{ border: '2px solid rgba(255,255,255,0.2)', color: '#fff' }}>View Services</a>
            </div>
            
            <div className="trust-signal" style={{ marginTop: '2rem' }}>
              Rated 5.0 ★ based on customer reviews on google
            </div>
          </div>

          <div style={{ flex: '1 1 320px', maxWidth: '360px', minWidth: '280px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
            {imageFailed ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '320px', borderRadius: '16px', border: '1px solid var(--gold)', backgroundColor: 'rgba(0,0,0,0.2)' }}>
                <div style={{ color: 'var(--gold)', fontSize: '3rem', fontWeight: 700 }}>TDL</div>
              </div>
            ) : (
              <img 
                src="/images/IMG_20260624_001608.jpg (1).jpeg" 
                alt="The Detail Lab" 
                style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 15px 35px rgba(0,0,0,0.6)' }}
                onError={() => {
                  setImageFailed(true);
                }}
              />
            )}
          </div>
        </div>
      </header>

      {/* 3. Services Section */}
      <section id="services" className="bg-white section-pad">
        <div className="container">
          <div className="services-layout">
            <div className="service-col-left">
              <h2 className="section-title">Our<br/>Services</h2>
              <p style={{ color: '#555', fontSize: '1.2rem', maxWidth: '400px', marginBottom: '2rem' }}>
                Comprehensive detailing solutions tailored for ultimate protection and mirror-like finishes.
              </p>
              <a href="https://wa.me/917665456952" target="_blank" rel="noopener noreferrer" className="btn" style={{ backgroundColor: 'var(--black)', color: 'var(--white)', border: 'none' }}>Inquire Pricing</a>
            </div>
            
            <div className="service-col-right">
              {[
                { name: 'Ceramic Coating', desc: 'Long-lasting hydrophobic protection guarding your paint against the elements.' },
                { name: 'PPF Installation', desc: 'Paint Protection Film (PPF) to securely defend against rock chips and deep scratches.' },
                { name: 'Car Detailing', desc: 'Meticulous interior and exterior deep cleaning to restore factory-fresh feel.' },
                { name: 'Steam Wash', desc: 'Eco-friendly, highly effective steam cleaning for deep dirt extraction.' },
                { name: 'Interior Vacuuming', desc: 'Complete removal of dust, debris, and allergens from all cabin crevices.' },
                { name: 'Scratch Removal', desc: 'Professional paint correction to eliminate swirl marks and surface imperfections.' },
                { name: 'Car & Bike Washing', desc: 'Thorough exterior wash ensuring spotless glass, wheels, and bodywork.' },
                { name: 'Glass Film Install', desc: 'Premium window tinting installation for privacy and UV heat rejection.' },
              ].map((service, idx) => (
                <div key={idx} className="service-item">
                  <div style={{ fontSize: '0.9rem', color: 'var(--gold)', fontWeight: 'bold', marginBottom: '1rem' }}>
                    0{idx + 1}
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <ResultsSection />



      {/* 4. Why Choose Us */}
      <section id="why-us" className="why-section section-pad">
        <div className="container">
          <h2 className="section-title">The Detail Lab<br/><span className="text-gold">Difference</span></h2>
          
          <div className="why-us-grid">
            <div className="why-item">
              <h3>Late-Night Service</h3>
              <p>We know you're busy. We operate from 9 AM to 10 PM, Monday through Sunday, making it incredibly convenient for night drops and evening washes.</p>
            </div>
            <div className="why-item">
              <h3>Highly Equipped</h3>
              <p>We use industry-leading tools, premium chemicals, and advanced steam wash technology to guarantee a superior finish every time.</p>
            </div>
            <div className="why-item">
              <h3>Professional Staff</h3>
              <p>Our polite, dedicated team treats every vehicle with seriousness and transparency, ensuring you know exactly what your car needs.</p>
            </div>
            <div className="why-item">
              <h3>Quality Assured</h3>
              <p>With an unwavering focus on detail, low costs, and high value, we guarantee a stunning exterior and spotless interior, backed by genuine reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="bg-white section-pad">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Our Process</h2>
          <div className="steps-container" style={{ margin: '0 auto' }}>
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Book Your Slot</h3>
                <p>Contact us via WhatsApp, call, or email to schedule your premium wash, detailing, or coating session at your convenience.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>We Go To Work</h3>
                <p>Drop your vehicle off at our Naroda facility. Our highly equipped experts utilize professional-grade solutions to restore your vehicle securely.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>You Drive Away Shining</h3>
                <p>Pick up a thoroughly inspected, flawlessly cleaned, and protected vehicle that looks better than the day you bought it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section id="reviews" className="bg-black section-pad">
        <div className="container">
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Words From<br/>Our Clients</h2>
          
          <div className="testi-grid">
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">"The team was incredibly professional and explained every step of the coating process. My car has never looked better; the finish is stunning, and it feels protected against the elements."</p>
              <div className="testi-author">Dr. Jigar Rathod</div>
            </div>
            
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">"Excellent Bike Washing Service – Even Late at Night! I was really impressed with their dedication and service... which is incredibly convenient for people with a busy schedule."</p>
              <div className="testi-author">Tarun Panchal</div>
            </div>
            
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <p className="testi-quote">"I had done my car wash and interior vacuum and it was a quality work, and they also removed the scratch from my car that I have recently bought."</p>
              <div className="testi-author">Rudra Raval</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing Banner */}
      <section className="pricing-bar">
        <div className="container">
          <h2>Transparent Quality. Affordable Rates.</h2>
          <p>Since every vehicle's condition is unique, contact us directly for an accurate quote on specific detailing packages, washing, and premium coatings.</p>
        </div>
      </section>

      {/* 9. Contact & Booking */}
      <section id="contact" className="bg-black section-pad">
        <div className="container">
          <div className="contact-wrap" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            
            <div className="contact-info">
              <h2 className="section-title text-white" style={{ marginBottom: '4rem' }}>Let's Talk.</h2>
              
              <div className="contact-info-block">
                <h4>Visit Us</h4>
                <p>St Marys School, Near Naroda Gam<br/>Ahmedabad, Gujarat 382330</p>
                <a href="https://maps.app.goo.gl/o6Nx9WARomemTWny9" target="_blank" rel="noopener noreferrer" style={{color: 'var(--gold)', fontSize: '1rem', marginTop: '0.5rem', display: 'inline-block', fontFamily: 'Space Grotesk, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em'}}>Get Directions &rarr;</a>
              </div>
              
              <div className="contact-info-block">
                <h4>Working Hours</h4>
                <p>Monday – Sunday</p>
                <p>9:00 AM – 10:00 PM</p>
              </div>

              <div className="contact-info-block" style={{ marginTop: '3rem' }}>
                <h4>Contact</h4>
                <p style={{ marginBottom: '0.5rem' }}>Call: <a href="tel:+919998100878">+91 9998100878</a></p>
                <p style={{ marginBottom: '0.5rem' }}>WhatsApp: <a href="https://wa.me/917665456952" target="_blank" rel="noopener noreferrer">+91 76654 56952</a></p>
                <p>Email: <a href="mailto:Chinmaypandya1608@gmail.com">Chinmaypandya1608@gmail.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer className="footer">
        <div style={{ flex: '1 1 300px' }}>
          <div className="nav-logo" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
            The Detail <span style={{ color: 'var(--gold)' }}>Lab</span>
          </div>
          <p className="footer-copy">Premium Auto Care strictly in Ahmedabad.</p>
        </div>
        
        <div className="footer-links" style={{ flex: '1 1 200px' }}>
           <a href="#services">Services</a>
           <a href="#reviews">Testimonials</a>
           <a href="tel:+919998100878">Call Now</a>
        </div>

        <div className="footer-links" style={{ flex: '1 1 200px' }}>
           <a href="https://www.instagram.com/the_detail_lab5?igsh=ZTY5bjd1czh1cGYx" target="_blank" rel="noopener noreferrer">Instagram</a>
           <a href="https://www.youtube.com/c/cpautovlogs1608" target="_blank" rel="noopener noreferrer">YouTube</a>
           <a href="https://maps.app.goo.gl/o6Nx9WARomemTWny9" target="_blank" rel="noopener noreferrer">Google Maps</a>
        </div>
        
        <div style={{ flexBasis: '100%', marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center' }}>
          <p className="footer-copy">&copy; {new Date().getFullYear()} The Detail Lab. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
