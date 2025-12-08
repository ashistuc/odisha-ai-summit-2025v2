import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        organization: '',
        designation: ''
    });
    const [isSuccess, setIsSuccess] = useState(false);

    // Reset state when modal opens/closes
    useEffect(() => {
        if (isOpen) {
            setIsSuccess(false);
            setFormData({
                name: '',
                mobile: '',
                email: '',
                organization: '',
                designation: ''
            });
        }
    }, [isOpen]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a backend
        console.log('Form submitted:', formData);

        // Simulate success
        setIsSuccess(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const inputClasses = "w-full bg-white/50 border border-orange-200 rounded-lg px-4 py-3 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neon-orange/50 focus:border-neon-orange transition-all";
    const labelClasses = "block text-sm font-semibold text-gray-700 mb-1.5";

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-white/95 backdrop-blur-xl w-full max-w-md rounded-2xl shadow-[0_0_50px_rgba(255,107,53,0.2)] border border-orange-100 overflow-hidden pointer-events-auto"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-orange-100 flex justify-between items-center bg-gradient-to-r from-orange-50 to-white">
                                <h3 className="text-xl font-display font-bold text-gray-800">
                                    {isSuccess ? 'Registration Successful' : 'Visitor Registration'}
                                </h3>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-orange-100 rounded-full transition-colors text-gray-500 hover:text-orange-600"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8"
                                    >
                                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h4>
                                        <p className="text-gray-600 mb-6">
                                            Your details have been successfully registered. We look forward to seeing you at the summit.
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={onClose}
                                            className="w-full border-green-200 text-green-700 hover:bg-green-50"
                                        >
                                            Close
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className={labelClasses}>Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="mobile" className={labelClasses}>Mobile Number</label>
                                            <input
                                                required
                                                type="tel"
                                                id="mobile"
                                                name="mobile"
                                                value={formData.mobile}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="Enter your mobile number"
                                                pattern="[0-9]{10}"
                                                title="Please enter a valid 10-digit mobile number"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className={labelClasses}>Email ID</label>
                                            <input
                                                required
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="Enter your email address"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="organization" className={labelClasses}>Organization Name</label>
                                            <input
                                                required
                                                type="text"
                                                id="organization"
                                                name="organization"
                                                value={formData.organization}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="Enter your organization"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="designation" className={labelClasses}>Designation</label>
                                            <input
                                                required
                                                type="text"
                                                id="designation"
                                                name="designation"
                                                value={formData.designation}
                                                onChange={handleChange}
                                                className={inputClasses}
                                                placeholder="Enter your designation"
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <Button variant="glow" type="submit" className="w-full text-base py-3">
                                                Save Registration
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};
