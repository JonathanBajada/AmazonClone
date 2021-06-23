import React, { Fragment } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import basic from './components/ProductCard/img/basics.jpg';

let link =
	'https://www.amazon.com/s?k=amazonbasics&pd_rd_r=819237ee-398d-42b4-96aa-30db3d603514&pd_rd_w=kiIoy&pd_rd_wg=Vjot0&pf_rd_p=9349ffb9-3aaa-476f-8532-6a4a5c3da3e7&pf_rd_r=9SGPBYPHG2S9GHYN9QB7&ref=pd_gw_unk';
const Data = [
	{
		id: '0',
		name: 'AmazonBasics',
		image: basic,
		link: link
	},
	{
		id: '0',
		name: 'AmazonBasics',
		image: basic,
		link: link
	},
	{
		id: '0',
		name: 'AmazonBasics',
		image: basic,
		link: link
	},
	{
		id: '0',
		name: 'AmazonBasics',
		image: basic,
		link: link
	},
	{
		id: '0',
		name: 'AmazonBasics',
		image: basic,
		link: link
	},
	{
		id: '0',
		name: 'AmazonBasics',
		image: basic,
		link: link
	}
];

const ProductCardLayout = () => {
	return (
		<Fragment>
			<div
				style={{
					width: '100%',
					height: '1000px',
					backgroundColor: 'transparent',
					display: 'flex',
					flexBasis: '33.333333%',
					flexWrap: 'wrap',
					flexShrink: 0
				}}
			>
				{Data.map((data) => {
					return (
						<div style={{ paddingRight: '10px' }} key={data.id}>
							<ProductCard name={data.name} link={data.link} image={data.image} />
						</div>
					);
				})}
			</div>
		</Fragment>
	);
};
export default ProductCardLayout;