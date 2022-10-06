import './App.css';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="App">
    {/* TITLE */}
    <div>

        <h2 className="projectName">AntiCopyPaster: Duplicate Code IntelliJ Plugin</h2>

    </div>

    {/* PROJECT INFORMATION */}
    <div>

        <h3 className="projectHeader">Project Information:</h3>

        <h3>Sponsor:</h3>
        <p><b>Organization:</b> Rochester Institute of Technology - Software Engineering Department</p>
        <p><b>Primary Contact:</b> Mohamed Wiem Mkaouer: <a href="mailto: mwmvse@rit.edu">mwmvse@rit.edu</a></p>

        <h3>Synopsis:</h3>
        <p>The AntiCopyPaster is an IntelliJ Plugin originally created to encourage software developers to use the Refactor menu due to a lack of trust and use of the menu. The current implementation of the plug-in uses an AI model in order to decide if copy/pasted code is similar enough to other code within the file to be refactored out. This removes the developers from how the plug-in functions and can lead to a lack of trust in the pop-up that occurs. The goal of this senior project is to take the metrics currently passed into the AI model, condense them, and make them customizable and transparent. This should also have the effect of making the plug-in more lightweight then the current version. All of this code will be contained in a fork of the current AntiCopyPaster plug-in repo and the code will be entirely open source. The minimum viable product of this senior project is to have a fully functional menu for developers to use with this plug-in that allows them to adjust the sensitivity of the AntiCopyPaster, which will reduce the number of false positive flags. In addition, the stretch goal is to have the AntiCopyPaster search through the entire IntelliJ project rather than just a single file. These contributions shall encourage users to take the pop-ups more seriously and increase use of the refactoring tools available within IntelliJ.</p>

    </div>
    </div>
  );
}

export default Home;
