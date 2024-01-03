interface Props {
  bookingInputProps: {
    label: string;
    placeholder: string;
  };
  handleClick?: () => void;
}

const BookingInputSingle = (props: Props) => {
  const { bookingInputProps, handleClick } = props;
  const { label, placeholder } = bookingInputProps;

  return (
    <div className="flex w-full justify-between items-center border-[1px] border-gray-300 px-[12px] cursor-pointer rounded-[4px]  hover:border-black "
    onClick={handleClick}>
      <div>
        <label className="font-medium mt-[3px] tracking-[-.05em] opacity-[.67]">
          {label}
        </label>
        <input
          type="text"
          className="w-full font-bold  cursor-pointer leading-none focus:outline-none focus:ring-0 mb-[5px]"
          placeholder={placeholder}
        />
      </div>

      <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className="w-[16px] rotate-180"><path stroke="currentColor" stroke-width="1.5" d="M16.666 12.916 10 6.666l-6.667 6.25"></path></svg></div>
    </div>
  );
};

export default BookingInputSingle;
