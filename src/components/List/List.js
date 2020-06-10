import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem from './ListItem/ListItem';

const addParamsList = (list) => {
	return list.map((item) => {
		let thumb =
			'https://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png';
		if (item.images.length) {
			const [ { id: imageId } ] = item.images;
			thumb = `https://yams.kufar.by/api/v1/kufar-ads/images/${imageId
				.split('')
				.slice(0, 2)
				.join('')}/${imageId}.jpg?rule=line_thumbs`;
		}
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
	const [ adList, setAdList ] = useState([]);

	useEffect(() => {
		(async () => {
			const { data } = await axios({
				url:
					'https://cre-api.kufar.by/ads-search/v1/engine/v1/search/rendered-paginated?size=42&sort=lst.d&cur=BYR&cat=5070&rgn=7&lang=ru',
				method: 'GET'
			});
			setAdList(data.ads);
		})();
	}, []);

	return (
		<div>
			{addParamsList(adList).map((item) => (
				<ListItem item={item} key={item.ad_id} />
			))}
		</div>
	);
};

export default List;
