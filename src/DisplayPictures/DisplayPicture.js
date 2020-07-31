import React from 'react';


function DisplayPicture() {
    return (
        <div>
            <div class="d-flex">
                <div class="mr-auto p-2"><h3>RECENTLY CREATED CAMPAIGNS</h3></div>
                <div class="p-2"  style={{ color: '#e6005c' }}> View all <i className="fa fa-arrow-right" aria-hidden="true"></i></div>
            </div>
           
            <div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="pic1" />
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="pic2" />
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="pic3" />
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="pic14" />
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="pic5" />
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="pic6" />
                </div>
                
            </div>
        </div>
    );
}

export default DisplayPicture;
