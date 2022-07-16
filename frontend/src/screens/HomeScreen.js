import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import gallery1 from '../assets/image_skulliver.jpeg';
import gallery2 from '../assets/image_hand.jpeg';
import gallery3 from '../assets/image_dragonfly_spock.jpeg';
class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        gallery1,
        gallery2,
        gallery3

      ],
      current: 0,
      isNext: true,
      itemsAlt: [
        '"Skulliver", a giant multi-coloured foundation paperpiecing skull.'

      ]
    };

    this.handlerPrev = this.handlerPrev.bind(this);
    this.handlerNext = this.handlerNext.bind(this);
    this.goToHistoryClick = this.goToHistoryClick.bind(this);

  };


  handlerPrev() {
    let index = this.state.current, length = this.state.items.length;

    if (index < 1) {
      index = length;
    }

    index = index - 1;

    this.setState({
      current: index,
      isNext: false

    });

    console.log("Prev Clicked");
  }

  handlerNext() {

    let index = this.state.current, length = this.state.items.length - 1;

    if (index === length) {
      index = -1;
    }

    index = index + 1;

    this.setState({
      current: index,
      isNext: true
    });
  }

  goToHistoryClick(currentIndex, index) {
    let next = (currentIndex < index);
    this.setState({
      current: index,
      isNext: next

    });
  }

  render() {

    let index = this.state.current, isNext = this.state.isNext, src = this.state.items[index];


    return (




      <div className='bg-black w-full h-fit'>
        <div className="flex flex-col lg:flex-row space-x-12">
            <div className="mx-auto lg:ml-12 lg:my-12 my-4 w-10/12 h-[65vh] max-w-full min-h-1/2 bg-gray-100 overflow-clip rounded-3xl ">
                <div className="bg-hero bg-cover bg-no-repeat bg-center w-full h-full scale-[120%] -translate-x-5 "></div>
            </div>
            <div className="mx-auto mt-12 w-10/12 lg:mr-16 lg:max-w-[600px] flex flex-col align-center justify-center">
                <h2 className="font-quicksand text-5xl text-center text-white leading-tight"><span className="font-berkshire font-bold
                    text-chill-grad bg-chill-grad bg-clip-text text-transparent bg-400 animate-shine ">Handmade</span>
                    &nbsp;quilts made in Barrie, Ontario, Canada.</h2>
            <div className="relative before:absolute after:absolute
                                    mt-12 mx-auto mb-0 w-10/12 py-8 rounded-full
                                    before:content-[''] after:content-['']
                                    bg-[linear-gradient(0deg,_#000,_#272727)]
                                    before:rounded-full after:rounded-full

                                    before:-left-[2px] after:-left-[2px]
                                    before:-top-[2px] after:-top-[2px]
                                    before:bg-chill-grad after:bg-chill-grad
                                    before:bg-400 after:bg-400
                                    before:w-[calc(100%_+_4px)] after:w-[calc(100%_+_4px)]
                                    before:h-[calc(100%_+_4px)] after:h-[calc(100%_+_4px)]
                                    before:-z-[1] after:-z-[1]
                                    before:animate-shine after:animate-shine
                                    after:blur-[2rem]
                                    flex align-middle justify-center items-center group cursor-pointer" >
                    <span
                        className="font-quicksand text-3xl font-bold text-white/90
                                     group-hover:bg-chill-grad group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-400 animate-shine ">See
                        What's Available</span>
                </div>
            </div>
        </div>
      </div>

    )
  }
}

class History extends Component {


  constructor(props) {
    super(props);
  }

  render() {
    let current = this.props.current;
    let items = this.props.items.map((el, index) => {
      let style = (index == current) ? 'bg-pink-500 drop-shadow-[-2px_2px_0px_rgba(234,117,7,1.0)]' : ' bg-pink-500/50 drop-shadow-[-2px_2px_0px_rgba(234,117,7,1.0)]';
      let thisButtonClass = style + "  border-0 outline-none absolute top-0 left-0 h-full w-full cursor-pointer transition-colors duration-300 ease-in "

      return (
        <li className='w-2/12 box-border relative ' key={index}>
          <button className={thisButtonClass}></button>
        </li>
      )
    });

    return (
      <ul className=" list-none p-0 m-2 flex space-x-4 justify-center h-[3px]">{items}</ul>
    )
  }
}

// Thanks to https://codepen.io/VoloshchenkoAl/pen/jBPEzG?editors=0110 for the code and method for this carousel

export default HomeScreen