import React from 'react';


function Product() {
    return (
        <div>
            <div className="d-flex">
                <div className="mr-auto p-2"><h3>Insights</h3></div>
                <div className="p-2" ><button style={{ backgroundColor: "white", color: '#e6005c' }}>ADD NEW BRAND</button></div>
                {/* <div className="p-2" ><button style={{ backgroundColor: "#e6005c", color: 'white' }}>CREATE NEW CAMPAIGN</button></div> */}
                <div className="dropdown p-2">
                    <button className="dropbtn" style={{ backgroundColor: "#e6005c", color: 'white' }}>CREATE NEW CAMPAIGN</button>
                    <div className="dropdown-content mt-2">
                        <a href="#"><i class="fa fa-database" aria-hidden="true" style={{ color: '#e6005c' }}></i> Paid Compaign</a>
                        <a href="#"><i class="fa fa-database" aria-hidden="true" style={{ color: '#e6005c' }}></i> Barter Compaign</a>
                        <a href="#"><i class="fa fa-database" aria-hidden="true" style={{ color: '#e6005c' }}></i> Custom Content</a>
                        <a href="#"><i class="fa fa-database" aria-hidden="true" style={{ color: '#e6005c' }}></i> Social for good</a>
                        <a href="#"><i class="fa fa-database" aria-hidden="true" style={{ color: '#e6005c' }}></i> Resources</a>
                    </div>
                </div>
            </div>
            <br />
            <nav className="navbar navbar-expand-sm">
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" style={{ color: '#e6005c' }}>Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="flex-container">
                <div className="card">
                <span><i className="fa fa-database" aria-hidden="true" style={{ color: '#e6005c' }}></i></span>
                    <p>Architect & Engineer</p>
                    <h3>John Doe</h3>
                </div>
                <div className="card">
                <span><i className="fa fa-database" aria-hidden="true" style={{ color: '#e6005c' }}></i></span>
                    <p>Architect & Engineer</p>
                    <h3>John Doe</h3>
                </div>
                <div className="card">
                <span><i className="fa fa-database" aria-hidden="true" style={{ color: '#e6005c' }}></i></span>
                    <p>Architect & Engineer</p>
                    <h3>John Doe</h3></div>  
                <div className="card">
                <span><i className="fa fa-database" aria-hidden="true" style={{ color: '#e6005c' }}></i></span>
                    <p>Architect & Engineer</p>
                    <h3>John Doe</h3>
                </div>
                <div className="card"><span><i className="fa fa-database" aria-hidden="true" style={{ color: '#e6005c' }}></i></span>
                    <p>Architect & Engineer</p>
                    <h3>John Doe</h3></div>
                <div className="card">
                <span><i className="fa fa-database" aria-hidden="true" style={{ color: '#e6005c' }}></i></span>
                    <p>Architect & Engineer</p>
                    <h3>John Doe</h3></div> 
            </div>
            <div>
                <div className="card card-invite mt-3">
                    <span><i className="fa fa-database" aria-hidden="true" style={{ color: '#e6005c' }}></i></span>
                    <p>Architect & Engineer</p>
                    <h3>John Doe</h3>
                </div>
            </div>

        </div>

    );
}

export default Product;
