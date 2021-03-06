import React from "react";
import apiCaller from "../../utils/apiCaller";
import { connect } from "react-redux";
import * as actions from '../../actions/index'
class WorkEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name_work: "",
      date: "",
      time: "",
      status: false,
    };
  }
  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.getWorks(id);
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditting){
      var {itemEditting} = nextProps;
      this.setState({
        id: itemEditting.id,
        name_work: itemEditting.name_work,
        date: itemEditting.date,
        time: itemEditting.time,
        status: itemEditting.status,
      })
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status'){
     value = target.value === 'true' ? true : false;
   }
    this.setState({
      [name]: value,
    });
  };
  onSave = (e) => {
    e.preventDefault();
    var { match, history } = this.props;
    var { name_work, date, time,status } = this.state;
    var id = match.params.id;
    var work = {
      id: id,
      name_work: name_work,
      date: date,
      time: time,
      status: status,
    }
    if(id){
      this.props.onUpdateWorks(work);
    }
    history.push("/");
    
  };
  render() {
    var {name_work,date,time,status} = this.state;
    return (
      <div>
        <h3 className="text-center mb-3 mt-3">Sửa công việc</h3>
        <form onSubmit={this.onSave}>
          <div className="mb-3">
            <label className="form-label">Tên công việc</label>
            <input
               required
              type="text"
              name="name_work"
              onChange={this.onChange}
              value={name_work}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ngày dự định thực hiện</label>
            <input
              type="date"
              name="date"
              onChange={this.onChange}
              value={date}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              Khoảng thời gian dự định thực hiện
            </label>
            <input
              type="number"
              name="time"
              onChange={this.onChange}
              value={time}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <select
              name="status"
              onChange={this.onChange}
              className="form-control"
            >
              <option
                value={true}
                selected={status === true ? true : false}
              >
                Đã hoàn thành
              </option>
              <option
                value={false}
                selected={status === false ? true : false}
              >
                Chưa hoàn thành
              </option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Sửa
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    itemEditting: state.itemEditting
  }
}
const mapDispatchToProps = (dispatch,props) =>{
  return {
    getWorks: (id) =>{
      dispatch(actions.getWorksRequest(id))
    },
    onUpdateWorks: (work) =>{
      dispatch(actions.updateWorksRequest(work))
    }
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(WorkEdit);