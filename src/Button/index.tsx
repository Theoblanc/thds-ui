/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'success' | 'error';
  size?: 'small' | 'medium' | 'large' | 'fullWidth';
  disabled?: boolean;
};

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: #f5df4d;
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background: #f5df4d;
  }
  &:active {
    background: #d3c042;
  }
`;

const variants = {
  contained: css`
    &:disabled {
      background: #f5e99b;
      color: #ffffff;
    }
  `,
  outlined: css`
    background: none;
    border: 1px solid #f5df4d;
    color: #f5df4d;

    &:hover {
      color: #939597;
      background-color: #ffffff;
      border: 1px solid #f5df4d;
    }
    &:active {
      color: #ffffff;
      background-color: #f5df4d;
    }
    &:disabled {
      background: #f6f8fa;
      color: #ffffff;
      border: 1px solid #f6f8fa;
    }
  `,
  text: css`
    background: none;
    color: #f5df4d;

    &:hover {
      color: #939597;
      background-color: #ffffff;
    }
    &:active {
      color: #f5df4d;
      background-color: #ffffff;
    }
    &:disabled {
      color: #f5e99b;
    }
  `
};

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  large: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
  fullWidth: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
    width: 100%;
  `
};

const colors = {
  primary: css``,
  secondary: css``,
  success: css``,
  error: css``,
  custom: css``
};

const Button = ({ children, variant = 'contained', size = 'medium', color = 'primary', disabled, ...props }: ButtonProps) => {
  const { onClick } = props;
  return (
    <button css={[style, variants[variant], sizes[size], colors[color]]} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
