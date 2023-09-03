import Link from "next/link";
import Image from "next/image";
import Container from "./container";

const SocialLinks = () => {
    return (
        <section className="flex">
            <Link href="mailto:mail@julienmarcbrown/"><Image
                src="/social-icons/mail.svg"
                height={24}
                width={24}
                alt="Email me"
            /></Link>
            <Link href="https://www.linkedin.com/in/julienmarcbrown/"><Image
                src="/social-icons/linkedin.svg"
                height={24}
                width={24}
                alt="Follow me on LinkedIn"
            /></Link>
            <Link href="https://www.github.com/julienmarcbrown/"><Image
                src="/social-icons/github.svg"
                height={24}
                width={24}
                alt="Follow me on Github"
            /></Link>
        </section>
    )
}

export default SocialLinks