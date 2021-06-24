import React from "react";
import { Link } from "react-router-dom";
class ListUser extends React.Component {
  render() {
    var {user,index} = this.props;
    var date = new Date(user.date).toDateString();
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{date}</td>
        <td>
          <Link to="/"id={user.id}  type="button" className="btn btn-primary">Xem chi tiết</Link>
        </td>
      </tr>
    );
  }
}
export default ListUser;
