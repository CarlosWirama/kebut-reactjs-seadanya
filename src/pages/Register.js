import React from 'react';

export default ({match}) =>
	<h1>
		{match.params.lang === 'ID' ? 'Halaman Daftar' : 'Register Page'}
	</h1>
