import { ICoffeeType, ICoffeeTypeWithQuantity } from "./coffeeType";

export interface ICartProps {
  cartItems: ICoffeeTypeWithQuantity[];
}

export interface IAddItemToCartDataPayload {
  coffee: ICoffeeType;
  quantityToAdd: number;
}
