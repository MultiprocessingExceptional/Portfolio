const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `button border-[2px] border-[#BD70D1] rounded-lg relative inline-flex items-center justify-center h-11 transition-colors text-[#B9B4C7] hover:text-[#fff] ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-[#B9B4C7]"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
