import { useState, useRef, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import LetterAnimation from "./LetterAnimation";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import logoHead from '../assets/img/logo-head.png'
import vid from '../assets/img/vid-logo.mp4'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


const Header = () => {



  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  const arrowAppear = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(
      arrowAppear.current, 
      {
        opacity: 0,
      },
      {
        opacity : 1,
        duration: 1,
        scrollTrigger: {
          trigger: arrowAppear.current,
          start: 'top 50%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    )
  }, [])


  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
     const titleRef = useRef();

   const onLoad = () => {
     gsap.timeline().fromTo(".img-logo",
     {
       opacity: 0,
       
     },
     {
       opacity: 1,
       
       stagger: 0.33,
       delay: .5,
       duration: 2
     }
     )
     .to(".img-logo", {
       margin: "0 1vw",
       delay: 0.8,
       duration: 1,
       scale: 1.1,
     })
     .to(".img-logo", {
       duration: 0.5
     })
     .to(".container-welcome", {
       duration: 3,
        y: -2000,
     })
 }

 useEffect(() => {
     onLoad()
   }, [])

   const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
     let isMobile = window.innerWidth <= 787;
     if (isMobile) {
      let navbar = document.querySelector('.container-hamburger');
      let bgColor = scrollY >= 100 ? '#333': 'transparent';
      const yPos = scrollY > 0 ? -110 : 0;
      
      
      gsap.to(navbar, {
        y: yPos,
       
        background: bgColor,
        duration: .3,
        ease: 'power3.out',
      })
    } else if(!isMobile) {

      let navbar = document.querySelector('.container-hamburger');
      let bgColor = scrollY >= 100 ? '#333': 'transparent';
      
      gsap.to(navbar, {
        y:scrollY > 0 ? -60 : 0,
        background: bgColor,
        duration: .3,
        ease: 'power3.out',
      })
    }
  }, [scrollY]);



    return (
      <>

           <header>
              <div className="container-welcome" ref={titleRef} >
              <video ref={videoRef} autoPlay muted className="img-logo">
                <source src={vid} type="video/mp4" />
              </video>
            </div>  


                <div className="first-nav" id="up">
                    <div className="left-part">
                <i className="fa-solid fa-phone" />
                <p className='p-mail'>(+33)6.83.68.07.16</p>
                </div>

                <div className="right-part">
                <i className="fa-solid fa-envelope"></i>
                <a href='mailto:nicodevfs@gmail.com'>nicodevfs@gmail.com</a>
                </div>

                <div className="nav-social-part">
                    <a href="https://www.linkedin.com/in/nicolas-torres-a72355218/">
                    <i className="fa-brands fa-linkedin-in">
                </i>
                </a>

                <a href="https://github.com/fromNicolas">
                <i className="fa-brands fa-github">
                </i>
                </a>
                </div>

                </div>

<div className="container-hamburger">
                <nav className="hamburger-menu">
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div className={`menu-overlay ${isOpen ? 'open' : ''}`} onClick={toggleMenu} />
      <div className={`menu-container ${isOpen ? 'open' : ''}`}>
        <ul>
          <a href="#up" onClick={closeMenu}><li>Accueil</li></a>
          <a href="#about" onClick={closeMenu}><li>À propos</li></a>
          <a href="#skill" onClick={closeMenu}><li>Compétences</li></a>
          <a href="#project" onClick={closeMenu}><li>Mes réalisations</li></a>
          <a href="#contact" onClick={closeMenu}><li>Contact</li></a>
        </ul>
      </div>
      <a href=""><img src={logoHead} alt="logo du site" className="logo-header"/></a>

      <div className="nav-flex">

<div>
      <a href="" className="a-header-logo-max"><img src={logoHead} alt="logo du site" /></a>
      </div>
      <ul className="ul-flex">

          <li >
        <a href="#up" >
          Accueil
        </a>
        </li>

          <li >
        <a href="#about" >
        À propos
        </a>
        </li>
        
          <li>
        <a href="#skill" >
        Compétences
        </a>
        </li>

          <li>
        <a href="#project">
        Mes réalisations
        </a>
        </li>

          <li>
        <a href="#contact">
        Contact
        </a>
        </li>

      </ul>
      </div>

    </nav>
    </div>


      <div className="text-header">
            <h3>Nicolas Torres</h3>

            <div className="content">
        <LetterAnimation className="content" text="Développeur web en alternance" />
        </div>
            
      </div>

      <div className="arrow">

      <a href="#about"><i className="fa-solid fa-angles-down"></i></a>
      </div>
      
      
      <div
        ref={arrowAppear}
      >
    <a href="#up" className="up" id="upAnim"><i className="fa-solid fa-circle-chevron-up"></i></a> 
        
      </div>
    
           
        
            </header> 
        </>
    );
};


export default Header;