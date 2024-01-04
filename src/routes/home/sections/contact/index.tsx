import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";
import Button from "@components/base/button";
import { RefObject, useCallback, useRef, useState } from "react";
import Input from "@components/base/input";
import { emailRegex } from "@data/marks";
import Separator from "@components/base/separator";

export interface ContactSectionRef {
	getY: () => number
}

export default function ContactSection({
	reference
}: {
	reference?: RefObject<ContactSectionRef> | any
}) {
	const [currentError, setError] = useState(["", ""]);
	const [isSending, setSending] = useState(false);

	const formRef = useRef<HTMLFormElement>(null);

	const email = useRef<HTMLInputElement>(null);
	const name = useRef<HTMLInputElement>(null);
	const message = useRef<HTMLTextAreaElement>(null);

	const { t } = useTranslation();

	if(reference != null) {
		reference.current = {
			getY() {
				return formRef.current?.offsetTop;
			}
		}
	}

	const submit = useCallback(async () => {
		if(isSending) return;

		if(!emailRegex.test(email.current?.value || "")) {
			setError(["email", t("error.invalid_email")]);
			return;
		}

		if((name.current?.value.length || 0) < 2) {
			setError(["name", t("error.short_name")]);
			return;
		}

		if((message.current?.value.length || 0) < 10) {
			setError(["message", t("error.short_message")]);
			return;
		}

		setError([]);
		setSending(true);

		const data = new FormData(formRef.current as HTMLFormElement);
		data.append("access_key", "2fdf5449-091f-4a24-bbbb-272e9e27d0b3");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: data
			});

			const json = await response.json();

			if(!json.success) {
				throw new Error("Not successfull." + " " + JSON.stringify(json));
			}

			alert(t("contact.sent"));
		} catch(e) {
			alert(t("submit_email") + " " + e);
		} finally {
			setSending(false);
		}
	}, [formRef, email, name, message, isSending]);

	const submitButton = (
		<Button text={t(isSending ? "contact.loading" : "contact.submit")}
			icon="/icon/send.svg"
			className={styles.submit}
			enabled={!isSending}
			onPress={() => submit()} />);

	return (
		<div className={styles.container} id="contact">
			<div className={styles.info}>
				<div className={styles.header}>
					<h1 className={styles.title}>{t("contact.title")}</h1>

					<Separator className={styles.mobileSeparator} />
				</div>
				
				<p className={styles.description}>{t("contact.description")}</p>

				{submitButton}
			</div>
			
			<form className={styles.form} ref={formRef}>
				<Input name="email" type="email"
					inputRef={email}
					onChange={() => setError(currentError[0] == "email" ? [] : currentError)}
					error={currentError[0] == "email" ? currentError[1] : ""}
					placeholder={t("contact.email") as string} />

				<Input name="name" type="name" 
					inputRef={name}
					onChange={() => setError(currentError[0] == "name" ? [] : currentError)}
					error={currentError[0] == "name" ? currentError[1] : ""}
					placeholder={t("contact.name") as string} />

				<Input name="message" multiline
					textareaRef={message}
					onChange={() => setError(currentError[0] == "message" ? [] : currentError)}
					error={currentError[0] == "message" ? currentError[1] : ""}
					placeholder={t("contact.message") as string} />

				{submitButton}
			</form>
		</div>
	);
}