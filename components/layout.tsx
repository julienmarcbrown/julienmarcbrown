import Footer from './footer'
import Meta from './meta'
import Head from "next/head";
import Navigation from "./navigation";
import GAScript from "./GAScript";

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const Layout = ({preview, children}: Props) => {
    return (
        <>
            <Meta/>
            <Head>
                <title>{`Julien Marc Brown`}</title>
            </Head>
            <GAScript/>
            <Navigation/>
            <div className="bg-gray-100">
                <div className="min-h-screen w-[90%] md:w-[60%] mx-auto">
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Layout
