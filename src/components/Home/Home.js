import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/Register'>Register</Link></li>
          <li><Link to='/Dashboard'>Dashboard</Link></li>
        </ul>
      </nav>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
