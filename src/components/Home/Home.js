import React from 'react';
import { Link } from "react-router-dom";

//import RouteButton from '../Common/RouteButton';


export default function Home(props) {
  console.log("Home");
  // const ButtonHandler = (event) => { 
  //   console.log("buttonHandler");
  //   event.preventDefault();
  //   let history = useHistory();
  //   history.push("/narwhal");
  //   //history.replace("/");
  // };
  return (
    <>
      <h2 style={{color: "red"}}>Select a breed.</h2>
      <ul>
      <li><Link to={ {pathname:"/manatee", state: {prevPath: "/" } }} >Manatee</Link></li>
      <li><Link to={ {pathname:"/narwhal", state: {prevPath: "/" } }} >Narwhal</Link></li>
      </ul>
    </>
  );
}

