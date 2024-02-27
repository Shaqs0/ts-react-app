import styles from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';

function ProductCard(props: ProductCardProps) {
	return (
		<div className={styles['card']}>
			<div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}}>
				<div className={styles['price']}>
					{props.price} 
					<span className={styles['currency']}>₽</span>
				</div>
				<button className={styles['add-to-cart']}>
					<img src='/add-to-cart_icon.svg' alt='Добавить в корзину'></img>
				</button>
				<div className={styles['rating']}>
					{props.rating}
					<img src='/rating.svg' alt='Рейтинг'></img>
				</div>
			</div>
			<div className={styles['footer']}>
				<div className={styles['title']}>{props.title}</div>
				<div className={styles['description']}>{props.description}</div>
			</div>
		</div>
	);
}

export default ProductCard;