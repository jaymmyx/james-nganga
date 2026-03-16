import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mgvzzogl', {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset(); // Clear the form

                // Trigger the browser alert
                window.alert("Message sent successfully! I'll be in touch soon.");

                // Reset the success message after 5 seconds
                setTimeout(() => {
                    setStatus('idle');
                }, 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-20 space-y-12 border-t border-brand-100 dark:border-brand-900">

            <div className="border-b border-brand-200 dark:border-brand-800 pb-4">
                <h2 className="text-3xl font-bold text-brand-900 dark:text-brand-50">Get In Touch</h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                    Looking for a frontend engineer intern? Let's talk.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-16">

                {/* Contact Information */}
                <div className="flex-1 space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                            Let's build something great together.
                        </h3>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                            Whether you have a high-stakes project in mind, an internship opportunity, or just want to chat about React, Next.js, or mathematical algorithms—my inbox is open.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <a
                            href="mailto:njorogehjames20@gmail.com"
                            className="group flex items-center gap-4 text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                        >
                            <div className="p-3 bg-brand-50 dark:bg-brand-900/50 rounded-xl group-hover:bg-brand-100 dark:group-hover:bg-brand-900 transition-colors">
                                <Mail className="w-6 h-6 text-brand-500" />
                            </div>
                            <span className="text-lg font-medium">njorogehjames20@gmail.com</span>
                        </a>

                        <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300">
                            <div className="p-3 bg-brand-50 dark:bg-brand-900/50 rounded-xl">
                                <MapPin className="w-6 h-6 text-brand-500" />
                            </div>
                            <span className="text-lg font-medium">Juja, Kiambu County, Kenya</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="pt-4 flex gap-4">
                        <a href="https://github.com/jaymmyx" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-brand-950 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://linkedin.com/in/jaymmyx" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-brand-950 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Contact Form UI */}
                <div className="flex-1">
                    <form
                        className="bg-white dark:bg-brand-900/30 p-8 rounded-2xl border border-brand-100 dark:border-brand-800 shadow-sm space-y-6 relative overflow-hidden"
                        onSubmit={handleSubmit}
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-brand-950 border border-slate-200 dark:border-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-white transition-all disabled:opacity-50"
                                disabled={status === 'submitting'}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="john@company.com"
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-brand-950 border border-slate-200 dark:border-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-white transition-all disabled:opacity-50"
                                disabled={status === 'submitting'}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                placeholder="Tell me about the role or project..."
                                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-brand-950 border border-slate-200 dark:border-brand-800 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-white transition-all resize-none disabled:opacity-50"
                                disabled={status === 'submitting'}
                            ></textarea>
                        </div>

                        {/* Status Messages */}
                        {status === 'success' && (
                            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800/50 animate-in fade-in slide-in-from-bottom-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="text-sm font-medium">Message sent successfully! I'll be in touch soon.</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/50 p-3 rounded-lg border border-red-200 dark:border-red-800/50 animate-in fade-in slide-in-from-bottom-2">
                                <AlertCircle className="w-5 h-5" />
                                <span className="text-sm font-medium">Oops! Something went wrong. Please try again or email me directly.</span>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full group flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 disabled:bg-brand-400 text-white px-6 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-brand-500/25 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}