import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/index'
class Search extends Component {
  onChange = (event) =>{
    this.setState({
      keyword: event.target.value
    })
  }
  onSearch = () =>{
    this.props.onSearch(this.state.keyword);
  }
  render() {
    return (
      <div className="search">
        <div>
          <div className="d-flex">
            <input type="search" name="keyword" onChange={this.onChange} required className="form-control" />
            <button className="btn btn-primary" onClick = {this.onSearch} type="button">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    
  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return {
    onSearch: (keyword) =>{
      dispatch(actions.searchTask(keyword))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);

