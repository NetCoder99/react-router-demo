import React from "react";
//import RouteButton from '../Common/RouteButton';
import { Link, useLocation } from "react-router-dom";


export default function Manatee() {
  const location = useLocation();
  const crntPath = location.pathname;
  const prevPath = location.state?.prevPath;

  console.log("Manatee.prevPath:" + prevPath)
  console.log("Manatee.crntPath:" + crntPath)

  return (
    <>
    <h2 style={{ color: "green" }}>Manatee</h2>
    <ul>
        <li><Link to={ {pathname:"/narwhal", state: {prevPath: "/manatee" } }} >Narwhal</Link></li>
        <li><Link to={ {pathname:prevPath,   state: {prevPath: "/manatee" } }} >Back</Link></li>
      </ul>
    </>
  );
}
