import PropTypes from "prop-types";

const Button = ({ color, text }) => {
  const onClick = () => {
    console.log("Add ");
  };

  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "grey",
  text: "Click",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
