import React from 'react'
import apiCaller from '../../utils/apiCaller';

import * as actions from '../../actions/index'
import { connect } from "react-redux";
class WorkAdd extends React.Component {
     constructor(props){
          super(props);
          var userId = localStorage.getItem('user');
          this.state = {
               id: '',
               userId: userId,
               name_work: '',
               date: '',
               time: '',
               status: false,
          }
     }
     onChange = (e)=>{
          var target = e.target;
          var name = target.name;
          var value = target.value;
          this.setState({
               [name]: value
          })
     }
     
     onSave = (e) =>{
          e.preventDefault();
          var userId = localStorage.getItem('user');
          const {name_work,date,time} = this.state;
          var {history} = this.props;
          var work ={
               id: '',
               userId: userId,
               name_work: name_work,
               date: date,
               time: time,
               status: false,
          }
          this.props.onAddWork(work);
          history.push("/");
     }

     render() {
          return (
               <div>
                    <h3 className="text-center mb-3 mt-3">Thêm công việc</h3>
                    <form onSubmit={this.onSave}>
                         <div className="mb-3">
                              <label htmlFor="exampleInputEmail1" className="form-label">Tên công việc</label>
                              <input type="text" className="form-control" name="name_work" onChange={this.onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                         </div>
                         <div className="mb-3">
                              <label htmlFor="exampleInputEmail1" className="form-label">Ngày dự định thực hiện</label>
                              <input type="date" className="form-control" name="date" onChange={this.onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                         </div>
                         <div className="mb-3">
                              <label htmlFor="exampleInputPasswork1" className="form-label">Khoảng thời gian dự định thực hiện</label>
                              <input type="number" onChange={this.onChange} name="time" className="form-control" id="exampleInputPasswork1" />
                         </div>
                         <button type="submit" className="btn btn-primary">Thêm</button>
                    </form>
               </div>
          )
     }
     
}
const mapStateToProps = (state) => {
     return {
       
     }
   }
   const mapDispatchToProps = (dispatch,props) =>{
     return {
       onAddWork: (work) =>{
          dispatch(actions.addWorksRequest(work));
       }
   
     }
   }
   
   export default connect(mapStateToProps,mapDispatchToProps)(WorkAdd);