import React from 'react'

class Toggle extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         res: 0,
         resetVal: 0
      }
   }

   handleMinus = () => {
      this.setState((state) => ({
         res: state.res - 1
      }));
   }
   handlePlus = () => {
      this.setState((state) => ({
         res: state.res + 1
      }))
   }
   handleReset = () => {
      this.setState((state) => ({
         res: 0,
         resetVal: +(state.resetVal) + 1
      }))
   }

   render() {
      let g = "ssdsd"
      console.log(g[0]);
      return (
         <div className="learn1">
            <div className="calc">
               <button className="minus" onClick={this.handleMinus}>-</button>
               <span className="res">{this.state.res}</span>
               <button className="plus" onClick={this.handlePlus}>+</button>
            </div>
            <div className="reset">
               <button className="btn_reset" onClick={this.handleReset}>
                  &times;
               </button>
            </div>

            <div className="reset_val">
               <p>Обнулил {this.state.resetVal} раз</p>
            </div>
         </div>
      );

   }
}


export default Toggle