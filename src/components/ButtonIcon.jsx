const Button2 = ({ className, href, onClick, children, px, white }) => {
    const classes = `button bg-[#AC6AFF]  rounded-lg text-[0.7rem] cursor-pointer relative inline-flex items-center justify-center h-11 transition-colors hover:text-black ${
      px || "px-7"
    } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
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
  
  export default Button2;
  