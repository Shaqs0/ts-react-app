import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';

export const PRODUCT_PERSISTENT_STATE = 'productData';

export interface ProductItem {
	id: number;
	count: number;
}

export interface ProductState {
	items: ProductItem[];
}

const initialState: ProductState = loadState<ProductState>(PRODUCT_PERSISTENT_STATE) ?? {
	items: []
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<number>) => {
			const existed = state.items.find(i => i.id === action.payload);
			if (!existed) {
				state.items.push({ id: action.payload, count: 1 });
				return;
			}
			state.items.map(i => {
				if (i.id === action.payload) {
					i.count += 1;
				}
				return i;
			});
		}
	}});

export default productSlice.reducer;
export const productActions = productSlice.actions;