import { memo } from "react"
import { useTranslation } from "react-i18next";

function AboutMe() {
	const { t } = useTranslation();

	return (
		<div>
			<h1>{t("about_me.title")}</h1>
		</div>
	)
}

export default memo(AboutMe);