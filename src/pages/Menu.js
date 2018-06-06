import React from 'react';

export default ({match}) =>
	<h1>
		{match.params.lang==='ID' ? 'Konten' : 'Content'} MENU-{match.params.id}
	</h1>
