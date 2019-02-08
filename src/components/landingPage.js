import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import ScrollAnimation from 'react-animate-on-scroll';
import Potrait from '../assets/images/Potrait.jpg';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.triggerChangeLanguage = this.triggerChangeLanguage.bind(this);
    this.state = {
      top: window.scrollY
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      this.setState({ top: window.scrollY });
    });
  }

  load() {
    return 'show';
  }

  triggerChangeLanguage() {
    this.props.changeLan();
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container-fluid intro">
          <div className="row">
            <div className="language offset-9 col-2">
              <p onClick={this.triggerChangeLanguage}>
                <FormattedMessage id="LAN" />
              </p>
            </div>
          </div>
          <div className="title">
            <ScrollAnimation
              animateIn="bounceInLeft"
              animateOut="bounceOutLeft"
            >
              <div className="row">
                <h1 className="show display-4 offset-1 col-10">
                  <FormattedMessage id="LANDING.TITLE" />
                </h1>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInLeft"
              animateOut="bounceOutLeft"
              delay={1500}
            >
              <div className="row">
                <h1 className="display-4 offset-1 col-10">
                  <FormattedMessage id="LANDING.TITLE_2" />
                </h1>
              </div>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOut="fadeOutDown"
            delay={2000}
          >
            <div className="row contactButton">
              <a
                className="offset-xl-1"
                href="mailto:clovis1992@gmail.com?Subject=I%20Want%20To%Hire%20You"
              >
                <button>
                  <FormattedMessage id="LANDING.CONTACT" />
                </button>
              </a>
            </div>
          </ScrollAnimation>
        </div>
        <div className="bio container-fluid">
          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <div className="row">
              <div className="pic offset-lg-1 offset-2 col-8 col-xl-3">
                <img src={Potrait} alt="potrait" />
              </div>
              <div className="text col-xl-5 offset-1  col-10">
                <div>
                  <h2>
                    <FormattedMessage id="LANDING.BIO.TITLE" />
                  </h2>
                  <h4>
                    <FormattedMessage id="LANDING.BIO.SUBTITLE" />
                  </h4>
                </div>
                <p>
                  <FormattedMessage id="LANDING.BIO.PARAGRAPH" />
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <div className="row skills">
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
              <h3>
                <FormattedMessage id="LANDING.SKILLS.TITLE" />
              </h3>
            </ScrollAnimation>
            <div className="badges">
              <ScrollAnimation
                animateIn="bounceInDown"
                animateOut="bounceOut"
                delay={0}
              >
                <i className="fab fa-js-square" />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInDown"
                animateOut="bounceOut"
                delay={100}
              >
                <i className="fab fa-react" />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInDown"
                animateOut="bounceOut"
                delay={200}
              >
                <i className="fab fa-angular" />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInDown"
                animateOut="bounceOut"
                delay={300}
              >
                <i className="fab fa-docker" />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInDown"
                animateOut="bounceOut"
                delay={400}
              >
                <i className="fab fa-sass" />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInDown"
                animateOut="bounceOut"
                delay={500}
              >
                <i className="fab fa-node" />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="bounceInDown"
                animateOut="bounceOut"
                delay={600}
              >
                <i className="fab fa-google" />
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="container cards">
          <div className="row">
            <div className="col-12 mainTitle">
              <h3>
                <FormattedMessage id="LANDING.CARDS.TITLE" />
              </h3>
            </div>
            <ScrollAnimation
              className="col-10 offset-1 offset-lg-0 col-lg-6 col-xl-6"
              animateIn="bounceIn"
              animateOut="bounceOut"
              delay={0}
            >
              <div className="card">
                <div className="title">
                  <i className="fas fa-users" />
                  <h4>
                    <FormattedMessage id="LANDING.CARDS.TEAM.TITLE" />
                  </h4>
                </div>
                <p>
                  <FormattedMessage id="LANDING.CARDS.TEAM.PARAGRAPH" />
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              className="col-10 offset-1 offset-lg-0 col-lg-6 col-xl-6"
              animateIn="bounceIn"
              animateOut="bounceOut"
              delay={100}
            >
              <div className="card">
                <div className="title">
                  <i className="fas fa-laptop-code" />
                  <h4>
                    <FormattedMessage id="LANDING.CARDS.DARE.TITLE" />
                  </h4>
                </div>
                <p>
                  <FormattedMessage id="LANDING.CARDS.DARE.PARAGRAPH" />
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              className="col-10 offset-1 offset-lg-0 col-lg-6 col-xl-6"
              animateIn="bounceIn"
              animateOut="bounceOut"
              delay={200}
            >
              <div className="card">
                <div className="title">
                  <i className="fas fa-chart-line" />
                  <h4>
                    <FormattedMessage id="LANDING.CARDS.BUSSINES.TITLE" />
                  </h4>
                </div>
                <p>
                  <FormattedMessage id="LANDING.CARDS.BUSSINES.PARAGRAPH" />
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              className="col-10 offset-1 offset-lg-0 col-lg-6 col-xl-6"
              animateIn="bounceIn"
              animateOut="bounceOut"
              delay={300}
            >
              <div className="card">
                <div className="title">
                  <i className="fas fa-boxes" />
                  <h4>
                    <FormattedMessage id="LANDING.CARDS.ARCHITECTURE.TITLE" />
                  </h4>
                </div>
                <p>
                  <FormattedMessage id="LANDING.CARDS.ARCHITECTURE.PARAGRAPH" />
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="container-fluid">
          <div className="recommendations row">
            <div
              id="carouselExampleIndicators"
              className="carousel slide offset-1 col-10 col-xl-5 order-2 order-xl-1"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="blockquote">
                    <p>
                      <FormattedMessage id="LANDING.RECOMMENDATIONS.ANGELO.COMMENT" />
                    </p>
                    <h5 className="blockquote-footer">
                      <FormattedMessage id="LANDING.RECOMMENDATIONS.ANGELO.TITLE" />
                    </h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="blockquote">
                    <p>
                      <FormattedMessage id="LANDING.RECOMMENDATIONS.CFO.COMMENT" />
                    </p>
                    <h5 className="blockquote-footer">
                      <FormattedMessage id="LANDING.RECOMMENDATIONS.CFO.TITLE" />
                    </h5>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="blockquote">
                    <p>
                      <FormattedMessage id="LANDING.RECOMMENDATIONS.WILL.COMMENT" />
                    </p>
                    <h5 className="blockquote-footer">
                      <FormattedMessage id="LANDING.RECOMMENDATIONS.WILL.TITLE" />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10 offset-1 col-xl-4 order-1 order-xl-2">
              <ScrollAnimation
                animateIn="fadeInRight"
                animateOut="fadeOutRight"
              >
                <h1 className="display-4">
                  <FormattedMessage id="LANDING.RECOMMENDATIONS.TITLE" />
                </h1>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <div className="closing">
          <div>
            <div className="offset-xl-1 col-12 col-xl-7">
              <h1 className="display-4">
                <FormattedMessage id="LANDING.CONTACT.COPY" />
              </h1>
              <h4>CLOVIS DANIEL RODRÍGUEZ</h4>
              <a href="mailto:clovis1992@gmail.com?Subject=I%20Want%20To%Hire%20You">
                <h4>clovis1992@gmail.com</h4>
              </a>
              <a href="tel:+5713213764628">
                <h4>(+571) 321 376 4628</h4>
              </a>
              <div className="social">
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/clovisrodriguez"
                >
                  <i className="fab fa-linkedin" />
                </a>
                <a target="blank" href="https://gitlab.com/clovisrodriguez">
                  <i className="fab fa-gitlab" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
