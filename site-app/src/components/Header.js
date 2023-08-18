// Component to create the Header Bar with navigation links
import {useState} from 'react';
import 'primeicons/primeicons.css';

function HeaderComponent ({transitionToSection}) {

    function changeTheme (e) {
        const root = document.documentElement;
        const new_color = getComputedStyle(root).getPropertyValue(`--brand-${e}`);
        const new_color_light = getComputedStyle(root).getPropertyValue(`--brand-${e}-light`);
        const new_color_glow = getComputedStyle(root).getPropertyValue(`--brand-${e}-glow`);
        root.style.setProperty('--brand-color', new_color);
        root.style.setProperty('--brand-color-light', new_color_light);
        root.style.setProperty('--brand-color-glow', new_color_glow);
    }

    return (
        <header >
            <div className='header-content'>
                <div className='headerLinks' id='navLinks'>
                    <a onClick={() => transitionToSection(0)} className='nav-link highlight hover-glow'>Who</a>
                    <a onClick={() => transitionToSection(1)}  className='nav-link highlight hover-glow'>Experience</a>
                    <a onClick={() => transitionToSection(2)}  className='nav-link highlight hover-glow'>Projects</a>
                    {/* <a onClick={() => transitionToSection(3)}  className='nav-link highlight hover-glow'>Who</a> */}
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