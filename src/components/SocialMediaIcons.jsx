const SocialMediaIcons = () => {
  const transitionClasses =
    "transition-all duration-[.3s] ease-in-out hover:scale-125 text-white lg:text-[#B9B4C7] lg:hover:text-[#fff]";

  return (
    <div className="flex justify-center items-center text-2xl lg:text-3xl gap-4 lg:gap-20 cursor-pointer">
      <a
        href="https://github.com/MultiprocessingExceptional"
        target="_blank"
        rel="noopener noreferrer"
        className="size-12 lg:size-14 bg-[#191A19] rounded-full flex justify-center items-center"
      >
        <i className={`fa-brands fa-github ${transitionClasses}`}></i>
      </a>
      <a
        href="https://www.instagram.com/sijinsajijohn?igsh=b2hlOTMyZDFhZDAx"
        target="_blank"
        rel="noopener noreferrer"
        className="size-12 lg:size-14 bg-[#191A19] rounded-full flex justify-center items-center"
      >
        <i className={`fa-brands fa-instagram ${transitionClasses}`}></i>
      </a>
      <a
        href="https://www.linkedin.com/in/sijin-saji-b933a22b0/"
        target="_blank"
        rel="noopener noreferrer"
        className="size-12 lg:size-14 bg-[#191A19] rounded-full flex justify-center items-center"
      >
        <i className={`fa-brands fa-linkedin-in ${transitionClasses}`}></i>
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=sijinsaji14@gmail.com&su=&body=Hello%20[Your%20Name],%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20[reason%20for%20contact].%0D%0A%0D%0ARegards,%0D%0A[Your%20Name]"
        target="_blank"
        rel="noopener noreferrer"
        className="size-12 lg:size-14 bg-[#191A19] rounded-full flex justify-center items-center"
      >
        <i className={`fa-regular fa-envelope ${transitionClasses}`}></i>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
