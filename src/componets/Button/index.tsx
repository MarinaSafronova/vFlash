import { DOMAttributes } from "react";
import "./Button.css";

export interface ILinkProps extends DOMAttributes<HTMLAnchorElement> {
  className?: string;
  isActive?: boolean;
  backgroundColor?: string;
  label: string;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const LinkButton: React.FC<ILinkProps> = ({
  className,
  onClick,
  label,
  href,
  backgroundColor,
  ...rest
}) => {
  return (
    <a href={href}
      className={className}
      style={{ backgroundColor }}
      onClick={onClick}
      {...rest}
    >
      <span>{label}</span>
    </a>
  );
};

export default LinkButton;
