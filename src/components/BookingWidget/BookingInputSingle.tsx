interface Props {
  bookingInputProps: {
    label: string;
    placeholder: string;
  };
}

const BookingInputSingle = (props: Props) => {
  const { bookingInputProps } = props;
  const { label, placeholder } = bookingInputProps;

  return (
    <div className="border-[1px] border-gray-300 pl-[12px] rounded-[4px]">
      <label className="font-medium mt-[3px] tracking-[-.05em] opacity-[.67]">
        {label}
      </label>
      <input
        type="text"
        className="w-full font-bold leading-none focus:outline-none focus:ring-0 mb-[5px]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default BookingInputSingle;
