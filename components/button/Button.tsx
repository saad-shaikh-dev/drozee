/*
  TODO: Make button of type
      - Button (Signup) [color: primary]
      - Button (Submit with Arrow) [color: primary]
      - Button (Submit) [color: primary]
*/

interface ButtonProps {
	children: React.ReactNode;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
}

export default function ({ children, type, onClick, ...props }: ButtonProps) {
	return (
		<button type={type} onClick={onClick} {...props}>
			<span>{children}</span>
		</button>
	);
}
