import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'

class InventoryProduct extends Component{
	
	removeFromInventory = (e) => {
		this.props.removeFromInventory(e);
	}

	render(){
		const product = this.props.product;
		return(
			<div style={styles.container}>
                <span>{product.title}</span>
				<Button 
				style={styles.button} 
				size='mini' 
				basic 
				icon='times' 
				onClick={this.removeFromInventory.bind(this, product.id)} 
				/>
			</div>
		)
	}
}

const styles = {
	container : {
		marginBottom: "1rem"
	},
	button : {
		float:"right"
	}
}

export default InventoryProduct
