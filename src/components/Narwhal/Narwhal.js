import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
//import RouteButton from '../Common/RouteButton';

export default function Narwhal() {
  const location = useLocation();
  const crntPath = location.pathname;
  const prevPath = location.state?.prevPath;

  console.log("Narwhal.prevPath:" + prevPath)
  console.log("Narwhal.crntPath:" + crntPath)

  const { type } = useParams();

  return (
    <>
      <h2 style={{color: "blue"}}>Narwhal</h2>
      {type === 'male'   && <h2 style={{color: "blue"}}>Male</h2>}
      {type === 'female' && <h2 style={{color: "blue"}}>Female</h2>}

      <ul>
        <li><Link to={ {pathname:"/manatee", state: {prevPath: "/narwhal" } }} >Manatee</Link></li>
        <li><Link to={ {pathname:prevPath,   state: {prevPath: "/narwhal" } }} >Back</Link></li>
      </ul>

    </>
  );
}