import React from 'react';
import { Container } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


export default class vaccineAvaiblity extends React.Component {
  state = {
    formData: {
        pincode: '',
    },
    submitted: false,
  }

  pincodeRef = React.createRef();

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  }

  handleSubmit = (event) => {
      this.setState({ submitted: true }, () => {
        const { formData } = this.state;
        formData.pincode = "";
        console.log({formData})
        this.setState({ submitted: false });
        alert("Form Submited!!!");
      });
  }


  render() {
    const { formData, submitted } = this.state;
    return (
      <div className="App">
        <Container maxWidth="md">
          <h3>Check your nearest vaccination center and slots availability</h3>
          <ValidatorForm
                onSubmit={this.handleSubmit}
                instantValidate={false}
            >
                <TextValidator
                    ref={this.pincodeRef}
                    label="Enter Pincode"
                    onBlur={this.handleBlur}
                    onChange={this.handleChange}
                    name="pincode"
                    value={formData.pincode}
                    pattern="[0-9]+"
                    validators={['required']}
                    errorMessages={['Pincode is required']}
                />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                  Search
                </Button>
            </ValidatorForm>
        </Container>
      </div>
    )
  }
}