import React from 'react';
import { Building2, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Building2 className="h-6 w-6 text-primary" />
                            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Venkateswara Boys Hostel</span>
                        </div>
                        <p className="text-muted max-w-md mb-6 leading-relaxed">
                            Premium PG accommodation in Kurnool with modern facilities, 
                            hygienic food, and a perfect environment for students and professionals.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted hover:bg-primary hover:text-white transition-all">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Facilities</a></li>
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Rooms</a></li>
                            <li><a href="#" className="text-muted hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>123 Main Street, Kurnool, Andhra Pradesh 518002</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>info@venkateswarahostel.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Venkateswara Boys Hostel. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a href="#" className="text-muted hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-muted hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
