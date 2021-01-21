import React, { useCallback, useEffect, useState } from 'react';
import Users from './Users';


function Sidebar() {
   const [navlink, setNavlink] = useState(
      [
         {
            title: "John",
            src: "/"
         },
         {
            title: "Ivan",
            src: "/"
         },
         {
            title: "Elena",
            src: "/"
         }
      ]
   )

   const renderUsers = useCallback((navlink, i) => {
      return (
         <Users title={navlink.title} src={navlink.src} key={i} />
      )
   }, [])

   return (
      <>
         <nav className="sidebar_nav">
            <ul>
               {navlink.map(renderUsers)}
            </ul>
         </nav>
      </>
   )
}

export default Sidebar