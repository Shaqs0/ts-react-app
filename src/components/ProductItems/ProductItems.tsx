import styles from './ProductItems.module.css';
import { productActions } from '../../store/product.slice.ts';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { ProductItemProps } from './ProductItems.props.ts';

function ProductItems(props: ProductItemProps ) {
	const dispatch = useDispatch<AppDispath>();
	
	const add = () => {
		dispatch(productActions.addToCart(props.id));
	};

	return (
		<div className={styles['item']}>
			<div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['price']}>{props.price}&nbsp;₽</div>
			</div>
			<div className={styles['actions']}>
				<div className={styles['number']}></div>
				<button className={styles['plus']} onClick={add}>
					<img src='/plus-icon.svg' alt='Добавить в корзину'></img>
				</button>
			</div>
		</div>
	);
}

export default ProductItems;