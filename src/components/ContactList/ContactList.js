import React, {Component} from 'react';

const ContactList = props => {
    const contactArr = props.contacts.map((item, index) =>
        return (
            <Contact key={index}>{item} />
        )
    )

}