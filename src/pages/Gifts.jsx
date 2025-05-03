import config from '@/config/config';
import { motion } from 'framer-motion'
import {
    Copy,
    Gift,
    CheckCircle,
    Wallet,
    Building2,
} from 'lucide-react'
import { useState, useEffect } from 'react';

export default function Gifts() {
    const [copiedAccount, setCopiedAccount] = useState(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    
    // Set animation to run once on component mount
    useEffect(() => {
        setHasAnimated(true);
    }, []);
    
    const copyToClipboard = (text, bank) => {
        navigator.clipboard.writeText(text);
        setCopiedAccount(bank);
        setTimeout(() => setCopiedAccount(null), 2000);
    };
    
    return (<>
        <section id="gifts" className="min-h-screen relative overflow-hidden">
            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-4 mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="inline-block text-rose-500 font-medium"
                    >
                        Quà Cưới
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-serif text-gray-800"
                    >
                        Gửi Quà Cưới
                    </motion.h2>

                    {/* Nội dung ý nghĩa cho người Việt Nam */}
                    <div className="space-y-4 max-w-md mx-auto text-gray-700 text-base leading-relaxed">
                        <p>
                            Chúng tôi rất biết ơn nếu nhận được sự chúc phúc và đóng góp của bạn cho ngày trọng đại này.<br/>
                            Mọi tấm lòng của bạn là niềm vui và động lực lớn cho vợ chồng chúng tôi trên hành trình mới.
                        </p>
                    </div>

                    {/* Decorative Divider */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={hasAnimated ? { scale: 1 } : {}}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-4 pt-4"
                    >
                        <div className="h-[1px] w-12 bg-rose-200" />
                        <Gift className="w-5 h-5 text-rose-400" />
                        <div className="h-[1px] w-12 bg-rose-200" />
                    </motion.div>
                </motion.div>

                {/* Bank Accounts Grid */}
                <div className="max-w-2xl mx-auto grid gap-6">
                    {config.data.banks.map((account, index) => (
                        <motion.div
                            key={account.accountNumber}
                            initial={{ opacity: 0, y: 20 }}
                            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2 * index + 0.7 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-2xl transform transition-transform group-hover:scale-105 duration-300" />
                            <div className="relative backdrop-blur-sm bg-white/80 p-6 rounded-2xl border border-rose-100/50 shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-lg bg-white p-2 shadow-sm">
                                            <Building2 className="w-full h-full text-rose-500" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-gray-800">{account.bank}</h3>
                                            <p className="text-sm text-gray-500">{account.accountName}</p>
                                        </div>
                                    </div>
                                    <Wallet className="w-5 h-5 text-rose-400" />
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center justify-between bg-gray-50/80 px-4 py-3 rounded-lg">
                                        <p className="font-mono text-gray-700">{account.accountNumber}</p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => copyToClipboard(account.accountNumber, account.bank)}
                                            className="flex items-center space-x-1 text-rose-500 hover:text-rose-600"
                                        >
                                            {copiedAccount === account.bank ? (
                                                <CheckCircle className="w-4 h-4" />
                                            ) : (
                                                <Copy className="w-4 h-4" />
                                            )}
                                            <span className="text-sm">
                                                {copiedAccount === account.bank ? 'Đã Sao Chép!' : 'Sao Chép'}
                                            </span>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    </>)
}