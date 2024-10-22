import { useState } from 'react';
import './PatientDetails.css';

function PatientDetailsTab({selectedTab,setSelectedTab}:any){
//  const [selectedTab, setSelectedTab] = useState<string>('');
    return (
        <>
        <div className="TabPane">
            <div className='TabCategory' onClick={() => setSelectedTab('Info')}>
                Info
                {selectedTab === 'Info' && <div className='SelectedTab'></div>}
            </div>
            <div className='TabCategory' onClick={() => setSelectedTab('Medication')}>
                Medication
                {selectedTab === 'Medication' && <div className='SelectedTab'></div>}
            </div>
            <div className='TabCategory' onClick={() => setSelectedTab('Appointment')}>
                Appointments
                {selectedTab === 'Appointment' && <div className='SelectedTab'></div>}
            </div>
            <div className='TabCategory' onClick={() => setSelectedTab('Condition')}>
                Conditions
                {selectedTab === 'Condition' && <div className='SelectedTab'></div>}
            </div>
        </div>
    </>
    
    )
}
export default PatientDetailsTab;