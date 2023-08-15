// Component to create the Header Bar with navigation links
import {useState} from 'react';
import 'primeicons/primeicons.css'

function changeTheme (e) {
    console.log(e)

}

function HeaderComponent () {

    const [brandColor, setBrandColor] = useState('Hello Brand Color!');
    console.log(brandColor)

    return (
        <header >
            <div className='header-content'>
                <div className='headerLinks' id='navLinks'>
                    <a href='#' className='nav-link highlight'>What</a>
                    <a href='#' className='nav-link highlight'>Professional</a>
                    <a href='#' className='nav-link highlight'>Projects</a>
                    <a href='#' className='nav-link highlight'>Who</a>
                </div>
                <div className='headerLinks' id='extraLinks'>
                    <div className='theme-bar'>
                        <button className='theme-button' id='green' onClick={() => changeTheme('green')}></button>
                        <button className='theme-button' id='blue' onClick={() => changeTheme('blue')}></button>
                        <button className='theme-button' id='red' onClick={() => changeTheme('red')}></button>
                        <button className='theme-button' id='orange'onClick={() => changeTheme('orange')}></button>
                    </div>
                    <a href='https://www.linkedin.com/in/walter-branning' className='link-icon nav-link highlight pi pi-linkedin'></a>
                    <a href='https://github.com/WaltBranning' className='link-icon nav-link highlight pi pi-github'></a>
                    <a href='mailto:Walter@oddlygeek.com' className='link-icon nav-link highlight pi pi-envelope'></a>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;