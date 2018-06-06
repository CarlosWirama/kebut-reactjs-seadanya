import React from 'react';

const Home = ({match}) =>
	<h1>
		{ match.params && match.params.lang === 'ID' ?
			'Konten BERANDA' :
			'Content HOME'
		}
	</h1>

export default Home