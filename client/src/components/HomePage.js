import React from "react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id="fh5co-wrapper">
          <div id="fh5co-page">
            <div className="fh5co-hero">
              <div className="fh5co-overlay" />
              <div className="fh5co-cover" data-stellar-background-ratio="0.5">
                <div className="desc">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-5 col-md-5">
                        <div className="tabulation animate-box">
                          <ul className="nav nav-tabs" role="tablist">
                            <li role="presentation" className="active">
                              <a
                                href="#flights"
                                aria-controls="flights"
                                role="tab"
                                data-toggle="tab"
                              >
                                Flights
                              </a>
                            </li>
                            <li role="presentation">
                              <a
                                href="#hotels"
                                aria-controls="hotels"
                                role="tab"
                                data-toggle="tab"
                              >
                                Hotels
                              </a>
                            </li>
                            <li role="presentation">
                              <a
                                href="#packages"
                                aria-controls="packages"
                                role="tab"
                                data-toggle="tab"
                              >
                                Packages
                              </a>
                            </li>
                          </ul>

                          <div className="tab-content">
                            <div
                              role="tabpanel"
                              className="tab-pane active"
                              id="flights"
                            >
                              <div className="row">
                                <div className="col-xxs-12 col-xs-6 mt">
                                  <div className="input-field">
                                    <label htmlFor="from">From:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="from-place"
                                      placeholder="Los Angeles, USA"
                                    />
                                  </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt">
                                  <div className="input-field">
                                    <label htmlFor="from">To:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="to-place"
                                      placeholder="Tokyo, Japan"
                                    />
                                  </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt alternate">
                                  <div className="input-field">
                                    <label htmlFor="date-start">
                                      Check In:
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="date-start"
                                      placeholder="mm/dd/yyyy"
                                    />
                                  </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt alternate">
                                  <div className="input-field">
                                    <label htmlFor="date-end">Check Out:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="date-end"
                                      placeholder="mm/dd/yyyy"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 mt">
                                  <section>
                                    <label htmlFor="class">Class:</label>
                                    <select className="cs-select cs-skin-border">
                                      <option value="" disabled selected>
                                        Economy
                                      </option>
                                      <option value="economy">Economy</option>
                                      <option value="first">First</option>
                                      <option value="business">Business</option>
                                    </select>
                                  </section>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt">
                                  <section>
                                    <label htmlFor="class">Adult:</label>
                                    <select className="cs-select cs-skin-border">
                                      <option value="" disabled selected>
                                        1
                                      </option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                    </select>
                                  </section>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt">
                                  <section>
                                    <label htmlFor="class">Children:</label>
                                    <select className="cs-select cs-skin-border">
                                      <option value="" disabled selected>
                                        1
                                      </option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                    </select>
                                  </section>
                                </div>
                                <div className="col-xs-12">
                                  <input
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    value="Search Flight"
                                  />
                                </div>
                              </div>
                            </div>

                            <div
                              role="tabpanel"
                              className="tab-pane"
                              id="hotels"
                            >
                              <div className="row">
                                <div className="col-xxs-12 col-xs-12 mt">
                                  <div className="input-field">
                                    <label htmlFor="from">City:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="from-place"
                                      placeholder="Los Angeles, USA"
                                    />
                                  </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt alternate">
                                  <div className="input-field">
                                    <label htmlFor="date-start">Return:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="date-start"
                                      placeholder="mm/dd/yyyy"
                                    />
                                  </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt alternate">
                                  <div className="input-field">
                                    <label htmlFor="date-end">Check Out:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="date-end"
                                      placeholder="mm/dd/yyyy"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 mt">
                                  <section>
                                    <label htmlFor="class">Rooms:</label>
                                    <select className="cs-select cs-skin-border">
                                      <option value="" disabled selected>
                                        1
                                      </option>
                                      <option value="economy">1</option>
                                      <option value="first">2</option>
                                      <option value="business">3</option>
                                    </select>
                                  </section>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt">
                                  <section>
                                    <label htmlFor="class">Adult:</label>
                                    <select className="cs-select cs-skin-border">
                                      <option value="" disabled selected>
                                        1
                                      </option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                    </select>
                                  </section>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt">
                                  <section>
                                    <label htmlFor="class">Children:</label>
                                    <select className="cs-select cs-skin-border">
                                      <option value="" disabled selected>
                                        1
                                      </option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                    </select>
                                  </section>
                                </div>
                                <div className="col-xs-12">
                                  <input
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    value="Search Hotel"
                                  />
                                </div>
                              </div>
                            </div>

                            <div
                              role="tabpanel"
                              className="tab-pane"
                              id="packages"
                            >
                              <div className="row">
                                <div className="col-xxs-12 col-xs-6 mt">
                                  <div className="input-field">
                                    <label htmlFor="from">City:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="from-place"
                                      placeholder="Los Angeles, USA"
                                    />
                                  </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt">
                                  <div className="input-field">
                                    <label htmlFor="from">Destination:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="to-place"
                                      placeholder="Tokyo, Japan"
                                    />
                                  </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt alternate">
                                  <div className="input-field">
                                    <label htmlFor="date-start">Departs:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="date-start"
                                      placeholder="mm/dd/yyyy"
                                    />
                                  </div>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt alternate">
                                  <div className="input-field">
                                    <label htmlFor="date-end">Return:</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="date-end"
                                      placeholder="mm/dd/yyyy"
                                    />
                                  </div>
                                </div>
                                <div className="col-sm-12 mt">
                                  <section>
                                    <label htmlFor="class">Rooms:</label>
                                    <select className="cs-select cs-skin-border">
                                      <option value="" disabled selected>
                                        1
                                      </option>
                                      <option value="economy">1</option>
                                      <option value="first">2</option>
                                      <option value="business">3</option>
                                    </select>
                                  </section>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt">
                                  <section>
                                    <label htmlFor="class">Adult:</label>
                                    <select className="cs-select cs-skin-border">
                                      <option value="" disabled selected>
                                        1
                                      </option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                    </select>
                                  </section>
                                </div>
                                <div className="col-xxs-12 col-xs-6 mt">
                                  <section>
                                    <label htmlFor="class">Children:</label>
                                    <select className="cs-select cs-skin-border">
                                      <option value="" disabled selected>
                                        1
                                      </option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                    </select>
                                  </section>
                                </div>
                                <div className="col-xs-12">
                                  <input
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    value="Search Packages"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="block" className="desc2 animate-box">
                        <div className="col-sm-7 col-sm-push-1 col-md-7 col-md-push-1">
                          <h2>Exclusive Limited Time Offer</h2>
                          <h3>Fly to Hong Kong via Los Angeles, USA</h3>
                          <span className="price">$599</span>
                          <p>
                            <a className="btn btn-primary btn-lg" href="#">
                              Get Started
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="fh5co-features">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 animate-box">
                    <div className="feature-left">
                      <span className="icon">
                        <i className="icon-hotairballoon" />
                      </span>
                      <div className="feature-copy">
                        <h3>Family Travel</h3>
                        <p>
                          Facilis ipsum reprehenderit nemo molestias. Aut cum
                          mollitia reprehenderit.
                        </p>
                        <p>
                          <a href="#">Learn More</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 animate-box">
                    <div className="feature-left">
                      <span className="icon">
                        <i className="icon-search" />
                      </span>
                      <div className="feature-copy">
                        <h3>Travel Plans</h3>
                        <p>
                          Facilis ipsum reprehenderit nemo molestias. Aut cum
                          mollitia reprehenderit.
                        </p>
                        <p>
                          <a href="#">Learn More</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box">
                    <div className="feature-left">
                      <span className="icon">
                        <i className="icon-wallet" />
                      </span>
                      <div className="feature-copy">
                        <h3>Honeymoon</h3>
                        <p>
                          Facilis ipsum reprehenderit nemo molestias. Aut cum
                          mollitia reprehenderit.
                        </p>
                        <p>
                          <a href="#">Learn More</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 animate-box">
                    <div className="feature-left">
                      <span className="icon">
                        <i className="icon-wine" />
                      </span>
                      <div className="feature-copy">
                        <h3>Business Travel</h3>
                        <p>
                          Facilis ipsum reprehenderit nemo molestias. Aut cum
                          mollitia reprehenderit.
                        </p>
                        <p>
                          <a href="#">Learn More</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 animate-box">
                    <div className="feature-left">
                      <span className="icon">
                        <i className="icon-genius" />
                      </span>
                      <div className="feature-copy">
                        <h3>Solo Travel</h3>
                        <p>
                          Facilis ipsum reprehenderit nemo molestias. Aut cum
                          mollitia reprehenderit.
                        </p>
                        <p>
                          <a href="#">Learn More</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 animate-box">
                    <div className="feature-left">
                      <span className="icon">
                        <i className="icon-chat" />
                      </span>
                      <div className="feature-copy">
                        <h3>Explorer</h3>
                        <p>
                          Facilis ipsum reprehenderit nemo molestias. Aut cum
                          mollitia reprehenderit.
                        </p>
                        <p>
                          <a href="#">Learn More</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="fh5co-destination">
              <div className="tour-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <ul id="fh5co-destination-list" className="animate-box">
                      <li className="one-forth text-center ">
                        <a href="#">
                          <div className="case-studies-summary">
                            <h2>Los Angeles</h2>
                          </div>
                        </a>
                      </li>
                      <li className="one-forth text-center">
                        <a href="#">
                          <div className="case-studies-summary">
                            <h2>Hongkong</h2>
                          </div>
                        </a>
                      </li>
                      <li className="one-forth text-center">
                        <a href="#">
                          <div className="case-studies-summary">
                            <h2>Italy</h2>
                          </div>
                        </a>
                      </li>
                      <li className="one-forth text-center">
                        <a href="#">
                          <div className="case-studies-summary">
                            <h2>Philippines</h2>
                          </div>
                        </a>
                      </li>

                      <li className="one-forth text-center">
                        <a href="#">
                          <div className="case-studies-summary">
                            <h2>Japan</h2>
                          </div>
                        </a>
                      </li>
                      <li className="one-half text-center">
                        <div className="title-bg">
                          <div className="case-studies-summary">
                            <h2>Most Popular Destinations</h2>
                            <span>
                              <a href="#">View All Destinations</a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="one-forth text-center">
                        <a href="#">
                          <div className="case-studies-summary">
                            <h2>Paris</h2>
                          </div>
                        </a>
                      </li>
                      <li className="one-forth text-center">
                        <a href="#">
                          <div className="case-studies-summary">
                            <h2>Singapore</h2>
                          </div>
                        </a>
                      </li>
                      <li className="one-forth text-center">
                        <a href="#">
                          <div className="case-studies-summary">
                            <h2>Madagascar</h2>
                          </div>
                        </a>
                      </li>
                      <li className="one-forth text-center">
                        <a href="#">
                          <div className="case-studies-summary">
                            <h2>Egypt</h2>
                          </div>
                        </a>
                      </li>
                      <li className="one-forth text-center">
                        <a href="#">
                          <div className="case-studies-summary">
                            <h2>Indonesia</h2>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="fh5co-blog-section" className="fh5co-section-gray">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                    <h3>Recent From Blog</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Velit est facilis maiores, perspiciatis accusamus
                      asperiores sint consequuntur debitis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row row-bottom-padded-md">
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="fh5co-blog animate-box">
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/place-1.jpg"
                          alt=""
                        />
                      </a>
                      <div className="blog-text">
                        <div className="prod-title">
                          <h3>
                            <a href="#">
                              30% Discount to Travel All Around the World
                            </a>
                          </h3>
                          <span className="posted_by">Sep. 15th</span>
                          <span className="comment">
                            <a href="">
                              21
                              <i className="icon-bubble2" />
                            </a>
                          </span>
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                          <p>
                            <a href="#">Learn More...</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="fh5co-blog animate-box">
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/place-2.jpg"
                          alt=""
                        />
                      </a>
                      <div className="blog-text">
                        <div className="prod-title">
                          <h3>
                            <a href="#">Planning for Vacation</a>
                          </h3>
                          <span className="posted_by">Sep. 15th</span>
                          <span className="comment">
                            <a href="">
                              21
                              <i className="icon-bubble2" />
                            </a>
                          </span>
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                          <p>
                            <a href="#">Learn More...</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix visible-sm-block" />
                  <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="fh5co-blog animate-box">
                      <a href="#">
                        <img
                          className="img-responsive"
                          src="images/place-3.jpg"
                          alt=""
                        />
                      </a>
                      <div className="blog-text">
                        <div className="prod-title">
                          <h3>
                            <a href="#">Visit Tokyo Japan</a>
                          </h3>
                          <span className="posted_by">Sep. 15th</span>
                          <span className="comment">
                            <a href="">
                              21
                              <i className="icon-bubble2" />
                            </a>
                          </span>
                          <p>
                            Far far away, behind the word mountains, far from
                            the countries Vokalia and Consonantia, there live
                            the blind texts.
                          </p>
                          <p>
                            <a href="#">Learn More...</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clearfix visible-md-block" />
                </div>

                <div className="col-md-12 text-center animate-box">
                  <p>
                    <a className="btn btn-primary btn-outline btn-lg" href="#">
                      See All Post <i className="icon-arrow-right22" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
