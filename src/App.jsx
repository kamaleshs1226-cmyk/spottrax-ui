import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import IntroAnimation from "./components/IntroAnimation";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import BusinessSolutions from "./pages/BusinessSolutions";
import Contact from "./pages/Contact";

import "./App.css";


function SimplePage({ title }) {

  return (

    <section className="simple-page">

      <div className="section-label">
        SPOTTRAX NETWORK
      </div>

      <h1>
        {title}
      </h1>

      <p>
        This page is currently being developed.
        More SpottraX content will be added here.
      </p>

    </section>

  );

}


function App() {

  const [showIntro, setShowIntro] = useState(true);

  return (

    <BrowserRouter>

      {/* OPENING ANIMATION */}

      {showIntro && (

        <IntroAnimation
          onComplete={() => setShowIntro(false)}
        />

      )}


      {/* MAIN WEBSITE */}

      <div className="app">

        <Navbar />

        <main>

          <Routes>

            {/* ==================================================
               HOME
            ================================================== */}

            <Route
              path="/"
              element={<Home />}
            />


            {/* ==================================================
               MARKETING
            ================================================== */}

            <Route
              path="/marketing"
              element={
                <SimplePage
                  title="Marketing"
                />
              }
            />

            <Route
              path="/marketing/digital-marketing"
              element={
                <SimplePage
                  title="Digital Marketing"
                />
              }
            />

            <Route
              path="/marketing/seo"
              element={
                <SimplePage
                  title="SEO Service"
                />
              }
            />


            {/* ==================================================
               SERVICES
            ================================================== */}

            <Route
              path="/services"
              element={
                <SimplePage
                  title="Our Services"
                />
              }
            />

            <Route
              path="/services/:service"
              element={
                <SimplePage
                  title="SpottraX Service"
                />
              }
            />


            {/* ==================================================
               EVENTS
            ================================================== */}

            <Route
              path="/events"
              element={
                <SimplePage
                  title="Events"
                />
              }
            />

            <Route
              path="/events/gallery"
              element={<Gallery />}
            />

            <Route
              path="/events/booking"
              element={
                <SimplePage
                  title="Event Booking"
                />
              }
            />

            <Route
              path="/events/management"
              element={
                <SimplePage
                  title="Event Management"
                />
              }
            />

            <Route
              path="/events/decorations"
              element={
                <SimplePage
                  title="Decorations"
                />
              }
            />

            <Route
              path="/events/photography"
              element={
                <SimplePage
                  title="Photography"
                />
              }
            />

            <Route
              path="/events/videography"
              element={
                <SimplePage
                  title="Videography"
                />
              }
            />

            <Route
              path="/events/promotional"
              element={
                <SimplePage
                  title="Promotional Services"
                />
              }
            />


            {/* ==================================================
               BUSINESS SOLUTIONS
            ================================================== */}

            <Route
              path="/business-solutions"
              element={<BusinessSolutions />}
            />

            <Route
              path="/business-solutions/:type"
              element={
                <SimplePage
                  title="Business Solution"
                />
              }
            />


            {/* ==================================================
               CONTACT
            ================================================== */}

            <Route
              path="/contact"
              element={<Contact />}
            />

          </Routes>

        </main>

      </div>

    </BrowserRouter>

  );

}

export default App;