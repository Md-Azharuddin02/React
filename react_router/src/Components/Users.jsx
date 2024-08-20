import { useLoaderData, useParams } from "react-router-dom";

function Users() {
  const userList = useLoaderData();
  const {userId} = useParams()
  return (
    <>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Deatils</th>
          </tr>
        </thead>
        <tbody> 
          {userList.map((u,index) => (
            <tr key={index}>
              <th scope="row">{u.id}</th>
              <td>{u.firstName}</td>
              <td><button className="btn btn-success" onCanPlay={()=>showDetails(u.id)}>Check</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export async function fetchUserList() {
  const response = await fetch("https://dummyjson.com/users");
  const data = await response.json();
  return data.users
}
export default Users;
