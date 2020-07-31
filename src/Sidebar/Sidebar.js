import React from 'react';



function Sidebar() {
    return (
        <div className="sidebar">
            <a><i className="fa fa-bars" aria-hidden="true"></i></a>
            <a href="#home"><i class="fa fa-volume-up" aria-hidden="true"></i></a>
            <a href="#database"><i className="fa fa-database" aria-hidden="true"></i></a>
            <a href="#clients"><i className="fa fa-fw fa-user" aria-hidden="true"></i></a>
            <a href="#settings"><i className="fa fa-cog" aria-hidden="true"></i></a>
          
        </div>
    );
}

export default Sidebar;
