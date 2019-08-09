import React, {Component} from "react"; 
import Cards from "../cards/cards";
import images from "../../images.json";
import './main.css';

class Main extends Component {
  // Setting this.state.images to the images json array
  state = {
    images
  };

  countUp = id => {
    // Filter this.state.images for images with an id not equal to the id being removed
    const images = this.state.images.filter(image => image.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ images });
  };
  
  render() {
    return (
    <div className="main">
          {this.state.images.map(image => (
            <Cards 
            countUp={this.countUp}
            id={image.id}
            key={image.id}
            image={image.image}/>
          ))}
    </div>
  );
};
};
export default Main;