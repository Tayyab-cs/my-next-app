"use server";

import { LoginSchema } from "@/schemas";

export const login = async (values) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }
  return { success: "Email sent!" };
};
