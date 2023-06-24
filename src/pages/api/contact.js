export default function handler(req, res) {
	if (req.method === "POST") {
		const { name, email, message } = req.body;

		if (
			!email ||
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!message ||
			message.trim() === ""
		) {
			res.status(422).json({ message: "Invalid input." });
			return;
		}
		const newMessage = {
			email,
			message,
			name,
		};
		console.log(newMessage);
		res
			.status(200)
			.json({ message: "Successfully stored message!", message: newMessage });
	}
}
