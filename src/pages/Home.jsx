import css from '../assets/home.module.css'
import cover3 from '../assets/cover3.jpg'
import cover2 from '../assets/cover2.jpg'
import cover4 from '../assets/cover4.jpg'
import cover5 from '../assets/cover5.jpg'
import cover6 from '../assets/cover6.jpeg'
import { useEffect } from 'react';

const Home = () => {
    useEffect(()=>{
        const sectionMain = document.querySelector('#mainSection')
        let bgImage = [cover2,cover3,cover4,cover5,cover6]
        let bgColor = "linear-gradient(#00000096,#0000009a)"
        let count = 0

        window.addEventListener("load",()=>{
            function changeBg(){
                sectionMain.style.background = `${bgColor},url(${bgImage[count]})`;
                sectionMain.style.backgroundRepeat = "no-repeat";
                sectionMain.style.backgroundSize = "cover";
                sectionMain.style.backgroundPosition = "center";
                setTimeout(()=>{
                    sectionMain.style.backgroundPosition = "0% 300%";
                    sectionMain.style.transition = "1s"
                },2000)
                count = (count + 1) % bgImage.length
            }
    
            setInterval(changeBg,3000)  
        })
    })

    return (
        <section className={css.section1} id='mainSection'>
        </section>
    );
}
 
export default Home;