import React from 'react';
import styles from './Button.module.scss';

export interface IButtonProps {
	text?: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	buttonStyles?: string;
	tabIndex?: number;
}

export function Button(props: IButtonProps) {
	return (
		<button
			className={[
				styles.button,
				props.buttonStyles,
			].filter(Boolean).join(' ')}
			type={props.type || 'button'}
			onClick={e => props.onClick && props.onClick(e)}
			tabIndex={props.tabIndex || 0}
		>
			{props?.text || ''}
		</button>
	);
}