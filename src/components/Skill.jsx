import React from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

const Skill = () => {

    const handleDownload = () => {
        const cvUrl = '../../src/assets/img/cv_nicolas_torres_dev.pdf'
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'cv_nicolas_torres_dev.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const slideInLeft = (elem, duration) => {

        gsap.fromTo(
            elem,
            {
                opacity: 0,
                x: 200,
            },
            {
                opacity: 1,
                x: 0,
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

    // const onLoad = (elem) => {
    //     gsap.timeline().fromTo(".img",
    //     {
    //         x:100,
    //         opacity: 0
    //     },
    //     {
    //         x: 0,
    //         opacity: 1,
    //         stagger: 0.33,
    //         delay: 0.7,
    //     }
    //     )
    //     .to(".img-skill", {
    //         scrollTrigger: {
    //             trigger: elem,
    //             start: 'top 80%',
    //             end: 'bottom center'
    //         }
    //     })
    // }



    // useEffect(() => {
    //     onLoad()
    // }, [])
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


   


    return (
        <>
        <main>
            <section className="skill-part" id='skill'>
                <h2 id='skillTitle'>Mes compétences</h2>
                <div className="skill-hr"></div>
                <div className="img-skill" id='skillImg' ref={imgRef}>
                    <img src="../../src/assets/img/html-5.png" alt="logo du html"  className='img' id='img1'/>
                    <img src="../../src/assets/img/img-css1.png" alt="logo du css"  className='img' id='img2'/>
                    <img src="../../src/assets/img/img-sass.png" alt="logo de sass"  className='img' id='img3'/>
                    <img src="../../src/assets/img/img-js.png" alt="logo du js"  className='img' id='img4'/>
                    <img src="../../src/assets/img/img-react.png" alt="logo de react"  className='img' id='img5'/>
                    <img src="../../src/assets/img/img-php.png" alt="logo de php"  className='img' id='img6'/>
                    <img src="../../src/assets/img/img-symfony.png" alt="logo de symfony"  className='img' id='img7'/>
                    <img src="../../src/assets/img/img-mysql.png" alt="logo de mysql"  className='img' id='img8'/>
                </div>
                <div className="container-btn" id='btnCv'>
                <button className='btn-cv' onClick={handleDownload}>Mon CV</button>
                </div>
            </section>
            </main>
        </>
    );
};

export default Skill;