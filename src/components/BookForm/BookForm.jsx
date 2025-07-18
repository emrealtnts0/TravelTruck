import { Form, Formik } from "formik";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { successNotification } from "../../utils/notification";
import Button from "../Button/Button";
import FieldInput from "../FieldInput/FieldInput";
import DatePickerInput from "../DatePickerInput/DatePickerInput";
import styles from "./BookForm.module.css";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const validationText = {
  required: () => "This field is required",
  min: (length) => `Minimum ${length} characters`,
  max: (length) => `Maximum ${length} characters`,
  email: () => "Invalid email address",
  dateFormat: () => "Invalid date format (example: DD/MM/YYYY)",
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, validationText.min(3))
    .max(50, validationText.max(50))
    .required(validationText.required()),
  email: yup
    .string()
    .min(3, validationText.min(3))
    .max(50, validationText.max(50))
    .email(validationText.email())
    .required(validationText.required()),
  date: yup
    .string()
    .matches(/^\d{2}\/\d{2}\/\d{4}$/, validationText.dateFormat())
    .required(validationText.required()),
  comment: yup
    .string()
    .min(3, validationText.min(3))
    .max(250, validationText.max(250)),
});

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const BookForm = () => {
  const [formStatus, setFormStatus] = useState(null); // 'success' | 'error' | null
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setFormStatus(null);
    setFormMessage("");
    try {
      setSubmitting(true);
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.1) {
            reject(new Error("Failed to send booking request"));
          } else {
            resolve();
          }
        }, 1000);
      });
      resetForm();
      setFormStatus("success");
      setFormMessage("Booking request sent successfully!");
      successNotification("Booking request sent successfully!");
    } catch (error) {
      setFormStatus("error");
      setFormMessage("Failed to send booking request. Please try again.");
      toast.error("Failed to send booking request. Please try again.", {
        position: "bottom-right",
        duration: 3000,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h3 className={styles.title}>Book your campervan now</h3>
        <p className={styles.description}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      {formStatus === "success" && (
        <div className={styles.success} role="status">{formMessage}</div>
      )}
      {formStatus === "error" && (
        <div className={styles.errorMessage} role="alert">{formMessage}</div>
      )}

      <Formik
        validateOnBlur={false}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <FieldInput name="name" label="Name" required />
            <FieldInput name="email" label="Email" required />
            <DatePickerInput name="date" label="Booking date" required />
            <FieldInput as="textarea" name="comment" label="Comment" />
            <div className={styles.actions}>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <><span>Send</span><FaPaperPlane className={styles.sendIcon} /></>}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
