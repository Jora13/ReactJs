import React, { useCallback, useState } from 'react'

let Forma = ({ addNewMessage }) => {
   const [value, setValue] = useState('')

   const handleChange = useCallback((e) => {
      setValue(e.target.value)
   }, [])

   const submitMessage = useCallback((e) => {
      console.log(e);
      e.preventDefault()
      addNewMessage(value)
      setValue('')
   }, [addNewMessage, value])



   return (
      <form className="send_message_form" onSubmit={submitMessage} >
         <div className="form-controll">
            <textarea type="text" onChange={handleChange} value={value} placeholder="Enter your message"></textarea>
         </div>
         <button type="submit" className="btn btn-success">Send message</button>
         <p>{value}</p>
      </form>
   )
}

export default Forma