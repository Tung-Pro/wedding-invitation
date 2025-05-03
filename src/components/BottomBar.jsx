// src/components/bottom-bar/BottomBar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  CalendarHeart,
  MapPin,
  Gift,
  MessageCircleHeart
} from 'lucide-react';
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: 'Trang chủ', href: '#home' },
  { icon: CalendarHeart, label: 'Sự kiện', href: '#event' },
  { icon: MapPin, label: 'Địa điểm', href: '#location' },
  { icon: Gift, label: 'Quà cưới', href: '#gifts' },
  { icon: MessageCircleHeart, label: 'Lời chúc', href: '#wishes' },
];

/**
 * BottomBar is a React functional component that renders a fixed bottom navigation bar.
 *
 * This component uses Framer Motion to animate its entrance, providing smooth transitions
 * for opacity and vertical movement. It displays a navigational menu with items that change
 * appearance based on the active state. The component maps through a list of menu items, each
 * containing an icon and a label, and applies interactive animations such as hover and tap
 * effects. The active menu item is highlighted by updating text color and background styles.
 *
 * @component
 * @example
 * // Basic usage:
 * <BottomBar />
 *
 * @returns {JSX.Element} A JSX element containing the animated bottom navigation bar.
 */
const BottomBar = () => {
  const [active, setActive] = React.useState('home');

  return (
    <motion.div
      className="fixed bottom-4 transform -translate-x-1/2 z-50 w-full px-4 max-w-[430px]"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="backdrop-blur-md bg-white/90 border border-gray-200/80 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.07)] px-4 py-2">
        <nav className="flex justify-between items-center">
          {menuItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 rounded-xl transition-all duration-200",
                "hover:bg-gray-50/80",
                active === item.label.toLowerCase()
                  ? "text-primary bg-primary/5"
                  : "text-gray-600"
              )}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(item.label.toLowerCase())}
            >
              <item.icon
                className={cn(
                  "h-[18px] w-[18px] sm:h-5 sm:w-5 mb-0.5 sm:mb-1 transition-colors duration-200",
                  active === item.label.toLowerCase()
                    ? "stroke-rose-500"
                    : "stroke-gray-600"
                )}
              />
              <span className={cn(
                "text-[10px] sm:text-xs font-medium transition-all duration-200 line-clamp-1",
                active === item.label.toLowerCase()
                  ? "scale-105 text-rose-500"
                  : "scale-100"
              )}>
                {item.label}
              </span>
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default BottomBar;