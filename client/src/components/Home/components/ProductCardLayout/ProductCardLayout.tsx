import React, { Fragment } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import basic from './components/ProductCard/img/basics.jpg';
import fitAtHome from './components/ProductCard/img/fit.jpeg';
import oculus from './components/ProductCard/img/oculus.jpg';
import beauty from './components/ProductCard/img/beauty.jpg';
import styles from './ProductCardLayout.module.css';

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
		name: 'Get fit at home',
		image: fitAtHome,
		link: link
	},
	{
		id: '0',
		name: 'Shop by Category',
		image: basic,
		link: link
	},
	{
		id: '0',
		name: 'Oculus',
		image: oculus,
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
		name: 'Get fit at home',
		image: fitAtHome,
		link: link
	},
	{
		id: '0',
		name: 'Shop by Category',
		image: basic,
		link: link
	},
	{
		id: '0',
		name: 'Oculus',
		image: oculus,
		link: link
	}
];

interface Props {
	styleCard: string;
}

const ProductCardLayout: React.FC<Props> = (props) => {
	return (
		<Fragment>
			<div
				className={props.styleCard}
				style={{
					position: 'relative',
					width: '1500px',
					minWidth: '1500px',
					backgroundColor: 'transparent',
					paddingLeft: '20px',
					paddingRight: '20px',
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap'
				}}
			>
				{Data.map((data, index) => {
					return <ProductCard name={data.name} link={data.link} image={data.image} />;
				})}
			</div>
		</Fragment>
	);
};
export default ProductCardLayout;
