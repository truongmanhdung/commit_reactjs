/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from '../actions/index'
class Sort extends Component {
  onClick = (sortBy, sortValue) =>{
    this.props.onSort({
      by: sortBy,
      value: sortValue
    })
  }
  render() {
    return (
      <div className="search">
        <div>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              Sắp xếp
            </button>
            <ul className="dropdown-menu" >
              <li>
                <a onClick={()=>this.onClick('name',1)}
                 className={(this.props.sort.by==='name' && this.props.sort.value===1) ? 'active dropdown-item' : 'dropdown-item'}>
                 <i className="fas fa-sort-alpha-down" /> Từ A-Z</a>
              </li>
              <li className="border-bottom">
                <a onClick={()=>this.onClick('name',-1)} className={(this.props.sort.by==='name' && this.props.sort.value===-1) ? 'active dropdown-item' : 'dropdown-item'}><i className="fas fa-sort-alpha-down-alt" /> Từ Z-A</a>
              </li>
              <li>
                <a onClick={()=>this.onClick('status',1)} className={(this.props.sort.by==='status' && this.props.sort.value===1) ? 'active dropdown-item' : 'dropdown-item'}>Trạng thái hoàn thành</a>
              </li>
              <li>
                <a onClick={()=>this.onClick('status',-1)} className={(this.props.sort.by==='status' && this.props.sort.value===-1) ? 'active dropdown-item' : 'dropdown-item'}>Trạng thái chưa hoàn thành</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort
  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return {
    onSort: (sort) =>{
      dispatch(actions.sortTask(sort))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sort);
