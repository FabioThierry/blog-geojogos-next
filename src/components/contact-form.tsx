"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { submitContactForm } from "../lib/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    formAction(new FormData(e.currentTarget));
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required />
        {state?.errors?.name && (
          <p className="text-sm text-red-500">{state.errors.name[0]}</p>
        )}
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
        {state?.errors?.email && (
          <p className="text-sm text-red-500">{state.errors.email[0]}</p>
        )}
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" required />
        {state?.errors?.message && (
          <p className="text-sm text-red-500">{state.errors.message[0]}</p>
        )}
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </motion.div>
      {state?.success && (
        <motion.p
          className="text-green-500 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircle2 className="w-4 h-4" />
          Message sent successfully!
        </motion.p>
      )}
      {state?.errors && !state.success && (
        <motion.p
          className="text-red-500 flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AlertCircle className="w-4 h-4" />
          There was an error sending your message. Please try again.
        </motion.p>
      )}
    </motion.form>
  );
}
