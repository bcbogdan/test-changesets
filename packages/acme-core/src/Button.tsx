export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className="test-2312">{props.children}</button>;
}

Button.displayName = "Button";
