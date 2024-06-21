import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from '@inertiajs/react'
import { useState } from 'react'
import heroDesktop from '~/assets/images/Desktop.png'
import hero from '~/assets/images/Mobile.png'
import heroTablet from '~/assets/images/Tablette.png'
import logo from '~/assets/images/logo.png'
import { Button } from '~/lib/components/ui/button'
import AnimationWorld from '../animation/animation_world'

const navigation = [
  { category: 'elevages', href: '/elevages', content: 'Notre élévage' },
  { category: 'presentation', href: '#presentation', content: 'Présentation' },
  { category: 'actualites', href: '/actualites', content: 'Nos Actualités' },
  { category: 'contact', href: '/contact', content: 'Contact' },
]

export default function Header(props: { activate?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 fixed top-0 w-full bg-[#333333]/90 z-[4] "
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Du Royaume D'Odelia</span>
              <img width={140} height={94} src={logo} alt="Logo du Royaume D'odelia" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              <Bars3Icon className="size-12" color="white" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.category}
                href={item.href}
                className="text-xl font-semibold leading-6 text-white hover:text-[#AE9B90] transition-colors duration-300 ease-in-out"
              >
                {item.content}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="#"
              className="text-xl font-semibold leading-6 text-white hover:text-[#AE9B90] transition-colors duration-300 ease-in-out"
            >
              Se connecter <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#333333] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Du Royaume D'Odelia</span>
                <img width={140} height={94} src={logo} alt="Logo du Royaume D'odelia" />
              </Link>
              <Button
                type="button"
                variant="ghost"
                className="-m-2.5 p-2.5 text-gray-500 size-12 hover:bg-transparent"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fermer le menu</span>
                <XMarkIcon className="size-12" color="white" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/25">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.category}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-[#AE9B90] transition-colors duration-300 ease-in-out"
                    >
                      {item.content}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-[#AE9B90] transition-colors duration-300 ease-in-out"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div
        className={
          props.activate ? 'relative max-h-[700px] md:max-h-[520px] lg:max-h-[720px]' : 'hidden'
        }
      >
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={heroDesktop}
            type="image/png"
            className="h-[720px] block"
          />
          <source
            media="(max-width: 768px)"
            srcSet={heroTablet}
            type="image/png"
            className="h-[520px] block"
          />
          <img
            className="absolute block inset-0 -z-10 h-[700px] w-full brightness-50"
            src={hero}
            alt="Photo de Palmiers"
          />
        </picture>

        <div className="absolute top-1/3 md:p-0 md:m-0 text-center md:pl-10 lg:left-1/2 lg:-translate-x-1/2">
          <AnimationWorld
            style="text-white leading-[1.5] mr-5 text-3xl xl:text-5xl text-balance racking-wider"
            text="Bienvenue dans notre élévage familial"
            elementHtml="h1"
          />
          <AnimationWorld
            text="dédié aux Chihuahuas!"
            style="text-white leading-[1.5] mr-5 text-xl md:text-3xl xl:text-5xl text-balance tracking-wider"
            elementHtml="h1"
          />
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button>Réserver le votre dès maintenant !</Button>
          </div>
        </div>
      </div>
    </>
  )
}
