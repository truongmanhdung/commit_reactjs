import React, { Component } from "react";
import {connect} from 'react-redux'
import * as actions from "../actions/index";
class TaskForm extends Component {
 
  // tạo constructor
  constructor(props){
    super(props);
    this.state = {
      id:'',
      name: '',
      time_start: '',
      time: 0,
      status: false
    }
  }
  componentDidMount(){
    if(this.props.itemEditting && this.props.itemEditting.id !==null){
      this.setState({
        id: this.props.itemEditting.id,
        name: this.props.itemEditting.name,
        time_start: this.props.itemEditting.time_start,
        time : this.props.itemEditting.time,
        status : this.props.itemEditting.status,
      })
    }
  }
   componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditting){  
      this.setState({
        id: nextProps.itemEditting.id,
        name: nextProps.itemEditting.name,
        time_start: nextProps.itemEditting.time_start,
        time : nextProps.itemEditting.time,
        status : nextProps.itemEditting.status,
      })
    }else{
      this.onClearForm()
    }
  }
   // hàm đóng form
   onLockForm = ()=>{
    this.props.onCloseForm();
  }
  // hàm date
  date = () =>{
    const today = Date.now();
    var date = Intl.DateTimeFormat('vn', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today);
    return date;
  }
  // xóa form
  onClearForm = () => {
    this.setState({
      name: '',
      time_start: '',
      time: 0,
      status: false
    })
  }
  // sự kiện onchange
  onChange = (event)=>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status'){
      value = target.value === 'true' ? true : false;
    }
    this.setState({
      [name]:value
    })
  }
  // sự kiện submit
  onSubmit = (event)=>{
    event.preventDefault();
    this.props.onSaveTask(this.state);
    // this.props.onSaveForm(this.state);
    this.onClearForm();
    this.onLockForm();
  }
  render() {
    var {id} = this.state;
    if(!this.props.isDisplayform) return null;
    return (
      <div>
        <div className="d-flex bg-primary p-3 color-white justify-content-between align-items-center">
          <span>{ id === "" ? "thêm công việc" : "sửa công việc" }</span>
          <i className="fas fa-times cursor" onClick={this.onLockForm}></i>
        </div>
        <form className="p-4 bg-light" method="post" onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label className="form-label">Tên công việc</label>
            <input type="text" className="form-control" required name="name" value={this.state.name}
             onChange={this.onChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Lúc thực hiện</label>
            <input type="date" className="form-control" required  value={this.state.time_start} name="time_start" onChange={this.onChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Thời gian thực hiện</label>
            <input type="number" className="form-control" required min="0" name="time" value={this.state.time} onChange={this.onChange} />
          </div>
          <div className="mb-3">
            <select name="status" onChange={this.onChange} className="form-select">
              <option selected={this.state.status===true? true : false} value={true}>Đã hoàn thành</option>
              <option selected={this.state.status===false? true : false} value={false}>Chưa hoàn thành</option>
            </select>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary me-2">
              Lưu lại
            </button>
            <button onClick={this.onClearForm} type="reset" className="btn btn-danger">
              Hủy bỏ
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    isDisplayform: state.isDisplayform,
    itemEditting: state.itemEditting
  }
}

const mapDispatchToProps = (dispatch,props) =>{
  return {
    onSaveTask: (task) =>{
      dispatch(actions.saveTask(task))
    },
    onCloseForm: () =>{
      dispatch(actions.closeForm())
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
