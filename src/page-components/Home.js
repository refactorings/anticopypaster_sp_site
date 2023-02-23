import '../App.css';
import '../styles/Home.css';

function Home() {
  return (
    <div className='Home'>
        {/* TITLE */}
        <div>
            <h3 className="font-medium leading-tight text-3xl mt-0 mb-8 text-zinc-400">AntiCopyPaster: Duplicate Code IntelliJ Plugin</h3>
        </div>

        <div className="inline-flex">
            {/* PROJECT INFORMATION */}
            <div className='m-4 p-4'>
                <h3 className='font-medium leading-tight text-xl mt-0 mb-4 text-black'>Project Synopsis:</h3>
                <p className="border-l-4 pl-4">The AntiCopyPaster is an IntelliJ plug-in originally created to encourage software developers to use the Refactor menu to avoid duplicating code. The current implementation of the plug-in uses an AI trained model in order to decide if copy/pasted code is similar enough to other code within the file, and shows the user a pop-up to use Extract Method refactoring. The use of the AI model removes the developers from how the plug-in functions and can lead to a lack of trust in the pop-up that occurs. The goal of this senior project is to utilize the metrics currently being used by the AI model and instead allow the user to customize the plugin’s usage of those metrics. This should also have the effect of making the plug-in more lightweight than the current version. All of this code will be contained in a fork of the current AntiCopyPaster plug-in repo and the code will be entirely open-source. The minimum viable product of this senior project is to have a fully functional menu for developers to use with this plug-in that allows them to adjust the sensitivity of the AntiCopyPaster, which will reduce the number of false positive flags. In addition, the stretch goal is to have the AntiCopyPaster search through the entire IntelliJ project rather than just a single file. These contributions shall encourage users to take the pop-ups from the plugin more seriously and increase the use and knowledge of IntelliJ’s refactoring tools among the IntelliJ user base.</p>
            </div>

            {/* PROJECT TIMELINE */}
            <div className='m-4 p-4 rounded'>
                <h3 className="font-medium leading-tight text-xl mt-0 mb-2 text-black">Project Timeline:</h3>
                <div className="flex-col">
                    <div className=''>
                        <p className='font-medium leading-tight text-m mt-2 mr-2 mb-2 border-l-4 pl-4' href="https://docs.google.com/document/d/1eDYSmdQ1mk26TYgQa8wtxAfeu77ZFJJS7wr-kB5ctbw/edit?usp=sharing">Metrics Model Plan</p>
                    </div>
                    <div>
                        <p className="font-medium leading-tight text-m mt-2 mr-2 mb-2 border-l-4 pl-4">Backend Metrics Model</p>
                    </div>
                    <div>
                        <p className='font-medium leading-tight text-m mt-2 mr-2 mb-2 border-l-4 pl-4'>Functioning Metrics Menu</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
