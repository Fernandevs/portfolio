import { motion } from 'framer-motion';
import Sidebar from '../sidebar/Sidebar';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */ }
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={ { opacity: 0, scale: 0.5 } }
          animate={ { opacity: 1, scale: 1 } }
          transition={ { duration: 0.5 } }>
          Iván Fernando
        </motion.span>
        <div className="social">
          <img src="/linkedin.png" alt="linkedin" onClick={
            () => window.location.replace()
          } />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
