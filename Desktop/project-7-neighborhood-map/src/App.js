import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  
state = {
  venues: []
}

  componentDidMount() {
    this.getVenues()
  }

  loadMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCRlDr_ACA80UcW_svxFgZqtUkzhL6COqI&callback=initMap")
  window.initMap = this.initMap
  }
  
  getVenues = () => {
   const endPoint = "https://api.foursquare.com/v2/venues/explore?"
   const parameters = {
     client_id: "RXELH2QF5VFRWCD11BWSZWE1TP3OEDXDY3FSN1U552FCOY0J",
     client_secret: "X0O4RURKYRVBH0IXWDZRLUWT0ZPKWQXIDJXB3ANT3T44111N",
     query: "seafood",
     near: "Scarborough, ME",
     v: "20182507"
   }
   axios.get(endPoint + new URLSearchParams(parameters))
   .then(response => {
    this.setState({
     venues: response.data.response.groups[0].items },
      this.loadMap()) 
   })
   .catch(error => {
     console.log("Error! " + error)
   })
  }

  initMap = ()  => {

    // display the Google map
    var map = new window.google.maps.Map(document.getElementById('map'), 
    { center: {lat: 43.5969466, lng: -70.3372277},
      zoom: 11
    })
//created an Info Window using the example at https://developers.google.com/maps/documentation/javascript/infowindows
    var infowindow = new window.google.maps.InfoWindow();

    this.state.venues.map(myVenue => {


      
      var contentString = '${myVenue.venue.name}'
      
//created a dynamic Marker using the example from https://developers.google.com/maps/documentation/javascript/markers
      var marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      })

      //event listener to open info window when clicking the market
      marker.addListener('click', function() {

        //change the content for the info window with details for each venue
        infowindow.setContent(contentString)

        //open the info window
        infowindow.open(map, marker);
      });
    })
    
  }
  render() {
    return (
       <main>
         <div id="map"></div>
       </main>
    )
  }
}

function loadScript(url) {
var index = window.document.getElementsByTagName("script")[0]
var script = window.document.createElement("script")
script.src = url
script.async = true
script.defer = true
index.parentNode.insertBefore(script, index)
}
export default App;
