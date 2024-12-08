'use client'

import { InputHTMLAttributes } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

interface ControlledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  labelClassName?: string
}

export function ControlledInput({
  name,
  label,
  labelClassName,
  ...rest
}: ControlledInputProps): React.ReactElement {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="flex flex-col items-start gap-1.5">
          <Label className={labelClassName} htmlFor={name}>
            {label}
          </Label>
          <Input
            className="bg-white"
            {...field}
            value={field.value || ''}
            id={name}
            {...rest}
          />
          {fieldState.error && (
            <span className="text-red-500 text-xs">
              {fieldState.error.message}
            </span>
          )}
        </div>
      )}
    />
  )
}
