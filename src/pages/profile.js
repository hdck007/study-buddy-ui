import React from 'react';
import Layout from '../components/layout';
import Profile_banner from '../components/profile_banner';
import Mentor_list from '../components/mentor_list';
import "../profile.css";

export default function Profile() {
	return <Layout>
		<div class='wrapper'>
			<Profile_banner />
			<Mentor_list />
		</div>

	</Layout>;
}
