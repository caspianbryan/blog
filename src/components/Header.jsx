'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  {
    href: '/',
    label: 'Home'
  },
  {
    href: '/posts',
    label: 'Posts'
  },
  {
    href: '/create-post',
    label: 'create Post'
  }
]

const Header = () => {
  const pathname = usePathname()


  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href='/'>
        <Image
          src='/bookmark.png'
          width={50}
          height={50}
          alt="logo"
          className="w-[35px] h-[35px]"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">{navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                `${pathname === link.href ? 'text-zinc-900' : 'text-zinc-400'}`
              }
            >
              {link.label}
            </Link>
          </li>
        ))}</ul>
      </nav>
    </header>
  )
}

export default Header