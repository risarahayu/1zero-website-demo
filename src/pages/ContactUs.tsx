import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import { Turnstile } from '@marsidev/react-turnstile';

export default function ContactPage() {
    // 1. State Management untuk form dan interaksinya
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState(""); // State for global form error
    const [honeypot, setHoneypot] = useState(""); // State for honeypot
    const [turnstileToken, setTurnstileToken] = useState(""); // State for Turnstile token

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        // Hapus error saat user mengetik kembali
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let newErrors = {};
        setFormError("");

        // Validasi Sederhana
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.message) newErrors.message = "Message cannot be empty";

        // Honeypot protection: If the hidden field is filled, it's likely a bot.
        // We prevent submission by returning early.
        if (honeypot) {
            return;
        }

        // Turnstile verification: Ensure the user completed the challenge
        if (!turnstileToken) {
            setFormError("Please complete the security check.");
            return;
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitted(false);
        } else {
            setErrors({});
            setIsSubmitting(true);

            try {
                // EmailJS submission flow
                const templateParams = {
                    first_name: formData.name,
                    email: formData.email,
                    message: formData.message,
                };

                const response = await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    templateParams,
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                );

                if (response.status === 200) {
                    setIsSubmitted(true);
                    // Reset form jika sukses
                    setFormData({ name: "", email: "", message: "" });
                    setTurnstileToken(""); // Optionally reset turnstile token
                } else {
                    console.error("Form submission failed.", response);
                    setFormError("Failed to send message. Please try again later.");
                }
            } catch (error) {
                console.error("Error submitting form:", error);
                setFormError("An error occurred. Please try again later.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <section className="relative w-full min-h-screen bg-[#030303] text-white overflow-hidden py-24 px-6 flex items-center">

            {/* ==========================================
               BACKGROUND GLOWS (Efek Aurora Global)
               ========================================== */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#1D5745] opacity-20 blur-[130px] rounded-full animate-slow-pan"></div>
                <div className="absolute bottom-[15%] right-[-5%] w-[450px] h-[450px] bg-[#307962] opacity-15 blur-[120px] rounded-full animate-slow-pan" style={{ animationDelay: "-3s" }}></div>
            </div>

            {/* Container Layout Utama */}
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">

                {/* ==========================================
                   LEFT SIDE: Title & Company Details
                   ========================================== */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
                    <div>
                        <span className="inline-block px-3.5 py-1 rounded-full border border-neutral-800 text-base font-sans  tracking-widest text-brunswick-green-500 mb-[3rem] bg-[#a3e635]/5 shadow-[0_0_12px_rgba(163,230,53,0.1)]">
                            Get In Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-3 text-gradient leading-tight">
                            Let's Build the System.
                        </h1>
                        <p className="text-white/60 mt-4 text-base md:text-lg leading-relaxed">
                            Have a system bottleneck or ready to scale up? Reach out and we'll engineer a tailored blueprint for your tech layer.
                        </p>
                    </div>

                    {/* Info Kontak Perusahaan */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-brunswick-green-500/20 hover:bg-white/[0.04] transition-all duration-300 group">
                            <div className="p-3 rounded-lg bg-brunswick-green-900/20 border border-brunswick-green-500/20 text-brunswick-green-900 group-hover:shadow-[0_0_12px_rgba(133,223,195,0.4)] transition-all duration-300">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Email Us</p>
                                <p className="text-white/80 font-medium text-sm md:text-base">info@1zero.biz</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-brunswick-green-500/20 hover:bg-white/[0.04] transition-all duration-300 group">
                            <div className="p-3 rounded-lg bg-brunswick-green-900/20 border border-brunswick-green-500/20 text-brunswick-green-900 group-hover:shadow-[0_0_12px_rgba(133,223,195,0.4)] transition-all duration-300">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-white/40 font-medium uppercase tracking-wider">Direct Call</p>
                                <p className="text-white/80 font-medium text-sm md:text-base">(+62) 85339396030</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-brunswick-green-500/20 hover:bg-white/[0.04] transition-all duration-300 group">
                            <div className="p-3 rounded-lg bg-brunswick-green-900/20 border border-brunswick-green-500/20 text-brunswick-green-900 group-hover:shadow-[0_0_12px_rgba(133,223,195,0.4)] transition-all duration-300">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-white/40 font-medium uppercase tracking-wider">HQ Location</p>
                                <p className="text-white/80 font-medium text-sm md:text-base">
                                    Biliq Sunset Office Space,<br />
                                    Jalan Sunset Road 819,<br />
                                    Bali Ruko Sunset Indah II No. 10, Kuta,<br />
                                    Bali, Indonesia, 80361
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder Stylized Map Neon (Optional) */}
                    <div className="relative h-32 w-full rounded-xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent overflow-hidden flex items-center justify-center group border-dashed">
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]"></div>
                        <span className="text-xs text-white/30 tracking-widest font-mono uppercase group-hover:text-green-500/50 transition-colors">
                            [ System Grid Coordinates Active ]
                        </span>
                    </div>
                </div>

                {/* ==========================================
                   RIGHT SIDE: Glowing Interactive Form
                   ========================================== */}
                <div className="lg:col-span-7 relative">
                    {/* Aurora Glow khusus di belakang container kartu form */}
                    <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 blur-2xl opacity-60 pointer-events-none"></div>

                    {/* Form Container (Glassmorphic) */}
                    <div className="relative p-8 md:p-10 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)]">

                        {/* VALIDASI KONDISI: SUCCESS STATE BLOCK */}
                        {isSubmitted && (
                            <div className="mb-8 p-4 rounded-xl border border-green-500/30 bg-green-500/5 flex items-start gap-3 shadow-[0_0_15px_rgba(133,223,195,0.1)] transition-all duration-300">
                                <CheckCircle className="w-5 h-5 text-brunswick-green-900 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-brunswick-green-900 font-semibold text-sm">Transmission Successful</h4>
                                    <p className="text-white/60 text-xs mt-1">Thank you for contacting us. We will respond as soon as possible.</p>
                                </div>
                            </div>
                        )}

                        {/* VALIDASI KONDISI: ERROR STATE BLOCK */}
                        {formError && (
                            <div className="mb-8 p-4 rounded-xl border border-red-500/30 bg-red-500/5 flex items-start gap-3 shadow-[0_0_15px_rgba(239,68,68,0.1)] transition-all duration-300">
                                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="text-red-500 font-semibold text-sm">Transmission Failed</h4>
                                    <p className="text-white/60 text-xs mt-1">{formError}</p>
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Honeypot field (Anti-spam): Hidden from real users */}
                            <input
                                type="text"
                                name="website"
                                style={{ display: "none" }}
                                value={honeypot}
                                onChange={(e) => setHoneypot(e.target.value)}
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            {/* FIELD 1: NAME (Kondisi Default / Error) */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className={`w-full px-4 py-3.5 bg-white/[0.03] text-white text-sm rounded-xl border outline-none transition-all duration-300 focus:bg-white/[0.05] ${errors.name
                                        ? "border-red-500/40 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.25)]"
                                        : "border-white/10 focus:border-brunswick-green-900/60 focus:shadow-[0_0_15px_rgba(133,223,195,0.2)]"
                                        }`}
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                                    </p>
                                )}
                            </div>

                            {/* FIELD 2: EMAIL (Kondisi Default / Error) */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                                    Corporate Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@company.com"
                                    className={`w-full px-4 py-3.5 bg-white/[0.03] text-white text-sm rounded-xl border outline-none transition-all duration-300 focus:bg-white/[0.05] ${errors.email
                                        ? "border-red-500/40 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.25)]"
                                        : "border-white/10 border-brunswick-green-900/60 focus:shadow-[0_0_15px_rgba(133,223,195,0.2)]"
                                        }`}
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                                    </p>
                                )}
                            </div>

                            {/* FIELD 3: MESSAGE (Kondisi Default / Error) */}
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                                    System Diagnostics Notes / Brief Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Describe your current infrastructure scale or bottleneck..."
                                    className={`w-full px-4 py-3.5 bg-white/[0.03] text-white text-sm rounded-xl border outline-none transition-all duration-300 resize-none focus:bg-white/[0.05] ${errors.message
                                        ? "border-red-500/40 focus:border-red-500 focus:shadow-[0_0_15px_rgba(239,68,68,0.25)]"
                                        : "border-brunswick-green-900/60 focus:shadow-[0_0_15px_rgba(133,223,195,0.2)]"
                                        }`}
                                />
                                {errors.message && (
                                    <p className="text-red-400 text-xs flex items-center gap-1.5 mt-1">
                                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Cloudflare Turnstile (Bot protection) */}
                            <div className="pt-2">
                                <Turnstile
                                    siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                                    onSuccess={(token) => setTurnstileToken(token)}
                                    options={{
                                        theme: "dark",
                                    }}
                                />
                            </div>

                            {/* PRIMARY CTA: SUBMIT BUTTON (Glow Animation) */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full mt-2 relative overflow-hidden group rounded-xl bg-brunswick-green-900 px-5 py-4 text-sm font-semibold tracking-wide text-sea-salt transition-all duration-300  hover:bg-brunswick-green-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
                            >


                                <span className="flex items-center justify-center gap-2 font-bold text-sea-salt uppercase tracking-wider">
                                    {isSubmitting ? "Sending..." : "Send Email"} {!isSubmitting && <Send className="w-4 h-4" />}
                                </span>
                            </button>

                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}