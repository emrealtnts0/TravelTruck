import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import React, { useRef } from "react";

const VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TEXT: "text",
};

const TYPES = {
  BUTTON: "button",
  SUBMIT: "submit",
  RESET: "reset",
};

const Button = ({
  onClick,
  children,
  external = false,
  href,
  to,
  variant = VARIANTS.PRIMARY,
  type = TYPES.BUTTON,
  className: additionalClassName,
  disabled = false,
  target,
}) => {
  const btnRef = useRef();
  const [ripples, setRipples] = React.useState([]);

  const handleClick = (event) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    // Ripple effect
    const button = btnRef.current;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const newRipple = {
      key: Date.now(),
      style: {
        width: size,
        height: size,
        left: x,
        top: y,
      },
    };
    setRipples((prev) => [...prev, newRipple]);
    setTimeout(() => {
      setRipples((prev) => prev.slice(1));
    }, 500);
    onClick?.(event);
  };

  const className = clsx(
    styles.button,
    styles[variant],
    {
      [styles.disabled]: disabled,
    },
    additionalClassName
  );

  const commonProps = {
    className,
    onClick: handleClick,
    "aria-disabled": disabled,
    ref: btnRef,
  };

  const renderRipples = () =>
    ripples.map((ripple) => (
      <span
        key={ripple.key}
        className={styles.ripple}
        style={ripple.style}
      />
    ));

  if (external) {
    return (
      <a
        {...commonProps}
        href={disabled ? undefined : href}
        rel="noopener noreferrer"
        target={target || "_blank"}
      >
        {renderRipples()}
        {children}
      </a>
    );
  }

  if (to) {
    return disabled ? (
      <span {...commonProps}>{children}</span>
    ) : (
      <Link
        {...commonProps}
        to={to}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {renderRipples()}
        {children}
      </Link>
    );
  }

  return (
    <button {...commonProps} type={type} disabled={disabled}>
      {renderRipples()}
      {children}
    </button>
  );
};

Button.VARIANTS = VARIANTS;
Button.TYPES = TYPES;

export default Button;