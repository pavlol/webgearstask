import React, {Component} from 'react';
import { Header } from 'semantic-ui-react'
import CreateProductForm from './CreateProductForm';
import InventoryList from './InventoryList';

class Inventory extends Component{

	render(){
		return(
			<div>
                <Header as='h3' icon textAlign='center'>Inventory</Header>
                <CreateProductForm 
                addToInventory={this.props.addToInventory}
                />
                <InventoryList 
                inventory={this.props.inventory}
                removeFromInventory = {this.props.removeFromInventory}
                />
			</div>
		)
	}
}


export default Inventory
