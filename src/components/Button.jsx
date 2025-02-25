import PropTypes from "prop-types";

const Button = ({ title, id, leftIcon, rightIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden text-xs uppercase font-general">
        <div>{title}</div>
      </span>

      {rightIcon}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  containerClass: PropTypes.string,
};

export default Button;
