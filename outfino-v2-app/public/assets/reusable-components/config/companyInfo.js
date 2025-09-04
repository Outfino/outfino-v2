// Company Information Configuration
export const companyInfo = {
    // Legal Entity Information
    companyName: "Outfino Europe Kft.",
    vatNumber: "HU32853601",
    companyRegNumber: "01-09-446114",
    
    // Address
    address: {
        street: "Tallér str 15",
        city: "Budapest",
        postalCode: "1145",
        country: "Hungary",
        fullAddress: "1145 Budapest, Tallér str 15."
    },

    // Contact Information
    contact: {
        supportEmail: "support@outfino.com",
        website: "https://outfino.io"
    },

    // App Store Links
    appStore: {
        ios: "https://apps.apple.com/hu/app/outfino/id6736884918",
        android: "https://play.google.com/store/apps/details?id=com.outfino.mobile",
        appId: {
            ios: "id6736884918",
            android: "com.outfino.mobile"
        }
    },

    // Social Media Links
    socialMedia: {
        facebook: "https://www.facebook.com/profile.php?id=61566263469126",
        instagram: "https://www.instagram.com/outfino.io/",
        twitter: "https://x.com/outfino_io",
        tiktok: "https://www.tiktok.com/@outfino.io",
        linkedin: "https://www.linkedin.com/company/outfino"
    },

    // Awards & Recognition
    awards: [
        {
            platform: "F6S",
            title: "13 top Sustainability companies and startups in Hungary in October 2024",
            url: "https://www.f6s.com/companies/sustainability/hungary/co",
            logo: "f6s-logo-square.svg"
        },
        {
            platform: "F6S", 
            title: "28 top Software Development companies and startups in Budapest in October 2024",
            url: "https://www.f6s.com/companies/software-development/hungary/budapest/co",
            logo: "f6s-logo-square.svg"
        },
        {
            platform: "F6S",
            title: "28 top Company in AI (Artifical Intelligence) of February 2025",
            url: "https://www.f6s.com/outfino",
            logo: "f6s-award.png"
        }
    ],

    // API Configuration
    api: {
        baseUrl: "https://api.outfino.io/v3"
    },

    // Branding
    branding: {
        appName: "Outfino",
        tagline: "Elevate Your Style with Outfino",
        description: "Discover Fashion Designed for You."
    }
};

export default companyInfo;