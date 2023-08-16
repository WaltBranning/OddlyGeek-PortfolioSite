import 'primeicons/primeicons.css'
import meImage from '../resources/imgs/me.png'

function ContentComponent () {
    return (
    <div className='contentWrapper'>
        <section>
            <div className="content" id="what-section">

                <div className='introblock-item' >
                    <div id='introblock'>
                        <div id='intro-name'>
                            <h1>Hi! My Name Is <span className='highlight cursive'>Walter</span></h1>
                        </div>

                        <div id='introduction'>
                            <h2>I am an aspiring Software Engineer. Let's create something awesome!</h2>
                        </div>
                    

                    </div>
                        <div id='intro-content'>
                            <p><span className='highlight'>Who am I, you ask?</span> Well, I'm a devoted husband and father, my family holds the utmost importance in my life and I cherish this job most of all. Becoming the best provider and role model for them is a job I take very seriously. Striving for excellence not only aligns with my natural desire to take pride in my work but also ensures that my family, too, can take pride in what I do.
                            </p>
                            <p>
                            I'm a naturally curious individual with a passion for solving problems and for creating things. I find immense joy in the process of creation and bringing ideas to life. Whether it's dabbling in 3D printing, tackling software challenges, or even venturing into the world of carpentry to build a cozy cabin, I'm always up for a new adventure. I'm fascinated by it all, and you'll often find me engrossed in projects that blend creativity with practicality. My diverse interests and experiences have shaped me into an adaptable and versatile professional, which are crucial qualities in the ever-evolving field of software engineering.</p>
                        </div>
                </div>

                <div id='intro-more'>

                    <div id='intro-more-content'>
                        <span className='highlight hover-glow' onClick={()=>{
                            console.log("Clicked See More")
                        }}>See More</span>
                    </div>

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