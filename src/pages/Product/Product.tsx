import { useState, useEffect } from 'react';
import Headling from '../../components/Headling/Headling';
import styles from './Product.module.css';
import {  RootState } from '../../store/store';
import {  useSelector } from 'react-redux';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import ProductItems from '../../components/ProductItems/ProductItems';
import Button from '../../components/Button/Button';
import { Product } from '../../interfaces/product.interface';
import { ProductItemsProps } from '../../components/ProductItems/ProductItems.props';

export function Product() {
	const [itemProducts, setItemProducts] = useState<ProductItemsProps[]>([]);
	const items = useSelector((s: RootState) => s.cart.items);
	const jwt = useSelector((s: RootState) => s.user.jwt);





	const getItem = async (id: number) => {
		const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
		return data;
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)));
		setItemProducts(res);
	};

	const checkout = async () => {
		await axios.post(`${PREFIX}/order`, {
			products: items
		}, {
			headers: {
				Authorization: `Bearer ${jwt}`
			}
		});
	};
	

	useEffect(() => {
		loadAllItems();
	}, [items]);

	return <>
		<Headling className={styles['headling']}></Headling>
		{items.map(i => {
			const product = itemProducts.find(p => p.id === i.id);
			if (!product) {
				return;
			}
			return <ProductItems key={product.id}  {...product} />;
		})}
		<div className={styles['line']}>
			<div className={styles['text']}>Итог</div>
			<div className={styles['price']}>&nbsp;<span>₽</span></div>
		</div>
		<hr className={styles['hr']}/>
		<div className={styles['line']}>
			<div className={styles['text']}>Доставка</div>
			<div className={styles['price']}>&nbsp;<span>₽</span></div>
		</div>
		<hr className={styles['hr']}/>
		<div className={styles['line']}>
			<div className={styles['text']}>Итог <span className={styles['total-count']}>({items.length})</span></div>
			<div className={styles['price']}>&nbsp;<span>₽</span></div>
		</div>
		<div className={styles['checkout']}>
			<Button appearence='big' onClick={checkout}>Оформить</Button>
		</div>
	</>;
}