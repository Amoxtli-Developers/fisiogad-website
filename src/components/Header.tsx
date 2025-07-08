"use client"

import { useState, useEffect } from 'react'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import * as Dialog from '@radix-ui/react-dialog'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.svg'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Testimonios', href: '#testimonials' },
    { name: 'Contacto', href: '#contact' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background shadow-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
            <Image 
              src={logo} 
              alt="Fisiogad Logo" 
              width={60} 
              height={60} 
              className={`transition-all duration-300 ${isScrolled ? 'h-12 w-auto' : 'h-16 w-auto'}`}
            />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu.Root className="hidden md:block">
          <NavigationMenu.List className="flex items-center space-x-8">
            {navItems.map((item) => (
              <NavigationMenu.Item key={item.name}>
                <NavigationMenu.Link
                  href={item.href}
                  className="text-text hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:block">
          <Link 
            href="https://wa.link/ma7xty"
            className="btn-primary"
          >
            Reservar Ahora
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <Dialog.Trigger asChild>
            <button 
              className="p-2 md:hidden text-text"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </Dialog.Trigger>
          
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/40" />
            <Dialog.Content className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-background shadow-xl p-6 focus:outline-none">
              <div className="flex items-center justify-between mb-8">
                <span className="text-2xl font-bold font-display text-primary flex items-center">
                  <Image 
                    src={logo} 
                    alt="Fisiogad Logo" 
                    width={80} 
                    height={80} 
                    className="h-12 w-auto mr-2"
                  />
                  Fisiogad
                </span>
                <Dialog.Close asChild>
                  <button className="p-2" aria-label="Close menu">
                    <X size={24} />
                  </button>
                </Dialog.Close>
              </div>
              
              <nav className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-text hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link 
                  href="https://wa.link/ma7xty"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary mt-4 w-full text-center"
                >
                  Reservar Ahora
                </Link>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  )
}

export default Header