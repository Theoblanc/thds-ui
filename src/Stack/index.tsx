/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';

export type StackProps = {
  children: React.ReactNode;
};

const style = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Stack = ({ children }: StackProps) => {
  return <div css={[style]}>{children}</div>;
};

export default Stack;
