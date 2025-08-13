'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavItem = { label: string; href: string }

const mainLinks: NavItem[] = [
  { label: 'Главная', href: '/' },
  { label: 'Контакты', href: '/contacts' },
  { label: 'О нас', href: '/about' },
  { label: 'правила', href: '/rules' },
]

const infoLinks: NavItem[] = [
  { label: 'Размещение', href: '/placement' },
  { label: 'FAQ', href: '/faqs' },
  { label: 'Карта сайта', href: '/sitemap' },
  { label: 'Файлы Cookie', href: '/cookies' },
  { label: 'Пользовательское соглашение', href: '/terms' },
  { label: 'Политика конфиденциальности', href: '/privacy' },
]

const Footer = () => {
  const pathname = usePathname()

  const linkClass = (href: string) => {
    const isActive = pathname === href
    return [
      'transition-colors text-[#B4B8C3] leading-5',
      isActive ? 'text-brand-btn' : 'hover:text-gray-300',
    ].join(' ')
  }

  return (
    <footer className="bg-brand-main dark:bg-brand-main-dark py-14 ">
      <div className='max-w-[1364px] mx-auto flex flex-col md:flex-row items-start justify-between gap-5 px-4 xl:px-2'>
        {/* left */}
        <div className='flex items-start gap-12 lg:gap-[74px]'>
          <div>
            <h3 className="text-lg text-white font-bold uppercase mb-4">ОСНОВНОЕ</h3>
            <ul className="space-y-2">
              {mainLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass(href)} aria-current={pathname === href ? 'page' : undefined}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - ИНФОРМАЦИЯ */}
          <div>
            <h3 className="text-lg text-white font-bold uppercase mb-4">ИНФОРМАЦИЯ</h3>
            <ul className="space-y-2">
              {infoLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className={linkClass(href)} aria-current={pathname === href ? 'page' : undefined}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* right */}
        <div className='flex flex-col items-end'>
          <div className='text-white text-3xl font-extrabold uppercase mb-1'>
            <span>l2pick.</span>
            <span className='text-brand-btn'>com</span>
          </div>
          <h2 className='text-[17px] leading-7 text-white font-bold'>Анонсы серверов Lineage 2</h2>

          <div className='mt-18'>
            <div className='flex text-center gap-5'>
              <Link className='flex items-center justify-center size-9 rounded-lg bg-brand-btn-gray hover:bg-brand-btn' href={'#'}>
                <svg width={17} height={12} viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect x="-0.00012207" width={17} height={12} fill="url(#pattern0_17_605)" />
                  <defs>
                    <pattern id="pattern0_17_605" patternContentUnits="objectBoundingBox" width={1} height={1}>
                      <use xlinkHref="#image0_17_605" transform="scale(0.0588235 0.0833333)" />
                    </pattern>
                    <image id="image0_17_605" width={17} height={12} preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAMCAMAAACz+6aNAAAAAXNSR0IB2cksfwAAAJlQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////SLD2LwAAADN0Uk5TAD+aus3Y5Ovt5dnOvaBLQv9WrsPK8NzXe+He3x6O/uZm/NpJ47a1y1tzccnd9ffx58yAu2uJfQAAAIBJREFUeJxVj9EKgkAQReeYImEghKCVD5Eg0v9/R38RlIFCoZiJurvty87LGc7AnRkEW4tn8CZGnIL97JoNyaQZMFoTEkSGz2z4my3HXjO6S65SVRdz6qyRM60xl0ab7lcMZiQJ/k7zm79s8khZu9tTqodrDsgVPn2mLldv1Cm3FV8XHR1hNyKXAAAAAElFTkSuQmCC" />
                  </defs>
                </svg>
              </Link>
              <Link className='flex items-center justify-center size-9 rounded-lg bg-brand-btn-gray hover:bg-brand-btn' href={'#'}>
                <svg width={19} height={14} viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect x="-0.00012207" width={19} height={14} fill="url(#pattern0_17_604)" />
                  <defs>
                    <pattern id="pattern0_17_604" patternContentUnits="objectBoundingBox" width={1} height={1}>
                      <use xlinkHref="#image0_17_604" transform="scale(0.0526316 0.0714286)" />
                    </pattern>
                    <image id="image0_17_604" width={19} height={14} preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAOCAMAAAD6xte7AAAAAXNSR0IB2cksfwAAAOdQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////2zCQUAAAAE10Uk5TAAR3kF4YLjcvGnKmfwdK5rut3v/arsv1WP78CGB8zuUKHVKxNqeht2iU6/qsyu7j3/ToixKAepHz8PHbe7/M9u0RUX2PhRmDHnXXb9Zu3kKyAAAAwklEQVR4nF2Py0vCcRDEP4NPREwQkdBCtMQnkjf11i36gzt2VbyIj4Mhgo98EZGIqEHi96dI6lx2Z2aZ3RWgcywNB9+h52ROLS3g/OUE1xb3p4isuYBnKO5Xl5q3r+iSK/gUW5jil75N8M72ZUhQqTnYZ5CeefuQmcKtcmMINyA/uqvD08C6qGBcolIP4jtb15BHBSDx8b8gZGJU6pDU5OeopLfuNlk5yk148FhfvT9r0yJxY357UTVWO869Vop/b+wBlpMtajhKS98AAAAASUVORK5CYII=" />
                  </defs>
                </svg>
              </Link>
              <Link className='flex items-center justify-center size-9 rounded-lg bg-brand-btn-gray hover:bg-brand-btn' href={'#'}>
                <svg width={18} height={15} viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect x="-0.00012207" width={18} height={15} fill="url(#pattern0_17_603)" />
                  <defs>
                    <pattern id="pattern0_17_603" patternContentUnits="objectBoundingBox" width={1} height={1}>
                      <use xlinkHref="#image0_17_603" transform="scale(0.0555556 0.0666667)" />
                    </pattern>
                    <image id="image0_17_603" width={18} height={15} preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAPCAMAAADeWG8gAAAAAXNSR0IB2cksfwAAAPxQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8isEYwAAAFR0Uk5TAB1ty8MISaf1/+MqgNfW/q8RW7f40bJ6OZT6J7xFbsbFMCXzGpb57XA6680B97FT9p0maMyNbP1nMZV/NgSoK/DoD3uHvi/dH4rHxDjOVRMNmNobEoVHMwAAAMhJREFUeJxjZEABjCCAxGcF85GEuBkZ/wBFf7FDhQSB8l8ZeP6yfGbgAwtJMH78DxT+xM/4loFBBKhXlvEVSFyckfHNbwYGKUZGVcbHIAE5xhuajPeBDCVGRjlGvjsMbPJf7ukz3gTJaZwHmmUENPo0gxnjJbBF+ifAxlsyHrM+B7GaTfcIWMgWqO4kRMiCcR/EXc6Mz+7LPQKxbHYzQITcGA+Ja7z7BTTfYTtUSEeO8dh7Bh/GPQyum6BCDP7bgK5kCACauZYBAGiZLLLuMWFgAAAAAElFTkSuQmCC" />
                  </defs>
                </svg>
              </Link>
              <Link className='flex items-center justify-center size-9 rounded-lg bg-brand-btn-gray hover:bg-brand-btn' href={'#'}>
                <svg width={15} height={18} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <rect x="-0.00012207" width={15} height={18} fill="url(#pattern0_17_606)" />
                  <defs>
                    <pattern id="pattern0_17_606" patternContentUnits="objectBoundingBox" width={1} height={1}>
                      <use xlinkHref="#image0_17_606" transform="scale(0.0666667 0.0555556)" />
                    </pattern>
                    <image id="image0_17_606" width={15} height={18} preserveAspectRatio="none" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAMAAACzQHQ9AAAAAXNSR0IB2cksfwAAAEVQTFRF////////////////////////////////////////////////////////////////////////////////////////////kBY+3AAAABd0Uk5TAE3/PjtLl0ahi8CpgZCstOXh6rA3Q2unUakOAAAAbklEQVR4nI3P3QqCQBCG4XdWS1qUIsH7v77SA4XFhWirHXXbgyA/5mCek/kREOEboXiRuwwQNhnE8NOGoLXX/+ZpDs8yd/U4evWnna2Hk2O1FQf1xOaYZoz3XybFWWRY/tM11z79G93eyd3d0pA3m2QfK851Xf4AAAAASUVORK5CYII=" />
                  </defs>
                </svg>
              </Link>
            </div>
            <p className='mt-5 text-[15px] text-right text-[#575b66]'>© 2012-2025 L2pick.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer