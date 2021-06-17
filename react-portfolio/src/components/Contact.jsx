import "./Components.css";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in touch</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit blanditiis quas enim voluptatum cumque sunt
              similique a, perspiciatis accusamus aut illo mollitia animi fuga!
              Architecto, dolores. Excepturi corporis numquam animi.
            </p>
            <div className="icons">
              <div className="row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
                </svg>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Galo Sandoval</div>
                </div>
              </div>
              <div className="row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                </svg>
                <div className="info">
                  <div className="head">Location</div>
                  <div className="sub-title">Los Angeles</div>
                </div>
              </div>
              <div className="row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                </svg>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">galosan92@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form action="#">
              <div className="fields">
                <div className="field name">
                  <input type="text" required placeholder="Name" />
                </div>
                <div className="field email">
                  <input type="text" required placeholder="Email" />
                </div>
              </div>
              <div className="field">
                <input type="text" required placeholder="Subject" />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  required
                  placeholder="Describe project..."
                ></textarea>
              </div>
              <div className="button">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
