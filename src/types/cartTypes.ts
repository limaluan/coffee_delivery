import { ICoffeeType, ICoffeeTypeWithQuantity } from "./coffeesType";

export interface ICartProps {
  cartItems: ICoffeeTypeWithQuantity[];
}

export interface IAddItemToCartDataPayload {
  coffee: ICoffeeType;
  quantityToAdd: number;
}
