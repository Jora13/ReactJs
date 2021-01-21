import React from 'react'

export default function Message({ text, author }) {
   if (author !== 'Robot') {
      return (
         <>
            <div className="message_content text-success">
               <div className="message_value">{text}</div>
               <div className="message_author">{author}</div>
            </div>
         </>
      )
   } else {
      return (
         <>
            <div className="message_content text-right text-info">
               <div className="message_value">{text}</div>
               <div className="message_author">{author}</div>
            </div>
         </>
      )
   }
}