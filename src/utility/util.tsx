export const greet = (name: string): string => {
  return `Hello ${name}!`;
};

type IconProps = {
  name: "dropdown" | "arrow-up" | "arrow-down";
  link?: string;
  children?: React.ReactNode
};

export const Icon = ({ name, link, children }: IconProps): JSX.Element => {
  const icons = {
    dropdown: <div>Dropdown Icon</div>,

    "arrow-up": <div>Arrow up Icon</div>,

    "arrow-down": <div>Arrow down Icon</div>,
  };

  return <div>{icons[name]}</div>;
};

export const Button = ({children}: {children: React.ReactNode}): JSX.Element | null => {
  if (!children) return null;
  return <button>{children}</button>
}