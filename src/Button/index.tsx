/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: #20c997;
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #12b886;
  }
`;

const Button = ({ children, ...props }: ButtonProps) => {
  const { onClick } = props;
  return (
    <button css={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
