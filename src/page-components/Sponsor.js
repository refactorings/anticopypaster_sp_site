import '../styles/Sponsor.css';

function Sponsor() {
    return (
        <div className='SponsorBlock m-2'>
            {/** SPONSOR INFORMATION  */}
            <div className='m-2'>
                <h4 className="font-medium leading-tight text-xl text-black">Project Sponsor:</h4>
                <p className="text-m m-2 border-l-4 pl-4"><b>Organization: </b><a href="mailto: Xueling.Zhang@rit.edu">Rochester Institute of Technology - Software Engineering Department</a></p>
                <p className="text-m m-2 border-l-4 pl-4"><b>Primary Contact: </b> Mohamed Wiem Mkaouer - <a href="mailto: mwmvse@rit.edu">mwmvse@rit.edu</a></p>
            </div>
        </div>
    )
}

export default Sponsor;