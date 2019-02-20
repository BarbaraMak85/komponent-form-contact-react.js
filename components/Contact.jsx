class Contact extends React.Component {

    constructor(props){
        super(props)
    }

    render () {
        return (
            <div className="contactItem">
                <img className="contactImage" src={'http://www.contactsjournal.com/images/crm-app-icon.png'}/>
                <p className="contactLabel">Imię : {this.props.item.firstName}</p>
                <p className="contactLabel">Nazwisko : {this.props.item.lastName}</p>
                <a className="contactEmail"href="mailto">email : {this.props.item.email}</a>
            
            </div>

        )
    }

}

// var Contact = React.createClass({
//     propTypes: {
//         item: React.PropTypes.object.isRequired,
//     },

//     render: function() {
//         return (
//             React.createElement('div', { className: 'contactItem' },
//                 React.createElement('img', {
//                     className: 'contactImage',
//                     src: 'http://www.contactsjournal.com/images/crm-app-icon.png'
//                 }),
//                 React.createElement('p', { className: 'contactLabel' }, 'Imię: ' + this.props.item.firstName),
//                 React.createElement('p', { className: 'contactLabel' }, 'Nazwisko: ' + this.props.item.lastName),
//                 React.createElement('a', { className: 'contactEmail', href: 'mailto:' + this.props.item.email },
//                     this.props.item.email
//                 )
//             )
//         )
//     },
// });