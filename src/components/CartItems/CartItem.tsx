import styles from './CartItem.module.css';
import { cartActions } from '../../store/сart.slice';
import { useDispatch } from 'react-redux';
import { AppDispath } from '../../store/store';
import { CardItemProps } from './CartItem.props';

function CartItem(props: CardItemProps ) {
	const dispatch = useDispatch<AppDispath>();
	
	const increase = () => {
		dispatch(cartActions.add(props.id));
	};

	const decrease = () => {
	};

	const remove = () => {
	};

	return (
		<div className={styles['item']}>
			<div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['currency']}>{props.price}&nbsp;₽</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['button']} onClick={decrease}>
					<img src='/add-to-cart_icon.svg' alt='Удалить из корзины' />
				</button>
				<div>{props.count}</div>
				<button className={styles['button']} onClick={increase}>
					<img src='/add-to-cart_icon.svg' alt='Добавить в корзину'></img>
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img src='/add-to-cart_icon.svg' alt='Удалить всё'></img>
				</button>
			</div>
		</div>
	);
}

export default CartItem;