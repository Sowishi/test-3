import React, { Component } from 'react';
import  Navbar from './component/Navbar';
import './App.css'
import Ads from './component/Ads';
import Category from './component/Category';
import Slider from './component/Slider';

class App extends Component {
    state = { 
      category: [
          {id: 1 , label: 'Pants'},
          {id: 2 , label: 'Polo'},
          {id: 3 , label: "Men's apparel"},
          {id: 4 , label: 'Skirt'},
          {id: 5 , label: 'Crypto'},
          {id: 6 , label: 'Shirt'}
      ],
      activeCategory: 1,
      items: [
        {id: 1, title: 'Nike KYRIE x SpongeBob SquarePants Collection', itemPic: '/photos/sponge-shoes.jpeg', price: "999.00"},
        {id: 2, title: 'Movement Watch for men (Elastic and affordable)', itemPic: '/photos/watch.jpeg', price: "2999.00"},
        {id: 3, title: 'Fender ST72-US 3TSJapan Stratocaster Electric Guitar Tested Use Scallops Custom', itemPic: '/photos/guitar.png', price: "5999.00"},
        {id: 4, title: 'Movement Watch for men, (Elastic and affordable)', itemPic: '/photos/watch.jpeg', price: "2999.00"},
        {id: 5, title: 'Fender ST72-US 3TSJapan Stratocaster Electric Guitar Tested Use Scallops Custom', itemPic: '/photos/guitar.png', price: "5999.00"},
        {id: 6, title: 'Nike KYRIE x SpongeBob SquarePants Collection', itemPic: '/photos/sponge-shoes.jpeg', price: "999.00"}
      ]
  }

  render() {
    const {category, activeCategory, items} = this.state; 
    return (
      <React.Fragment>
        <Navbar />
        <div className="container-fluid px-4">
            <div className="row">
              <div className="col-12">
                <Ads/>
              </div>
              <div className="col-md-3">
                <Category category={category} activeCategory={activeCategory} onCategoryClick={this.handleCategoryClick}/>
              </div>
              <div className="col-md-9">
                <Slider items={items} ></Slider>
              </div>
            </div>
        </div>
      </React.Fragment>
      
      
    );
  }

  handleCategoryClick = (id) => {
    this.setState({activeCategory: id})
    }
}
 
export default App;