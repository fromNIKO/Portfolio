import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Project from '../components/Project';
import Skill from '../components/Skill';



const Home = () => {
    return (
        <>
        <Header />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
        </>
    );
};

export default Home;