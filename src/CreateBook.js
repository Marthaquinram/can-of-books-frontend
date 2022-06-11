// import { Component } from "react";
// import { Form, Button } from "react-bootstrap";

// export default class CreateBook extends Component {
//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.onCreate({
//       title: event.target.formTitle.value,
//       description: event.target.formDescription.value,
//       status: event.target.formStatus.value,
//     });
//   };
  
//   render() {
//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Form.Group className="mb-3" controlId="form title">
//             <Form.Label>Title</Form.Label>
//             <Form.Control type="title" placeholder="enter book title" />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="form description">
//           <Form.Label>Description</Form.Label>
//           <Form.Control
//             type="description"
//             placeholder="enter book description"
//           />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="form status">
//           <Form.Label>Status</Form.Label>
//           <Form.Control type="status" placeholder="enter book status" />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     );
//   }
// }
