import { useEffect } from "react";

function Download() {
    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = "https://apps.apple.com/hu/app/outfino/id6736884918";
        } else if (/android/i.test(userAgent)) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.outfino.mobile";
        } else {
            window.location.href = "/";
        }
    }, []);

    return (
        <>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Download the Outfino app for iOS or Android and elevate your style today!" lang="en" />
                <meta name="description" content="Töltsd le az Outfino alkalmazást iOS-re vagy Androidra, és emeld új szintre a stílusod!" lang="hu" />
                <meta name="keywords" content="Outfino, download, iOS, Android, style app, fashion app" lang="en" />
                <meta name="keywords" content="Outfino, letöltés, iOS, Android, stílus app, divat app" lang="hu" />
                <meta name="author" content="Outfino Team" />
                <meta property="og:image" content="../assets/outfino-banner.png" />
                <meta property="og:title" content="Download Outfino | Töltsd le az Outfino alkalmazást" />
                <meta property="og:description" content="Download the Outfino app for iOS or Android and elevate your style today!" />
                <meta property="og:description" content="Töltsd le az Outfino alkalmazást iOS-re vagy Androidra, és emeld új szintre a stílusod!" lang="hu" />
                <title>Outfino</title>
            </head>
            <div className='Download'>
                Redirecting...
            </div>
        </>
    );
}

export default Download;