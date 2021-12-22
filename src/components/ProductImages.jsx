import React, { PureComponent } from 'react';


class ProductImages extends PureComponent {

    state = {
        active: 0
    }

    handleActive = (e) => {
        this.setState({ active: e.target.dataset.index });
      };


    render() {
        const {gallery} = this.props.product
        const {active} = this.state
        return (
            <div>
                 <div className="imgs-container">
                  <div className="carousel">
                    {gallery.map((img, index) => (
                      <img
                        key={img}
                        onClick={(e) => this.handleActive(e)}
                        data-index={index}
                        src={img}
                        alt={`img-${index}`}
                      />
                    ))}
                  </div>
                  <img
                    className="active-img"
                    src={gallery[active]}
                    alt={`img-${active}`}
                  />
                </div>
            </div>
        );
    }
}

export default ProductImages;