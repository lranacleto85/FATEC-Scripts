import { cn } from '@/lib/utils'

export function H1({
  className,
  children,
  ...props
}: React.ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

export function H2({
  className,
  children,
  ...props
}: React.ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

export function H3({
  className,
  children,
  ...props
}: React.ComponentProps<'h3'>) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

export function H4({
  className,
  children,
  ...props
}: React.ComponentProps<'h4'>) {
  return (
    <h4
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h4>
  )
}

export function P({
  className,
  children,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    >
      {children}
    </p>
  )
}

export function Blockquote({
  className,
  children,
  ...props
}: React.ComponentProps<'blockquote'>) {
  return (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    >
      {children}
    </blockquote>
  )
}

export const Tr = ({
  className,
  children,
  ...props
}: React.ComponentProps<'tr'>) => {
  return (
    <tr className={cn('m-0 border-t p-0 even:bg-muted', className)} {...props}>
      {children}
    </tr>
  )
}
export const Th = ({
  className,
  children,
  ...props
}: React.ComponentProps<'th'>) => {
  return (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    >
      {children}
    </th>
  )
}
export const Td = ({
  className,
  children,
  ...props
}: React.ComponentProps<'td'>) => {
  return (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    >
      {children}
    </td>
  )
}
