import React, { Component } from 'react';


export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {

    const returnValue = this.props.opacity - 0.1

    return (  
      <div className="color-box" style={{ opacity: this.props.opacity }}>
        {this.props.opacity <= 0.2 ? null : <ColorBox opacity={returnValue}/>}
      </div>
    )
  }
  // render() {
  //   const returnValue = this.props.opacity - 0.1
  //   return this.props.opacity > 0.2 ? null : (
  //     <div className="color-box" style={{ opacity: this.props.opacity }}>
  //       <ColorBox opacity={returnValue}/>
  //     </div>
  //   )
  // }
}


// XI

// export default class Example extends Component {
//   render() {
//     const newValue = this.props.value * 2;
//     return this.props.value > 100 ? null : ( <div>
//         <Example value={newValue} />
//       </div>)
//   }
// }

// NICK

// render() {
//   const returnValue = this.props.opacity - 0.1
//   return this.props.opacity > 0.2 ? null : ( 
//   <div className='color-box' style={{ opacity: this.props.opacity}}>
//    <ColorBox opacity={returnValue}/>
//   </div>)
    
    // <div className="color-box" style={{opacity: this.props.opacity}}>
    //   {
    //   <ColorBox style={{opacity: this.props.opacity}}/>
    //   }
    // </div>
// }