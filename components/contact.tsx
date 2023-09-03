import {CalendarIcon} from "@heroicons/react/solid";
import {MailIcon} from "@heroicons/react/solid";

import Link from "next/link";

CalendarIcon
export default function Contact() {
  return (
    <div className="p-24">
        <h2 className="font-semibold text-3xl text-center p-6" id="about">Contact Me</h2>
            <div className="w-full mx-auto">
                <div className="flex text-center font-semibold text-lg space-x-12">
                    <Link href="https://calendly.com/julienmarcbrown"><CalendarIcon className="h-6 w-6"/>Meet</Link>
                    <Link href="mailto:hire@julienmarcbrown.com"><MailIcon className="h-6 w-6"/>Email</Link>
                </div>
            </div>
    </div>
  )
}
