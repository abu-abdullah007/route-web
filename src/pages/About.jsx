import { useEffect } from 'react'
import css from '../assets/about.module.css'
import logo from '../assets/aboutPage/photo1.jpg'
import sensei from '../assets/aboutPage/sensei.jpg'
import take1 from '../assets/aboutPage/take1.jpg'
import take2 from '../assets/aboutPage/take2.jpg'
import box1 from '../assets/aboutPage/box1.jpg'
import box2 from '../assets/aboutPage/box2.jpg'
import box3 from '../assets/aboutPage/box3.jpg'
import box4 from '../assets/aboutPage/box4.jpg'


const About = () => {
    useEffect(()=>{
        const firstBtn = document.querySelector('#firstBtn')
        const section2 = document.querySelector('#section2')
        const imageRight = document.querySelector('#imageRight')
        const section2Text = document.querySelector('#section2Text')
        const section3 = document.querySelector('#section3')
        const section2Btn = document.querySelector('#section2Btn')
        const section3Btn = document.querySelector('#section3Btn')
        const section4 = document.querySelector('#section4')
        const section4Boxes = document.querySelectorAll('#section4Box')

        firstBtn.addEventListener("click",()=>{
            section2.scrollIntoView({behavior:"smooth"})
        })

        section2Btn.addEventListener("click",()=>{
            section3.scrollIntoView({behavior:"smooth"})
        })

        window.addEventListener("scroll",()=>{
            if(imageRight.getBoundingClientRect().top > 254){
                imageRight.style.transform = "translate(0,0)"
                imageRight.style.opacity = "1"
                setTimeout(()=>{
                    section2Text.style.transform = "translateX(130px)"
                    section2Text.style.opacity = "1"
                },600)
            }

            if(section3.getBoundingClientRect().top < 209){
                section3.style.opacity = "1"
            }

            if(section4.getBoundingClientRect().top < 200){
                section4Boxes.forEach((sectionBox,index)=>{
                    setTimeout(()=>{
                        sectionBox.style.opacity = "1"
                        sectionBox.style.transform = "translateX(0)"
                    },index * 400)
                })
            }
        })

        section3Btn.addEventListener("click",()=>{
            section4.scrollIntoView({behavior:"smooth"})
        })
    })

    return (
        <>
            <section className={css.section1}>
                <div className={css.sectionCenter}>
                    <div className={css.left} id='imgDiv'>
                        <img src={logo} alt="young karate organization logo" />
                        <div className={css.upper}></div>
                    </div>
                    <div className={css.right}>
                        <div className={css.textSection} id='textDiv'>
                            <div className={css.textCenter}>
                                <p>Our martial arts school name is <h4>Young Karate Organization </h4> And our respected sensei and founder of Young Karate Organization, <h5><a href="">Sheikh Ruhul Amin</a></h5></p><br />
                                <p>We currently teach <h4><a href="https://en.wikipedia.org/wiki/Shit%C5%8D-ry%C5%AB" target='blank'>shito-ryu karate</a></h4> at the Young Karate Organization. It is a karate style sanctioned by the World Karate Federation and recognized worldwide</p>

                                <div className={css.btn}>
                                    <button id='firstBtn'>See More.. <i className="fa-solid fa-arrow-down"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.section2} id='section2'>
                <div className={css.section2Center}>
                    <div className={css.section2Left}>
                        <div className={css.section2Text} id='section2Text'>
                            <p>Our Honorable Sensei Sheikh Ruhul Amin. He is a committee member of the Divisional Referee Board of the Bangladesh Karate Federation (BKF), and holds a 5th Dan black belt from the Japan Karate Federation (JKF) and the Martial Arts Confederation.</p><br />
                            <p>He is also proficient and blackbelted in multiple martial arts styles, blackbelted in International Taekwondo style, and also blackbelted in Kung Fu.</p><br />
                            <p>He has been successfully teaching martial arts to Khulna students who are interested in martial arts for over 35 years, our Young Karate Organization (YKO) students have an exam pass rate of 98%.</p>

                            <div className={css.btn2}>
                                <button id='section2Btn'>Explore More.. <i className="fa-solid fa-arrow-down"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className={css.section2Right} id='imageRight'>
                        <img src={sensei} alt="sensei sheikh ruhul amin" />
                    </div>
                </div>
            </section>
            <section className={css.section3} id='section3'>
                <div className={css.section3Center}>
                    <div className={css.section3Left}>
                        <div className={css.image}>
                            <img src={take1} alt="sensei photo" />
                        </div>
                        <div className={css.text}>
                            <div className={[css.textExtraCenter,css.leftExtra].join(' ')}>
                                <p>Our Honorable Sensei Sheikh Ruhul Amin receiving Referee Seminar Certificate from Khulna District Sports Association General Secretary Moazzam Rashidi Doja</p><br />
                                <p>Bangladesh Karate Federation Joint Secretary and International Karate Federation Referee Tulu Ush Shams were also present on the occasion.</p>
                            </div>
                        </div>
                    </div>
                    <div className={css.section3Right}>
                        <div className={css.text}>
                            <div className={[css.textExtraCenter,css.rightExtra].join(' ')}>
                                <p>Our Honorable Sensei Sheikh Ruhul Amin Seminar Coach receiving the Honorable Crest from Japan Karate Federation Trainer and Referee Sihan Haditmo Kanno and Sihan Noriyuki Ise</p><br />
                                <p>The event was held on January 25-25, 2024, after which the seminar was followed by the Black Belt Dan Grading Exam, in which we along with our Sensei passed.</p>
                                <div className={css.btnShow}>
                                    <button id='section3Btn'>Click To See Photo</button>
                                </div>
                            </div>
                        </div>
                        <div className={css.image}>
                            <img src={take2} alt="sensei photo" />
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.section4} id='section4'>
                <div className={css.section4Center}>
                    <div className={css.section4Box} id='section4Box'>
                        <div className={css.upper}>
                            <img src={box1} alt="" />
                        </div>
                        <div className={css.lower}>
                            <p>Our Honorable Sensei Sheikh Ruhul Amin receiving his Dan Certificate from Sihan Haditmo Kanno</p>
                        </div>
                    </div>
                    <div className={css.section4Box} id='section4Box'>
                        <div className={css.upper}>
                            <img src={box2} alt="" />
                        </div>
                        <div className={css.lower}>
                            <p>After the seminar all of us black belts were locked in a frame.Our sensei is also present with us</p>
                        </div>
                    </div>
                    <div className={css.section4Box} id='section4Box'>
                        <div className={css.upper}>
                            <img src={box3} alt="" />
                        </div>
                        <div className={css.lower}>
                            <p>A few of us from our Young Karate Organization with Sihan Haditmo Kanno. Our respected sensei Sheikh Ruhul Amin is with us</p>
                        </div>
                    </div>
                    <div className={css.section4Box} id='section4Box'>
                        <div className={css.upper}>
                            <img src={box4} alt="" />
                        </div>
                        <div className={css.lower}>
                            <p>After receiving the dan certificate we are bound in a frame with our respected sensei</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.section5}>
                <div className={css.section5Center}>
                    <div className={css.centerFill}>
                        <div className={css.leftFill}></div>
                        <div className={css.rightFill}>
                            <div className={css.rightFillCenter}>
                                <div className={css.styleBox}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default About;