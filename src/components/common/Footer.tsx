import Link from 'next/link';

const PaintIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.477-1.122-.297-.287-.703-.465-1.17-.465-1.11 0-2.015-.88-2.015-1.98 0-1.1 1.005-1.98 2.015-1.98.63 0 1.194.512 1.194 1.144 0 .63-.516 1.144-1.194 1.144a1.14 1.14 0 0 1-1.14-1.14c0-1.626 1.7-2.95 3.3-2.95 1.8 0 3.3 1.5 3.3 3.3 0 .73-.25 1.41-.67 1.94-.42.53-1 1-1.63 1.34-1.26.68-2.66 1.03-4.1 1.03-4.97 0-9-4.03-9-9s4.03-9 9-9"/>
    </svg>
  );

const TwitterIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9-3.3 1.1-6.7 1.1-6.7 1.1s-1.1 1.4-2.2 2.1c-1.1.7-2.3.9-3.4 1-1.1.1-2.3 0-3.4-.4-1.1-.4-2.1-1.1-2.9-1.9-1.6-1.6-2.5-3.7-2.5-3.7s.7.4 1.4.4c.7 0 1.4-.2 1.4-.2-1.1-.2-2.3-1.1-2.3-2.6s.4-2.6 1.4-2.9c.7.2 1.4.4 1.4.4s-1.1-1.4-1.1-2.9c0-1.2.7-2.3 1.4-2.9.7-.6 1.6-.9 2.5-.9.9 0 1.9.2 2.9.7.9.5 1.9 1.4 2.6 2.3.7.9 1.4 1.9 1.9 2.9.5 1 .9 2.1.9 3.2 0 .5 0 1-.2 1.5-.2.5-.4 1-.6 1.5h.2c.4 0 .9-.2 1.4-.4.5-.2 1-.4 1.5-.7s1-.7 1.5-1.1c.5-.4 1-.9 1.5-1.4.5-.5 1-1 1.5-1.5z"/></svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)

const FacebookIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
)

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <PaintIcon className="h-7 w-7 text-primary" />
            <span className="ml-2 text-xl font-headline font-bold">Artistly</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Artistly, Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <FacebookIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
