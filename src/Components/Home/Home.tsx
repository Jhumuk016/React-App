import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
// import viteLogo from '../../vite.svg'
import './Home.css'
import PatientData from '../PatientTable/PatientData'


function Home(){
    const [count, setCount] = useState(0)
    return (
    <>
        <div>
            <PatientData />
        </div>
    </>
    )
}
export default Home;