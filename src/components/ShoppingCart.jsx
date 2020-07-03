import React, {Component} from 'react';
import { Item, Header } from 'semantic-ui-react';
import CartItem from './CartItem';

class ShoppingCart extends Component{
	renderCartItems = () => {
		return this.props.cart.map(item =>{
			return (
				<CartItem 
				key={item.title} 
				cartItem = {item} 
				removeItemFromCart = {this.props.removeItemFromCart}
				/>
			)
		});
	}
	render(){
		return(
			<div>
			 	<Header as='h3' icon textAlign='center'>Shopping Cart</Header>
				<Item.Group divided>
					{this.renderCartItems()}
				</Item.Group>
			</div>
		)
	}
}

export default ShoppingCart
