import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const Booking = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Normally hook up to API here
    };

    if (submitted) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center p-4">
                <div className="glass-panel p-12 text-center max-w-md w-full">
                    <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-10 w-10 text-secondary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Request Sent!</h2>
                    <p className="text-muted mb-8 text-lg">
                        Thank you for applying. The admin team will contact you shortly to confirm room availability and details.
                    </p>
                    <button 
                        onClick={() => window.location.href='/'}
                        className="w-full bg-surface border border-white/10 hover:bg-white/5 py-3 rounded-xl transition-colors font-medium"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Stay</h1>
                <p className="text-xl text-muted">Fill out the form below to request a room at Venkateswara Boys Hostel.</p>
            </div>

            <div className="glass-panel p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted">Full Name</label>
                            <input 
                                type="text" 
                                required
                                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted">Email Address</label>
                            <input 
                                type="email" 
                                required
                                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted">Phone Number</label>
                            <input 
                                type="tel" 
                                required
                                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                placeholder="+91 98765 43210"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-muted">Parent's Phone Number</label>
                            <input 
                                type="tel" 
                                required
                                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                placeholder="+91 98765 43210"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted">Room Preference</label>
                        <select className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-white appearance-none">
                            <option value="">Select an option</option>
                            <option value="2-sharing-ac">2 Sharing (AC) </option>
                            <option value="2-sharing-non-ac">2 Sharing (Non-AC)</option>
                            <option value="3-sharing-ac">3 Sharing (AC)</option>
                            <option value="4-sharing-non-ac">4 Sharing (Non-AC)</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-muted">Additional Requirements (Optional)</label>
                        <textarea 
                            rows="4"
                            className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                            placeholder="Tell us if you have any specific needs..."
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-accent text-white font-medium py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(20, 184, 166, 0.3)] hover:-translate-y-1"
                    >
                        Submit Request <Send className="h-5 w-5" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Booking;
