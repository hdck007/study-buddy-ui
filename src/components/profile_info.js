import React from 'react'
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

export default function Profile_info() {
    return (
        <div id='profile_info'>
            <div className="about">
                <span className="heading">About</span>
                <hr />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nibh urna, faucibus in efficitur et, pharetra quis nisi. Suspendisse potenti. Aenean vel odio at tortor maximus euismod id vitae mauris. Fusce sodales, neque ac interdum vulputate, est urna eleifend elit, sed elementum eros urna vitae nunc. Maecenas quis posuere sapien. Phasellus urna tortor, elementum ac auctor in, tempus in massa. Nam ultrices consectetur turpis, a blandit erat porttitor vitae. Etiam aliquam sed libero ut pharetra. Vivamus laoreet leo at posuere euismod. Nam eget tempor neque, nec tristique justo.
            </div>
            <div className="skill_know">
                <span className="heading">Skills You Already Know Of</span>
                <hr />
                <Chip className="Chip"
                    label="abc"
                />
                <Chip className="Chip"
                    label="abc"
                />
                <Chip className="Chip"
                    label="abc"
                />
                <Chip className="Chip"
                    label="abc"
                />
                <Chip className="Chip"
                    label="abc"
                />
                    {/* onClick={handleClick}
                    onDelete={handleDelete} */}
            </div>
            <div className="skill_learn">
                <span className="heading">Skills You Want To Learn</span>
                <hr />
                <Chip className="Chip"
                    label="abc"
                />
                <Chip className="Chip"
                    label="abc"
                />
                <Chip className="Chip"
                    label="abc"
                />
                <Chip className="Chip"
                    label="abc"
                />
                <Chip className="Chip"
                    label="abc"
                />
                    {/* onClick={handleClick}
                    onDelete={handleDelete} */}
            </div>
            <div className="skill_assessed">
                <span className="heading">Skills Assessed</span>
                <hr />
                <Chip className="Chip"
                    label="abc"
                    Icon={<DoneIcon />}
                />
                <Chip className="Chip"
                    label="abc"
                    Icon={<DoneIcon />}
                />
                <Chip className="Chip"
                    label="abc"
                    Icon={<DoneIcon />}
                />
                <Chip className="Chip"
                    label="abc"
                    Icon={<DoneIcon />}
                />
                <Chip className="Chip"
                    label="abc"
                    Icon={<DoneIcon />}
                />
                    {/* onClick={handleClick}
                    onDelete={handleDelete} */}
            </div>
        </div>
    )
}
