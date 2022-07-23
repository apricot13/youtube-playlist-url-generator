import './logo.css';
import logo from './logo.png';

function Logo(props) {
  return (
    <a href={props.linkUrl}><img src={logo} alt="" className="logo mx-auto" /></a>
  );
}

export default Logo;