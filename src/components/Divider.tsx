import { FormikProps } from "formik";
import arrow from "../assets/icon-arrow.svg";
import { Age } from "../interfaces/age";

interface DividerType {
  calculateAge: FormikProps<Age>;
}
const Divider = ({ calculateAge }: DividerType) => {
  return (
    <div className="relative border-b border-gray-300">
      {/* circle around image */}
      <button
        type="submit"
        className="disabled:cursor-not-allowed disabled:opacity-50 absolute top-[50%] right-0 translate-y-[-50%] w-[50px] h-[50px] 
        flex items-center justify-center overflow-hidden bg-purple hover:bg-offBlack transition-colors duration-300 ease-in-out rounded-full"
        disabled={calculateAge.isSubmitting}
      >
        <img
          src={arrow}
          alt="arrow down"
          className="w-[25px] h-[25px] rounded-full"
        />
      </button>
    </div>
  );
};

export default Divider;
