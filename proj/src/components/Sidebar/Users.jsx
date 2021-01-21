import React from 'react'

function Users({ title, src }) {
   console.log(title);
   return (
      <>
         <li>
            <a href={src}>{title}</a>
         </li>
      </>
   )
}
export default Users