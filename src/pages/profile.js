import React from 'react';
import Layout from '../components/layout';
import Profile_banner from '../components/profile_banner';
import Profile_info from '../components/profile_info';
import Mentor_list from '../components/mentor_list';
import "../profile.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// export default function Profile() {
// 	return <Layout>
// 		<Profile_banner />

// 		<Profile_info />

// 		<Mentor_list />

// 	</Layout >;
// }

// export default function Profile() {
// 	return (
// 		<Layout>
// 			<table>
// 				<tr>
// 					<td ><Profile_banner /></td>
// 				</tr>
// 				<tr>
// 					<td rowspan="8"><Profile_info /></td>
// 					<td rowspan="4"><Mentor_list /></td>
// 				</tr>
// 			</table>
// 		</Layout>
// 	)
// }

export default function Profile() {
	return (
		<Layout>
			<div className='gridcontainer'>
				<div className="banner">
					<Profile_banner />
				</div>
				<div className="info">
					<Profile_info />
				</div>
				<div className="list">
					<Mentor_list />
				</div>
			</div>
		</Layout>
	)
}