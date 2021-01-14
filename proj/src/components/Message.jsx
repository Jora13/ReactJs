import React from 'react'
import PropsTypes from 'prop-types'

export default class Message extends React.Component {
   static PropsTypes = {
      text: PropsTypes.string.isRequired,
   }

   render() {
      return (
         <div>
            {this.props.author} <br />
            {this.props.text}
         </div>
      )
   }
}