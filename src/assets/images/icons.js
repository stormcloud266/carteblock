import React from 'react'

export const Hamburger = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='h-6 w-6'
		fill='none'
		viewBox='0 0 24 24'
		stroke='currentColor'
		width='24'
		height='24'
	>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M4 8h16M4 16h16'
		/>
	</svg>
)

export const Arrow = () => (
	<svg width={22} height={20} fill='none' xmlns='http://www.w3.org/2000/svg'>
		<path
			d='m13.552.2-1.89 1.86 6.12 6.09H.232v2.7h17.55l-6.12 6.09 1.89 1.86 8.88-9.15v-.3L13.552.2Z'
			fill='#333'
		/>
	</svg>
)
