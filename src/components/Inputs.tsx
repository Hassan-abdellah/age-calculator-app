import { Age } from "../interfaces/age";
import { FormikProps } from "formik";

interface FormGroupType {
  placeholder: string;
  value: string;
  name: string;
  invalid?: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any, Element>) => void;
}

interface InputsType {
  age: FormikProps<Age>;
}

const FormGroup = ({
  placeholder,
  name,
  value,
  invalid,
  onChange,
  onBlur,
  error,
}: FormGroupType) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className={`uppercase text-[10px] font-medium transition-colors duration-300 ease-in-out 
            ${invalid ? "text-lightRed" : "text-gray-600"}
        `}
      >
        {name}
      </label>
      <input
        name={name}
        id={name}
        type="number"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        onBlur={(e) => onBlur(e)}
        className={`input-number border text-offBlack focus:border-purple
          ${invalid ? "border-lightRed" : "border-lightGrey"}
       w-20 outline-none rounded-lg px-4 py-2 transition-colors duration-300 ease-in-out`}
      />
      {invalid && (
        <span className="text-lightRed text-[8px] font-thin">
          {error ? error : "This field is required"}
        </span>
      )}
    </div>
  );
};
const Inputs = ({ age }: InputsType) => {
  return (
    <div className="flex  gap-5 justify-between pr-20">
      <FormGroup
        name="day"
        onChange={age.handleChange}
        onBlur={age.handleBlur}
        value={age.values.day}
        placeholder="DD"
        invalid={age.touched?.day && age.errors?.day ? true : false}
        error={age.errors?.day}
      />
      <FormGroup
        onChange={age.handleChange}
        onBlur={age.handleBlur}
        name="month"
        value={age.values.month}
        placeholder="MM"
        invalid={age.touched?.month && age.errors?.month ? true : false}
        error={age.errors?.month}
      />
      <FormGroup
        onChange={age.handleChange}
        onBlur={age.handleBlur}
        name="year"
        value={age.values.year}
        placeholder="YYYY"
        invalid={age.touched?.year && age.errors?.year ? true : false}
        error={age.errors?.year}
      />
    </div>
  );
};

export default Inputs;
