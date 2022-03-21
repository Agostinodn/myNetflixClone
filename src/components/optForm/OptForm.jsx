import React from "react";
import { Container, Input, Button, Text, Break } from "./styles/OptForm";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFromInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFromButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFromText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFromBreak({ children, ...restProps }) {
  return <Break {...restProps} />;
};
