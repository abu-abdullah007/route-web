import css from '../assets/home.module.css'
import balance from '../assets/balance2.jpg'
import { useEffect } from 'react';

const Home = () => {
    useEffect(()=>{
        const button = document.querySelector('.btn')
        const linkParent = document.querySelector('#hiddenLinkData')
        const button2 = document.querySelector('.btn2')
        const allLinks = document.querySelector('#links')
        const image = document.querySelector('#image')
        const textSection = document.querySelector('#textSection')

        window.addEventListener("scroll",()=>{
            if(image.getBoundingClientRect().top >= 570){
                image.style.transform = "translateX(0)"
                image.style.opacity = "1"
                image.style.transition = "0.7s ease-out"
            }

            if(textSection.getBoundingClientRect().top >= 570){
                setTimeout(()=>{
                    textSection.style.transform = "translateX(-70px)"
                    textSection.style.opacity = "1"
                    textSection.style.transition = "0.9s ease-out"
                },400)
            }
        })

        button2.style.display = "none"

        button.addEventListener("click",()=>{
            linkParent.style.display = "flex";
            linkParent.scrollIntoView({behavior:'smooth'})
            button.style.display = "none"
            button2.style.display = "block"
        })

        button2.addEventListener("click",()=>{
            linkParent.style.display = "none";
            allLinks.scrollIntoView({behavior:'smooth'})
            button2.style.display = "none"
            button.style.display = "block"
        })
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
                    <i className="fa-solid fa-square-phone" ></i>
                    <i className="fa-solid fa-envelope"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-square-whatsapp"></i>
                    <i className="fa-solid fa-angles-down btn"></i>

                    <i className="fa-solid fa-angles-up btn2"></i>
                    <div className={css.linkData} id='hiddenLinkData'>
                        <div className={css.dataCenter} id='mainLink'>
                            <div className={css.info}>
                                <i className="fa-solid fa-square-phone"></i>
                                <p>01711-799715</p>
                            </div>
                            <div className={css.info}>
                                <i className="fa-brands fa-square-whatsapp"></i>
                                <p>01716-421927</p>
                            </div>
                            <div className={css.info}>
                                <a href="https://www.youtube.com/@YoungKarateOrganization" target='blank'><i className="fa-brands fa-youtube"></i>Click To Go Youtube</a>
                            </div>
                            <div className={css.info}>
                                <i className="fa-solid fa-envelope"></i>
                                <p>youngkarateorganization@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default Home;