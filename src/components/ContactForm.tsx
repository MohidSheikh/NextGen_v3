import React, { useState } from "react";
import { MessageSquare, Phone, MapPin, Grid, Layers, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    buildingType: "",
    numElevators: "1",
    projectType: "New Installation",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verify minimum phone/name parameters
    if (!formData.name || !formData.phone) {
      alert("Please fill out your Name and Phone Number so we can reach you.");
      return;
    }

    // Design structured message block
    const messageTemplate = `New Website Inquiry - NextGen Elevators

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Email: ${formData.email.trim() || "Not Provided"}
City: ${formData.city.trim() || "Not Provided"}
Building Type: ${formData.buildingType.trim() || "Not Provided"}
Number of Elevators: ${formData.numElevators}
Project Type: ${formData.projectType}
Message: ${formData.message.trim() || "No custom message provided"}`;

    // Encode text payload safely
    const encodedMessage = encodeURIComponent(messageTemplate);
    const destinationUrl = `https://wa.me/923260523858?text=${encodedMessage}`;

    // Open link in standard blank window
    window.open(destinationUrl, "_blank", "noopener,noreferrer");
    
    // Set visual confirmation state
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section 
      id="contact" 
      className="py-14 md:py-20 bg-slate-50 scroll-mt-[120px] md:scroll-mt-[150px]"
      aria-label="Request Quote and Direct Inquiry"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct metadata coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                Get In Touch
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-none mt-1">
                Discuss Your Lift Requirements Today
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Ready to begin your build or need a systematic assessment of your existing escalator shaft? Fill out our quotation request. Our engineering division compiles comprehensive technical drafts and sends free quotes inside 24 hours.
              </p>

              {/* Direct coordinates cards list */}
              <div className="space-y-4 pt-4">
                
                {/* Contact phone card */}
                <div className="flex items-start gap-4 p-4 rounded-sm bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-sm bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                      Direct Contact Number
                    </h4>
                    <a 
                      href="tel:03260523858"
                      className="text-base font-bold text-slate-900 hover:text-red-600 font-mono"
                    >
                      03260523858
                    </a>
                  </div>
                </div>

                {/* Service area card */}
                <div className="flex items-start gap-4 p-4 rounded-sm bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-sm bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                      Active Service Area
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                      Pakistan (Karachi, Lahore, Islamabad, Multan, Faisalabad, Peshawar)
                    </p>
                  </div>
                </div>

                {/* Scope capabilities list */}
                <div className="flex items-start gap-4 p-4 rounded-sm bg-white border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-sm bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Grid className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">
                      Available Solutions
                    </h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
                      New Installation, regular AMC Maintenance, Retrofits & Safety Modernization
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Chat Call-to-Action Link Panel */}
            <div className="mt-8 p-6 rounded-sm bg-slate-100 text-slate-900 border border-slate-200 shadow-sm relative overflow-hidden">
              <h3 className="font-display font-bold text-base mb-1 uppercase tracking-tight">Want to Skip the Form?</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Click below to start a direct dialogue on our regional message system without entering any info.
              </p>
              <a
                href="https://wa.me/923260523858"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-700 hover:text-green-800 transition-colors focus:outline-none"
              >
                <MessageSquare className="w-4 h-4 text-green-600" />
                Chat Now via WhatsApp
              </a>
            </div>

          </div>

          {/* Right Column: Dynamic Form UI */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-sm border border-slate-200 shadow-md">
            <div className="mb-6 pb-4 border-b border-slate-150 flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-lg text-slate-900 uppercase tracking-tight">
                  Request Commercial Quotation
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Sends formatted specs instantly to our technical support line.
                </p>
              </div>
              <Layers className="w-5 h-5 text-slate-300 hidden sm:block" />
            </div>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-none bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm">
                🎉 <strong>Spec Details Compiled!</strong> We are redirecting you to our secure messaging line to finalise transmitting the quote details. If you aren't redirected automatically, click the send logo.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Phone Number Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2" htmlFor="form-name">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Muhammad Ali"
                    className="w-full px-3 py-2 border border-slate-200 rounded-sm text-slate-900 text-sm focus:outline-none focus:border-red-650 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2" htmlFor="form-phone">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 03260523858"
                    className="w-full px-3 py-2 border border-slate-200 rounded-sm text-slate-900 text-sm focus:outline-none focus:border-red-650 transition-colors"
                  />
                </div>
              </div>

              {/* Email & City Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2" htmlFor="form-email">
                    Email Address
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. ali@domain.com"
                    className="w-full px-3 py-2 border border-slate-200 rounded-sm text-slate-900 text-sm focus:outline-none focus:border-red-650 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2" htmlFor="form-city">
                    City <span className="text-slate-400 font-normal">(Pakistan)</span>
                  </label>
                  <input
                    id="form-city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Lahore, Islamabad, Karachi"
                    className="w-full px-3 py-2 border border-slate-200 rounded-sm text-slate-900 text-sm focus:outline-none focus:border-red-650 transition-colors"
                  />
                </div>
              </div>

              {/* Building Type & Number of Elevators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2" htmlFor="form-building">
                    Building Type
                  </label>
                  <input
                    id="form-building"
                    type="text"
                    name="buildingType"
                    value={formData.buildingType}
                    onChange={handleChange}
                    placeholder="e.g. Bungalow, Hospital, Plaza, 5-Story Apartment"
                    className="w-full px-3 py-2 border border-slate-200 rounded-sm text-slate-900 text-sm focus:outline-none focus:border-red-650 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2" htmlFor="form-qty">
                    Number of Elevators Required
                  </label>
                  <input
                    id="form-qty"
                    type="number"
                    name="numElevators"
                    min="1"
                    value={formData.numElevators}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-sm text-slate-900 text-sm focus:outline-none focus:border-red-650 transition-colors"
                  />
                </div>
              </div>

              {/* Project Type Dropdown */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2" htmlFor="form-proj">
                  Project Type
                </label>
                <select
                  id="form-proj"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-sm text-slate-900 text-sm focus:outline-none focus:border-red-650 bg-white transition-colors cursor-pointer"
                >
                  <option value="New Installation">New Installation</option>
                  <option value="Modernization">Modernization</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Repair">Repair</option>
                  <option value="Escalator / Moving Walkway">Escalator / Moving Walkway</option>
                </select>
              </div>

              {/* Message Context */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-2" htmlFor="form-msg">
                  Message Details / Custom Demands
                </label>
                <textarea
                  id="form-msg"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share details here about concrete shaft status, floors list, ceiling style, panoramic glass specs etc..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-sm text-slate-900 text-sm focus:outline-none focus:border-red-650 transition-colors resize-y"
                />
              </div>

              {/* Submit trigger button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-red-600 text-white font-bold py-3.5 px-6 rounded-sm text-xs uppercase tracking-wider shadow-lg shadow-slate-200 hover:shadow-red-200 transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                >
                  <Send className="w-4 h-4" />
                  Discuss This Plan
                </button>
                <span className="block text-center text-[10px] text-slate-400 mt-3 font-mono">
                  🔒 Strictly confidential. No data is stored, shared, or compiled on third-party servers.
                </span>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
