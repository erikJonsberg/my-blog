import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	email: Yup.string().email("Email is invalid").required("Email is required"),
	subject: Yup.string().required("Subject is required"),
	message: Yup.string().required("Message is required"),
});
