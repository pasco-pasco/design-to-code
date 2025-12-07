"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const checkboxFieldVariants = cva(
  "flex gap-2 items-start",
  {
    variants: {
      variant: {
        default: "p-0",
        box: "p-4 rounded-md border",
      },
      controlPlacement: {
        start: "flex-row",
        end: "flex-row-reverse",
      },
    },
    compoundVariants: [
      {
        variant: "box",
        className: "border-border data-[state=checked]:border-primary data-[state=checked]:bg-primary/5",
      },
    ],
    defaultVariants: {
      variant: "default",
      controlPlacement: "start",
    },
  }
)

export interface CheckboxFieldProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Checkbox>, "children">,
    VariantProps<typeof checkboxFieldVariants> {
  /** The label text for the checkbox */
  label?: string
  /** Optional description text below the label */
  description?: string
  /** Whether to show the label */
  showLabel?: boolean
  /** Whether to show the description */
  showDescription?: boolean
}

const CheckboxField = React.forwardRef<
  React.ElementRef<typeof Checkbox>,
  CheckboxFieldProps
>(
  (
    {
      className,
      variant,
      controlPlacement,
      label,
      description,
      showLabel = true,
      showDescription = true,
      disabled,
      checked,
      defaultChecked,
      onCheckedChange,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId()
    const checkboxId = id || generatedId
    const [isChecked, setIsChecked] = React.useState(defaultChecked || false)

    // Handle controlled/uncontrolled state
    const checkedState = checked !== undefined ? checked : isChecked

    const handleCheckedChange = (value: boolean) => {
      if (checked === undefined) {
        setIsChecked(value)
      }
      onCheckedChange?.(value)
    }

    return (
      <div
        className={cn(
          checkboxFieldVariants({ variant, controlPlacement }),
          disabled && "cursor-not-allowed",
          className
        )}
        data-state={checkedState ? "checked" : "unchecked"}
        data-disabled={disabled ? "" : undefined}
      >
        <Checkbox
          ref={ref}
          id={checkboxId}
          disabled={disabled}
          checked={checkedState}
          onCheckedChange={handleCheckedChange}
          className="mt-0.5"
          {...props}
        />
        {showLabel && (label || description) && (
          <div className="flex flex-col gap-1.5">
            {label && (
              <Label
                htmlFor={checkboxId}
                className={cn(
                  "text-sm font-medium leading-none cursor-pointer",
                  disabled && "opacity-70 cursor-not-allowed"
                )}
              >
                {label}
              </Label>
            )}
            {showDescription && description && (
              <p
                className={cn(
                  "text-sm text-muted-foreground leading-5",
                  disabled && "opacity-70"
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    )
  }
)
CheckboxField.displayName = "CheckboxField"

export { CheckboxField, checkboxFieldVariants }

