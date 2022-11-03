import '../App.css';
import '../styles/Home.css';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className='Home'>
        {/* TITLE */}
        <div>
            <h2 className="projectName">AntiCopyPaster: Duplicate Code IntelliJ Plugin</h2>
        </div>

        {/* PROJECT INFORMATION */}
        <div className='SynopsisBlock'>
            <h3>Project Synopsis:</h3>
            <p>The AntiCopyPaster is an IntelliJ plug-in originally created to encourage software developers to use the Refactor menu to avoid duplicating code. The current implementation of the plug-in uses an AI trained model in order to decide if copy/pasted code is similar enough to other code within the file, and shows the user a pop-up to use Extract Method refactoring. The use of the AI model removes the developers from how the plug-in functions and can lead to a lack of trust in the pop-up that occurs. The goal of this senior project is to utilize the metrics currently being used by the AI model and instead allow the user to customize the plugin’s usage of those metrics. This should also have the effect of making the plug-in more lightweight than the current version. All of this code will be contained in a fork of the current AntiCopyPaster plug-in repo and the code will be entirely open-source. The minimum viable product of this senior project is to have a fully functional menu for developers to use with this plug-in that allows them to adjust the sensitivity of the AntiCopyPaster, which will reduce the number of false positive flags. In addition, the stretch goal is to have the AntiCopyPaster search through the entire IntelliJ project rather than just a single file. These contributions shall encourage users to take the pop-ups from the plugin more seriously and increase the use and knowledge of IntelliJ’s refactoring tools among the IntelliJ user base.</p>
        </div>

        {/* PROJECT TIMELINE */}
        <div className='TimelineBlock'>
            <h3>Project Timeline:</h3>
            <div className='FeatureBlock'>
                <p>Metrics Model Plan</p>
            </div>
            <div className='FeatureBlock'>
                <p>Backend Metrics Model</p>
            </div>
            <div className='FeatureBlock'>
                <p>Functioning Metrics Menu</p>
            </div>
        </div>
    </div>
  );
}

export default Home;
