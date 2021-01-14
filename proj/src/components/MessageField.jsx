import React from 'react';
import Message from './Message';


export default class MessageField extends React.Component {
   state = {
      messages: [
         {
            text: "Привет!",
            author: "Alex"
         },
         {
            text: "Как дела?",
            author: "Alex"
         }
      ]
   };

   componentDidUpdate() {
      if (this.state.messages.length % 2 === 1) {
         this.setState(
            {
               messages: [...this.state.messages,
               {
                  text: 'Какие вопросы?',
                  author: ':)'
               }
               ]
            })
      }
   }

   sendMessage = () => {
      this.setState({
         messages: [...this.state.messages,
         {
            text: 'Нормально',
            author: 'I am Robot'
         }
         ]
      });
   };

   render() {
      console.log(this.state);
      const messageElements = this.state.messages.map((text, index) => (
         <Message key={index} text={text.text} author={text.author} />));

      return <div>
         {messageElements}
         <button onClick={this.sendMessage}>Отправить сообщение</button>
      </div>
   }
}
