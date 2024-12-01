"use server";

import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Here you would typically send an email
  // For demonstration, we'll just log the data
  console.log("Form submitted:", validatedFields.data);

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}
