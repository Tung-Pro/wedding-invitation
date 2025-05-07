import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti';
import Marquee from "@/components/ui/marquee";
import {
    Calendar,
    Clock,
    ChevronDown,
    User,
    MessageCircle,
    Send,
    Smile,
    CheckCircle,
    XCircle,
    HelpCircle,
} from 'lucide-react'
import { useState } from 'react';
import { formatEventDate } from '@/lib/formatEventDate';

export default function Wishes() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [newWish, setNewWish] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [attendance, setAttendance] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        { value: 'ATTENDING', label: 'Vâng, tôi sẽ tham dự' },
        { value: 'NOT_ATTENDING', label: 'Xin lỗi, tôi không thể tham dự' },
        { value: 'MAYBE', label: 'Có thể, tôi sẽ xác nhận sau' }
    ];
    // Example wishes - replace with your actual data
    const [wishes, setWishes] = useState([
        {
            "id": 1,
            "name": "Nguyễn Văn Tùng",
            "message": "Anh trai à, chúc anh và chị dâu trăm năm hạnh phúc, luôn yêu thương và đồng hành cùng nhau! 🎉",
            "timestamp": "2025-05-01T10:00:00Z",
            "attending": "attending"
        },
        {
            "id": 2,
            "name": "Nguyễn Phi Long",
            "message": "Chúc anh chị một hành trình hôn nhân ngập tràn niềm vui, mãi mãi bền vững và hạnh phúc!❤️",
            "timestamp": "2025-05-01T11:00:00Z",
            "attending": "attending"
        },
        {
            "id": 3,
            "name": "Nguyễn Thành Nam",
            "message": "Ông bạn thân, chúc mày và cô dâu một đời viên mãn, luôn cười tươi và hạnh phúc nhé! 🎈",
            "timestamp": "2025-05-01T12:00:00Z",
            "attending": "attending"
        },
        {
            "id": 4,
            "name": "Nguyễn Thái Sơn",
            "message": "Chúc a/c 100 năm hạnh phúc 8386 phát lộc phát tài😁",
            "timestamp": "2025-05-01T13:00:00Z",
            "attending": "attending"
        },
        {
            "id": 5,
            "name": "Hoàng Trọng Vinh",
            "message": "Chúc anh chị một cuộc sống hôn nhân ngọt ngào, mãi mãi bên nhau và hạnh phúc ngập tràn! 🌸",
            "timestamp": "2025-05-01T13:00:00Z",
            "attending": "attending"
        },
        {
            "id": 6,
            "name": "Nguyễn Văn Hiến",
            "message": "Con trai bố, chúc con và con dâu luôn yêu thương, tôn trọng nhau và xây dựng gia đình hạnh phúc! 🙏",
            "timestamp": "2025-05-01T14:00:00Z",
            "attending": "attending"
        },
        {
            "id": 7,
            "name": "Nguyễn Thị Huệ",
            "message": "Con trai mẹ, chúc hai con một đời an yên, hạnh phúc và luôn trân trọng nhau! 💖",
            "timestamp": "2025-05-01T15:00:00Z",
            "attending": "attending"
        },
        {
            "id": 8,
            "name": "Hoàng Trọng Công",
            "message": "Chúc hai anh chị một cuộc hôn nhân tràn đầy yêu thương, niềm vui và mãi mãi bền vững! 🎊",
            "timestamp": "2025-05-01T16:00:00Z",
            "attending": "attending"
        }
    ]);

    const handleSubmitWish = async (e) => {
        e.preventDefault();
        if (!newWish.trim()) return;

        setIsSubmitting(true);
        // Simulating API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newWishObj = {
            id: wishes.length + 1,
            name: "Guest", // Replace with actual user name
            message: newWish,
            attend: "attending",
            timestamp: new Date().toISOString()
        };

        setWishes(prev => [newWishObj, ...prev]);
        setNewWish('');
        setIsSubmitting(false);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
    };
    const getAttendanceIcon = (status) => {
        switch (status) {
            case 'attending':
                return <CheckCircle className="w-4 h-4 text-emerald-500" />;
            case 'not-attending':
                return <XCircle className="w-4 h-4 text-rose-500" />;
            case 'maybe':
                return <HelpCircle className="w-4 h-4 text-amber-500" />;
            default:
                return null;
        }
    };
    return (<>
        <section id="wishes" className="min-h-screen relative overflow-hidden">
            {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}
            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center space-y-4 mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block text-rose-500 font-medium"
                    >
                        Gửi Lời Chúc và Lời Cầu Nguyện
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-5xl font-serif text-gray-800"
                    >
                        Lời Chúc và Cầu Nguyện
                    </motion.h2>

                    {/* Decorative Divider */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-4 pt-4"
                    >
                        <div className="h-[1px] w-12 bg-rose-200" />
                        <MessageCircle className="w-5 h-5 text-rose-400" />
                        <div className="h-[1px] w-12 bg-rose-200" />
                    </motion.div>
                </motion.div>

                {/* Wishes List */}
                <div className="max-w-2xl mx-auto space-y-6">
                    <AnimatePresence>
                        <Marquee speed={20}
                            gradient={false}
                            className="[--duration:20s] py-2">
                            {wishes.map((wish, index) => (
                                <motion.div
                                    key={wish.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative w-[280px]"
                                >
                                    {/* Background gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-rose-100/50 to-pink-100/50 rounded-xl transform transition-transform group-hover:scale-[1.02] duration-300" />

                                    {/* Card content */}
                                    <div className="relative backdrop-blur-sm bg-white/80 p-4 rounded-xl border border-rose-100/50 shadow-md">
                                        {/* Header */}
                                        <div className="flex items-start space-x-3 mb-2">
                                            {/* Avatar */}
                                            <div className="flex-shrink-0">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
                                                    {wish.name[0].toUpperCase()}
                                                </div>
                                            </div>

                                            {/* Name, Time, and Attendance */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center space-x-2">
                                                    <h4 className="font-medium text-gray-800 text-sm truncate">
                                                        {wish.name}
                                                    </h4>
                                                    {getAttendanceIcon(wish.attending)}
                                                </div>
                                                <div className="flex items-center space-x-1 text-gray-500 text-xs">
                                                    <Clock className="w-3 h-3" />
                                                    <time className="truncate">
                                                        {formatEventDate(wish.timestamp)}
                                                    </time>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <p className="text-gray-600 text-sm leading-relaxed mb-2 line-clamp-3">
                                            {wish.message}
                                        </p>

                                        {/* Optional: Time indicator for recent messages */}
                                        {Date.now() - new Date(wish.timestamp).getTime() < 3600000 && (
                                            <div className="absolute top-2 right-2">
                                                <span className="px-2 py-1 rounded-full bg-rose-100 text-rose-600 text-xs font-medium">
                                                    Mới
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </Marquee>
                    </AnimatePresence>
                </div>
                {/* Wishes Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="max-w-2xl mx-auto mt-12"
                >
                    <div className="flex justify-center">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdd3EzdWehiIYFymaQdhaLvw13EYgv-Bmn0h2KNCxXmzl8PLQ/viewform?embedded=true"
                            width="100%"
                            height="1100px"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            title="Thiệp cưới"
                            style={{ borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)', maxWidth: 640 }}
                        >
                            Đang tải…
                        </iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    </>)
}
