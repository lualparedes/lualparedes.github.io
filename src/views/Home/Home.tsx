import React, { useRef, useState } from 'react';

import Emoji from '../../components/Emoji';
import Project from '../../components/Project';

import Me from './me.png';
import OikosImg from './oikos.png';
import SorterImg from './sorter.png';
import DoitImg from './doit.png';
import LualImg from './lual.png';
import GuiaImg from './guia.png';

interface IState {
  showMenu: boolean;
  showModal: boolean;
}

const Home = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const refs = {
    projects: useRef(null),
    educationAndExperience: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  const goTo = (ref: any) => () => {
    window.scrollTo(0, ref.current.offsetTop);
    setShowMenu(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="Home">
      <div className="Header">
        <div className="wrap wrap--wide">
          <div className="icon-menu js-iconMenu" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={`Menu js-Menu${showMenu ? ' Menu--open' : ''}`}>
        <div className="icon-close menu-close" onClick={toggleMenu}></div>
        <ul className="menu-items">
          <li className="menu-items__item" onClick={goTo(refs.projects)}>
            Projects
          </li>
          <li
            className="menu-items__item"
            onClick={goTo(refs.educationAndExperience)}
          >
            Education
          </li>
          <li
            className="menu-items__item"
            onClick={goTo(refs.educationAndExperience)}
          >
            Experience
          </li>
          <li className="menu-items__item" onClick={goTo(refs.skills)}>
            Skills
          </li>
          <li className="menu-items__item" onClick={goTo(refs.contact)}>
            Contact
          </li>
        </ul>
      </div>

      <div className="Hero">
        <div className="hero-wrap wrap wrap--wide">
          <div className="hero-text biggie">
            <p>
              Hey! I’m Luis Paredes and{' '}
              <strong>
                I love building web experiences that are visually rich and
                performant
              </strong>
              .
            </p>
            <p>
              I’m a firm believer that{' '}
              <strong>
                good engineering and good design have to go hand-in-hand
              </strong>
              , and for this reason, I strive to accomplish exactly that in
              every single project I create.
            </p>
            <div className="hero-text__scroll icon-scroll"></div>
          </div>
          <div className="hero-img">
            <img src={Me} alt="Me" />
            <div className="hero-img__badge icon-badge"></div>
          </div>
        </div>
      </div>

      <div className="Projects" ref={refs.projects}>
        <Project
          description="Dashboard for managing the members registry of an
          excursionist club (Oikos)"
          img={OikosImg}
          liveLink="https://lualparedes.github.io/oikos-registry/"
          sourceLink="https://github.com/lualparedes/oikos-registry"
          stack="REACT, REDUX, MONGODB (MLAB), NODEJS, EXPRESS"
          title="Oikos registry"
          variant="right"
        />
        <Project
          description="I love YouTube, and I also love being organized,
          so it became obvious that I needed to create my
          own app to organize my subscriptions!"
          img={SorterImg}
          liveLink="https://lualparedes.github.io/oikos-registry/"
          onClickImg={toggleModal}
          sourceLink="https://github.com/lualparedes/oikos-registry"
          stack="ANGULAR, FIREBASE DATABASE"
          title="Sorter (WIP)"
          variant="left"
        />
        <Project
          description="To do apps don’t have to be boring, so I decided
          to create a to-do app and gamify it drawing
          inspiration from Habitica"
          img={DoitImg}
          liveLink="https://do-it-app-demo.firebaseapp.com/"
          sourceLink="https://github.com/lualparedes/doit"
          stack="VANILLA JS!"
          title="Do it! (MVP)"
          variant="right"
        />
        <Project
          archived={true}
          description="My previous website, when I used to do freelance
          jobs and also offered design services"
          img={LualImg}
          liveLink="https://lual-production.firebaseapp.com/"
          stack="JEKYLL"
          title="Lual website"
          variant="left"
        />
        <Project
          archived={true}
          description="Website for Simón Bolívar University astronomy
          club. This was my first experience with static
          website generators (Jekyll)"
          img={GuiaImg}
          liveLink="https://guia-web-test.firebaseapp.com/"
          stack="Jekyll, Instagram API"
          title="GUIA website"
          variant="right"
        />
      </div>

      <div className="ModalVideo">
        <div
          className={`backdrop js-backdropModal ${
            showModal ? 'a-backdrop-show' : 'a-backdrop-hide'
          }`}
        >
          <div className="modal-close icon-close" onClick={toggleModal}></div>
          <div className="wrap">
            <div
              className={`modal js-modal ${
                showModal ? 'a-modal-show' : 'a-modal-hide'
              }`}
            >
              <iframe
                src="https://www.youtube.com/embed/_vT4qcszE6g"
                data-frameborder="0"
                data-gesture="media"
                allow="encrypted-media"
                data-allowfullscreen
                title="Sorter Project Video"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="EducationAndExperience" ref={refs.educationAndExperience}>
        <div className="wrap">
          <div className="row">
            <div className="col-2 column-block">
              <h2 className="section-title">Education</h2>
              <h3 className="mini-header">
                Computer Engineering (in progress)
              </h3>
              <p>Universidad Simón Bolívar | 2011 ─</p>
              <p>
                I’ve taken courses on algorithmic theory, logic, and discrete
                mathematics, as well as complementary courses on physics,
                calculus, and other topics.
              </p>
              <p>
                However, political turmoil in my country has worked against my
                goal of finishing my degree.{' '}
                <span style={{ display: 'none' }}>
                  , and since things are bound to get worse, I’ve made the
                  decision to complete it elsewhere, most likely with a blended
                  learning program, since now I’ll be working full time, and
                  also because I learn faster now.
                </span>
              </p>
            </div>
            <div className="col-2 column-block">
              <h2 className="section-title">Experience</h2>
              <h3 className="mini-header">Frontend Developer</h3>
              <p>Talpor | August 2018 ─ Present</p>
              <h3 className="mini-header">Fullstack Developer (Volunteer)</h3>
              <p>Upchieve | March 2018 ─ March 2019</p>
              <h3 className="mini-header">Designer & Developer</h3>
              <p>Freelancer | March 2014 ─ April 2017</p>
              <h3 className="mini-header">Multimedia Designer</h3>
              <p>Latinux Studios | July 2014 ─ July 2015</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Skills" ref={refs.skills}>
        <div className="wrap">
          <h3 className="skills-header section-title">Skills</h3>
          <ul className="skills-container">
            <li className="skills-container__item">
              <h3 className="mini-header">HTML5</h3>
              <p>Advanced</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">CSS3</h3>
              <p>Advanced</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">JavaScript</h3>
              <p>Advanced</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">CSS Methodologies</h3>
              <p>Advanced</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">React</h3>
              <p>Intermediate</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">Angular</h3>
              <p>Intermediate</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">Sass</h3>
              <p>Advanced</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">TypesScript</h3>
              <p>Intermediate</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">Git</h3>
              <p>Intermediate</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">NodeJS</h3>
              <p>Basic</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">Linux console</h3>
              <p>Basic</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">OOP</h3>
              <p>Advanced</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">UI Design</h3>
              <p>Advanced</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">Jekyll</h3>
              <p>Advanced</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">jQuery</h3>
              <p>Advanced</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">WordPress</h3>
              <p>Advanced</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">Python</h3>
              <p>Basic</p>
            </li>
            <li className="skills-container__item">
              <h3 className="mini-header">PHP</h3>
              <p>Basic</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="Contact" ref={refs.contact}>
        <div className="wrap">
          <h2 className="section-title">Contact</h2>
          <div className="row">
            <div className="col-2">
              <h3 className="mini-header">Location</h3>
              <p>Currently based in Caracas (EST + 1 h)</p>
            </div>
            <div className="col-2">
              <h3 className="mini-header">Email</h3>
              <p>
                <a href="mailto:lualdevelopment@gmail.com">
                  lualdevelopment@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Cta">
        <div className="wrap">
          <p className="biggie">Are you looking for a frontend developer?</p>
          <p className="biggie">
            <strong>I look forward to being part of your team!</strong>
            <br />
            Just{' '}
            <a href="mailto:lualdevelopment@gmail.com">
              shoot me a message
            </a>{' '}
            and I'll get back to you asap <Emoji emoji="😀" />
          </p>
        </div>
      </div>

      <div className="Footer">
        <p>
          Designed and coded with <Emoji emoji="❤️" /> by Luis Paredes
        </p>
        <p>
          <a
            href="https://github.com/lualparedes"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          |&nbsp;
          <a
            href="https://www.behance.net/lual"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>{' '}
          |&nbsp;
          <a
            href="https://www.linkedin.com/in/luisalbertoparedes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
