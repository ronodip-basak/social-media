import { useState } from "react";


export default function({user}){
    
    const toggleNav = () => {
        setNavExpanded(!navExpaned)
    }

    const [navExpaned, setNavExpanded] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-light ">
            <div className="container-fluid">

                <a className="navbar-brand" href="#">Brand</a>

                <button className="navbar-toggler" type="button" onClick={toggleNav} data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
                </button>

                <div className={ navExpaned ? "collapse navbar-collapse show" : "collapse navbar-collapse" } id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>

                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                        <a className="dropdown-item" href="#">Action</a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                        <hr className="dropdown-divider" />
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </li>
                    </ul>
                    </li>

                </ul>

                
                {user 
                    ?
                        <ul className="navbar-nav d-flex flex-row me-1">
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#">My Profile</a>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#">Log Out</a>
                            </li>
                        </ul>
                    :
                        <ul className="navbar-nav d-flex flex-row me-1">
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#">Log In</a>
                            </li>
                            <li className="nav-item me-3 me-lg-0">
                                <a className="nav-link" href="#">Sign Up</a>
                            </li>
                        </ul>
                }
                    
                

                </div>
            </div>
        </nav>
    );
}