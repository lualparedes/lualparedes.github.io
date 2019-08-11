import React, { Component } from 'react';

import Header from './header/header.component';
import Menu from './menu/menu.component';

import { g } from '../../assets/scripts';

import Me from './me.png';
import OikosImg from './oikos.png';
import SorterImg from './sorter.png';
import DoitImg from './doit.png';
import LualImg from './lual.png';
import GuiaImg from './guia.png';

export default class Home extends Component {

  showModal() {
    g('.js-modal').classList.add('a-modal-show');
    g('.js-backdropModal').classList.add('a-backdrop-show');

    if (g('.js-modal').classList.contains('a-modal-hide')) {
      g('.js-modal').classList.remove('a-modal-hide');
      g('.js-backdropModal').classList.remove('a-backdrop-hide');
    }
  }

  hideModal() {
    g('.js-modal').classList.add('a-modal-hide');
    g('.js-backdropModal').classList.add('a-backdrop-hide');
    g('.js-modal').classList.remove('a-modal-show');
    g('.js-backdropModal').classList.remove('a-backdrop-show');

    setTimeout(() => {
      g('.js-modal').classList.remove('a-modal-hide');
      g('.js-backdropModal').classList.remove('a-backdrop-hide');
    }, 1000);        
  }

  render() {
    return (
      <div className="Home">
        <Header />
        <Menu />

        <div className="Hero">
          <div className="hero-wrap wrap wrap--wide">
            <div className="hero-text biggie">
              <p>
                Hey! I’m Luis Paredes and <strong>I love building web experiences 
                that are visually rich and performant</strong>.
              </p>
              <p>
                I’m a firm believer that <strong>good engineering and good 
                design have to go hand-in-hand</strong>, and for this reason, 
                I strive to accomplish exactly that in every single 
                project I create.
              </p>
              <div className="hero-text__scroll icon-scroll">
              </div>
            </div>
            <div className="hero-img">
              <img src={Me} alt="Me"/>
              <div className="hero-img__badge icon-badge">
              </div>
            </div>
          </div>
        </div>

        <div className="Projects" id="projects">
          <div className="project">
            <div className="wrap">
              <div className="project-content project-content--right">
                <h3 className="project-content__title">
                  Oikos<br/> registry
                </h3>
                <div className="project-content__img project-content__img--right">
                  <img src={OikosImg} alt="Project preview"/>
                </div>
                <p className="project-content__summary">
                  Dashboard for managing the members registry of an
                  excursionist club (Oikos). The code for the frontend
                  is available <a target="_blank" rel="noopener noreferer" href="https://github.com/lualparedes/oikos-registry">here</a> and a live version
                  can be found <a target="_blank" rel="noopener noreferer" href="https://lualparedes.github.io/oikos-registry/">here</a>.
                </p>
                <p className="project-content__tech-stack">
                  <span>Tech stack: </span> 
                  REACT, REDUX, MONGODB (MLAB), NODEJS, EXPRESS
                </p>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="wrap">
              <div className="project-content project-content--left">
                <h3 className="project-content__title">
                  Sorter <br/>(WIP)
                </h3>
                <div 
                  className="
                    project-content__img 
                    project-content__img--left
                    project-content__img--clickable
                  "
                  onClick={this.showModal}
                >
                  <img src={SorterImg} alt="Project preview"/>
                </div>
                <p className="project-content__summary">
                  I love YouTube, and I also love being organized, 
                  so it became obvious that I needed to create my
                  own app to organize my subscriptions!
                </p>
                <p className="project-content__tech-stack">
                  <span>Tech stack: </span> 
                  ANGULAR, FIREBASE DATABASE
                </p>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="wrap">
              <div className="project-content project-content--right">
                <h3 className="project-content__title">
                  Do it! <br/>(MVP)
                </h3>
                <div className="project-content__img project-content__img--right">
                  <img src={DoitImg} alt="Project preview"/>
                </div>
                <p className="project-content__summary">
                  To do apps don’t have to be boring, so I decided
                  to create a to-do app and gamify it drawing
                  inspiration from Habitica. Check out the&nbsp;
                  <a target="_blank" rel="noopener noreferer" href="https://github.com/lualparedes/doit">code here</a> and the&nbsp;
                  <a target="_blank" rel="noopener noreferer" href="https://do-it-app-demo.firebaseapp.com/">live version here</a>.
                </p>
                <p className="project-content__tech-stack">
                  <span>Tech stack: </span> 
                  VANILLA JS!
                </p>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="wrap">
              <div className="project-content project-content--left">
                <h3 className="project-content__title">
                  Lual <br/>website
                </h3>
                <div className="project-content__img project-content__img--left">
                  <img src={LualImg} alt="Project preview"/>
                </div>
                <p className="project-content__summary">
                  My previous website, when I used to do freelance
                  jobs and also offered design services. An archived
                  version of this project can be found&nbsp;
                  <a target="_blank" rel="noopener noreferer" href="https://lual-production.firebaseapp.com/">here</a>.
                </p>
                <p className="project-content__tech-stack">
                  <span>Tech stack: </span> 
                  JEKYLL
                </p>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="wrap">
              <div className="project-content project-content--right">
                <h3 className="project-content__title">
                  GUIA <br/>website
                </h3>
                <div className="project-content__img project-content__img--right">
                  <img src={GuiaImg} alt="Project preview"/>
                </div>
                <p className="project-content__summary">
                  Website for Simón Bolívar University astronomy
                  club. This was my first experience with static
                  website generators (Jekyll). A live version
                  can be found <a target="_blank" rel="noopener noreferer" href="https://guia-web-test.firebaseapp.com/">here</a>.
                </p>
                <p className="project-content__tech-stack">
                  <span>Tech stack: </span> 
                  Jekyll, Instagram API
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ModalVideo">
          <div className="backdrop js-backdropModal">
            <div className="modal-close icon-close" onClick={this.hideModal}></div>
            <div className="wrap">
              <div className="modal js-modal">
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

        <div className="EducationAndExperience" id="education-and-experience">
          <div className="wrap">
            <div className="row">
              <div className="col-2 column-block">
                <h2 className="section-title">
                  Education
                </h2>
                <h3 className="mini-header">
                  Computer Engineering (in progress)
                </h3>
                <p>
                   Universidad Simón Bolívar | 2011 ─ 
                </p>
                <p>
                   I’ve taken courses on algorithmic theory, logic, and discrete mathematics, as well as complementary courses on physics, calculus, and other topics.  
                </p>
                <p>
                  However, political turmoil in my country has worked against my goal of finishing my degree. <span style={{ display:'none' }}>, and since things are bound to get worse, I’ve made the decision to complete it elsewhere, most likely with a blended learning program, since now I’ll be working full time, and also because I learn faster now.</span>
                </p>
              </div>
              <div className="col-2 column-block">
                <h2 className="section-title">
                  Experience
                </h2>
                <h3 className="mini-header">
                  Designer & Developer
                </h3>
                <p>
                  Freelancer | March 2014 ─ April 2017
                </p>
                <h3 className="mini-header">
                  Multimedia Designer
                </h3>
                <p>
                  Latinux Studios | July 2014 ─ July 2015
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="Skills" id="skills">
          <div className="wrap">
            <h3 className="skills-header section-title">
              Skills
            </h3>
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
        
        <div className="Contact" id="contact">
          <div className="wrap">
            <h2 className="section-title">
                Contact
            </h2>
            <div className="row">
              <div className="col-2">
                <h3 className="mini-header">
                  Location
                </h3>
                <p>
                  Currently based in Caracas (EST + 1 h)
                </p>
              </div>
              <div className="col-2">
                <h3 className="mini-header">
                  Email
                </h3>
                <p>
                  <a href="mailto:lualdevelopment@gmail.com">lualdevelopment@gmail.com</a>
                </p>
              </div>
            </div>
        </div>
        </div>

        <div className="Cta">
          <div className="wrap">
            <p className="biggie">
              Are you looking for a frontend developer?
            </p>
            <p className="biggie">
              <strong>I look forward to being part of your team!</strong><br/>
              Just <a href="mailto:lualdevelopment@gmail.com">shoot me 
              a message</a> and I'll get back to you asap 😀
            </p>
          </div>
        </div>

        <div className="Footer">
          <p>Designed and coded with ❤️ by Luis Paredes</p>
          <p>
            <a href="https://github.com/lualparedes" target="_blank" rel="noopener noreferer">GitHub</a> |&nbsp;
            <a href="https://www.behance.net/lual" target="_blank" rel="noopener noreferer">Behance</a> |&nbsp;
            <a href="https://www.linkedin.com/in/luisalbertoparedes/" target="_blank" rel="noopener noreferer">LinkedIn</a>
          </p>
        </div>
      </div>
    );
  }
}
