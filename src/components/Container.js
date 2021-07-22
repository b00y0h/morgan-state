import React from 'react'

const Container = ({ id, constraints, className, children }) => (
  <>
    <section
      id={id}
      className={`
      ${constraints === 'center' ? 'wrapper centered' : constraints === 'narrow' ? 'wrapper narrow' : 'wrapper'}
    ${className || ''}
    `}
    >
      {children}
    </section>
  </>
)

export default Container
