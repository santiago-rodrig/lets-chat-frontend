import { FC, PropsWithChildren } from "react";

const IconButton: FC<IconButtonProps> = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

type IconButtonProps = PropsWithChildren<{
  className?: string;
  src: string;
}>;

export default IconButton;
