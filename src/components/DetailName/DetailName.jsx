import clsx from 'clsx';
import styles from './DetailName.module.css';

const DetailName = ({ 
  name, 
  overflow = true,
  className: additionalClassName 
}) => {
  const className = clsx(
    styles.name,
    {
      [styles.overflow]: overflow,
    },
    additionalClassName
  );

  return (
    <h2 className={className} title={overflow ? name : undefined}>
      {name}
    </h2>
  );
};

export default DetailName;
