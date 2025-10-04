import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  Globe,
  Building2,
  Users
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create email content
      const subject = `New Contact Form Submission from ${formData.name}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Company/Organization: ${formData.company || 'Not provided'}
Service Interest: ${formData.service || 'Not specified'}

Message:
${formData.message}

---
This message was sent from the Moll Technologies website contact form.
      `;
      
      // Create mailto link
      const mailtoLink = `mailto:mollelectechnigltd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open mailto link
      window.location.href = mailtoLink;
      
      // Show success message
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: ""
          });
        }, 3000);
      }, 1000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error sending your message. Please try again or contact us directly at mollelectechnigltd@gmail.com');
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "2, Martin Oti Street, Guzape, Kwali, Abuja, FCT, Nigeria",
      color: "blue"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+234 702 555 4008",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email",
      details: "mollelectechnigltd@gmail.com",
      color: "purple"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50",
        icon: "bg-blue-600",
        text: "text-blue-600",
        border: "border-blue-200"
      },
      green: {
        bg: "bg-green-50",
        icon: "bg-green-600",
        text: "text-green-600",
        border: "border-green-200"
      },
      purple: {
        bg: "bg-purple-50",
        icon: "bg-purple-600",
        text: "text-purple-600",
        border: "border-purple-200"
      },
      orange: {
        bg: "bg-orange-50",
        icon: "bg-orange-600",
        text: "text-orange-600",
        border: "border-orange-200"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const services = [
    "Starlink Internet Deployment",
    "Consumer Electronics Sales",
    "Repairs & Maintenance",
    "Technical Consultancy",
    "Smart Home Automation",
    "IT Infrastructure Design"
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 pt-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4" />
            <span>Contact Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch with
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Moll Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your technology infrastructure? Contact us today for 
            a consultation and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Reach out to us through any of the following channels. We're here to help 
                you with all your technology needs and answer any questions you may have.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const colors = getColorClasses(info.color);
                return (
                  <div 
                    key={info.title}
                    className={`p-6 rounded-2xl bg-white border-2 ${colors.border} hover:shadow-lg transition-shadow duration-300`}
                  >
                    <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center mb-4`}>
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className={`text-lg font-bold ${colors.text} mb-2`}>{info.title}</h4>
                    <p className="text-gray-600 text-sm whitespace-pre-line">{info.details}</p>
                  </div>
                );
              })}
            </div>

            {/* Company Details */}
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Moll Technologies</h4>
                  <p className="text-sm text-gray-600">RC: 7262696</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Formerly known as MOLL ELECTECH NIG LTD, we are a comprehensive technology 
                solutions provider serving Africa and beyond with innovative, reliable, 
                and user-friendly technology solutions.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-200">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h3>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending Message...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              For urgent inquiries or immediate support, reach out to us directly 
              through these quick contact options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Phone className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Call Us</h4>
              <p className="text-white/80 mb-4">Speak directly with our team</p>
              <a 
                href="tel:+2347025554008"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                +234 702 555 4008
              </a>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Mail className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Email Us</h4>
              <p className="text-white/80 mb-4">Send us a detailed message</p>
              <a 
                href="mailto:mollelectechnigltd@gmail.com"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Send Email
              </a>
            </div>

            <div className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
              <Globe className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Visit Us</h4>
              <p className="text-white/80 mb-4">Come to our office in Abuja</p>
              <div className="text-sm text-white/70">
                2, Martin Oti Street<br />
                Guzape, Kwali, Abuja, FCT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
