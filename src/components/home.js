import React, { Component } from "react";
import Control from "./control";
import TaskList from "./tasklist";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class Home extends Component {
      // đóng mở form
  displayForm = ()=>{
     var {itemEditting} = this.props
     if(itemEditting){
       this.props.openForm();
     }else{
       this.props.onToggleForm();
     }
     this.props.onClearTask({
       id:'',
       name: '',
       time_start: '',
       time: 0,
       status: false
     });
     
   }
 
   // tìm index
   findIndex = (id)=>{
     var { tasks } = this.state;
     var result = -1;
     tasks.forEach((task,index)=>{
       if(task.id === id){
         result = index;
       }
     });
     return result;
     
   }
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="header">
            <h2 className="text-center mb-5">Quản lý công việc</h2>
          </div>
        </div>
        <div className="row container">
          <div className="col-12">
            <div className="add_todolist mb-3">
              <Link to="/work-add" className="btn btn-primary" onClick={this.displayForm}>
                <i className="fas fa-plus" /> Thêm công việc
              </Link>
            </div>
            <Control />
            <div className="todolist-body">
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplayform: state.isDisplayform,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
