import React, { Component } from 'react';
import './education-and-experience.component.css';

export default class EducationAndExperience extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
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
        );
    }

}