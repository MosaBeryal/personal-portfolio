import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { fadeInUp } from "@/lib/animations";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(20),
});
type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await apiRequest("POST", "/api/contact", data);
      const result = await res.json();
      if (result.success) {
        setIsSubmitted(true);
        form.reset();
        toast({ title: "Message sent!", description: "Thank you!" });
        setTimeout(() => setIsSubmitted(false), 3000);
      }
    } catch {
      toast({ title: "Failed to send", description: "Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-24 bg-muted/30"
    >
      {/* Animated Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-blob" />
      </div>

      {/* Frosted Glass Overlay */}
      {/* <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/20 rounded-2xl z-0" /> */}

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        {/* Section Heading */}
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : undefined}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let’s Talk
          </h2>
          <div className="mx-auto w-20 h-1 bg-gradient-to-r from-primary to-violet-600 rounded-full" />
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Share your idea or ask a question — I’ll get back to you personally.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial="initial"
          animate={isVisible ? "animate" : undefined}
          variants={fadeInUp}
          className="w-full max-w-lg"
        >
          <Card className="backdrop-blur-xl bg-white/5 border border-white/20 shadow-lg rounded-2xl">
            <CardContent className="p-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {["name", "email", "subject", "message"].map((field) => (
                    <FormField
                      key={field}
                      control={form.control}
                      name={field as any}
                      render={({ field: f }) => (
                        <FormItem>
                          <FormLabel className="capitalize">
                            {field.replace(/^\w/, (c) => c.toUpperCase())}
                          </FormLabel>
                          <FormControl>
                            {field !== "message" ? (
                              <Input
                                placeholder={
                                  field === "email" ? "you@example.com" : undefined
                                }
                                {...f}
                              />
                            ) : (
                              <Textarea
                                placeholder="Your message..."
                                className="resize-none h-32"
                                {...f}
                              />
                            )}
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}

                  <Button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitted ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Sent!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
