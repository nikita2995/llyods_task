import React from 'react';
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import './Register.css';

class Register extends React.Component {

	submitHandler() {
		fetch('http://localhost:5000/api/company', {
			method: 'POST', // or 'PUT'
			body: JSON.stringify(this.state), // data can be `string` or {object}!
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.then(response => alert(response.data))
			.catch(error => console.error('Error:', error));
	}

	state = {
		firstName: '',
		lastName: '',
		email: '',
		companyName: '',
		licenseStartDate: '',
		licenseEndDate: ''
	};

	onChangeHandler(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	render() {
		return (
			<Form className='container'>
				<h3>Register Your Company Here!</h3>
				<br />
				<FormGroup row>
					<Label sm={4}>First Name: </Label>
					<Col sm={8}>
						<Input
							onChange={(event) => { this.onChangeHandler(event) }}
							type='text'
							name='firstName'
							value={this.state.firstName}
							placeholder='First Name'
							required />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm={4}>Last Name: </Label>
					<Col sm={8}>
						<Input
							name='lastName'
							onChange={(event) => { this.onChangeHandler(event) }}
							type='text'
							value={this.state.lastName}
							placeholder='Last Name'
							required />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm={4}>Email: </Label>
					<Col sm={8}>
						<Input
							type='email'
							name='email'
							onChange={(event) => { this.onChangeHandler(event) }}
							value={this.state.email}
							placeholder='Email'
							required />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm={4}>Company Name: </Label>
					<Col sm={8}>
						<Input
							type='text'
							name='companyName'
							onChange={(event) => { this.onChangeHandler(event) }}
							value={this.state.companyName}
							placeholder='Company Name'
							required />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm={4}>License Start Date: </Label>
					<Col sm={8}>
						<Input
							type='date'
							name='licenseStartDate'
							onChange={(event) => { this.onChangeHandler(event) }}
							value={this.state.licenseStartDate}
							required />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm={4}>License End Date: </Label>
					<Col sm={8}>
						<Input
							type='date'
							name='licenseEndDate'
							onChange={(event) => { this.onChangeHandler(event) }}
							value={this.state.licenseEndDate}
							required />
					</Col>
				</FormGroup>
				<br />
				<Button onClick={(e) => this.submitHandler(e)}>Register Here!</Button>
			</Form>
		);
	}
}

export default Register;