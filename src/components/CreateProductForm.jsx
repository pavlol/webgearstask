import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';

class CreateProductForm extends Component{
	constructor(props){
		super(props);

		this.state = {
			title : "", 
			price:"", 
			imageUrl:"https://react.semantic-ui.com/images/wireframe/image.png", 
			description:""
		}
	}

	addToInventory = () => {
		this.props.addToInventory({...this.state});
	}

	
	handleTitleChange = (e) => {
		this.setState({title : e.target.value})
	}

	handlePriceChange = (e) => {
		this.setState({price : e.target.value})
	}

	handleImageUrlChange = (e) => {
		this.setState({imageUrl : e.target.value})
	}

	handleDescriptionChange = (e) => {
		this.setState({description : e.target.value})
	}
	

	render(){
		return(
			<Form>
				<Form.Group widths='equal'>
					<Form.Input fluid placeholder='Title' value={this.state.title} onChange={this.handleTitleChange}/>
					<Form.Input fluid placeholder='Price' value={this.state.price} onChange={this.handlePriceChange} />
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.Input fluid placeholder='Image Url' value={this.state.imageUrl} onChange={this.handleImageUrlChange}/>
				</Form.Group>
				<Form.Group widths='equal'>
					<Form.TextArea fluid placeholder='Description' value={this.state.description} onChange={this.handleDescriptionChange}/>
				</Form.Group>
				<Button fluid onClick={this.addToInventory}>Add Product</Button>
			</Form>
		)
	}
}

export default CreateProductForm
