// import { Route } from "react-router-dom";
// import { Link, useHistory, useLocation } from "react-router-dom";

// const RouteButton = (props) => {
//   console.log("RouteButton");
//   const history = useHistory();
//   const location = useLocation();

//   const prevPathname = location.pathname;
//   const nextPathname = history.location.pathname;

//   console.log("RouteButton.props.prevPath:" + props.prevPath);
//   console.log("RouteButton.history.location.prevPathname:" + prevPathname);
//   console.log("RouteButton.history.location.nextPathname:" + nextPathname);
//   return (
//     <>
//     <ul>
//       <li><Link to={ {pathname:props.route, state: {prevPath: "/" } }} >{props.text}</Link></li>
//     </ul>
//     </>
//   );
// };

// export default RouteButton;

//     //<Route
//     //  render={({ history }) => (
//     //    <button type="button"  onClick={() => {history.push(props.route); }} >
//     //      {props.text}
//     //    </button>
//     //  )}
//     ///>
