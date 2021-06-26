import React from "react";

function Profile_banner() {
    return (
        <div class="container">
            <div className="profile_pic">
                <img src="" alt="profile picture" />
            </div>
            <div className="info_banner">
                <div id="name">
                    <h3>Haridarshan Choudhary</h3>
                </div>
                <div id="bio">
                    <p id="heading">
                        Javascript is ❤️ | Contributor @Layer5 | Full-stack
                        Developer
                    </p>
                    <p id="address">Panvel, Maharashtra, India</p>
                </div>
            </div>
        </div>
    );
}

export default Profile_banner;
