import Script from "next/script";
import Head from "next/head";
import PageHead from "../header/Header";
import PageFoot from "../footer/Footer";

const TopHeader = ({ title, heading, description, component }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/favIcon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favIcon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favIcon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favIcon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/images/favIcon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-50662119-1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-50662119-1');
            `,
          }}
        /> */}
        <meta name="twitter:card" content="summary-large" />
        <meta property="og:type" content="Website" />
        <meta name="title" property="og:title" content={heading} />
        <meta
          name="description"
          property="og:description"
          content={description}
        />
        <meta
          name="image"
          property="og:image"
          content="https://res.cloudinary.com/dfxicv9iv/image/upload/v1650880369/Group_2723_avp4va.png"
        />
        <meta name="author" content="Author name here" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="google-site-verification"
          content="CS-BYHHow49vfeUZeGvJNU_SQCRukFwzF6KrsIqCOJo"
        />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=UA-50662119-1`}
      />

      <Script strategy="lazyOnload" id="ga-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-50662119-1');
        `}
      </Script>
      <PageHead />
      {component}
      <PageFoot />
    </>
  );
};

export default TopHeader;
