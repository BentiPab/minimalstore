import React, { PureComponent } from "react";

class CartItemGallery extends PureComponent {

state = {
    active: 0
}


    nextImage = () => {
        this.setState({ active: this.state.active + 1 });
      };
    
      prevImage = () => {
        this.setState({ active: this.state.active - 1 });
      };
    

  render() {
    const { active } = this.state;
    const { gallery } = this.props;
    return (
      <div className="cart-item-carousel">
        {gallery.length > 1 && (
          <React.Fragment>
            <button
              disabled={active === 0 ? true : false}
              onClick={this.prevImage}
            >{`<`}</button>
            <button
              disabled={active === gallery.length - 1 ? true : false}
              onClick={this.nextImage}
            >{`>`}</button>
          </React.Fragment>
        )}
        <img src={gallery[active]} alt="active-img" />
      </div>
    );
  }
}

export default CartItemGallery;
