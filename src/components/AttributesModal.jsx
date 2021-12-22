import React, { PureComponent } from "react";
import Modal from "./Modal";

class AttributesModal extends PureComponent {
  render() {
    return (
      <Modal>
        <div className="attribute-modal-overlay overlay">
          <div className="modal-container">
            <h1>All attributes must be selected</h1>
            <button onClick={() => this.props.toggleModal(false)}>Close</button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default AttributesModal;
