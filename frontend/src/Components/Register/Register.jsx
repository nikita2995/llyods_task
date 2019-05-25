import React from 'react';
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import './Register.css';

class Register extends React.Component {

	submitHandler(event) {

	}

	state = {
		firstName: '',
		lastName: '',
		email: '',
		companyName: '',
		licenseStartDate: '',
		licenseEndDate: ''
	};

	render() {
		return (
			<Form className='container'>
				<h3>Register Your Company Here!</h3>
				<br />
				<FormGroup row>
					<Label sm={4}>First Name: </Label>
					<Col sm={8}>
						<Input
							type='text'
							value={this.state.firstName}
							placeholder='First Name'
							required />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm={4}>Last Name: </Label>
					<Col sm={8}>
						<Input
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
							value={this.state.licenseStartDate}
							required />
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label sm={4}>License End Date: </Label>
					<Col sm={8}>
						<Input
							type='date'
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