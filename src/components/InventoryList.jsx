import React, {Component} from 'react';
import { Header } from 'semantic-ui-react'
import InventoryProduct from './InventoryProduct';

class InventoryList extends Component{
	renderInventoryProducts = () => {
		return this.props.inventory.map(product =>{
			return(
				<div key={product.title}>
					<InventoryProduct 
					removeFromInventory = {this.props.removeFromInventory}
					product = {product} />
				</div>
			)
		});
	}

	
	render(){
		return(
			<div style={styles.inventoryList}>
                <Header as='h3' icon textAlign='center'>List of Products</Header>
				{this.renderInventoryProducts()}
			</div>
		)
	}
}

const styles = {
    inventoryList : {
        marginTop : "3rem"
    }
}

export default InventoryList
