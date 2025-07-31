import Link from 'next/link'
import { GithubAnimatedIcon } from './ui/github-animated-icon'
import { LinkedinAnimatedIcon } from './ui/linkedin-animated-icon'

export function Footer() {
   return (
      <footer className="px-0 py-6 w-full bg-neutral-dark">
         <div className="main-container mx-auto flex flex-row gap-10 w-full justify-between items-center">
            <div className="text-start text-neutral text-xs md:text-base">
               <p>&copy; {new Date().getFullYear()} Miguel Gonçalves. All rights reserved.</p>
            </div>
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
         </div>
      </footer>
   )
}
