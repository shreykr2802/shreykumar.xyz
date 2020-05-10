import React, { Component } from 'react';

import classes from './ContactMe.css';
import Input from '../UI/Input/Input';

import { updateObject, checkValidity } from '../../shared/utility';


class ContactMe extends Component {
    state = {
        contactForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name',
                    name: 'name'
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email',
                    name: 'email'
                },
                value: "",
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            subject: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Subject',
                    name: 'subject'
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            phone: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Phone Number',
                    name: 'phone'
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 1,
                    maxLength: 10
                },
                valid: true,
                touched: false
            },
            message: {
                elementType: 'textarea',
                elementConfig: {
                    type: 'textarea',
                    placeholder: 'Message',
                    name: 'message'
                },
                value: "",
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }
        },
        isFormValid: false,
        status: ''
    }

    submitContactInformation = (event) => {
        event.preventDefault();
        console.log(this.state.contactForm);

        const form = event.target;
        console.log(form);
        const data = new FormData(form);
        data._replyto = this.state.contactForm.email.value;
        data.message = this.state.contactForm.message.value;
        data.name = this.state.contactForm.name.value;
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    inputChangedHandler = (event, inputIdentifier) => {

        const updatedFormElement = updateObject(this.state.contactForm[inputIdentifier], {
            value: event.target.value,
            valid: this.state.contactForm[inputIdentifier].validation ? checkValidity(event.target.value, this.state.contactForm[inputIdentifier].validation) : true,
            touched: true
        });

        const updatedConactForm = updateObject(this.state.contactForm, {
            [inputIdentifier]: updatedFormElement
        });

        let formIsValid = true;
        for (let formElement in updatedConactForm) {
            if (!updatedConactForm[formElement].valid) {
                formIsValid = false
            }
        }
        this.setState({ contactForm: updatedConactForm, isFormValid: formIsValid });
    }

    render() {

        const formElementsArray = [];
        for (let key in this.state.contactForm) {
            formElementsArray.push({
                id: key,
                config: this.state.contactForm[key]
            });
        }

        let form = (
            <form onSubmit={this.submitContactInformation} action="https://formspree.io/moqkqkgo" method="POST">
                <div className={classes.Row}>
                    <Input
                        key={formElementsArray[0].id}
                        elementType={formElementsArray[0].config.elementType}
                        elementConfig={formElementsArray[0].config.elementConfig}
                        value={formElementsArray[0].config.value}
                        changed={(event) => this.inputChangedHandler(event, formElementsArray[0].id)}
                        inValid={!formElementsArray[0].config.valid}
                        shouldValidate={formElementsArray[0].config.validation}
                        touched={formElementsArray[0].config.touched} />
                    <Input
                        key={formElementsArray[1].id}
                        elementType={formElementsArray[1].config.elementType}
                        elementConfig={formElementsArray[1].config.elementConfig}
                        value={formElementsArray[1].config.value}
                        changed={(event) => this.inputChangedHandler(event, formElementsArray[1].id)}
                        inValid={!formElementsArray[1].config.valid}
                        shouldValidate={formElementsArray[1].config.validation}
                        touched={formElementsArray[1].config.touched} />
                </div>
                <div className={classes.Row}>
                    <Input
                        key={formElementsArray[2].id}
                        elementType={formElementsArray[2].config.elementType}
                        elementConfig={formElementsArray[2].config.elementConfig}
                        value={formElementsArray[2].config.value}
                        changed={(event) => this.inputChangedHandler(event, formElementsArray[2].id)}
                        inValid={!formElementsArray[2].config.valid}
                        shouldValidate={formElementsArray[2].config.validation}
                        touched={formElementsArray[2].config.touched} />
                    <Input
                        key={formElementsArray[3].id}
                        elementType={formElementsArray[3].config.elementType}
                        elementConfig={formElementsArray[3].config.elementConfig}
                        value={formElementsArray[3].config.value}
                        changed={(event) => this.inputChangedHandler(event, formElementsArray[3].id)}
                        inValid={!formElementsArray[3].config.valid}
                        shouldValidate={formElementsArray[3].config.validation}
                        touched={formElementsArray[3].config.touched} />
                </div>
                <div className={classes.RowTextArea}>
                    <Input
                        key={formElementsArray[4].id}
                        elementType={formElementsArray[4].config.elementType}
                        elementConfig={formElementsArray[4].config.elementConfig}
                        value={formElementsArray[4].config.value}
                        changed={(event) => this.inputChangedHandler(event, formElementsArray[4].id)}
                        inValid={!formElementsArray[4].config.valid}
                        shouldValidate={formElementsArray[4].config.validation}
                        touched={formElementsArray[4].config.touched} />
                </div>
                {this.state.status === 'SUCCESS' ? <p className={classes.ContactSuccess}>Thanks</p> : <button className={classes.contactMeButton} disabled={!this.state.isFormValid}>Contact</button>}
                {this.state.status === "ERROR" && <p className={classes.ContactError}>Ooops! There was an error.</p>}
            </form>
        );

        return (
            <section id="contactme" className={classes.ContactMe}>
                <h1>Contact Me</h1>
                <h4>Let's Talk</h4>
                <div>
                    {form}
                </div>
            </section>
        );
    }
}

export default ContactMe;