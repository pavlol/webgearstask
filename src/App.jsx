import React, {Component} from 'react';
import _ from "lodash";
import { Grid } from 'semantic-ui-react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Inventory from './components/Inventory';

class App extends Component{
	constructor(props){
        super(props);
        this.state = {
            inventory : [
				{ id:1, title : "title1", price:"24", imageUrl:"https://react.semantic-ui.com/images/wireframe/image.png", description:"Description Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"}, 
				{ id:2, title : "title2", price:"34", imageUrl:"https://react.semantic-ui.com/images/wireframe/image.png", description:"Description Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"}
				],
			cart : [
				{ id:1, title : "title1", price:"24", imageUrl:"https://react.semantic-ui.com/images/wireframe/image.png", description:"Description Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", quantity : 2},
				{ id:2, title : "title2", price:"34", imageUrl:"https://react.semantic-ui.com/images/wireframe/image.png", description:"Description Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum", quantity : 1}
			],

        }
    }

	editItem = (id, fieldName, newValue) => {
		const {inventory, cart} = this.state;
		const existingInventoryItemIndex = _.findIndex(inventory, function(obj){
			return obj.id === id;
		});
		const existingCartItemIndex = _.findIndex(cart, function(obj){
			return obj.id === id;
		});
		inventory[existingInventoryItemIndex][fieldName] = newValue;
		if(existingCartItemIndex > -1){
			cart[existingCartItemIndex][fieldName] = newValue;
		}
		this.setState({inventory, cart});
	}

	getRandomId(min, max) {
		min = Math.ceil(min);
  		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

	addToInventory = (item) => {
		item.id = this.getRandomId(10000, 3);
		this.setState({inventory : [...this.state.inventory, item]});
	}

	removeFromInventory = (id) => {
		const inventory = this.state.inventory;
		const newInventory = _.remove(inventory, function(obj) {	// returns all elements without removed one
			return obj.id !== id;	
		});
		this.setState({inventory : newInventory});
		this.removeItemFromCart(id);
	}

	addToCart = (item) => {
		const existingCartItemIndex = _.findIndex(this.state.cart, function(obj){
			return obj.id === item.id;
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

	removeItemFromCart = (id) => {
		const cart = this.state.cart;
		const newCart = _.remove(cart, function(obj) {	// returns all elements without removed one
			return obj.id !== id;	
		});
		this.setState({cart : newCart});
	}

	render(){
		return (
			<div style={styles.container}>
			<Grid columns={4} >
				<Grid.Row centered>
					<Grid.Column style={styles.column}>
						<ProductList 
						inventory={this.state.inventory}
						addToCart = {this.addToCart}
						/>
					</Grid.Column>
					<Grid.Column style={styles.column}>
						<ShoppingCart 
						removeItemFromCart = {this.removeItemFromCart}
						cart = {this.state.cart}
						/>
					</Grid.Column>
					<Grid.Column style={styles.column}>
						<Inventory 
						inventory={this.state.inventory} 
						addToInventory = {this.addToInventory} 
						removeFromInventory = {this.removeFromInventory}
						editItem = {this.editItem}
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
        margin : "1rem 0rem 0rem 0rem"
    },
	column: {
		border: "1px solid black",
    	padding: "1rem",
		margin: "1rem 1rem"
	}
}

export default App;
