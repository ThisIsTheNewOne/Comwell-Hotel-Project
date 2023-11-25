interface Props {
    handleClose: () => void;
  }
  
  const GoBackButton = (props: Props) => {
    const { handleClose } = props;
  
    return (
        <button className="closeButton" onClick={handleClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
          className="h-3 w-3"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m7.524 9.61 5.835-5.835-.884-.884L5.81 9.557l6.638 7.523.937-.827L7.524 9.61Z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    );
  };
  
  export default GoBackButton;
  