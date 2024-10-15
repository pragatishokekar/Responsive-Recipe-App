import { Link ,useLocation } from "react-router-dom"


import { useState } from "react"
import Sidebar from "./Sidebar"
import {faHome ,faList,faCog} from "@fortawesome/free-solid-svg-icons"
import { icon } from "@fortawesome/fontawesome-svg-core"

export default function Navbar(){
    const[showSidebar , setShowSidebar]=useState(false)
    const location = useLocation()
    const links=[
        {
            name:"Home",
            path:"/",
            icon:faHome
        },
        {
            name:"Recipes",
            path:"/recipes",
            icon:faList
        },
        {
            name:"Setting",
            path:"/setting",
            icon:faCog
        }
        ]

        function closeSidebar(){
            setShowSidebar(false)
        }
    return (<>
        <div className="navbar container">
            <Link to="/" href="#!" className="logo">F<span>oo</span>dies</Link>
            <div className="nav-links">
            { links.map(link=>(
                    <Link  className={location.pathname === link.path ? " active" : ""} to ={link.path} key={link.name}>{link.name}</Link>
                ))
            }
                {/* <a href="#!">Home</a>
                <a href="#!">Recipe</a>
                <a href="#!">Settings</a> */}
            </div>
            <div onClick ={()=> setShowSidebar(true)}className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
        {showSidebar &&  <Sidebar close={closeSidebar} links={links}/>}
    
    </>
    )
}