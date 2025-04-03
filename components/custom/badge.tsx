import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center font-semibold w-fit capitalize cursor-pointer",
  {
    variants: {
      variant: {
        primary:"bg-primary-500 border border-primary-500 hover:bg-primary-600 disabled:bg-primary-200 disabled:border-primary-200 dark:text-primary-500 dark:hover:bg-primary-50 dark:disabled:border-danger-200 px-2.5 py-0.5",
        secondary:"bg-secondary-500 border border-secondary-500 hover:bg-secondary-600 disabled:bg-secondary-200 disabled:border-secondary-200 dark:text-secondary-500 dark:hover:bg-secondary-50 dark:disabled:border-danger-200 px-2.5 py-0.5",
        success:"bg-success-500 border border-success-500 hover:bg-success-600 disabled:bg-success-200 disabled:border-success-200 dark:text-success-500 dark:hover:bg-success-50 dark:disabled:border-danger-200 px-2.5 py-0.5",
        warning:"bg-warning-500 border border-warning-500 hover:bg-warning-600 disabled:bg-warning-200 disabled:border-warning-200 dark:text-warning-500 dark:hover:bg-warning-50 dark:disabled:border-danger-200 px-2.5 py-0.5",
        danger:"bg-danger-500 border border-danger-500 hover:bg-danger-600 disabled:bg-danger-200 disabled:border-danger-200 dark:text-danger-500 dark:hover:bg-danger-50 dark:disabled:border-danger-200 px-2.5 py-0.5",
        gray:"bg-gray-500 border border-gray-500 hover:bg-gray-600 disabled:bg-gray-200 disabled:border-gray-200 dark:text-gray-500 dark:hover:bg-gray-50 dark:disabled:border-danger-200 px-2.5 py-0.5",
        outline:"border border-gray-500 hover:bg-gray-600 disabled:bg-gray-200 disabled:border-gray-200 dark:text-gray-500 dark:hover:bg-gray-50 dark:disabled:border-danger-200 px-2.5 py-0.5",
      },
      active:{
        true:"",
        false:""
      },
      size:{
        rounded:""
      }
    },
    defaultVariants: {
      variant: "primary",
      active:true,
      size:"rounded"
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
