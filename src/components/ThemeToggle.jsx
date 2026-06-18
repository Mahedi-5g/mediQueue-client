"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (

        <button
            onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
            }
        >
            {theme === "dark" ? <FaSun size={22} /> : <FaMoon size={22} />}
        </button>
    );
};

