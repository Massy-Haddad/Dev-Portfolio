import React from 'react'

export default function button({
	text,
	className = '',
}: {
	text: string
	className: string
}) {
	return (
		<button className={'button2' + ' ' + className}>
			<span className="btn-text-one">{text}</span>
			<span className="btn-text-two">{text}</span>
		</button>
	)
}
