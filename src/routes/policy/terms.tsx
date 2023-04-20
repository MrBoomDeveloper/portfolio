import PolicyPage from "./";
import { terms } from "@data/policy.json";

export default function TermsPage() {
	return (
		<PolicyPage data={terms} />
	);
}