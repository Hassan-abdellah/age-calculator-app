import { useState } from "react";
import Inputs from "./components/Inputs";
import Divider from "./components/Divider";
import AgeCalculation from "./components/AgeCalculation";
import { Age } from "./interfaces/age";
import { useFormik } from "formik";
import { FormikState } from "formik/dist/types";
import * as Yup from "yup";

const initialValues: Age = {
  day: "",
  month: "",
  year: "",
};

function App() {
  const validation = useFormik({
    initialValues,
    validationSchema: Yup.object({
      day: Yup.number()
        .required("Day Field is Required")
        .min(1, "Must Be Valid Date")
        .max(31, "Must Be Valid Date"),
      month: Yup.number()
        .required("Month Field is Required")
        .min(1, "Must Be Valid Date")
        .max(12, "Must Be Valid Date"),
      year: Yup.number()
        .required("Year Field is Required")
        .min(1800, "Must Be Valid Date")
        .max(new Date().getFullYear(), "Must Be Valid Date"),
    }),
    onSubmit(values, { setSubmitting, resetForm }) {
      calculateAge(values, setSubmitting, resetForm);
    },
  });

  const [ageDiff, setAgeDiff] = useState<Age>({
    day: "",
    month: "",
    year: "",
  });

  function calculateAge(
    values: Age,
    setSubmitting: (isSubmitting: boolean) => void,
    resetForm: (nextState?: Partial<FormikState<Age>> | undefined) => void
  ): void {
    const { day, month, year } = values;
    const date = new Date();
    // get today date,month and year
    const todayDay = date.getDate();
    const todayMonth = date.getMonth() + 1;
    const todayYear = date.getFullYear();
    //  calculate the differnce
    const dayDifference = todayDay - parseInt(day);
    const monthDifference = todayMonth - parseInt(month);
    const yearDifference = todayYear - parseInt(year);

    setAgeDiff({
      day:
        dayDifference < 0
          ? (dayDifference * -1).toString()
          : dayDifference.toString(),
      month:
        monthDifference < 0
          ? (monthDifference * -1).toString()
          : monthDifference.toString(),
      year: yearDifference.toString(),
    });

    setSubmitting(false);
    resetForm();
  }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="px-10 py-12 rounded-[15px_15px_100px_15px] bg-White flex flex-col gap-10">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit(e);
          }}
          className="flex flex-col gap-10"
        >
          {/* Top Section */}
          <Inputs age={validation} />
          {/* Middle Section */}
          <Divider calculateAge={validation} />
        </form>
        {/* Bottom Section */}
        <AgeCalculation age={ageDiff} />
      </div>
    </div>
  );
}

export default App;
