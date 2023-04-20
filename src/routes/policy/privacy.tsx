import PolicyPage from "./";
import { privacy } from "@data/policy.json";

export default function PrivacyPage() {
	return (
		<PolicyPage data={privacy} />
	);
}