import { useId } from "react";
import clsx from "clsx";
import DatePicker from "react-datepicker";
import { useField, useFormikContext } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/fields.module.css";
import datePickerStyles from "./DatePickerInput.module.css";
import { formatDate } from "../../utils/format";
import { registerLocale } from "react-datepicker";
import uk from "date-fns/locale/uk";
registerLocale("uk", uk);

const DatePickerInput = ({
  label,
  required = false,
  className = "",
  minDate = new Date(),
  placeholderText = "",
  ...props
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(props);
  const fieldId = useId();

  const parseDate = (value) => {
    if (!value) return null;
    const [day, month, year] = value.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    return isNaN(date.getTime()) ? null : date;
  };

  const handleDateChange = (date) => {
    setFieldValue(field.name, date ? formatDate(date) : "");
  };

  return (
    <div className={clsx(styles.fieldRow, className)}>
      <div
        className={clsx(styles.field, {
          [styles.fieldError]: meta.touched && meta.error,
        })}
      >
        {label && (
          <label htmlFor={fieldId} className={styles.label}>
            {label}
            {required && <span className={styles.requiredMark}>*</span>}
          </label>
        )}
        <DatePicker
          id={fieldId}
          selected={parseDate(field.value)}
          onChange={handleDateChange}
          minDate={minDate}
          dateFormat="dd/MM/yyyy"
          locale="uk"
          placeholderText={placeholderText}
          autoComplete="off"
          className={clsx(
            styles.input,
            datePickerStyles.datePickerInput,
            { [styles.inputError]: meta.touched && meta.error }
          )}
          wrapperClassName={datePickerStyles.wrapper}
          popperClassName={datePickerStyles.popper}
          aria-required={required}
          aria-invalid={meta.touched && !!meta.error}
          {...props}
        />
      </div>
      {meta.touched && meta.error && (
        <span className={styles.error} aria-live="polite">
          {meta.error}
        </span>
      )}
    </div>
  );
};

export default DatePickerInput;
