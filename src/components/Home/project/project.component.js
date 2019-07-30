import React, { Component } from 'react';
import './project.component.css';

import OikosImg from './oikos.png';
import SorterImg from './sorter.png';
import DoitImg from './doit.png';
import LualImg from './lual.png';
import GuiaImg from './guia.png';

import { g } from '../../../assets/scripts';

export default class Project extends Component {

    constructor(props) {
        super(props);
    }

    showModal() {
        g('.js-modal').classList.add('a-modal-show');
        g('.js-backdropModal').classList.add('a-backdrop-show');

        if (g('.js-modal').classList.contains('a-modal-hide')) {
            g('.js-modal').classList.remove('a-modal-hide');
            g('.js-backdropModal').classList.remove('a-backdrop-hide');
        }
    }

    render() {
        return (
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
                                is available <a target="_blank" rel="noopener" href="https://github.com/lualparedes/oikos-registry">here</a> and a live version
                                can be found <a target="_blank" rel="noopener" href="https://lualparedes.github.io/oikos-registry/">here</a>.
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
                                <a target="_blank" rel="noopener" href="https://github.com/lualparedes/doit">code here</a> and the&nbsp;
                                <a target="_blank" rel="noopener" href="https://do-it-app-demo.firebaseapp.com/">live version here</a>.
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
                                <a target="_blank" rel="noopener" href="https://lual-production.firebaseapp.com/">here</a>.
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
                                can be found <a target="_blank" rel="noopener" href="https://guia-web-test.firebaseapp.com/">here</a>.
                            </p>
                            <p className="project-content__tech-stack">
                                <span>Tech stack: </span> 
                                Jekyll, Instagram API
                            </p>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }

}