import React, {Component} from 'react';
import _ from "lodash"
import { Grid } from 'semantic-ui-react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Inventory from './components/Inventory';

class WebGearsTask extends Component{
	constructor(props){
        super(props);
        this.state = {
            inventory : [
				{title : "title1", price:"24", imageUrl:"https://react.semantic-ui.com/images/wireframe/image.png", description:"Description Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"}, 
				{title : "title2", price:"34", imageUrl:"https://react.semantic-ui.com/images/wireframe/image.png", description:"Description Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"}
				],
			cart : [
				{title : "title1", price:"24", imageUrl:"https://react.semantic-ui.com/images/wireframe/image.png", description:"Description Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", quantity : 2},
				{title : "title2", price:"34", imageUrl:"https://react.semantic-ui.com/images/wireframe/image.png", description:"Description Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", quantity : 1}
			],

        }
    }

	addToInventory = (item) => {
		this.setState({inventory : [...this.state.inventory, item]});
	}

	removeFromInventory = (title) => {
		const inventory = this.state.inventory;
		const newInventory = _.remove(inventory, function(obj) {	// returns all elements without removed one
			return obj.title !== title;	
		});
		this.setState({inventory : newInventory});
		this.removeItemFromCart(title);
	}

	addToCart = (item) => {
		const existingCartItemIndex = _.findIndex(this.state.cart, function(obj){
			return obj.title === item.title;
		});
		if(existingCartItemIndex > -1){
			// increment existing
			const cartItems = this.state.cart;
			cartItems[existingCartItemIndex].quantity += 1;
			this.setState({cart : cartItems})
		}
		else{
			// add to cart if no existing
			item.quantity = 1;
			this.setState({cart : [...this.state.cart, item]})
		}
	}

	removeItemFromCart = (title) => {
		const cart = this.state.cart;
		const newCart = _.remove(cart, function(obj) {	// returns all elements without removed one
			return obj.title !== title;	
		});
		this.setState({cart : newCart});
	}

	render(){
		return (
			<div style={styles.container}>
			<Grid columns={3} divided>
				<Grid.Row centered>
					<Grid.Column>
						<ProductList 
						inventory={this.state.inventory}
						addToCart = {this.addToCart}
						/>
					</Grid.Column>
					<Grid.Column>
						<ShoppingCart 
						removeItemFromCart = {this.removeItemFromCart}
						cart = {this.state.cart}
						/>
					</Grid.Column>
					<Grid.Column>
						<Inventory 
						inventory={this.state.inventory} 
						addToInventory = {this.addToInventory} 
						removeFromInventory = {this.removeFromInventory}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
			</div>
		)
	}
}

const styles = {
    container : {
        margin : "3rem 3rem 0rem 3rem"
    }
}

export default WebGearsTask;
