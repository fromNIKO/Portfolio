import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import  { useEffect } from 'react';
import imgProjectJapan from '../assets/img/img-project-japan.png';
import imgProjectGamingCampus from '../assets/img/img-gaming-campus.png';
import imgProjectRun from '../assets/img/img-run-project.png';
import imgProjectMontain from '../assets/img/img-montain-project.png';
import imgProjectResto from '../assets/img/img-resto-project.png';
import imgProjectBugatti from '../assets/img/img-bugatti-project.png';
import imgProjectCountryReact from '../assets/img/img-react-country-app.png';

gsap.registerPlugin(ScrollTrigger);

const Project = () => {

    const slideInTop = (elem, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: 200
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
        slideInTop("#box")
    }, [])

    

    return (
        <>
        <main>
            <section id='project' className="project-part">
                    <div className="head-project" id='projectHead'>
                        <h2>Mes réalisations</h2>
                        <div className="hr-project"></div>
                        <h4>{"Une sélection de quelques créations que j'ai réalisées"}</h4>
                    </div>

                    <div className="galery">


                        <a href="https://first-training-react.netlify.app/" target='_blank' rel='noreferrer' id='box' >
                            <div className="box" id='project7'>
                            <figure>
                            <img src={imgProjectCountryReact} alt="image d'une réalisation" />
                            <i className="fa-solid fa-plus"></i>
                            </figure>
                            <div className="sous-box">
                                <p>Country App</p>
                                <div></div>
                                <p>HTML / SCSS / REACT</p>
                            </div>
                        </div>
                        </a>

                        <a href="https://bugatti-training-non-office.netlify.app/" target='_blank' rel='noreferrer' id='box' >
                            <div className="box" id='project6'>
                            <figure>
                            <img src={imgProjectBugatti} alt="image d'une réalisation" />
                            <i className="fa-solid fa-plus"></i>
                            </figure>
                            <div className="sous-box">
                                <p>Country App</p>
                                <div></div>
                                <p>HTML / SCSS / REACT</p>
                            </div>
                        </div>
                        </a>

                        <a href="https://the-resto-train-by-niko.netlify.app/" target='_blank' rel='noreferrer' id='box' >
                            <div className="box" id='project5'>
                            <figure>
                            <img src={imgProjectResto} alt="image d'une réalisation" />
                            <i className="fa-solid fa-plus"></i>
                            </figure>
                            <div className="sous-box">
                                <p>The Resto</p>
                                <div></div>
                                <p>HTML / CSS</p>
                            </div>
                        </div>
                        </a>

                        <a href="https://site-montagne-niko.netlify.app/" target='_blank' rel='noreferrer' id='box' >
                            <div className="box" id='project4'>
                            <figure>
                            <img src={imgProjectMontain} alt="image d'une réalisation" />
                            <i className="fa-solid fa-plus"></i>
                            </figure>
                            <div className="sous-box">
                                <p>Montain</p>
                                <div></div>
                                <p>HTML / CSS </p>
                            </div>
                        </div>
                        </a>

                        <a href="https://run-exercice.netlify.app//" target='_blank' rel='noreferrer' id='box' >
                            <div className="box" id='project3'>
                            <figure>
                            <img src={imgProjectRun} alt="image d'une réalisation" />
                            <i className="fa-solid fa-plus"></i>
                            </figure>
                            <div className="sous-box">
                                <p>Run Training</p>
                                <div></div>
                                <p>HTML / CSS</p>
                            </div>
                        </div>
                        </a>

                        <a href="https://gaming-campus-training.netlify.app/" target='_blank' rel='noreferrer' id='box' >
                            <div className="box" id='project2'>
                            <figure>
                            <img src={imgProjectGamingCampus} alt="image d'une réalisation" />
                            <i className="fa-solid fa-plus"></i>
                            </figure>
                            <div className="sous-box">
                                <p>Gaming Campus</p>
                                <div></div>
                                <p>HTML / CSS</p>
                            </div>
                        </div>
                        </a>

                        <a href="https://first-site-japan.netlify.app/" target='_blank' rel='noreferrer' id='box' >
                        <div className="box" id='project1'>  
                        <figure>
                            <img src={imgProjectJapan} alt="" />
                           <i className="fa-solid fa-plus"></i>
                            </figure>
                            <div className="sous-box">
                                <p>Projet Japan</p>
                                <div></div>
                                <p>HTML / CSS/ JS</p>
                            </div>
                        </div>
                        </a>

                        

                    </div>
            </section>
            </main>
        </>
    );
};

export default Project;