import React from 'react';



function Sidebar() {
    return (
        <div className="sidebar">
            <a><i className="fa fa-bars" aria-hidden="true"></i></a>
            <a href="#home"><i className="fa fa-fw fa-home"></i></a>
            <a href="#services"><i className="fa fa-fw fa-wrench"></i></a>
            <a href="#clients"><i className="fa fa-fw fa-user"></i></a>
            <a href="#contact"><i className="fa fa-fw fa-envelope"></i></a>
          
        </div>
    );
}

export default Sidebar;
