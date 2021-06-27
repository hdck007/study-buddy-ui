import React from "react";

function Profile_banner() {
    return (
        <div class="container">
            <div className="bg-img">
                <img src="" alt="bg-img" />
            </div>
            <div className="profile_pic">
                <img src="" alt="profile picture" />
            </div>
            <div className="info_banner">
                <div id="name">
                    <span>Haridarshan Choudhary</span>
                </div>
                <div id="bio">
                    <span id="heading">
                        Javascript is ❤️ | Contributor @Layer5 | Full-stack
                        Developer
                    </span>
                    <br />
                    {/* <br /> */}
                    <span id="address">Panvel, Maharashtra, India</span>
                </div>
            </div>
        </div>
    );
}

export default Profile_banner;
