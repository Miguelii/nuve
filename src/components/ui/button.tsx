'use client'

import type React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { HTMLMotionProps, motion } from 'motion/react'

const buttonVariants = cva(
   // Base styles
   'justify-center px-4 text-sm font-medium items-center transition-[box-shadow,background-color] disabled:cursor-not-allowed disabled:opacity-50 flex active:transition-none',
   {
      variants: {
         intent: {
            default: [
               'bg-neutral-dark border border-neutral cursor-pointer',
               'text-primary hover:text-primary',
               'hover:enabled:bg-neutral',
               'disabled:bg-[#8c8885]',
               '[box-shadow:inset_0px_-2.108433723449707px_0px_0px_#171310,_0px_1.2048193216323853px_6.325301647186279px_0px_rgba(58,_33,_8,_58%)]',
               'hover:enabled:[box-shadow:inset_0px_-2.53012px_0px_0px_#171310,_0px_1.44578px_7.59036px_0px_rgba(58,_33,_8,_64%)]',
               'disabled:shadow-none',
               'active:bg-neutral',
               'active:[box-shadow:inset_0px_-1.5px_0px_0px_#171310,_0px_0.5px_2px_0px_rgba(58,_33,_8,_70%)]',
            ],
         },
         size: {
            small: ['text-xs', 'py-1', 'px-2', 'h-9', 'rounded-[8px]'],
            medium: ['text-base', 'py-2', 'px-4', 'h-11', 'rounded-[9px]'],
            large: ['text-lg', 'py-3', 'px-6', 'h-14', 'rounded-[11px]'],
         },
         fullWidth: {
            true: 'w-full',
         },
      },
      compoundVariants: [
         {
            intent: ['default'],
            size: 'medium',
            className: 'uppercase',
         },
      ],
      defaultVariants: {
         intent: 'default',
         size: 'medium',
      },
   }
)

export interface NeumorphButtonProps
   extends HTMLMotionProps<'button'>,
      VariantProps<typeof buttonVariants> {
   children: React.ReactNode
   loading?: boolean
}

export const Button: React.FC<NeumorphButtonProps> = ({
   className,
   intent,
   size,
   fullWidth,
   children,
   loading = false,
   disabled,
   ...props
}) => {
   return (
      <motion.button
         className={buttonVariants({ intent, size, fullWidth, className })}
         disabled={disabled || loading}
         whileTap={{ scale: 0.98 }}
         whileHover={{ scale: 1.02 }}
         transition={{ type: 'spring', stiffness: 400, damping: 10 }}
         {...props}
      >
         {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
         <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: loading ? 0.7 : 1 }}
            transition={{ duration: 0.2 }}
         >
            {children}
         </motion.span>
      </motion.button>
   )
}
