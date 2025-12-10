"use client"

import * as React from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface ButtonFieldProps extends ButtonProps {
  /** Button text content */
  label?: string
  /** Icon element to display before the label */
  leadingIcon?: React.ReactNode
  /** Icon element to display after the label */
  trailingIcon?: React.ReactNode
  /** Whether to show the button in a loading state */
  loading?: boolean
  /** Whether the button should take full width of its container */
  fullWidth?: boolean
}

const ButtonField = React.forwardRef<HTMLButtonElement, ButtonFieldProps>(
  (
    {
      className,
      variant,
      size,
      label,
      leadingIcon,
      trailingIcon,
      loading = false,
      fullWidth = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const content = label || children

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        disabled={disabled || loading}
        className={cn(
          fullWidth && "w-full",
          "gap-2", // Add gap between all children (icons and text)
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leadingIcon && (
          <span className="inline-flex shrink-0 items-center">
            {leadingIcon}
          </span>
        )}
        {content && <span>{content}</span>}
        {!loading && trailingIcon && (
          <span className="inline-flex shrink-0 items-center">
            {trailingIcon}
          </span>
        )}
      </Button>
    )
  }
)
ButtonField.displayName = "ButtonField"

export { ButtonField }

