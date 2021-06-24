import React, { Component } from "react";
import TaskItem from "./taskitem";
import { connect } from "react-redux";
import * as actions from '../actions/index'
class TaskList extends Component {
  // tạo constructor
  constructor(props){
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1 //all: -1, active: 1,deactive: 0
    }
  }
  componentDidMount(){
    this.props.fetchAllWorks()
    
 }

  // sự kiện onchange
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    var filter = {
      name: name === 'filterName'? value : this.state.filterName,
      status: name === 'filterStatus'? value : this.state.filterStatus
    };
    this.props.onFilterTable(filter)
    this.setState({
      [name]: value
    });

  }
  onDelete = (id) => {
    this.props.onDeleteWorks(id)
  }
  
  onChange = (e) =>{
    // var target = e.target;
    // var name = target.name;
    // var value = target.value;
    
  }
  render() {
    
    var {works} = this.props;
    var element = works.map((work,index)=>{
     return <TaskItem onDelete = {this.onDelete} onUpdateStatus={this.onUpdateStatus} work={work} key={index} index={index}/>; 
    })
    return (
      <div >
        <table className="table" >

          <thead>
            <tr>
              <th scope="col" className="text-center">
                STT
              </th>
              <th scope="col">Tên công việc</th>
              <th scope="col" className="text-center">
                Dự định làm CV
              </th>
              <th scope="col" className="text-center">
                Thời gian
              </th>
              <th scope="col" className="text-center">
                Trạng thái
              </th>
              <th scope="col" className="text-center">
                Chức năng
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-light">
              <th scope="row" className="text-center">
              
              </th>
              <td>
                <input type="search" name="filterName" value={this.state.filterName} onChange={this.onChange} className="form-control" />
              </td>
              <th></th>
              <td />
              <td>
                <div className="mb-3">
                  <select
                    name="filterStatus"
                    value={this.state.filterStatus} onChange={this.onChange}
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option value={-1}>Tất cả</option>
                    <option value={1}>hoàn thành</option>
                    <option value={0}>chưa</option>
                  </select>
                </div>
              </td>
              <td></td>
            </tr>
            {element}
          </tbody>
        </table>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    works: state.works,
    filterTable: state.filterTable,
    keyword: state.search,
    sort: state.sort
  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return {
    onFilterTable: (filter) =>{
      dispatch(actions.filterTask(filter))
    },
    fetchAllWorks: () =>{
      dispatch(actions.fetchWorksRequest())
    },
    onDeleteWorks: (id) =>{
      dispatch(actions.deleteWorksRequest(id));
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);
