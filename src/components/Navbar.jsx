import { Link } from "react-router-dom";
import spottraxLogo from "../assets/spottrax-logo.png";

function Navbar() {

  return (

    <header className="navbar">

      {/* BRAND */}

      <Link to="/" className="brand">

        <img
          src={spottraxLogo}
          alt="SpottraX Network"
          className="brand-logo"
        />

      </Link>


      {/* NAVIGATION */}

      <nav className="nav-links">

        {/* MARKETING */}

        <div className="nav-dropdown">

          <Link
            to="/marketing"
            className="nav-item"
          >
            Marketing
            <span className="arrow">⌄</span>
          </Link>

          <div className="dropdown-menu">

            <Link to="/marketing/digital-marketing">
              <span>◈</span>
              Digital Marketing
            </Link>

            <Link to="/marketing/seo">
              <span>⌕</span>
              SEO Service
            </Link>

          </div>

        </div>


        {/* SERVICES */}

        <div className="nav-dropdown">

          <Link
            to="/services"
            className="nav-item"
          >
            Services
            <span className="arrow">⌄</span>
          </Link>

          <div className="dropdown-menu services-dropdown">

            <Link to="/services/digital-media">
              <span>▣</span>
              Digital Media Planning & Buying
            </Link>

            <Link to="/services/social-media">
              <span>◎</span>
              Social Media Marketing
            </Link>

            <Link to="/services/video-marketing">
              <span>▶</span>
              Video Creation & Marketing
            </Link>

            <Link to="/services/influencer">
              <span>♢</span>
              Influencer Marketing
            </Link>

            <Link to="/services/programmatic">
              <span>◉</span>
              Programmatic Solutions
            </Link>

            <Link to="/services/content-seo">
              <span>▧</span>
              Content & SEO Strategy
            </Link>

            <Link to="/services/automation">
              <span>⚙</span>
              Marketing Automation
            </Link>

            <Link to="/services/multilingual">
              <span>文</span>
              Multi Lingual Marketing
            </Link>

            <Link to="/services/strategy">
              <span>◫</span>
              Marketing Strategy Consulting
            </Link>

            <Link to="/services/research">
              <span>♧</span>
              Market Research & Consumer Insights
            </Link>

          </div>

        </div>


        {/* EVENTS */}

        <div className="nav-dropdown">

          <Link
            to="/events"
            className="nav-item"
          >
            Events
            <span className="arrow">⌄</span>
          </Link>

          <div className="dropdown-menu">

            <Link to="/events/gallery">
              <span>▧</span>
              Gallery
            </Link>

            <Link to="/events/booking">
              <span>▣</span>
              Event Booking
            </Link>

            <Link to="/events/management">
              <span>◈</span>
              Event Management
            </Link>

            <Link to="/events/decorations">
              <span>✦</span>
              Decorations
            </Link>

            <Link to="/events/photography">
              <span>◎</span>
              Photography
            </Link>

            <Link to="/events/videography">
              <span>▶</span>
              Videography
            </Link>

            <Link to="/events/promotional">
              <span>◆</span>
              Promotional Services
            </Link>

          </div>

        </div>


        {/* BUSINESS SOLUTIONS */}

        <div className="nav-dropdown">

          <Link
            to="/business-solutions"
            className="nav-item"
          >
            Business Solutions
            <span className="arrow">⌄</span>
          </Link>

          <div className="dropdown-menu">

            <Link to="/business-solutions/real-estate">
              <span>⌂</span>
              Real Estate
            </Link>

            <Link to="/business-solutions/construction">
              <span>▥</span>
              Construction
            </Link>

            <Link to="/business-solutions/buildings">
              <span>▤</span>
              Buildings
            </Link>

          </div>

        </div>


        {/* CONTACT */}

        <Link
          to="/contact"
          className="nav-item contact-link"
        >
          Contact
        </Link>

      </nav>


      {/* CTA */}

      <Link
        to="/contact"
        className="nav-button"
      >
        Let's Talk
        <span>→</span>
      </Link>

    </header>

  );

}

export default Navbar;