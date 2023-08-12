import React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


const About = () => {

    const slideInTop = (elem, duration) => {

            gsap.fromTo(
                elem,
                {
                    opacity: 0,
                    y: 200,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: duration || 1,
                    scrollTrigger: {
                        trigger: elem,
                        start: 'top 80%',
                        end: 'bottom center',
                    }
                }
                )
        }


        useEffect(() => {
            slideInTop("#aboutLeft");
        }, [])

        useEffect(() => {
            slideInTop("#aboutMiddle");
        }, [])

        useEffect(() => {
            slideInTop("#aboutRight");
        }, [])

    return (
        <>
            <section id='about' className="about-head">

                <div className="about-start" id='aboutStart'>
                <h2>À Propos</h2>
                <h4>Développeur web full-stack</h4>
                <div className="hr-about"></div>
                </div>

                <div className="flex-about">

                <div className="left-part" id='aboutLeft'>
                    <h3>Qui suis-je ?</h3>
                    <p>{"Je m'appelle Nicolas, j'ai 26 ans et je suis actuellement à la 3W Académie. Afin d'obtenir la qualification de développeur web full-stack, je suis à la recherche d'une entreprise qui puisse m'accueillir."}</p>

                    <p>{"Je suis mobile dans tout le sud / sud-ouest (Côte Basque, Bordeaux, La Rochelle, Toulouse, Pau, Montpellier), il s'agit d'une alternance de 12 mois avec un rythme de 3 semaines en entreprise et 1 semaine en cours."}</p>
                </div>
                
           
                 <div className="img-middle" id='aboutMiddle'>
                    <img src="../../src/assets/img/img-about.jpg" alt="image d'un pc, d'une tablette et d'un téléphone portable" />
                </div> 
                

                <div className="right-part" id='aboutRight'>
                    <h3>Motivé !</h3>
                    <p>{"Autonome et enthousiaste, je suis convaincu que la meilleure manière d'apprendre est d'être immergé dans un environnement dynamique. Mon choix d'une alternance n'est pas seulement motivé par le désir d'acquérir des techniques, mais aussi par mon aspiration à me développer en tant que professionnel complet. en attendant cette alternance, je m'entraîne en tant qu'auto-didacte."}</p>
                    </div>
                    </div>
            </section>
        </>
    );
};

export default About;