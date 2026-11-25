function Contact() {

  const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzFr7Cv170_La7xlSCrlRKUwla817xhKDcUAnrFmr8r6Eu_gwP0jJXDm6YHMOGZVKsk1Q/exec";


  const handleSubmit = async (e) => {

    e.preventDefault();

    const form = e.target;

    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      phone: form.elements.phone.value,
      company: form.elements.company.value,
      service: form.elements.service.value,
      message: form.elements.message.value
    };


    try {

      await fetch(SCRIPT_URL, {
        method: "POST",

        mode: "no-cors",

        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },

        body: JSON.stringify(formData)
      });


      alert(
        "Thank you! Your enquiry has been submitted successfully."
      );

      form.reset();


    } catch (error) {

      console.error(
        "Form submission error:",
        error
      );

      alert(
        "Something went wrong. Please try again."
      );
    }
  };


  return (

    <section className="contact-page">

      <div className="contact-intro">

        <div className="section-label">
          GET IN TOUCH
        </div>


        <h1>
          Let's grow
          <br />
          your <span>business.</span>
        </h1>


        <p>
          Tell us about your business, project or event.
          Our team will get in touch with you.
        </p>

      </div>


      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />


        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />


        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
        />


        <input
          type="text"
          name="company"
          placeholder="Company Name"
        />


        <select
          name="service"
          required
        >

          <option value="">
            Select Service
          </option>

          <option value="Digital Marketing">
            Digital Marketing
          </option>

          <option value="SEO">
            SEO
          </option>

          <option value="Social Media Marketing">
            Social Media Marketing
          </option>

          <option value="Influencer Marketing">
            Influencer Marketing
          </option>

          <option value="Events">
            Events
          </option>

          <option value="Photography">
            Photography
          </option>

          <option value="Business Solutions">
            Business Solutions
          </option>

        </select>


        <textarea
          name="message"
          rows="5"
          placeholder="Tell us about your requirement..."
        ></textarea>


        <button
          type="submit"
          className="primary-button"
        >
          Send Enquiry →
        </button>

      </form>

    </section>

  );
}


export default Contact;