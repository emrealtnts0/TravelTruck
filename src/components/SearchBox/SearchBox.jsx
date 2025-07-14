import { useId, useState } from "react";
import { BsMap } from "react-icons/bs";
import fieldsCss from "../styles/fields.module.css";
import clsx from "clsx";

const SearchBox = ({ onChange, value }) => {
  const [focused, setFocused] = useState(false);
  const searchFieldId = useId();

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  const handleFocus = (value) => () => {
    setFocused(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const location = event.target.elements.search.value;
    onChange(location);
  };

  const fieldClassName = clsx(
    fieldsCss.field,
    focused && fieldsCss.fieldFocused
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className={fieldsCss.fieldRow}>
        <label htmlFor={searchFieldId}>Location</label>
        <div className={fieldClassName}>
          <BsMap className="icon" />
          <input
            id={searchFieldId}
            name="search"
            type="text"
            onFocus={handleFocus(true)}
            onBlur={handleFocus(false)}
            value={value}
            onChange={handleChange}
            placeholder="City"
            autoComplete="off"
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
