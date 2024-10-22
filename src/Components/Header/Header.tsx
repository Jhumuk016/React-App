import { useEffect, useState } from "react";
import './Header.css'
import profileIcon from '../../assets/profileIcon.svg'



function Header(){
    const [page, setPage] = useState("home");
    
    useEffect(()=>{
     setPage(window.location.pathname.split('/')[1]);
    },[])


    return (
        <>
       
            <div className="HeaderWrapper">
                <div className="HeaderContent">
                <div className="DisplayName">  <h4 className="LogoFont"> LOGO</h4> <div className="VerticalLine"/> <h5>Initiative: Small Language model</h5>  </div>

                   <div className="ProfileIcon">
                     <img src={profileIcon} />
                   </div>
                </div>
               
            </div>
    
        </>
    )
}

export default Header;