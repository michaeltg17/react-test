import React from "react";
const DefaultLabel = (props) => {
  const {
    style,
    targetRef,
    icon,
    children,
    visible,
    customClass,
    className,
    disabled,
    size,
    iconAlign,
    bordered
  } = props;

  const getClass = () =>
    `label-component ${className} ${customClass} ${bordered && "-bordered"} ${
      disabled && "-disabled"
    }
    ${size && `-${size}`}
    ${iconAlign && `icon-${iconAlign}`}`;
  const getIcon = () => {
    if (icon !== null) {
      return icon;
    }
    return null;
  };

  if (!visible) return null;
  return (
    <div
      style={style}
      className={getClass()}
      ref={(r) => targetRef && targetRef(r)}
    >
      {getIcon()}
      {children}
    </div>
  );
};

export default DefaultLabel;
