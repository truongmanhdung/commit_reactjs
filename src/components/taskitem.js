/* eslint-disable no-restricted-globals */
import React, { Component } from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TaskItem extends Component {
 onDelete = (id) =>{
   if(confirm('Bạn có muốn xóa công việc hay không?')){
     this.props.onDelete(id)
   }
 }
 onUpdateStatus  = (id,status) =>{
  this.props.onUpdateStatus(id,status);
 }
  render() {
    var {work,index} = this.props;
    return (
      <tr>
        <th scope="row" className="text-center">
        {index + 1}
        </th>
        <td>{work.name_work}</td>
        <td className="text-center">{work.date}</td>
        <td className="text-center">{work.time}p</td>
        <td className="text-center">
          <span onClick={()=>this.onUpdateStatus(work.id,work.status)} className={work.status===true?'btn btn-primary':'btn btn-danger'}>
          {work.status===true?'hoàn thành':'chưa'}
            </span>
        </td>
        <td className="text-center">
          <Link to={`/work-edit/${work.id}`} className="btn btn-primary me-2">
            <i className="fas fa-edit" /> Sửa
          </Link>
          <button className="btn btn-danger" onClick={() =>this.onDelete(work.id)}>
            <i className="fas fa-trash-alt" /> Xóa
          </button>
        </td>
      </tr>
    );
  }
}


export default TaskItem;
