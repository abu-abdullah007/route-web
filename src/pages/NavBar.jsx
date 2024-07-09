import { useEffect } from 'react'
import { Outlet,NavLink } from 'react-router-dom'
import css from '../assets/navBar.module.css'
import logo from '../assets/yko.png'
import '../assets/navBar.css'

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
                    <NavLink to="/">home</NavLink>
                    <NavLink to="/about">about</NavLink>
                    <NavLink to="/training">training</NavLink>
                    <NavLink to="/contact">contact</NavLink>
                </div>
                <div className={css.hiddenNav} id='hideRemoveButton'>
                    <div className={css.btnBox}></div>
                    <div className={css.btnBox}></div>
                    <div className={css.btnBox}></div>
                </div>
            </div>
            <div className={css.hiddenList} id='hideNav'>
                <i className="fa-solid fa-x" id='hideButton'></i>
                <NavLink to="/">home</NavLink>
                <NavLink to="/about">about</NavLink>
                <NavLink to="/training">training</NavLink>
                <NavLink to="/contact">contact</NavLink>
            </div>
            <Outlet/>
        </>
    );
}
 
export default NavBar;