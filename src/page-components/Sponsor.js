import '../styles/Sponsor.css';

function Sponsor() {
    return (
        <div className='SponsorBlock m-2'>
            {/** SPONSOR INFORMATION  */}
            <div className='m-2'>
                <h4 className="font-medium leading-tight text-xl text-zinc-600">Project Sponsor:</h4>
                <p className="text-m m-2 border-l-4 pl-4 text-zinc-600"><b className='text-zinc-600'>Organization: </b><p className='text-zinc-600'>Rochester Institute of Technology - Software Engineering Department</p></p>
                <p className="text-m m-2 border-l-4 pl-4 text-zinc-600"><b className='text-zinc-600'>Primary Contact: </b> Mohamed Wiem Mkaouer - <a className='text-zinc-600' href="mailto: mwmvse@rit.edu">mwmvse@rit.edu</a></p>
            </div>
        </div>
    )
}

export default Sponsor;