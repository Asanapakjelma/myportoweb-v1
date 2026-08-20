type TFloatingBtn = {
	className?: string;
	label: string;
	onClick?: () => void;
	href?: string;
};

export const FloatingButton = ({ label, className, href, onClick }: TFloatingBtn) => {
	return (
		<a
			href={href}
			className={`floating-btn ${className}`}
			onClick={(event) => {
				if (onClick) {
					event.preventDefault();
					onClick();
				}
			}}
		>
			<div>{label}</div>
			<span></span>
		</a>
	);
};