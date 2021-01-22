import React, { useCallback, useEffect, useState } from 'react';
import Forma from './Forma';
import Message from './Message';


// export default class MessageField extends React.Component {

//    state = {
//       messages: [
//          {
//             text: "Привет!",
//             author: "Alex"
//          },
//          {
//             text: "Как дела?",
//             author: "Alex"
//          }
//       ],
//       robots: [
//          {
//             robottext: 'Hi! I am a SkyNet',
//             robotname: 'Robot'
//          }
//       ]
//    }

//    // componentWillUnmount() {
//    //    clearTimeout(this.timeout)
//    // }

//    // componentDidUpdate(prevProps, prevState) {
//    //    const LastAuthor = this.state.messages[this.state.messages.length - 1].author
//    //    if (prevState.messages.length < this.state.messages.length && LastAuthor !== 'Robot') {
//    //       this.timeout = setTimeout(() => {
//    //          console.log(this.state.robots.robotname);
//    //          this.handleNewMessage('Hi! I am a SkyNet', 'Robot')
//    //       }, 1000)
//    //    }
//    // }

//    // renderMessage = (message, i) => {
//    //    return (
//    //       <Message text={message.text} author={message.author} key={i} />
//    //    )
//    // }

//    // handleNewMessage = (text, author = 'Jora') => {
//    //    this.setState(state => ({
//    //       messages: [...state.messages, { text: text }, { author }]
//    //    }))
//    // }



//    // render() {
//    //    return (
//    //       <>
//    //          {this.state.messages.map(this.renderMessage)}
//    //          <Forma addNewMessage={this.handleNewMessage} />
//    //       </>
//    //    )
//    // }

// }



export default function MessageField() {
   const [messages, setMessages] = useState(
      [
         {
            text: "Привет!",
            author: "Alex"
         },
         {
            text: "Как дела?",
            author: "Alex"
         }
      ]
   )

   const renderMessage = useCallback((message, i) => {
      return (
         <Message text={message.text} author={message.author} key={i} />
      )
   }, [])

   const handleNewMessage = useCallback((text, author = 'Jora') => {
      if (text !== '') {
         setMessages((oldMessages) => ([...oldMessages, { text, author }]))
      }
   }, [])

   useEffect(() => {
      let timeout
      if (messages[messages.length - 1].author !== 'Robot') {
         timeout = setTimeout(() => {
            handleNewMessage('My name is Skynet', 'Robot')
         }, 2000)
      }

      return () => {
         clearTimeout(timeout)
      }
   }, [messages, handleNewMessage])

   return (
      <>
         <div className="message_wrap">
            {messages.map(renderMessage)}
         </div>
         <Forma addNewMessage={handleNewMessage} />
      </>
   )

}
