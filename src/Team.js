import './styles/Team.css';

function Team() {
    return (
        <div>
            {/* TEAM INFORMATION */}
            <div className='TeamBlock'>

                <h3>Team: The Extension She Told You Not To Worry About</h3>

                <div className='CoachBlock'>
                    <h4>Project Coach:</h4>
                    <p>Xueling Zhang: <a href="mailto: Xueling.Zhang@rit.edu">Xueling.Zhang@rit.edu</a></p>
                </div>
                
                <div className='TeammateBlock'>
                    <h4>Project Team:</h4>
                    <p><b>Payton Hall:</b> <i>Communications Lead</i> <a href="mailto: pch3549@rit.edu">pch3549@rit.edu</a></p>
                    <p><b>Trey Pachucki: </b> <i>Tech Lead</i> <a href="mailto: ttp2542@rit.edu">ttp2542@rit.edu</a></p>
                    <p><b>Tyler Pauly: </b> <i>SCRUM Manager</i> <a href="mailto: tap5136@rit.edu">tap5136@rit.edu</a></p>
                    <p><b>Morgan West: </b> <i>Website Manager</i> <a href="mailto: mrw6863@rit.edu">mrw6863@rit.edu</a></p>
                </div>
                
            </div>

        </div>
    )
}

export default Team;