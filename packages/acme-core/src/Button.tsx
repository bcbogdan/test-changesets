export interface ButtonProps {
  children: React.ReactNode;
}

export function Button(props: ButtonProps) {
  return <button className="test-2">{props.children}</button>;
}

Button.displayName = "Button";
