"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  User,
  Building,
  FileText,
  CheckCircle,
  ExternalLink,
  Globe,
  Award,
  AlertCircle,
} from "lucide-react";
import { Header } from "@/components/Header";
import { companyInfo } from "@/data/products";
import { Footer } from "@/components/Footer";
import {sendEmail} from "@/lib/sendEmail";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    product: "",
    time: "", // Will be set on form submission
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear messages when user starts typing
    if (submitError) setSubmitError("");
    if (isDuplicate) setIsDuplicate(false);
  };

  // Check for duplicate submission
  const checkForDuplicateSubmission = () => {
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    return submissions.some(submission => 
      submission.email === formData.email || submission.phone === formData.phone
    );
  };

  // Save submission to localStorage
  const saveSubmissionToStorage = () => {
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    const newSubmission = {
      email: formData.email,
      phone: formData.phone,
      name: formData.name,
      timestamp: new Date().toISOString(),
    };
    submissions.push(newSubmission);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
  };

  // Generate WhatsApp message from form data
  const generateWhatsAppMessage = (data) => {
    let message = "Hello! I'm interested in your services.\n\n";
    
    if (data.name) message += `*Name:* ${data.name}\n`;
    if (data.email) message += `*Email:* ${data.email}\n`;
    if (data.phone) message += `*Phone:* ${data.phone}\n`;
    if (data.company) message += `*Company:* ${data.company}\n`;
    if (data.product) message += `*Interested in:* ${data.product}\n`;
    if (data.subject) message += `*Subject:* ${data.subject}\n`;
    if (data.message) message += `*Message:* ${data.message}\n`;
    
    message += "\nPlease get back to me at your earliest convenience.";
    
    return message;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check for duplicate submission
    if (checkForDuplicateSubmission()) {
      setIsDuplicate(true);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");
    setIsDuplicate(false);

    const time = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });

    const submissionData = {
      ...formData,
      time: time,
    };

    try {
      await sendEmail(submissionData);
      
      // Success - save to localStorage and show success message
      saveSubmissionToStorage();
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      // Clear form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        product: "",
        time: "",
      });

      // Auto-hide success message after 15 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 15000);

    } catch (error) {
      setIsSubmitting(false);
      console.error("Error sending email:", error);
      setSubmitError(error.message || "Failed to send message. Please try again later.");
    }
  };

   

  const handleWhatsAppContact = () => {
    // If form has data, send detailed WhatsApp message
    const hasFormData = formData.name || formData.email || formData.message;

    let message;
    if (hasFormData) {
      message = generateWhatsAppMessage(formData);
    } else {
      message =
        "Hi! I'm interested in your services and would like to know more about your offerings.";
    }

    const url = `https://wa.me/${
      companyInfo.whatsappNumber
    }?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Get in Touch with Us
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Ready to transform your business? Let's discuss your
                requirements and find the perfect solution.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  <span>Instant Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>Expert Consultation</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16 px-4 -mt-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                  Our Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Ward No-45, First Floor, C/O Mrs. Neshat Parveen, Jainul
                  Lodge, Near Jain Mandir, Doranda, Dr Khalid Clinic,
                  Ranchi-834002, Jharkhand, India
                </p>
                <a
                  href="https://www.google.com/maps/dir//88QG%2B6VG+Jain+Mandir+Rd+Kusai+Ranchi,+Jharkhand+834002/@23.3382173,85.3272919,610m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x39f4e1b8ed3834c1:0xb826362808ac6566!2m2!1d85.3272919!2d23.3382173?entry=ttu&g_ep=EgoyMDI1MDcyMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Get Directions
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                  Call Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Speak directly with our experts for immediate assistance and
                  consultation.
                </p>
                <a
                  href={`tel:${companyInfo.whatsappNumber}`}
                  className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  {companyInfo.whatsappNumber}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                  WhatsApp Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Quick and convenient way to reach us for instant responses and
                  support.
                </p>
                <button
                  onClick={handleWhatsAppContact}
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  Start Chat
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form and Business Info */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                {" "}
                <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                  Send us a Message
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>                {/* Error Message */}
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <p className="text-red-700 dark:text-red-300 text-sm">
                      {submitError}
                    </p>
                  </motion.div>
                )}

                {/* Duplicate Submission Message */}
                {isDuplicate && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                    <div className="text-orange-700 dark:text-orange-300 text-sm">
                      <p className="font-medium">You have already submitted a request!</p>
                      <p>We have your details and will contact you soon. No need to submit again.</p>
                    </div>
                  </motion.div>
                )}

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <div className="text-green-700 dark:text-green-300 text-sm">
                      <p className="font-medium">Your request has been submitted successfully! ✅</p>
                      <p>Someone will contact you very soon to discuss your requirements.</p>
                    </div>
                  </motion.div>
                )}
                <form action="https://formsubmit.co/sagaciousglobals@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="+91 9876543210"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Product Interest
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    >
                      <option value="">Select a service/product</option>
                      <option value="billing-machine">Billing Machine</option>
                      <option value="software-development">
                        Software Development
                      </option>
                      <option value="survey-service">Survey Service</option>
                      <option value="data-entry">Data Entry Projects</option>
                      <option value="scanning-service">Scanning Service</option>
                      <option value="hr-consultancy">HR Consultancy</option>
                      <option value="amc-service">AMC Service</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="What is this regarding?"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                      placeholder="Tell us about your requirements, project details, or any questions you have..."
                    ></textarea>
                  </div>{" "}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted || isDuplicate}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending Email...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Submitted Successfully!
                        </>
                      ) : isDuplicate ? (
                        <>Already Submitted</>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Email
                        </>
                      )}
                    </button>

                    <button
                      type="submit"
                      onClick={handleWhatsAppContact}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
                      title={
                        formData.name || formData.email || formData.message
                          ? "Send filled form data via WhatsApp"
                          : "Contact via WhatsApp"
                      }
                    >
                      <MessageCircle className="w-5 h-5" />
                      {formData.name || formData.email || formData.message
                        ? "Send via WhatsApp"
                        : "WhatsApp Instead"}
                    </button>
                  </div>
                </form>
              </motion.div>

              {/* Business Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Contact Person */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Contact Person
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          Irfan Parvez
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          Proprietor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Business Hours */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Business Hours
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          Monday - Friday
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          Saturday
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Clock className="w-6 h-6 text-red-600 dark:text-red-400" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          Sunday
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Business Details */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Business Information
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <span className="text-gray-600 dark:text-gray-400">
                          Legal Status
                        </span>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          Proprietorship
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <span className="text-gray-600 dark:text-gray-400">
                          GST Number
                        </span>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          20BDGPP6667Q1ZV
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <span className="text-gray-600 dark:text-gray-400">
                          Team Size
                        </span>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          Up to 10 People
                        </p>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <span className="text-gray-600 dark:text-gray-400">
                          Annual Turnover
                        </span>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          ₹40 Lakhs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* Quick Links */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-heading font-bold mb-6">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="https://www.indiamart.com/sagacious-globalservices/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View on IndiaMART
                    </a>
                    <a
                      href="https://www.indiamart.com/sagacious-globalservices/sagacious-global-services.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                    >
                      <FileText className="w-5 h-5" />
                      Download Brochure
                    </a>
                  </div>
                </div>
                {/* Contact Options */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                    Multiple Ways to Reach Us
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          Contact Form
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          Submit form above - we'll email you back within 24
                          hours
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          WhatsApp
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          Instant response - form data automatically included
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          Direct Call
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          Speak directly for immediate consultation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                Find Us on Map
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Located in the heart of Ranchi, Jharkhand
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2656.904953916792!2d85.32729189999999!3d23.3382173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1b8ed3834c1%3A0xb826362808ac6566!2s88QG%2B6VG%2C%20Jain%20Mandir%20Rd%2C%20Kusai%2C%20Ranchi%2C%20Jharkhand%20834002!5e1!3m2!1sen!2sin!4v1752042861745!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
