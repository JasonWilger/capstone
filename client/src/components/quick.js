import './quick.css';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



// modal function to add list items
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new items
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
  
          {/* item info input section */}
          <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Item Name</Form.Label>
            <Form.Control type="item" placeholder="ex: Broccoli" />
          </Form.Group>
  
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Dry</option>
              <option>Cold</option>
              <option>Frozen</option>
            </Form.Control>
  
            <Form.Label>Food Group</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>Vegetable</option>
              <option>Fruit</option>
              <option>Proteins</option>
              <option>Dairy</option>
              <option>Grains</option>
            </Form.Control>
  
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Quantity</Form.Label>
            <Form.Control as="select" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
            </Form.Control>
          </Form.Group>
  
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="ex: Not as fresh" rows={3} />
          </Form.Group>
  
          <Button id="button" variant="" type="submit">
            Submit
          </Button>
  
        </Form>
        {/* end item info input section */}
  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  // end modal function

const Quick = () => {
  const [modalShow, setModalShow] = React.useState(false);

return (

    <div className="quickBody">
    <Button id="quickButton" variant="" onClick={() => setModalShow(true)}>
    Quick Add
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#9FE2BF" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
    </Button>
    <div/>
    <MyVerticallyCenteredModal
    show={modalShow}
    onHide={() => setModalShow(false)}
    />
    </div>

    );
}

export default Quick;