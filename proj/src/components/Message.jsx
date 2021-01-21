import React from 'react'

export default function Message({ text, author }) {
   return (
      <>
         <div className="message_value">{text}</div>
         <div className="message_author">{author}</div>
      </>
   )
}