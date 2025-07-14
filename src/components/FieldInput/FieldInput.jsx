import clsx from "clsx";
import { Field, useField } from "formik";
import { useId, useState } from "react";
import styles from "../styles/fields.module.css";

const FieldInput = ({ 
  name, 
  label, 
  required = false, 
  className = "", 
  ...props 
}) => {
  const fieldId = useId();
  const [isFocused, setIsFocused] = useState(false);
  const [field, meta] = useField(name);
  const isTextarea = props.as === "textarea";

  return (
    <div className={clsx(styles.fieldRow, className)}>
      <div
        className={clsx(styles.field, {
          [styles.fieldFocused]: isFocused,
          [styles.fieldError]: meta.touched && meta.error,
          [styles.fieldWithTextarea]: isTextarea,
        })}
      >
        {label && (
          <label htmlFor={fieldId} className={styles.label}>
            {label}
            {required && <span className={styles.requiredMark}>*</span>}
          </label>
        )}
        <Field
          id={fieldId}
          name={name}
          className={styles.input}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            field.onBlur(e);
            setIsFocused(false);
          }}
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

export default FieldInput;
