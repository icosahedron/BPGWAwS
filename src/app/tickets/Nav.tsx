"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const activeProps = { className: "contrast" };
const inactiveProps = { className: "secondary outline" };

// uysing pico.css
export default function Nav() {
     const pathName = usePathname();

     return (
          <nav>
               <ul>
                    <li><Link 
                         role="button" 
                         href="/tickets"
                         {... (pathName == "/tickets" ? activeProps : inactiveProps)}>
                              Ticket List
                    </Link></li>
                    <li><Link 
                         role="button" 
                         href="/tickets/new"
                         {... (pathName == "/tickets/new" ? activeProps : inactiveProps)}>
                         Create new Ticket
                    </Link></li>
                    <li><Link 
                         role="button" 
                         href="/tickets/users"
                         {... (pathName == "/tickets/users" ? activeProps : inactiveProps)}>
                              User List
                    </Link></li>
               </ul>
               <ul>
                    <li><Link role="button" href="/logout" className="secondary">Logout</Link></li>
               </ul>
          </nav>
     );
}
