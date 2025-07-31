import { GithubAnimatedIcon } from './ui/github-animated-icon'
import { LinkedinAnimatedIcon } from './ui/linkedin-animated-icon'

export function Footer() {
   return (
      <footer className="px-0 py-6 w-full bg-neutral-dark">
         <div className="main-container mx-auto flex flex-row gap-10 w-full justify-between">
            <div className="text-start text-neutral text-xs md:text-base">
               <p>&copy; {new Date().getFullYear()} Miguel Gonçalves. All rights reserved.</p>
            </div>
            <div className="flex flex-row gap-5">
               <GithubAnimatedIcon className="p-0" />
               <LinkedinAnimatedIcon className="p-0" />
            </div>
         </div>
      </footer>
   )
}
