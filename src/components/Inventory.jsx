import React, {Component} from 'react';
import { Header } from 'semantic-ui-react';
import CreateProductForm from './CreateProductForm';
import EditProductForm from './EditProductForm';
import InventoryList from './InventoryList';

class Inventory extends Component{

    renderEditProductForms = ()=>{
        const {inventory} = this.props;
        return inventory.map(item=>{
            return(
                <div key={item.id}>
                    <EditProductForm 
                    inventoryProduct = {item}
                    removeFromInventory = {this.props.removeFromInventory}
                    editItem = {this.props.editItem}
                    />
                </div>
            )
        })
    }

	render(){


		return(
			<div>
                <Header as='h3' icon textAlign='center'>Inventory</Header>
                {this.renderEditProductForms()}
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
