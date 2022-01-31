/*
  TODO: Make button of type
      - Next Link (normal text) [color=blue]
      - Next Link (normal text) [color=white]
      - Next Link (Login)
*/

import Link from 'next/link';

interface LinkProps {
	href: string;
	type?: 'link' | 'light' | 'action-light' | 'action-dark';
	title: string;
	ariaLabel: string;
	children: React.ReactNode;
}

export default function ({
	href,
	type,
	title,
	ariaLabel,
	children,
	...props
}: LinkProps) {
	if (type === 'light') {
		return (
			<Link href={href} passHref>
				<a
					className='text-[1em]'
					title={title}
					aria-label={ariaLabel}
					{...props}
				>
					{children}
				</a>
			</Link>
		);
	}

	if (type === 'action-light') {
		return (
			<Link href={href} passHref>
				<a title={title} aria-label={ariaLabel} {...props}>
					{children}
				</a>
			</Link>
		);
	}

	if (type === 'action-dark') {
		return (
			<Link href={href} passHref>
				<a title={title} aria-label={ariaLabel} {...props}>
					{children}
				</a>
			</Link>
		);
	}

	return (
		<Link href={href} passHref>
			<a title={title} aria-label={ariaLabel} {...props}>
				{children}
			</a>
		</Link>
	);
}
