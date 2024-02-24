import React from 'react'

export interface LemonDrawerProps {
  forceRender?: boolean
  visible?: boolean
  onClose?: ((e: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void) | undefined
  width?: string | number | undefined
  title?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactChild
}

export const LemonDrawer = React.forwardRef<HTMLElement, LemonDrawerProps>(function LemonDrawerInternal(
  {
    // forceRender,
    // visible,
    // onClose,
    // width,
    // title,
    // footer,
    // children
  }
) { 

  return <></>
})