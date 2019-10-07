import React, { Component } from 'react'
import List from './List'
import Detail from './Detail';
import NavBar from './NavBar'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    const authToken = 'BlGDViJZovrpyq-kvjA3Re5QLR1a_4ot9fEhNbrZXa_G0yo_LK2GMm4x7a5tu8ZuUPOiBF7AUx6fsRaxw2YyQciZBQMt4PPxvN4ZIKN7EVNI32gbTo3k1rd0mGqVXXYx';
    
    this.state = {
      restaurants: [],
      detailData: { isOpen: false, data: {}, }
    };
  } 

  async componentDidMount() {
    const dataUrl = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json';
      try {
        const response = await fetch(dataUrl);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        this.setState({ restaurants: json.restaurants });
      } catch (error) {
        console.log(error);
      }
  }

  onSelect = data => {
    if( this.state.detailData.data.name === data.name) {
      this.onBack()
    } else {
      //data.yelp = this.getYelpData(data.location.lat,data.location.lng)
      this.setState({ detailData: { isOpen: true, data}});
    }
    
  }

  onBack = () => {
    this.setState({ detailData: { isOpen: false, data: {} }})
  }

  render({ restaurants, detailData } = this.state) {
    return(
      <div>
        <NavBar onBack={this.onBack} showBackButton={detailData.isOpen} />
        <div className='list-container flex-container'>
          <Detail restaurant={detailData.data} isOpen={detailData.isOpen} />
          <div className='flex-row'>
            {restaurants.map((restaurant, index) => (
              <div className='flex-column' key={`column-${index}`}>
                <List
                  key={`restaurant-${index}`} 
                  restaurant={restaurant} 
                  onSelect={this.onSelect} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
