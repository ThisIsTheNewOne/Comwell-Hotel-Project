interface Props {
  setIsBookingCodeOpen: (isBookingCodeOpen: boolean) => void;
  isBookingCodeOpen: boolean;
}

const BookingCode = (props: Props) => {
  const { setIsBookingCodeOpen, isBookingCodeOpen } = props;

  return (
    <div
      className="flex h-full justify-center font-semibold cursor-pointer mt-4"
      onClick={() => setIsBookingCodeOpen(!isBookingCodeOpen)}
    >
      <div className="flex bg-slate-300 rounded-[60px] w-[24px] h-[24px] justify-center text-[20px] leading-none font-regular">
        +
      </div>
      <div className="ml-2">Tilføj bookingkode </div>
    </div>
  );
};

export default BookingCode;
