import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import SliderItem from './SliderItem';

class Slider extends Component {
  render() { 
    const { items } = this.props;
  
    return (
      <Carousel className="mt-3" enableAutoPlay autoPlaySpeed={1500}>
        {items.map(item => <SliderItem key={item.id} title={item.title} itemPic={item.itemPic} price={item.price}/>)}
      </Carousel>
    );
  }
}
 
export default Slider;