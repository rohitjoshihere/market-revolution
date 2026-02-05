import { useState } from 'react';
import { X, Mail, User, Phone, Send, CheckCircle } from 'lucide-react';
import { saveInquiry } from '@/data/reportService';
import { Inquiry } from '@/data/reports';

interface InquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    reportId: string;
    reportName: string;
}

const InquiryModal = ({ isOpen, onClose, reportId, reportName }: InquiryModalProps) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newInquiry: Partial<Inquiry> = {
            reportId,
            reportName,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: 'numeric' }),
            status: 'new'
        };

        try {
            await saveInquiry(newInquiry);
            setIsSubmitted(true);

            // Reset form and close after delay
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({ name: '', email: '', phone: '' });
                onClose();
            }, 3000);
        } catch (error) {
            alert('Failed to submit inquiry. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
                {/* Header */}
                <div className="relative h-32 bg-[#283F3B] flex items-center justify-center text-center p-6">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Request Free Sample</h3>
                        <p className="text-xs text-white/60 line-clamp-1">{reportName}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8">
                    {isSubmitted ? (
                        <div className="text-center py-8 animate-in slide-in-from-bottom-4 duration-500">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                            <p className="text-gray-500 text-sm">Our analyst will send the sample to your email shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Business Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all text-sm"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transform active:scale-[0.98] transition-all flex items-center justify-center mt-4"
                            >
                                <Send className="w-4 h-4 mr-2" />
                                Send Request
                            </button>
                            <p className="text-[10px] text-gray-400 text-center leading-relaxed italic">
                                * Your data is protected by our privacy policy. Sample will be delivered within 24 business hours.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InquiryModal;
