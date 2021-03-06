import React from 'react';
import styles from './Input.module.scss';

type Falsy = false | 0 | '' | null | undefined;

export interface IInputProps {
	type: string;
	name?: string;
	startAdornment?: React.ReactNode;
	endAdornment?: React.ReactNode;
	placeholder?: string;
	errorMessage?: string | Falsy;
	inputStyles?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	tabIndex?: number;
}

export function Input(props: IInputProps) {
	return (
		<div className={styles['input-wrapper']}>
			{
				(props.startAdornment || props.endAdornment) &&
                <span
                    data-qa='inputAdornment'
					className={[
						styles['input__adornment'],
						props.startAdornment && styles['input__adornment--start'],
						props.endAdornment && styles['input__adornment--end'],
					].filter(Boolean).join(' ')}
				>
					{props.startAdornment || props.endAdornment}
				</span>
			}
			<input
				name={props.name || ''}
				type={props.type || 'text'}
				className={[
					styles['input'],
					props.errorMessage && styles['input--error'],
					props.inputStyles,
				].filter(Boolean).join(' ')}
				placeholder={props.placeholder || ''}
				onChange={e => props.onChange && props.onChange(e)}
				tabIndex={props.tabIndex || 0}
			/>
			{
				props.errorMessage &&
                <span
                    data-qa='errorMessage'
                    className={styles['input__error']}
                >
					{props.errorMessage}
				</span>
			}
		</div>
	);
}