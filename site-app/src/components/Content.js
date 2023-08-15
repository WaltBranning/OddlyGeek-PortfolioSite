import 'primeicons/primeicons.css'

function ContentComponent () {
    return (
    <div className='contentWrapper'>
        <section>
            <div className="content" id="what-section">
                <div id='introblock'>
                <h1>Hi! My Name Is <span className='highlight cursive'>Walter</span></h1>
                <h2>I am an aspiring Software Engineer. Let's create something awesome!</h2>
                </div>
            </div>
        </section>

        {/* <div className='divider'></div> */}
        <section>
            <div className="content" id="pro-section">
                <h1>Professional</h1>
            </div>
        </section>

        {/* <div className='divider'></div> */}
        <section>
            <div className="content" id="project-section">
                <h1>Projects</h1>
            </div>
        </section>

        {/* <div className='divider'></div> */}
        <section>
            <div className="content" id="who-section">
                <h1>Who</h1>
            </div>
        </section>
    </div>
      )
}

export default ContentComponent;