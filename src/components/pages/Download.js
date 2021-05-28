import React from 'react';
import { Container } from "@material-ui/core";
import axios from 'axios';

export default class Download extends React.Component {
  render() {
    return (
      <div className="App">
        <Container maxWidth="md">
          <h1>Download Certificate</h1>
          <img src="/coming-soon.jpeg" alt="coming-soon" />
        </Container>
      </div>
    )
  }
}

// import React from 'react';

// import axios from 'axios';

// export default class PersonList extends React.Component {
//   state = {
//     persons: []
//   }

//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (
//       <ul>
//         { this.state.persons.map(person => <li>{person.name}</li>)}
//       </ul>
//     )
//   }
// }