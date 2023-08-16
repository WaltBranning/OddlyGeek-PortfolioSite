// Component to create the Header Bar with navigation links
import {useState} from 'react';
import 'primeicons/primeicons.css'

function changeTheme (e) {
    let root = document.documentElement;
    let new_color = getComputedStyle(root).getPropertyValue(`--brand-${e}`);
    let new_color_light = getComputedStyle(root).getPropertyValue(`--brand-${e}-light`);
    let new_color_glow = getComputedStyle(root).getPropertyValue(`--brand-${e}-glow`);
    root.style.setProperty('--brand-color', new_color);
    root.style.setProperty('--brand-color-light', new_color_light);
    root.style.setProperty('--brand-color-glow', new_color_glow);
}

function HeaderComponent () {

    // const [brandColor, setBrandColor] = useState('Hello Brand Color!');
    // console.log(brandColor)

    return (
        <header >
            <div className='header-content'>
                <div className='headerLinks' id='navLinks'>
                    <a href='#' className='nav-link highlight hover-glow'>What</a>
                    <a href='#' className='nav-link highlight hover-glow'>Professional</a>
                    <a href='#' className='nav-link highlight hover-glow'>Projects</a>
                    <a href='#' className='nav-link highlight hover-glow'>Who</a>
                </div>
                <div className='headerLinks' id='extraLinks'>
                    <div className='theme-bar'>
                        <button className='theme-button' id='green' onClick={() => changeTheme('green')}></button>
                        <button className='theme-button' id='blue' onClick={() => changeTheme('blue')}></button>
                        <button className='theme-button' id='red' onClick={() => changeTheme('red')}></button>
                        <button className='theme-button' id='orange'onClick={() => changeTheme('orange')}></button>
                    </div>
                    <a href='https://www.linkedin.com/in/walter-branning' className='link-icon nav-link highlight hover-glow pi pi-linkedin'></a>
                    <a href='https://github.com/WaltBranning' className='link-icon nav-link highlight hover-glow pi pi-github'></a>
                    <a href='mailto:Walter@oddlygeek.com' className='link-icon nav-link highlight hover-glow pi pi-envelope'></a>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;