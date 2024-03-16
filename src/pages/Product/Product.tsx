import { Await, useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import { Suspense, useState, useEffect } from 'react';
import Headling from '../../components/Headling/Headling';
import styles from './Product.module.css';
import { RootState } from '../../store/store';
import {  useSelector } from 'react-redux';
import axios from 'axios';
import { PREFIX } from '../../helpers/API';
import ProductItems from '../../components/ProductItems/ProductItems';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';

export function Product() {
	const data = useLoaderData() as {data: Product};
	const [products, setProducts] = useState<Product[]>([]);
	const items = useSelector((s: RootState) => s.product.items);

	const getItem = async (id: number) => {
		const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`);
		return data;
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)));
		setProducts(res);
	};


	useEffect(() => {
		loadAllItems();
	}, [items]);

	return <>
		<Suspense fallback={'Загружаю...'}>
			<Headling className={styles['headling']}><Await
				resolve={data.data}
			>
				{({data}: {data:Product} )=> (
					<>{data.name}
					</>
				)}
			</Await></Headling>
			{items.map(i => {
				const product = products.find(p => p.id === i.id);
				if (!product) {
					return;
				}
				return <ProductItems key={product.id} {...product} />;
			})}
			<div className={styles['checkout']}>
				<Button appearence='big'>Оформить</Button>
			</div>
			
		</Suspense>
	</>;
}