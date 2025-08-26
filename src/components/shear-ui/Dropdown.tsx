import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import { FiChevronDown } from "react-icons/fi";

export interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
}

export const Dropdown = ({ title, items }: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (dropdownRef.current) {
      gsap.set(dropdownRef.current, { opacity: 0, y: -10, display: 'none' });
    }
  }, []);

  const handleMouseEnter = () => {
    if (dropdownRef.current) {
      gsap.to(dropdownRef.current, {
        opacity: 1,
        y: 0,
        display: 'block',
        duration: 0.2,
        ease: "power1.inOut",
      });
    }
  };

  const handleMouseLeave = () => {
    if (dropdownRef.current) {
      gsap.to(dropdownRef.current, {
        opacity: 0,
        y: -10,
        display: 'none',
        duration: 0.2,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center gap-1 font-medium text-gray-600 hover:text-gray-900 transition-colors">
        {title}
        <FiChevronDown />
      </button>

      <div
        ref={dropdownRef}
        className="absolute top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200/80 p-2"
      >
        {items.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};