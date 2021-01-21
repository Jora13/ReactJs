import React, { useCallback, useState } from 'react'

let Forma = ({ addNewMessage }) => {
   const [value, setValue] = useState('')

   const handleChange = useCallback((e) => {
      setValue(e.target.value)
   }, [])

   const submitMessage = useCallback((e) => {
      e.preventDefault()
      addNewMessage(value)
      setValue('')
   }, [addNewMessage, value])



   return (
      <form className="send_message_form" onSubmit={submitMessage} >
         <input type="text" onChange={handleChange} value={value} placeholder="Enter your message" />
         <button type="submit" className="btn">Send message</button>
         <p>{value}</p>
      </form>
   )
}

export default Forma