import Script from "next/script";

const GAScript = () => {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-9QM0CZH9ZC"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-9QM0CZH9ZC');
        `}
            </Script>
        </>
    )
}

export default GAScript
