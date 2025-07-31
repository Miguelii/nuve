export function Footer() {
   return (
      <footer className="px-4 py-6 w-full bg-neutral-dark justify-center flex">
         <div className="main-container mx-auto text-center text-neutral text-xs md:text-base">
            <p>&copy; {new Date().getFullYear()} Miguel Gonçalves. All rights reserved.</p>
         </div>
      </footer>
   )
}
