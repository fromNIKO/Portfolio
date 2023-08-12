import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imgHtml from '../assets/img/html-5.png';
import imgCSS from '../assets/img/img-css1.png';
import imgSass from '../assets/img/img-sass.png';
import imgJs from '../assets/img/img-js.png';
import imgReact from '../assets/img/img-react.png';
import imgPhp from '../assets/img/img-php.png';
import imgSymfony from '../assets/img/img-symfony.png';
import imgSql from '../assets/img/img-mysql.png';
import imgGit from '../assets/img/img-git.png';
import imgCv from '../assets/img/cv_nicolas_torres_dev.pdf';

gsap.registerPlugin(ScrollTrigger)

const Skill = () => {

    // const handleDownload = () => {
    //     const link = document.createElement('a');
    //     link.href = "../assets/img/cv_nicolas_torres_dev.pdf";
    //     link.download = 'cv_nicolas_torres_dev.pdf';
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

    const slideInLeft = (elem, duration) => {

        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: 200,
               
            },
            {
                opacity: 1,
                display: "block",
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

    const imgRef = useRef();

    
      useEffect(() => {
          slideInLeft("#img1", "1")
      }, [])

      useEffect(() => {
          slideInLeft("#img2", "1.4")
      }, [])

      useEffect(() => {
          slideInLeft("#img3", "1.8")
      }, [])

      useEffect(() => {
          slideInLeft("#img4", "2.2")
      }, [])

      useEffect(() => {
          slideInLeft("#img5", "2.6")
      }, [])

      useEffect(() => {
          slideInLeft("#img6", "3")
      }, [])

      useEffect(() => {
          slideInLeft("#img7", "3.4")
      }, [])

      useEffect(() => {
          slideInLeft("#img8", "3.8")
      }, [])
      useEffect(() => {
          slideInLeft("#img9", "4.2")
      }, [])


   


    return (
        <>
        <main>
            <section className="skill-part" id='skill'>
                <h2 id='skillTitle'>Mes compétences</h2>
                <div className="skill-hr"></div>
                <div className="img-skill" id='skillImg' ref={imgRef}>
                    <img src={imgHtml} alt="logo du html"  className='img' id='img1'/>
                    <img src={imgCSS} alt="logo du css"  className='img' id='img2'/>
                    <img src={imgSass} alt="logo de sass"  className='img' id='img3'/>
                    <img src={imgJs} alt="logo du js"  className='img' id='img4'/>
                    <img src={imgReact} alt="logo de react"  className='img' id='img5'/>
                    <img src={imgPhp} alt="logo de php"  className='img' id='img6'/>
                    <img src={imgSymfony} alt="logo de symfony"  className='img' id='img7'/>
                    <img src={imgSql} alt="logo de mysql"  className='img' id='img8'/>
                    <img src={imgGit} alt="logo de Github"  className='img' id='img9'/>
                </div>
                <div className="container-btn" id='btnCv'>
                <a href={imgCv} download><button className='btn-cv'>Mon CV</button></a>
                </div>
            </section>
            </main>
        </>
    );
};

export default Skill;