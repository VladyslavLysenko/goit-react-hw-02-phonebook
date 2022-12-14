import React from 'react';
import { InnerWrap,SectionForm,CommonButton, Input } from './Form.styled';
class ContactForm extends React.Component {
    state = {
        name: '',
        number: '',
    };

    handlerChange = evt => {
        // console.log(evt.currentTarget);
        const input = evt.currentTarget;
        this.setState(prevState => ({
            [input.name]: input.value
        })
        )
    }


    handlerSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        form.reset();
        this.props.onSubmit(this.state);
       

    };    
      
    
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <SectionForm>
                <InnerWrap>
                <label>Name
                    <Input
                    onChange={this.handlerChange}
                    type="text"
                    name="name"
                    placeholder="Add your name..."
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    />
                    </label>
                    </InnerWrap>
                </SectionForm>
                <SectionForm>
                 <InnerWrap>
                 <label>Number
                    <Input
                    onChange={this.handlerChange}
                    type="tel"
                    name="number"
                    placeholder="Add your number..."
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                    </label>
                    </InnerWrap>
                    </SectionForm>
                <CommonButton type="submit">Add contact</CommonButton>
                <div />
            </form>
        );
    }
}

export default ContactForm;

// ReactDOM.render(
//   <LoginForm onSubmit={values => console.log(values)} />,
//   document.getElementById("root")
// );


