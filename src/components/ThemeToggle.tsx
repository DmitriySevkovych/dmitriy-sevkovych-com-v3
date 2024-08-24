'use client'

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'

interface ThemeToggleProps extends React.HTMLProps<HTMLButtonElement> {}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
    const { setTheme, theme } = useTheme()

    const _toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    return (
        <Button
            className={className}
            variant="outline"
            size="icon"
            onClick={_toggleTheme}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
