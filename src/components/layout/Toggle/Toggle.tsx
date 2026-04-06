import React, { useState } from "react";
import "./Toggle.scss";

interface ToggleProps {
  /** Начальное состояние переключателя */
  defaultChecked?: boolean;
  /** Состояние переключателя (управляемый компонент) */
  checked?: boolean;
  /** Обработчик изменения состояния */
  onChange?: (checked: boolean) => void;
  /** Отключен ли переключатель */
  disabled?: boolean;
  /** Размер переключателя */
  size?: "sm" | "md" | "lg";
  /** Дополнительные CSS классы */
  className?: string;
  /** Метка для переключателя */
  label?: string;
  /** Позиция метки */
  labelPosition?: "left" | "right";
}

const Toggle: React.FC<ToggleProps> = ({
  defaultChecked = false,
  checked,
  onChange,
  disabled = false,
  size = "md",
  className = "",
  label,
  labelPosition = "right",
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internalChecked;

  const handleToggle = (e?: React.MouseEvent | React.KeyboardEvent) => {
    if (disabled) return;

    e?.stopPropagation();
    e?.preventDefault();

    const newChecked = !isChecked;

    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    onChange?.(newChecked);
  };

  const toggleClasses = [
    "toggle",
    `toggle--${size}`,
    isChecked && "toggle--checked",
    disabled && "toggle--disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <div
      className={toggleClasses}
      role="switch"
      aria-checked={isChecked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      <div className="toggle__slider" />
    </div>
  );

  if (label) {
    return (
      <label className="toggle-wrapper" onClick={handleToggle}>
        {labelPosition === "left" && (
          <span className="toggle__label-text">{label}</span>
        )}
        {content}
        {labelPosition === "right" && (
          <span className="toggle__label-text">{label}</span>
        )}
      </label>
    );
  }

  return <>{content}</>;
};

export default Toggle;
