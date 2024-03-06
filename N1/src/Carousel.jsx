import { Component } from "react";

export class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pet/none.jpg"],
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt="pet"
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}
