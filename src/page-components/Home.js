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
            <p>The AntiCopyPaster is an IntelliJ Plugin originally created to encourage software developers to use the Refactor menu due to a lack of trust and use of the menu. The current implementation of the plug-in uses an AI model in order to decide if copy/pasted code is similar enough to other code within the file to be refactored out. This removes the developers from how the plug-in functions and can lead to a lack of trust in the pop-up that occurs. The goal of this senior project is to take the metrics currently passed into the AI model, condense them, and make them customizable and transparent. This should also have the effect of making the plug-in more lightweight then the current version. All of this code will be contained in a fork of the current AntiCopyPaster plug-in repo and the code will be entirely open source. The minimum viable product of this senior project is to have a fully functional menu for developers to use with this plug-in that allows them to adjust the sensitivity of the AntiCopyPaster, which will reduce the number of false positive flags. In addition, the stretch goal is to have the AntiCopyPaster search through the entire IntelliJ project rather than just a single file. These contributions shall encourage users to take the pop-ups more seriously and increase use of the refactoring tools available within IntelliJ.</p>
        </div>

        {/* PROJECT TIMELINE */}
        <div className='TimelineBlock'>
            <h3>Project Timeline:</h3>
            <div className='FeatureBlock'>
                <p>Feature 1</p>
            </div>
            <div className='FeatureBlock'>
                <p>Feature 2</p>
            </div>
            <div className='FeatureBlock'>
                <p>Feature 3</p>
            </div>
        </div>
    </div>
  );
}

export default Home;
