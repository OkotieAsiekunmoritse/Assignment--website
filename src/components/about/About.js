import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is <b>OKOTIE ASIEKUNMORITSE</b> I am currently a cloud Engineering student in Altschool, I love coding, techinical writing and reading. </p>
                        <p className={classes.br}>I love exploring new technologies, I like to stay on top of latest trends.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;
