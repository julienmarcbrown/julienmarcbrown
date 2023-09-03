import {CalendarIcon} from "@heroicons/react/solid";
import {MailIcon} from "@heroicons/react/solid";

import Link from "next/link";

CalendarIcon
export default function Contact() {
  return (
    <div className="p-24">
        <h2 className="font-semibold text-3xl text-center md:py-16" id="contact">Contact</h2>
            <div className="w-8/12 text-center">
                <div className="flex text-center font-semibold text-lg space-x-12">
                    <p className="text-3xl">Let's chat</p>
                    <Link href="https://calendly.com/julienmarcbrown"><CalendarIcon className="h-6 w-6"/>Meet</Link>
                    <Link href="mailto:hire@julienmarcbrown.com"><MailIcon className="h-6 w-6"/>Email</Link>
                </div>
            </div>
    </div>
  )
}
