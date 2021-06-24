import React,{Component} from "react";
import apiCaller from "../../utils/apiCaller";
class SignUp extends Component {
     constructor(props){
          super(props);
          this.state = {
               users: [],
               id: '',
               name: '',
               email: '',
               password: '',
               time: '',
          }
     }
     componentDidMount(){
          apiCaller('users','GET',null).then(res=>{
               this.setState({
                    users: res.data
               })
          })
     }
     onChange = (e)=>{
          var target = e.target;
          var value = target.value;
          var name = target.name;
          this.setState({
               [name]: value,
          })
     }
     onSave = (e)=>{
          e.preventDefault();
          const {name,email,password} = this.state;
          var {history} = this.props;
          const date = new Date().toDateString();
          apiCaller('users','POST',{
               name: name,
               email: email,
               password: password,
               date: date,
          }).then(res=>{
               localStorage.setItem('user', res.data.id);
               localStorage.setItem('user_name', res.data.name);
               history.push("/");
               window.location.reload();
          }).catch(err=>{
               console.log(err)
          })
          
     }
     render() {
          return (
               <div>
               <form onSubmit={this.onSave}>
                    <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                    Username
                    </label>
                    <input
                    type="name"
                    onChange={this.onChange}
                    className="form-control"
                    name="name"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                    </label>
                    <input
                    type="email"
                    onChange={this.onChange}
                    className="form-control"
                    name="email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                    </label>
                    <input
                    onChange={this.onChange}
                    type="password"
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    />
                    </div>
                    <button type="submit"  className="btn btn-primary">
                         Submit
                    </button>
               </form>
               </div>
          );
     }
}
export default SignUp