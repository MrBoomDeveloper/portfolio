import { RefObject, useRef } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

export default function Input({
	placeholder,
	value,
	name,
	type,
	multiline,
	error,
	onChange,
	inputRef,
	textareaRef
}: {
	placeholder?: string,
	value?: string,
	name?: string,
	type?: "email" | "name",
	multiline?: boolean,
	error?: string,
	onChange?: (newValue: string) => void,
	inputRef?: RefObject<HTMLInputElement>,
	textareaRef?: RefObject<HTMLTextAreaElement>,
}) {
	const isError = (error?.length != 0);

	return (
		<div className={clsx(styles.holder, isError ? styles.isError : styles.noError)}>
			<div className={styles.container}>
				{multiline ? (
					<textarea name={name}
						className={styles.input}
						onChange={() => onChange?.(textareaRef?.current?.value || "")}
						ref={textareaRef}
						placeholder={placeholder}>{value}</textarea>
				) : (
					<input placeholder={placeholder}
						className={styles.input}
						ref={inputRef}
						onChange={() => onChange?.(inputRef?.current?.value || "")}
						name={name}
						type={type}
						value={value} />
				)}

				<span className={styles.error}>{error}</span>
			</div>

			<div className={styles.caret} />
		</div>
	);
}