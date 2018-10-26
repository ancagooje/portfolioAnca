import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {query: '',
    showVenues: true}
    }
    updateQuery = (query) => {
        this.setState({
            query: query
        })
        this.filteredVenues(query)
    }
    
    filteredVenues = (query) => {
        this.setState({query})
        this.filterMarkers({query})
    }
    
    filterMarkers = query => {
        let {markers} = this.props
        let filteredMarkers = markers.filter(marker =>
            marker.title.toLowerCase().includes(this.state.query.toLowerCase())
        )
        markers.forEAch(marker =>marker.setVisible(false))
        filteredMarkers.forEach(marker => marker.setVisible(true))
    
    }
    //liClick = e => {
     //   let animateMarker = window.google.maps.Animation.BOUNCE
     //   console.log('click')
    
    
    
      }
   // render() {(

  // })
   // return();


    export default Sidebar;
    