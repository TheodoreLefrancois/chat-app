import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';


class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            isOnline: false,
        };
    }
    render(){
        return (
            <div className='Contact'>
                <div className='avatar'>
                    <img  className='avatar' src={this.props.avatar} alt={this.props.avatar}/>
                </div>
                <div className='status status-text '>
                    <div className='Name'>
                        {this.props.name}
                    </div>
                    <div 
                    onClick={event=>{
                        const newStatut = !this.state.isOnline;
                        this.setState({isOnline : newStatut})
                        }}
                    className={this.state.isOnline ? 'status-online': 'status-offline' }>
                        {this.state.isOnline ?  'Online': 'Offline '}
                    </div>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };
export default Contact;