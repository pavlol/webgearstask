import React, {Component} from 'react';
import { Item, Button } from 'semantic-ui-react'

class CartItem extends Component{

	render(){
		const {cartItem, removeItemFromCart} = this.props;
		return(
			<Item>
				<Item.Content verticalAlign='middle'>
					<div>
						<div>
							<span>{cartItem.title}</span>
							<span style={{float:"right"}}>{cartItem.price}</span>
						</div>
						<div>
							<span>Quantity</span>
							<span style={{float:"right"}}>{cartItem.quantity}</span>
						</div>
					</div>
					<Button 
					style={styles.button} 
					size='mini' 
					basic 
					icon='times' 
					onClick={removeItemFromCart.bind(this, cartItem.title)} 
					/>
				</Item.Content>
			</Item>
		)
	}
}

const styles = {
	button : {
		float:"right"
	}
}

export default CartItem
