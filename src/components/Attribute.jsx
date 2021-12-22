import React, { PureComponent } from "react";

class Attribute extends PureComponent {
  state = {
    selected: 0,
  };

  handleSelect = (e) => {
    this.props.addAttribute(e);
    this.setState({ selected: e.target.id });
  };




  render() {
    const { attribute, index } = this.props;
    const { selected } = this.state;

    const swatch = attribute.type === "swatch" ? true : false;

    return (
      <div>
        <h4>{attribute.id}:</h4>
        <form>
          {attribute.items.map((item) => (
            <input
              key={item.id}
              data-order={index}
              onClick={(e) => this.handleSelect(e)}
              type="button"
              className={`${swatch ? `${item.id}` : "" } ${selected === item.id ? "selected" : ""}` }
              name={attribute.id}
              id={item.id}
              data-type={attribute.type}
              value={item.value}
              required
            />
          ))}
        </form>
      </div>
    );
  }
}

export default Attribute;
