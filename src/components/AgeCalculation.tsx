import { Age } from "../interfaces/age";
import { styles } from "../styles";
interface AgeCaluclationType {
  age: Age;
}

const AgeCalculation = ({ age }: AgeCaluclationType) => {
  return (
    <div className="flex flex-col gap-2">
      {/* Years */}
      <div className={styles.ageContainer}>
        <span className={styles.ageNumner}> {age.year ? age.year : "--"}</span>
        <span className={styles.ageWord}>years</span>
      </div>

      {/* Months */}
      <div className={styles.ageNumner}>
        <span className={styles.ageNumner}>
          {" "}
          {age.month ? age.month : "--"}
        </span>
        <span className={styles.ageWord}>months</span>
      </div>

      {/* Days */}
      <div className={styles.ageNumner}>
        <span className={styles.ageNumner}> {age.day ? age.day : "--"}</span>
        <span className={styles.ageWord}>Days</span>
      </div>
    </div>
  );
};

export default AgeCalculation;
