import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';

class EditProductForm extends Component{
	
	removeFromInventory = () => {
		this.props.removeFromInventory({...this.state});
	}
	
	handleValueChange = (e, data) => {
		this.props.editItem(this.props.inventoryProduct.id, data.fieldname, e.target.value)
	}

	render(){
		const {inventoryProduct, removeFromInventory} = this.props;
		return(
			<div>
				<Form>
					<Form.Group widths='equal'>
						<Form.Input fluid placeholder='Title' value={inventoryProduct.title} fieldname="title" onChange={this.handleValueChange}/>
						<Form.Input fluid placeholder='Price' value={inventoryProduct.price} fieldname="price" onChange={this.handleValueChange} />
					</Form.Group>
					<Form.Group widths='equal'>
						<Form.Input fluid placeholder='Image Url' value={inventoryProduct.imageUrl} fieldname="imageUrl" onChange={this.handleValueChange}/>
					</Form.Group>
					<Form.Group widths='equal'>
						<Form.TextArea fluid placeholder='Description' value={inventoryProduct.description}  fieldname="description" onChange={this.handleValueChange}/>
					</Form.Group>
					<Button style={styles.removeButton} fluid onClick={removeFromInventory.bind(this, inventoryProduct.id)}>Remove Product</Button>
				</Form>
			</div>
		)
	}
}

const styles={
	removeButton : {
		marginBottom:"2rem"
	}
}

export default EditProductForm
