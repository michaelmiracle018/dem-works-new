import { createLink, Link, LinkProps } from "@tanstack/react-router";
import { forwardRef } from "react";
import { cn } from "~/lib/utils";

// 1. Define the extra props you want for compatibility
interface NavLinkCompatProps extends Omit<LinkProps, "className" | "style"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

// 2. Build the component
const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        // TanStack Link uses a callback for className to handle states
        className={((state: any) =>
          cn(
            className,
            state.isActive && activeClassName,
            state.isPending && pendingClassName
          )) as unknown as string}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };