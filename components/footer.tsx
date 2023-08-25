import Container from './container'
import Image from "next/image";
import Link from "next/link"
import SocialLinks from "./social-links";
const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-8 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <SocialLinks/>
          </div>
          <div>Julien Marc Brown {`© ${new Date().getFullYear()}`}</div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
