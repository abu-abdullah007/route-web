import css from '../assets/home.module.css'
import balance from '../assets/balance2.jpg'
import { useEffect } from 'react';

const Home = () => {
    useEffect(()=>{
        const image = document.querySelector('#image')
        const textSection = document.querySelector('#textSection')

        const slideEffect = () =>{
            if(window.innerWidth > 980){
                setTimeout(()=>{
                    image.style.transform = "translateX(0)"
                    image.style.opacity = "1"
                    image.style.transition = "1s ease-out"
                },400)
            
                setTimeout(()=>{
                    textSection.style.transform = "translateX(-70px)"
                    textSection.style.opacity = "1"
                },700)
            }else{
                setTimeout(()=>{
                    image.style.transform = "translateX(0)"
                    image.style.opacity = "1"
                    image.style.transition = "1s ease-out"
                },400)
            
                setTimeout(()=>{
                    textSection.style.transform = "translate(0px,-200px)"
                    textSection.style.opacity = "1"
                },700)
            }
        }

        window.addEventListener("load",slideEffect)
        window.addEventListener("resize",slideEffect)
    })

    return (
        <>
            <section className={css.section1}>
                <h2>Learn martial arts easily from here</h2>
                <h1>Young Karate Organiztion</h1>
            </section>
            <section className={css.section2}>
                <div className={css.sectionCenter}>
                    <div className={css.left}>
                        <img src={balance} alt="karate man kick upper" id='image' />
                    </div>
                    <div className={css.right}>
                        <div className={css.textSection} id='textSection'>
                            <p>"The only way to truly understand martial arts is to consistently practice and experience it for yourself."</p>
                            <p>"The true measure of a martial artist is not the number of victories, but the number of battles they have fought with honor."</p>
                            <p>"The true measure of a martial artist is not the number of victories, but the number of battles they have fought with honor."</p>
                            <p>"Martial arts is not just about physical strength, it's about mental and emotional strength as well."</p>
                            <p>"Martial arts is a journey that never ends, as there is always room for growth and improvement."</p>
                        </div>
                    </div>
                </div>
                <div className={css.links} id='links'>
                    <a href="/contact"><i className="fa-solid fa-square-phone" ></i></a>
                    <a href="/contact"><i className="fa-solid fa-envelope"></i></a>
                    <a href="/contact"><i className="fa-brands fa-youtube"></i></a>
                    <a href="/contact"><i className="fa-brands fa-square-whatsapp"></i></a>
                </div>
            </section>
        </>
    );
}
 
export default Home;