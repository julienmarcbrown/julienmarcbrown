import Script from "next/script";

const GAScript = () => {
    return (
        <>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=G-9QM0CZH9ZC`}
            />
            <Script strategy="lazyOnload" id="ga-script">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9QM0CZH9ZC', {
              page_path: window.location.pathname,
            });
        `}
            </Script>
        </>
    )
}

export default GAScript