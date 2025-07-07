// IF AND ELSE

export default function Login(props) {
  console.log(props);

  // if (props.isUser){
  //     return "User Dashboard"
  // }
  // else{
  //     return "Login Again"
  // }

  return (props.isUser ? <UserDashboard/>: <LoginUser/>)
}

function UserDashboard() {
  return <div>Welcome user</div>;
}

function LoginUser() {
  return (
    <>
      <label htmlFor="">userName</label>
      <input type="text" name="" id="" />
      <br />
      <label htmlFor="">Password</label>
      <input type="password" name="" id="" />
    </>
  );
}
