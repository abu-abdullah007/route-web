import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import css from '../assets/navBar.module.css'
import logo from '../assets/yko.png'

const NavBar = () => {
    useEffect(()=>{
        const hideNav = document.querySelector('#hideNav')
        const button = document.querySelector('#hideRemoveButton')
        const hideButton = document.querySelector('#hideButton')

        button.addEventListener("click",()=>{
            hideNav.style.transform = "translateY(0px)"
        })

        hideButton.addEventListener("click",()=>{
            hideNav.style.transform = "translateY(-600px)"
        })

    })

    return (
        <>
            <div className={css.mainNav}>
                <div className={css.logo}>
                    <a href="/"><img src={logo} alt="young karate organization" /></a>
                </div>
                <div className={css.navItem}>
                    <a href="/">home</a>
                    <a href="/about">about</a>
                    <a href="/training">training</a>
                    <a href="/contact">contact</a>
                </div>
                <div className={css.hiddenNav} id='hideRemoveButton'>
                    <div className={css.btnBox}></div>
                    <div className={css.btnBox}></div>
                    <div className={css.btnBox}></div>
                </div>
            </div>
            <div className={css.hiddenList} id='hideNav'>
                <i className="fa-solid fa-x" id='hideButton'></i>
                <a href="/">home</a>
                <a href="/about">about</a>
                <a href="/training">training</a>
                <a href="/contact">contact</a>
            </div>
            <Outlet/>
        </>
    );
}
 
export default NavBar;