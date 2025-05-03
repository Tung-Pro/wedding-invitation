import config from "@/config/config";
import { Clock, Navigation as NavigationIcon, MapPin, CalendarCheck, Phone, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion';
import { formatEventDate } from "@/lib/formatEventDate";

export default function Location() {
    return (<>
        {/* Location section */}
        <section id="location" className="min-h-screen relative overflow-hidden">
            <div className="container mx-auto px-4 py-20 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4 mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="inline-block text-rose-500 font-medium"
                    >
                        Địa Điểm Tổ Chức
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif text-gray-800"
                    >
                        Địa Điểm
                    </motion.h2>

                    {/* Decorative Divider */}
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 pt-4"
                    >
                        <div className="h-[1px] w-12 bg-rose-200" />
                        <MapPin className="w-5 h-5 text-rose-400" />
                        <div className="h-[1px] w-12 bg-rose-200" />
                    </motion.div>
                </motion.div>

                {/* Location Content */}
                <div className="max-w-6xl mx-auto grid md:grid-row-2 gap-8 items-center">
                    {/* Map Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border-8 border-white"
                    >
                        <iframe
                            src={config.data.maps_embed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </motion.div>

                    {/* Venue Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                            <h3 className="text-2xl font-serif text-gray-800 mb-6">{config.data.location}</h3>

                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-5 h-5 text-rose-500 mt-1" />
                                    <p className="text-gray-600 flex-1">{config.data.address}</p>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <CalendarCheck className="w-5 h-5 text-rose-500" />
                                    <p className="text-gray-600">{formatEventDate(config.data.date)}</p>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <Clock className="w-5 h-5 text-rose-500" />
                                    <p className="text-gray-600">{config.data.time}</p>
                                </div>

                                {/* Action Button - Full Width */}
                                <div className="pt-4">
                                    <motion.a
                                        href={config.data.maps_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        viewport={{ once: true }}
                                        className="w-full flex items-center justify-center gap-1.5 bg-white text-gray-600 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-sm"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        <span className="font-semibold">Xem Bản Đồ</span>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    </>)
}