import styles from './ProductItems.module.css';
import { productActions } from '../../store/product.slice.ts';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { ProductItemsProps } from './ProductItems.props.ts';
import Button from '../Button/Button.tsx';
import Headling from '../Headling/Headling.tsx';

function ProductItems(props: ProductItemsProps ) {
	const dispatch = useDispatch<AppDispath>();
	
	const add = () => {
		dispatch(productActions.addToCart(props.id));
		console.log('a');
	};

	return (
		<div className={styles['item']}>
			<Headling>{props.name}</Headling>
			<div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['price']}>{props.price}&nbsp;₽</div>
			</div>
			<div className={styles['actions']}>
				<div className={styles['number']}></div>
			</div>
			<div className={styles['checkout']}>
				<Button appearence='big' onClick={add}>Добавить в корзину</Button>
			</div>
		</div>
	);
}

export default ProductItems;