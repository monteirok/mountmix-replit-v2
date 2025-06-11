import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle,
  Instagram,
  Facebook,
  Linkedin
} from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  eventType: z.string().min(1, "Please select an event type"),
  guestCount: z.string().optional(),
  eventDate: z.string().optional(),
  budget: z.string().optional(),
  location: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your event"),
  newsletter: z.boolean().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const whyChooseFeatures = [
  "Licensed & Insured Professional Service",
  "Locally Sourced Premium Ingredients", 
  "Custom Menu Design & Consultation",
  "Professional Equipment & Setup",
  "Flexible Packages for Any Budget"
];

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      newsletter: false
    }
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contact", {
        ...data,
        newsletter: data.newsletter ? "yes" : "no"
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your inquiry!",
        description: "We'll get back to you within 24 hours.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactForm) => {
    submitMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-ice-blue/20 dark:bg-ice-blue/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-forest dark:text-mountain-gold mb-6">
            Book Your Event
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-charcoal dark:text-white">
            Ready to elevate your celebration? Let's discuss your vision and create
            an unforgettable cocktail experience in the Canadian Rockies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white dark:bg-charcoal rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold mb-6 text-charcoal dark:text-white">Get Your Custom Quote</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-charcoal dark:text-white" htmlFor="firstName">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        {...register("firstName")}
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-charcoal dark:text-white" htmlFor="lastName">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        {...register("lastName")}
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-charcoal dark:text-white" htmlFor="email">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-charcoal dark:text-white" htmlFor="phone">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-charcoal dark:text-white">Event Type *</label>
                      <Select onValueChange={(value) => setValue("eventType", value)}>
                        <SelectTrigger className={errors.eventType ? "border-red-500" : ""}>
                          <SelectValue placeholder="Select Event Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="private">Private Party</SelectItem>
                          <SelectItem value="class">Cocktail Class</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.eventType && (
                        <p className="text-red-500 text-sm mt-1">{errors.eventType.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-charcoal dark:text-white">Expected Guests</label>
                      <Select onValueChange={(value) => setValue("guestCount", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Guest Count" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-25">1-25 guests</SelectItem>
                          <SelectItem value="26-50">26-50 guests</SelectItem>
                          <SelectItem value="51-100">51-100 guests</SelectItem>
                          <SelectItem value="101-200">101-200 guests</SelectItem>
                          <SelectItem value="200+">200+ guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-charcoal dark:text-white" htmlFor="eventDate">
                        Preferred Date
                      </label>
                      <Input
                        id="eventDate"
                        type="date"
                        {...register("eventDate")}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-charcoal dark:text-white">Estimated Budget</label>
                      <Select onValueChange={(value) => setValue("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Budget Range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1000">Under $1,000</SelectItem>
                          <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                          <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                          <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                          <SelectItem value="over-10000">Over $10,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-charcoal dark:text-white" htmlFor="location">
                      Event Location/Venue
                    </label>
                    <Input
                      id="location"
                      placeholder="e.g., Canmore, Banff, Calgary"
                      {...register("location")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-charcoal dark:text-white" htmlFor="message">
                      Tell us about your vision *
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Describe your event, any special requests, or questions you have..."
                      {...register("message")}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="newsletter"
                      onCheckedChange={(checked) => setValue("newsletter", checked as boolean)}
                    />
                    <label htmlFor="newsletter" className="text-sm leading-5 text-charcoal dark:text-white">
                      I'd like to receive updates about Mountain Mixology events and cocktail tips
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || submitMutation.isPending}
                    className="w-full bg-mountain-gold hover:bg-copper text-white py-4 text-lg font-semibold transition-all duration-300 hover-lift"
                  >
                    {isSubmitting || submitMutation.isPending ? "Sending..." : "Get My Custom Quote"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <Card className="bg-white dark:bg-charcoal rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold mb-6 text-charcoal dark:text-white">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-mountain-gold/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="text-mountain-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-charcoal dark:text-white">Service Area</h4>
                      <p className="text-charcoal/70 dark:text-white/70">
                        Canmore, Banff, Calgary<br />
                        & surrounding Rocky Mountain region
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <div className="w-12 h-12 bg-mountain-gold/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="text-mountain-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-charcoal dark:text-white">Phone</h4>
                      <p className="text-charcoal/70 dark:text-white/70">
                        <a
                          href="tel:+1-403-555-0123"
                          className="hover:text-mountain-gold transition-colors"
                        >
                          (403) 555-0123
                        </a>
                      </p>
                    </div>
                  </div> */}

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-mountain-gold/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-mountain-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-charcoal dark:text-white">Email</h4>
                      <p className="text-charcoal/70 dark:text-white/70">
                        <a
                          href="mailto:mountainmixologyca@gmail.com"
                          className="hover:text-mountain-gold transition-colors"
                        >
                          mountainmixologyca@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-mountain-gold/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="text-mountain-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 text-charcoal dark:text-white">Response Time</h4>
                      <p className="text-charcoal/70 dark:text-white/70">
                        Within 24 hours<br />
                        Same day for urgent requests
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="bg-forest text-white rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold mb-6">Why Choose Mountain Mixology?</h3>
                <div className="space-y-4">
                  {whyChooseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="text-mountain-gold mr-3 flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white dark:bg-charcoal rounded-2xl shadow-lg text-center">
              <CardContent className="p-8">
                <h3 className="text-xl font-playfair font-semibold mb-4 text-charcoal dark:text-white">Follow Our Journey</h3>
                <p className="mb-6 text-charcoal/70 dark:text-white/70">See our latest cocktail creations and events</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://instagram.com/mountain.mixology"
                    target="_blank"
                    className="w-12 h-12 bg-mountain-gold/20 rounded-full flex items-center justify-center hover:bg-mountain-gold hover:text-white transition-all duration-300"
                  >
                    <Instagram size={20} />
                  </a>
                  {/* <a
                    href="#"
                    className="w-12 h-12 bg-mountain-gold/20 rounded-full flex items-center justify-center hover:bg-mountain-gold hover:text-white transition-all duration-300"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-mountain-gold/20 rounded-full flex items-center justify-center hover:bg-mountain-gold hover:text-white transition-all duration-300"
                  >
                    <Linkedin size={20} />
                  </a> */}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
