import React, {Component} from 'react';
import { Item, Header } from 'semantic-ui-react'
import ProductItem from './ProductItem';

class ProductList extends Component{

	renderAvailableProducts = () => {
		return this.props.inventory.map(item =>{
			return <ProductItem key={item.title} inventoryItem = {item} addToCart = {this.props.addToCart}/>
		});
	}

	render(){
		return(
			<div>
			 	<Header as='h3' icon textAlign='center'>List Of Products</Header>
				<Item.Group>
				{this.renderAvailableProducts()}
				</Item.Group>
			</div>
		)
	}
}

export default ProductList
