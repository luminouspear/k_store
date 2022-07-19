import React, {Component} from 'react';
import gallery1 from '../assets/image_skulliver.jpeg';
import gallery2 from '../assets/image_hand.jpeg';
import gallery3 from '../assets/image_dragonfly_spock.jpeg';

export default class HomeScreen extends Component {

  state = {
      current: 0,
      items: [
        { "image": gallery1, "imageAlt": '"Skulliver", a giant multi-coloured foundation paperpieceing skull."' },
        { "image": gallery2, "imageAlt": 'A hamsa mini-quilt.' },
        { "image": gallery3, "imageAlt": 'Mr. Spock and a dragonfly quilt in progress.' },
    ],

  };


  render() {
    console.log(this.state.current['image']);
    return (
      <div>HomeScreen</div>
    )
  }
}
