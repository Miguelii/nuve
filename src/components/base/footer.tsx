import Link from 'next/link'
import { GithubAnimatedIcon } from '../ui/github-animated-icon'
import { LinkedinAnimatedIcon } from '../ui/linkedin-animated-icon'
import { cn } from '@/utils/cn'

type FooterProps = {
   className?: string
}
export function Footer({ className }: FooterProps) {
   return (
      <footer className={cn('px-0 py-6 w-full bg-neutral-dark', className)}>
         <div className="main-container mx-auto flex flex-row gap-10 w-full justify-between items-center">
            <FooterLinks />
            <FooterSocials />
         </div>
         <div className="w-full flex justify-center mt-6">
            <FooterCopy />
         </div>
      </footer>
   )
}

function FooterLinks() {
   return (
      <Link
         href={'/legal-notice'}
         prefetch={false}
         aria-label="Go to legal notice page"
         title="Go to legal notice page"
         className="text-primary text-base underline leading-snug underline-offset-[3px] hover:text-neutral"
      >
         Legal Notice
      </Link>
   )
}

function FooterCopy() {
   return (
      <div className="text-start text-neutral text-xs md:text-base">
         <p>&copy; {new Date().getFullYear()} Miguel Gonçalves. All rights reserved.</p>
      </div>
   )
}

function FooterSocials() {
   return (
      <div className="flex flex-row gap-5">
         <Link
            href={'https://github.com/Miguelii'}
            prefetch={false}
            target="_blank"
            aria-label={'Go to Miguel Gonçalves Github'}
         >
            <GithubAnimatedIcon className="p-0" />
         </Link>
         <Link
            href={'https://www.linkedin.com/in/miguelgoncalves18/'}
            prefetch={false}
            target="_blank"
            aria-label={'Go to Miguel Gonçalves Linkedin'}
         >
            <LinkedinAnimatedIcon className="p-0" />
         </Link>
      </div>
   )
}
