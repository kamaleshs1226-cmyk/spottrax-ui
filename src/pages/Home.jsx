import { Link } from "react-router-dom";
import spottraxCompanyImage from "../assets/spottrax-company-description.png";

function Home() {
  return (
    <>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-badge">
            DIGITAL GROWTH PARTNER
          </div>

          <h1>
            Turn Your
            <span> Ideas </span>
            Into
            <br />
            <strong>Real Growth.</strong>
          </h1>

          <p>
            We help brands increase visibility, generate leads and
            drive sales through digital marketing, creative strategy
            and technology.
          </p>

          <div className="hero-buttons">

            <Link
              to="/contact"
              className="primary-button"
            >
              Start Your Project
              <span>→</span>
            </Link>

            <Link
              to="/services"
              className="secondary-button"
            >
              Explore Services
            </Link>

          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="hero-visual">

          <div className="visual-circle circle-one"></div>

          <div className="visual-circle circle-two"></div>

          <div className="visual-card company-image-card">
  <img
    src={spottraxCompanyImage}
    alt="SpottraX Network - Connecting Talent, Technology and Business"
    className="company-description-image"
  />
</div>

        </div>

      </section>


      {/* STATS */}

      <section className="stats-section">

        <div className="stat-item">
          <strong>500+</strong>
          <span>Projects Delivered</span>
        </div>

        <div className="stat-item">
          <strong>300+</strong>
          <span>Business Connections</span>
        </div>

        <div className="stat-item">
          <strong>360°</strong>
          <span>Marketing Solutions</span>
        </div>

      </section>


      {/* ABOUT */}

      <section className="about-section">

        <div className="section-label">
          WHO WE ARE
        </div>

        <h2>
          Connecting creativity,
          <br />
          technology & business.
        </h2>

        <p>
          SpottraX Network is a digital marketing and business
          solutions company focused on helping brands improve
          visibility, generate leads and build stronger customer
          connections.
        </p>

      </section>


      {/* SERVICES PREVIEW */}

      <section className="services-section">

        <div className="section-label">
          OUR SERVICES
        </div>

        <h2>
          Everything your brand
          <br />
          needs to grow.
        </h2>

        <div className="service-grid">

          <div className="service-card">
            <span>01</span>
            <h3>Digital Marketing</h3>
            <p>
              Build visibility and generate measurable business
              opportunities through digital campaigns.
            </p>
          </div>

          <div className="service-card">
            <span>02</span>
            <h3>SEO</h3>
            <p>
              Improve your search visibility and reach customers
              organically.
            </p>
          </div>

          <div className="service-card">
            <span>03</span>
            <h3>Social Media</h3>
            <p>
              Build communities and strengthen your brand presence.
            </p>
          </div>

          <div className="service-card">
            <span>04</span>
            <h3>Events & Promotions</h3>
            <p>
              From event booking and decoration to photography and
              promotional services.
            </p>
          </div>

        </div>

        <Link
          to="/services"
          className="section-button"
        >
          View All Services →
        </Link>

      </section>


      {/* EVENTS */}

      <section className="events-preview">

        <div>

          <div className="section-label">
            EVENTS
          </div>

          <h2>
            Make your events
            <br />
            unforgettable.
          </h2>

          <p>
            Explore our event management, decoration, photography,
            videography and promotional services.
          </p>

          <Link
            to="/events/gallery"
            className="primary-button"
          >
            View Gallery →
          </Link>

        </div>

      </section>


      {/* CTA */}

      <section className="contact-section">

        <div className="section-label">
          LET'S WORK TOGETHER
        </div>

        <h2>
          Have an idea?
          <br />
          Let's make it happen.
        </h2>

        <Link
          to="/contact"
          className="primary-button"
        >
          Get In Touch →
        </Link>

      </section>

    </>
  );
}

export default Home;