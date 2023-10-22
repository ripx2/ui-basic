import React, { MouseEventHandler, ReactNode } from 'react';
import style from './style.module.css';
import classNames from 'classnames';

export interface IButtonProps {
  children: ReactNode
  variant?: 'text' | 'contained' | 'outlined'
  color?: 'primary' | 'secondary' | 'light' | 'dark' | 'warning' | 'danger'
  type?: 'submit' | 'button'
  disabled?: boolean
  className?: string
  loading?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, variant, color, loading, className, ...otherProps }: IButtonProps) => {

  return (
    <button
      {...otherProps}
      className={classNames(
        className,
        color && style[color],
        variant && style[variant],
        loading && style['loading'],
      )}
    >
      {children}
    </button>
  )
}
