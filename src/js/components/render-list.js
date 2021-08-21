import React from 'react';
import GroupListItem from './group-list-item';

export default function RenderList( props ) {
	const {
		groups,
		getList,
		edit
	} = props;

	return ( getList().map( ( item, index ) => {
		const group = groups[ item ];
		return (
			<GroupListItem
				index={ index }
				group={ group }
				editing={ item === edit }
				{ ...props }
			/>
		);
	} ) );
}
