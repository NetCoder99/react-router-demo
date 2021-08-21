import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = (props) => {
    console.log("MainNavigation.init");
    return (
      <header className={classes.header}>
        <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/manatee">Manatee</Link></li>
              <li><Link to="/narwhal">Narwhal</Link></li>
              <li><Link to="/narwhal/male">Narwhal Male</Link></li>
              <li><Link to="/narwhal/female">Narwhal Female</Link></li>
              <li><Link to="/whale">Whale</Link></li>
              <li><Link to="/whale?type=beluga">Beluga Whale</Link></li>
              <li><Link to="/whale?type=blue">Blue Whale</Link></li>              
          </ul>
        </nav>
      </header>
    );
  };
  
  export default MainNavigation;
  