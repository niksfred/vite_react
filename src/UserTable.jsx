import React from "react";
import { getData } from "./getHelpers";

export class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  async componentDidMount() {
    const allUsers = await getData();
    this.setState({ users: allUsers });
  }

  render() {
    const { users } = this.state;
    if (users.length === 0) {
      return null;
    }
    return (
      <div>
        <table class="table">
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
