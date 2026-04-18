import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-charcoal text-cream hover:bg-rose-700 shadow-[0_12px_30px_-12px_rgba(42,42,42,0.45)] hover:shadow-[0_16px_40px_-12px_rgba(168,112,99,0.55)] hover:-translate-y-0.5",
        secondary:
          "bg-rose-100 text-charcoal hover:bg-rose-200 hover:-translate-y-0.5",
        outline:
          "border border-charcoal/20 bg-transparent text-charcoal hover:bg-charcoal hover:text-cream hover:border-charcoal",
        ghost:
          "text-charcoal hover:bg-cream-dark/60",
        sage:
          "bg-sage-500 text-cream hover:bg-sage-600 shadow-[0_12px_30px_-12px_rgba(94,112,80,0.45)] hover:-translate-y-0.5",
        rose:
          "bg-rose-400 text-white hover:bg-rose-500 shadow-[0_12px_30px_-12px_rgba(212,165,154,0.65)] hover:-translate-y-0.5",
      },
      size: {
        sm: "h-10 px-5 text-xs",
        md: "h-12 px-7 text-sm",
        lg: "h-14 px-9 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type BaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children?: React.ReactNode;
};

type AsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type AsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = AsButton | AsLink;

export function Button(props: ButtonProps) {
  const { variant, size, className, children } = props;
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }
    const linkProps = rest as Omit<
      React.ComponentProps<typeof Link>,
      "href" | "className" | "children"
    >;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as AsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export { buttonVariants };
