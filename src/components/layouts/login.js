/* eslint-disable no-unused-vars */
import React,{ Component} from "react";
import apiCaller from "../../utils/apiCaller";
class Login extends Component {

     constructor(props){
          super(props);
          this.state = {
               users: [],
               email: "",
               password: "",
               message: "",
          }
     }
     componentDidMount(){
          apiCaller('users','GET',null).then(res=>{
               this.setState({
                    users: res.data
               })
          })
     }
     onChange = (e) =>{
          var target = e.target;
          var name = target.name;
          var value = target.value;
          this.setState({
               [name]: value
          })
     }
     onSave = (e) =>{
          e.preventDefault();
          var {history} = this.props;
          var {email, password}  = this.state
          var users = this.state.users;
          // eslint-disable-next-line array-callback-return
          users.map((user)=>{
               if(user.email === email && user.password === password){
                    this.setState({
                         message: ''
                    })
                    localStorage.setItem('user',user.id);
                    localStorage.setItem('user_name',user.name);
                    history.push("/");
                    window.location.reload();
               }else{
                    this.setState({
                         message : "Email hoặc password không chính xác"
                    })
               }
          })
     }

  render() {
     var {message}  = this.state;
    return (
      <div>
        <form onSubmit={this.onSave}>
          <div className={message? 'alert alert-danger': 'd-none'} role="alert">
               {message}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
            onChange = {this.onChange}
              type="email"
              name="email"
              className="form-control"
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
               name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
