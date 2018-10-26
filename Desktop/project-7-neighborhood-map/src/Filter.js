import React, { Component } from 'react';


class Filter extends Component {
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

filteredMarkers = query => {
    let {markers} = this.this.props
    let filteredMarkers = markers.filter(marker =>
        marker.title.toLowerCase().includes(this.state.query.toLowerCase())
    )
    markers.forEAch(marker =>marker.setVisible(false))
    filteredMarkers.forEach(marker => marker.setVisible(true))

}




    //render(){
    //    let filteredVenues = this.props.localArts.filter( (seafood) => {
  //          return seafood.venue.name.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1
  //      })
    
  //  return ()
    
    //}
   }
      
    
  



export default Filter;