import styles from '../styles/Header.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Header = () => {
    const [pageChosen, setPageChosen] = useState('Home');
    const [burgerClass, setBurgerClass] = useState(styles.header_menu_bar + ' ' + styles.header_menu_unclicked)
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [menuListClass, setMenuListClass] = useState(styles.header_menu_list + ' ' + styles.hidden)

    useEffect(() => {
        window.addEventListener('scroll', function () {
            let header = document.querySelector('.' + styles.header);
            if (header) {
                if (window.scrollY > 0)
                {
                    header.classList.add(styles.header_active)
                }
                else
                {
                    header.classList.remove(styles.header_active)
                }
            }
        })
        
        const chosen = document.querySelectorAll('a')
        if (chosen) {
            chosen.forEach(page => {
                page.classList.remove(styles.header_routes_active)
                if (page.id == pageChosen)
                    page.classList.add(styles.header_routes_active)
            })
        }
    }) 

    const handleClickMenu = () => {
        if (isMenuClicked) {
            setBurgerClass(styles.header_menu_bar + ' ' + styles.header_menu_clicked);
            setMenuListClass(styles.header_menu_list + ' ' + styles.visible);
        }
        else {
            setBurgerClass(styles.header_menu_bar + ' ' + styles.header_menu_unclicked);
            setMenuListClass(styles.header_menu_list + ' ' + styles.hidden);
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <div className={styles.header}>
            <div className={styles.header_mentorias}>
                Mentorias
            </div>
            <div className={styles.header_routes}>
                <Link href='/#' id='Home' className={styles.link}
                    onClick={() => setPageChosen('Home')}>
                    Home
                </Link>
                <Link  href='/#' id='Exp' className={styles.link}
                    onClick={() => setPageChosen('Exp')}>
                    Experience
                </Link>
                <Link  href='/#' id='About' className={styles.link}
                    onClick={() => setPageChosen('About')}>
                    About me
                </Link>
            </div>
            <div className={styles.header_menu} onClick={handleClickMenu}>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
                <div className={burgerClass}></div>
            </div>
        </div>
    )
}

export default Header;