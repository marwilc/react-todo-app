import React from 'react';
import './TodoSearch.css';

// class Component extends React.Component {
//   constructor() {
//     this.state = {
//       patito: 'Juan'
//     };
//   }
  
//   render() {
//     return (<div onClick={() => this.setState('Enrique')} >{this.state.patito}</div>)
//   }
// }


function TodoSearch() {
  
  const [searchValue, setSearchValue] = React.useState('');
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  
  return [
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange }
    />,
    <p>{ searchValue }</p>
  ];
}

export { TodoSearch };

