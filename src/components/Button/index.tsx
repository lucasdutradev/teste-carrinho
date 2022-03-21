import { ButtonDefault } from "./style";

interface PropsInfo extends React.HTMLProps<HTMLButtonElement> {}

const Button = ({ children, onClick }: PropsInfo) => {
  return <ButtonDefault onClick={onClick}>{children}</ButtonDefault>;
};

export default Button;
