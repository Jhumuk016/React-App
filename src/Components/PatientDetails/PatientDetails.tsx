import { useLocation } from "react-router-dom";
import PatientTabs from './PatientCategoriesTab'
import './PatientDetails.css'
import Info from './Info'
import { useState } from "react";
import chatnotIcon from '../../assets/chatbot-icon.svg'
import translateIcon from '../../assets/translateIcon.png'

function PatientDetails(){

   const location = useLocation();
   console.log("uselocation",location.state )
   const [selectedTab,setSelectedTab] = useState<string>('Info');


    return (
        <>
        <div className="Tabs">
            <div className="DetailsPane">
             <PatientTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
          </div>
        <div className="DetailsDiv">
            <Info patient={location.state} />
        </div>
     
           <div className="AgentSupportIcons">
            <img className="SupportIcon" src={chatnotIcon} />
            <img className="SupportIcon" src={translateIcon} />
           </div>
           </div>
        </>
    )
}

export default PatientDetails;