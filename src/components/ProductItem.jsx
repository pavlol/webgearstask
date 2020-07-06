import React, {Component} from 'react';
import { Item, Button } from 'semantic-ui-react'

class ProductItem extends Component{

	render(){
		const {inventoryItem, addToCart} = this.props;
		const imageUrl = inventoryItem.imageUrl ? inventoryItem.imageUrl : "https://react.semantic-ui.com/images/wireframe/image.png";
		return(
			<Item>
				<Item.Image size='small' src={imageUrl} />

				<Item.Content verticalAlign='middle'>
					<Item.Description>
						<div>	
							<span>{inventoryItem.title}</span>
							<span style={{float:"right"}}>{inventoryItem.price}$</span>
						</div>
					</Item.Description>
					<Item.Description>
					{inventoryItem.description}
					</Item.Description>
					<Item.Extra>
					<Button basic size='mini' onClick={addToCart.bind(this, inventoryItem)}>Add To Order</Button>
					</Item.Extra>
				</Item.Content>
			</Item>
		)
	}
}

export default ProductItem;
