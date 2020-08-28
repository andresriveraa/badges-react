import React, { Component } from 'react';

// --------con statefull

class Button extends Component {
  state = {
    name: 0,
  }

  // para actualizar el estado
  handleChange = () => {
    this.setState({      
      name : this.state.name + 1
    })
  }

  render() {
    return (
      <p onClick={this.handleChange} >{this.state.name}</p>
    );
  }
}

export default Button;

// -------con stateless

// const Button = (props) => {
//   const { texts } = props;
//   console.log(props);
//   return (
//     <div className="">
//       <button>
//         {texts}
//       </button>
//     </div>
//   );
// }

// export default Button;