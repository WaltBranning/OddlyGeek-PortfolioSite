import 'primeicons/primeicons.css'
import meImage from '../resources/imgs/me.png'

function ContentComponent ({sectionRef}) {
    return (
    <div className='contentWrapper' ref={sectionRef}>
        <section id="who">
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
                        <div id='intro-content' className='toggle-state'>
                            <p><span className='highlight'>Who am I, you ask?</span> Well, I'm a devoted husband and father, my family holds the utmost importance in my life and I cherish this job most of all. Becoming the best provider and role model for them is a job I take very seriously. Striving for excellence not only aligns with my natural desire to take pride in my work but also ensures that my family, too, can take pride in what I do.
                            </p>
                            <p>
                            I'm a naturally curious individual with a passion for solving problems and for creating things. I find immense joy in the process of creation and bringing ideas to life. Whether it's dabbling in 3D printing, tackling software challenges, or venturing into the world of carpentry to build a cozy cabin, I'm always up for a new adventure. I'm fascinated by it all, and you'll often find me engrossed in projects that blend creativity with practicality. My interests and experiences have shaped me into an adaptable and versatile professional, valuable qualities in the ever-evolving field of software engineering.</p>
                        </div>
                </div>

                <div id='intro-more'>

                    <div id='intro-more-content'>
                        <p id='more-press' className='highlight hover-glow' onClick={()=>{
                            const default_state = "Read More";
                            var tog = document.getElementById('intro-content');
                            tog.classList.toggle("toggle-state");
                            var tog_state = document.getElementById('more-press');
                            if (tog_state.innerHTML === default_state) {
                                tog_state.innerHTML = "Show Less";
                        } else {
                            tog_state.innerHTML = default_state;
                        };

                        }}>Read More</p>
                    </div>

                </div>

            </div>
        </section>

        {/* <div className='divider'></div> */}
        <section id='resume'>
            <div className="content" id="pro-section">
                <h1>Experience and Employment History</h1>
                <div id='summary' className='exp-entry'>
                    <h2>Professional Summary:</h2>
                    <p>Building, Learning, Creating - These words reflect my passion and drive to learn how things work, then take that
                    knowledge and apply it. Possessing a naturally curious mind that enjoys discovering why and how things work. While being blessed with an ability to quickly grasp concepts and apply them. This ability along with a willing eagerness to learn, allow for quick adaptation to the meet the requirements of the task at hand. Give me a challenge and I will rise to meet it.</p>
                </div>
                <div className='exp-entry'>
                    
                </div>
            </div>
        </section>

        {/* <div className='divider'></div> */}
        <section id='projects'>
            <div className="content" id="project-section">
                <h1>Projects</h1>
            </div>
        </section>

        {/* <div className='divider'></div> */}
        {/* <section>
            <div className="content" id="who-section">
                <h1>Who</h1>
            </div>
        </section> */}
    </div>
      )
}

export default ContentComponent;