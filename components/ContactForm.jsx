var ContactForm extends React.Component {
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function() {
        console.log(this.props)
        return (
            <form className="contactForm">
                <input type="text" placeholder="Imię" value={this.props.contact.firstName}/>
                <input type="text" placeholder="Nazwisko" value={this.props.contact.lastName}/>

        
            
            </form>
            // React.createElement('form', { className: 'contactForm' },
            //     React.createElement('input', {
            //         type: 'text',
            //         placeholder: 'Imię',
            //         value: this.props.contact.firstName,
            //     }),
            //     React.createElement('input', {
            //         type: 'text',
            //         placeholder: 'Nazwisko',
            //         value: this.props.contact.lastName,
            //     }),
            //     React.createElement('input', {
            //         type: 'email',
            //         placeholder: 'Email',
            //         value: this.props.contact.email,
            //     }),
            //     React.createElement('button', { type: 'submit' }, "Dodaj kontakt")
            // )
        )
    },
}