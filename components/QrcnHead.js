import React from 'react'
import Head from 'next/head';
import {getSuberaLink} from "../helpers/link-helper";
import {getMetaDescription, getSuberaLabel, getSlogan} from "../helpers/text-helper";

const QrcnHead = ({
                      title = getSuberaLabel() + ' | ' + getSlogan(),
                      description = getMetaDescription(),
                      bannerImage = '/subera/subera-default_banner.png',
                      faviconUrl = '/subera/subera-favicon.png',
                      contentUrl = getSuberaLink()
                  }) => {
    return (
        <Head>
            {contentUrl && <link rel="canonical" href={contentUrl}/>}
            {faviconUrl && <link rel="shortcut icon" href={faviconUrl}/>}

            {title && (
                <>
                    <title>{title}</title>
                    <meta property="og:title" content={title}/>
                    <meta property="twitter:title" content={title}/>
                </>
            )}

            {description && (
                <>
                    <meta name="og:description" content={description}/>
                    <meta name="twitter:description" content={description}/>
                    <meta name="description" content={description}/>
                </>
            )}

            {bannerImage && (
                <>
                    <meta property="og:image" content={bannerImage}/>
                    <meta property="twitter:image" content={bannerImage}/>
                </>
            )}

            {contentUrl && <meta property="og:url" content={contentUrl}/>}

            <meta property="og:type" content="website"/>
        </Head>
    )
}

export default QrcnHead
