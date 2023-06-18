import "../Style/Main.css";
import PropTypes from 'prop-types';
function Greetings(props) {
  return (
    <div className="Greet-Wrapper">
      <div className="icon-x-cont">
        <button onClick={props.Toggle}>
        <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="icon-check-cont">
        <i className="fa-solid fa-check"></i>
      </div>
      <div className="tune-cont">
        <h1>Tune up for further  Updates <span>{props.email}</span></h1>
      </div>
    </div>
  );
}

export default Greetings;
Greetings.propTypes = {
  email: PropTypes.string.isRequired,
  Toggle: PropTypes.func
};