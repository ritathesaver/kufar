import React from 'react';
import { ReactComponent as DeliverySvg } from './labels/delivery-lable-copy-2.svg';
import { ReactComponent as CreditSvg } from './labels/credit-lable.svg';
import { ReactComponent as GeoSvg } from './labels/smal-geo-tag-icon.svg';
import { ReactComponent as DateSvg } from './labels/watch-later.svg';

import './ListItem.css';

const ListItem = ({ item = {} }) => {
	const transformPrice = (price) => {
		const leftPart = price.slice(0, -2) || '0';
		const rightPart = price.slice(-2);
		console.log(leftPart, rightPart);
		if (Number(rightPart) > 0) {
			return `${leftPart},${rightPart}`;
		}

		return leftPart;
	};

	return (
		<div className="product-container">
			<img className="img" src={item.thumb} />
			<div className="product_info">
				<div className="info_header">{item.subject}</div>
				<div className="info_sub">
					{item.params.category}, {item.params.condition}
				</div>
				<div className="info_pay">
					<div className="product-delivery">
						<DeliverySvg className="delivery-lable" />
						<span className="delivery-text">Бесплатная доставка</span>
					</div>
					<div className="product-credit">
						<CreditSvg className="credit-lable" />
						<span className="credit-text">В рассрочку</span>
					</div>
				</div>
				<div className="info_footer">
					<div className="product-price">
						{transformPrice(item.price_byn)} р.
					</div>
					<div className="footer-sub">
						<div className="product-location">
							<GeoSvg className="geo-lable" />
							{item.params.region}, {item.params.area}
						</div>
						<div className="product-date">
							<DateSvg className="date-lable" />
							{new Date(item.list_time).toLocaleString()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ListItem;
