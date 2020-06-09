import React from 'react';
import ListItem from './ListItem/ListItem';
import data from '../../info/info.json';

const addParamsList = (list) => {
	return list.map((item) => {
		const [ { id: imageId } ] = item.images;
		const thumb = `https://yams.kufar.by/api/v1/kufar-ads/images/${imageId
			.split('')
			.slice(0, 2)
			.join('')}/${imageId}.jpg?rule=line_thumbs`;
		const params = item.ad_parameters.reduce((prev, paramItem) => {
			return {
				...prev,
				[paramItem.p]: paramItem.vl
			};
		}, {});
		return {
			...item,
			thumb,
			params
		};
	});
};

const List = () => {
	const { ads } = data;
	console.log(addParamsList(ads));
	return (
		<div>
			{addParamsList(ads).map((item) => (
				<ListItem item={item} key={item.ad_id} />
			))}
		</div>
	);
};

export default List;
