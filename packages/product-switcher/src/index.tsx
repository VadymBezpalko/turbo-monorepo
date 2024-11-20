export interface ProductSwitcherProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ProductSwitcher({ children, ...other }: ProductSwitcherProps): JSX.Element {
  return (
    <button type="button" {...other}>
      {children}
    </button>
  );
}

ProductSwitcher.displayName = "ProductSwitcher";
