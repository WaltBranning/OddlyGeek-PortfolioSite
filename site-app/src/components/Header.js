// Component to create the Header Bar with navigation links
import 'primeicons/primeicons.css'

function HeaderComponent () {
    return (
        <header >
            <div className='header-content'>
                <div className='headerLinks' id='navLinks'>
                    <a href='#' className='header-link'>What</a>
                    <a href='#' className='header-link'>Professional</a>
                    <a href='#' className='header-link'>Projects</a>
                    <a href='#' className='header-link'>Who</a>
                </div>
                <div className='headerLinks' id='extraLinks'>
                <a href='https://www.linkedin.com/in/walter-branning' className='header-link pi pi-linkedin'></a>
                <a href='https://github.com/WaltBranning' className='header-link pi pi-github'></a>
                <a href='mailto:Walter@oddlygeek.com' className='header-link pi pi-envelope'></a>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;