import '../styles/Team.css';

function Team() {
    return (
        <div className="m-4 p-4 items-center flex-col flex-grow">
            <h3 className="font-bold text-2xl mt-2 mb-8">Meet the Team!</h3>

            {/* TEAM INFORMATION */}
            <div className='m-2'>
                <div className='m-2'>
                    <h4 className="font-medium leading-tight text-xl text-black">Project Coach:</h4>
                    <p className="text-m m-2 mb-8 border-l-4 pl-4"><b>Xueling Zhang: </b><a href="mailto: Xueling.Zhang@rit.edu">Xueling.Zhang@rit.edu</a></p>
                </div>
            </div>

            <div className='m-2'>
                <h3 className="font-medium leading-tight text-xl m-2 text-black">Project Team:</h3>
                <div className='m-4'>
                    <p className="text-m m-2"><b>Payton Hall:</b> <i>Communications Lead</i> <a href="mailto: pch3549@rit.edu">pch3549@rit.edu</a></p>
                    <p className="text-s m-2 border-l-4 pl-4">Hello everyone! My name is Payton Hall and I am the communications lead for our senior project team. This role entails any and all communication with our sponsor so if you have any questions feel free to reach out. A little about myself I have previously cooped at Paychex and L3Harris Technologies and plan to return to L3Harris after my last year here at RIT. I could not be more excited to be working on this project and I cannot wait to get to meet all of you!</p>
                </div>
                <div className='m-4'>
                    <p className="text-m m-2"><b>Trey Pachucki: </b> <i>Tech Lead</i> <a href="mailto: ttp2542@rit.edu">ttp2542@rit.edu</a></p>
                    <p className="text-s m-2 border-l-4 pl-4">Hey everybody, I'm Trey Pachucki and I'm the tech lead of our senior project team. For our team (as of right now) this consists of researching into what makes this plugin tick, as well as how IntelliJ plugins work in general. I have also previously worked at Paychex, as well as Waygate Technologies and don't have any set in stone plans for post-college yet aside from staying in the Rochester area. I'm hype to work with all of you</p>
                </div>
                <div className='m-4'>
                    <p className="text-m m-2"><b>Tyler Pauly: </b> <i>SCRUM Manager</i> <a href="mailto: tap5136@rit.edu">tap5136@rit.edu</a></p>
                    <p className="text-s m-2 border-l-4 pl-4">Hello, I'm Tyler Pauly and I'll be the Scrum Master of our senior project. This will mainly consist of organizing stories/Scrum meetings and making sure everyone is on track during our sprints. I've also worked at Paychex, but I'm still working there part time during this year and will go back to full time after graduation. I'm very exited to work on this plugin and get to know all of you</p>
                </div>
                <div className='m-4'>
                    <p className="text-m m-2"><b>Morgan West: </b> <i>Website Manager</i> <a href="mailto: mrw6863@rit.edu">mrw6863@rit.edu</a></p>
                    <p className="text-s m-2 border-l-4 pl-4">Hello! My name is Morgan West and I am the website manager for our senior project team. I’ll be responsible for uploading all of our documentation to the website and keeping it up to date. Let me know if you have any feedback as I’m looking to grow my skills as a web developer! A little about me is that I co-oped for a year and a half at Blackbaud doing frontend engineering and automated testing on the GrantsConnect and NPOConnect team. I’m so excited to work on this project and learn more about plugin development!</p>
                </div>
            </div>

        </div>
    )
}

export default Team;