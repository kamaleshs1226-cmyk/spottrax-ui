import { Link } from "react-router-dom";

function BusinessSolutions() {

  const solutions = [
    {
      number: "01",
      title: "Real Estate",
      text:
        "Digital marketing, lead generation and promotional solutions for real estate businesses.",
    },
    {
      number: "02",
      title: "Construction",
      text:
        "Build stronger visibility for construction companies and projects.",
    },
    {
      number: "03",
      title: "Buildings",
      text:
        "Promote building projects and connect them with potential customers.",
    },
  ];


  return (

    <section className="business-page">

      <div className="section-label">
        BUSINESS SOLUTIONS
      </div>

      <h1>
        Grow your business
        <br />
        with <span>SpottraX.</span>
      </h1>

      <p className="business-intro">
        We provide marketing and promotional solutions for
        businesses across different industries.
      </p>


      <div className="business-grid">

        {solutions.map(solution => (

          <div
            className="business-card"
            key={solution.title}
          >

            <span>
              {solution.number}
            </span>

            <h2>
              {solution.title}
            </h2>

            <p>
              {solution.text}
            </p>

            <Link to="/contact">
              Discuss Your Project →
            </Link>

          </div>

        ))}

      </div>

    </section>

  );
}

export default BusinessSolutions;