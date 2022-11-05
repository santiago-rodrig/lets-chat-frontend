import { FC, PropsWithChildren } from "react";
import styled from "@emotion/styled";

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  className,
}) => {
  return (
    <StyledButton variant={variant} className={className}>
      {children}
    </StyledButton>
  );
};

type ButtonProps = PropsWithChildren<{
  variant?: Variant;
  className?: string;
}>;

export default Button;

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary.surface
      : props.theme.colors.dark.surface};
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.colors.primary.text
      : props.theme.colors.dark.text};
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  padding: 8px 16px;
`;

interface StyledButtonProps {
  variant: Variant;
}

type Variant = "primary";
