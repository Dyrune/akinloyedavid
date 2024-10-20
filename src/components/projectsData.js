

const projects = [
    {
        id: 1,
        title: "Milliton Jnr. House",
        category: "Architecture", // Added category
        imgSrc: "https://plus.unsplash.com/premium_photo-1686090450346-f418fff5486e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Thumbnail or cover image
        description: "A short description of the first project and I must tell you, it is one of a kind. You can't see me anywhere else, because I am automatic.",
        detailedDescription: `
          This project was focused on creating an interactive, responsive website for a client.
          The key technologies used include React, Node.js, and Express. We integrated several
          third-party APIs for dynamic content generation and implemented a custom backend
          for data handling and user authentication. The project involved:
          - Designing an intuitive Exterior.
          - Backend setup for handling requests.
          - Integrating payment systems.
          - Deploying the final application on AWS.
        `,images: [
            {
              src: "https://plus.unsplash.com/premium_photo-1686090449936-acfc6bc38f67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "This is an example of the first image description and it is not a decieption but a forestrysitories Factory. You must be told that this is not just fun",
              thumbnails: [
                "https://plus.unsplash.com/premium_photo-1686090449936-acfc6bc38f67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://plus.unsplash.com/premium_photo-1686090449625-16579c8ac225?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://plus.unsplash.com/premium_photo-1686090449200-57266c6623a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ]
            },
            {
              src: "https://plus.unsplash.com/premium_photo-1686090450800-d6ca456243c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "" // No description for this image
            },
            {
              src: "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description: "This is an example of the first image description and it is not a decieption but a forestrysitories Factory. You must be told that this is not just fun",
              thumbnails: [
                "https://plus.unsplash.com/premium_photo-1686090448331-206895954c61?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://plus.unsplash.com/premium_photo-1686090448517-2f692cc45187?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://plus.unsplash.com/premium_photo-1683891068478-9dc548ce7d20?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ]
            }
        ],
        features: [
          "Interactive design",
          "Third-party API integrations",
          "Responsive across all devices",
          "Custom CMS for content management",
        ],
        technologies: ["React", "Node.js", "Express", "AWS"],
        client: "Awesome Client Co.",
        location: "San Francisco, CA",
        projectStage: "Completed",
        deliverables: [
          "Website design",
          "Custom backend",
          "API integration",
          "Deployment on AWS",
        ],
    },  {
        id: 2,
        title: "Byrouted",
        category: "Exterior",
        imgSrc: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "This project focused on a sleek Exterior design for an e-commerce platform, aiming to improve user experience and increase conversion rates.",
        detailedDescription: `
          For Byrouted, we designed an intuitive, user-centric interface, improving the usability and aesthetic appeal
          of the e-commerce platform. The project involved:
          - Prototyping the entire user flow.
          - Conducting user testing to optimize navigation.
          - Implementing responsive design to cater to mobile and desktop users.
          - Providing a seamless user experience.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "A sleek UI design to enhance the e-commerce experience."
          },
          {
            src: "https://images.pexels.com/photos/2064830/pexels-photo-2064830.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Mobile-friendly designs to ensure optimal usability."
          },
        ],
        features: [
          "Mobile-first design",
          "Intuitive navigation",
          "User testing and feedback",
          "High-fidelity prototypes",
        ],
        technologies: ["Figma", "Sketch", "InVision"],
        client: "Byrouted Online Ltd.",
        location: "New York, NY",
        projectStage: "In Progress",
        deliverables: [
          "UI design",
          "User flow diagrams",
          "Prototype development",
          "User testing report",
        ],
      },
    
      // Updated project 3
      {
        id: 3,
        title: "Gregort John",
        category: "Interior",
        imgSrc: "https://images.pexels.com/photos/12983795/pexels-photo-12983795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "A Interior project focused on creating a brand identity for Gregort John, a luxury fashion brand.",
        detailedDescription: `
          We were tasked with developing a cohesive and sophisticated brand identity for Gregort John. This included:
          - Designing a new logo and visual identity system.
          - Creating a brand style guide to ensure consistent use across all platforms.
          - Developing marketing materials such as business cards, packaging, and social media templates.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/12983795/pexels-photo-12983795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            description: "The elegant new logo for Gregort John, conveying luxury and sophistication."
          },
          {
            src: "https://images.pexels.com/photos/12983801/pexels-photo-12983801.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Marketing materials designed with a focus on elegance and consistency."
          },
        ],
        features: [
          "Logo design",
          "Brand style guide",
          "Packaging design",
          "Social media templates",
        ],
        technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
        client: "Gregort John Fashion",
        location: "Paris, France",
        projectStage: "Completed",
        deliverables: [
          "Brand identity",
          "Marketing collateral",
          "Packaging design",
          "Style guide",
        ],
      },
    
      // Continue this pattern for projects 4 to 30...
    
      {
        id: 4,
        title: "Ricked Gross",
        category: "Architecture",
        imgSrc: "https://images.pexels.com/photos/12445924/pexels-photo-12445924.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "An extensive Architecture project for Ricked Gross, involving a complete overhaul of their digital presence.",
        detailedDescription: `
          The Ricked Gross project included revamping their entire web presence, focusing on:
          - Modern Architecture principles.
          - Optimized performance and load speeds.
          - Ensuring accessibility compliance across all pages.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/12445924/pexels-photo-12445924.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            description: "The new homepage design, optimized for both performance and aesthetics."
          },
        ],
        features: [
          "Responsive Architecture",
          "SEO optimization",
          "Performance enhancements",
          "Accessibility compliance",
        ],
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        client: "Ricked Gross Enterprises",
        location: "London, UK",
        projectStage: "Completed",
        deliverables: [
          "Website redesign",
          "Performance optimization",
          "SEO enhancements",
          "Accessibility report",
        ],
      },
    
      {
        id: 5,
        title: "Slite Rapper",
        category: "Masterplanning",
        imgSrc: "https://images.pexels.com/photos/879355/pexels-photo-879355.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "A complete Masterplanning project for Slite Rapper, focusing on creating a unique visual identity for their latest product launch.",
        detailedDescription: `
          This Masterplanning project involved the creation of a new logo, packaging, and digital marketing materials for Slite Rapper's latest product. Key tasks included:
          - Conceptualizing the logo and overall brand identity.
          - Designing product packaging and marketing collateral.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/879355/pexels-photo-879355.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "The fresh, bold new logo designed for Slite Rapper."
          },
        ],
        features: [
          "Logo design",
          "Brand identity",
          "Marketing collateral",
          "Product packaging",
        ],
        technologies: ["Illustrator", "Photoshop", "After Effects"],
        client: "Slite Rapper Ltd.",
        location: "Berlin, Germany",
        projectStage: "In Progress",
        deliverables: [
          "Logo design",
          "Packaging",
          "Marketing materials",
          "Brand identity guidelines",
        ],
      },{
        id: 6,
        title: "Tech Innovators Hub",
        category: "Web Development",
        imgSrc: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "A custom web development project for Tech Innovators Hub, creating a platform for tech enthusiasts and startups.",
        detailedDescription: `
          The Tech Innovators Hub project was aimed at developing a robust platform where startups and tech enthusiasts can connect, share ideas, and showcase their projects. The main features include:
          - A custom CMS for managing content.
          - Interactive forums and discussion boards.
          - Integration of video conferencing tools for virtual events.
          - Real-time data visualization for user statistics and site traffic.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "The interactive homepage of Tech Innovators Hub, designed for a seamless user experience."
          },
          {
            src: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "A snapshot of the platform's real-time user analytics dashboard."
          }
        ],
        features: [
          "Custom CMS",
          "User forums",
          "Video conferencing integration",
          "Real-time data visualization",
        ],
        technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
        client: "Tech Innovators Hub Ltd.",
        location: "Austin, TX",
        projectStage: "Completed",
        deliverables: [
          "Full platform development",
          "Real-time analytics",
          "Content management system",
          "User forums and support tools",
        ],
      },
      
      {
        id: 7,
        title: "Ecovative",
        category: "Mobile App Design",
        imgSrc: "https://images.pexels.com/photos/4064838/pexels-photo-4064838.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Mobile app design project for Ecovative, a sustainable products company focusing on eco-friendly materials.",
        detailedDescription: `
          Ecovative needed a mobile app that would educate users about sustainable materials and eco-friendly products. The app features include:
          - A product catalog showcasing eco-friendly alternatives.
          - An educational section with blogs and videos.
          - A community forum for discussions on sustainability.
          - A user-friendly checkout system for ordering products.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/4064838/pexels-photo-4064838.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "The sleek, minimalist design of Ecovative's product catalog page."
          },
          {
            src: "https://images.pexels.com/photos/4064843/pexels-photo-4064843.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Educational content section, highlighting sustainable practices."
          }
        ],
        features: [
          "Eco-friendly product catalog",
          "Educational resources",
          "Community forum",
          "Mobile checkout integration",
        ],
        technologies: ["Flutter", "Firebase", "Stripe"],
        client: "Ecovative Solutions",
        location: "Seattle, WA",
        projectStage: "In Progress",
        deliverables: [
          "Mobile app design",
          "Product catalog",
          "Community forum setup",
          "Checkout system",
        ],
      },
      
      {
        id: 8,
        title: "Greenfields Agency",
        category: "Digital Marketing",
        imgSrc: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "A full-scale digital marketing campaign for Greenfields Agency, aimed at boosting online presence and lead generation.",
        detailedDescription: `
          This project involved developing and executing a comprehensive digital marketing strategy for Greenfields Agency. Key aspects of the project include:
          - SEO optimization for better search engine ranking.
          - Social media campaign across various platforms.
          - Paid advertising on Google Ads and Facebook Ads.
          - Monthly performance reporting and lead tracking.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "A glimpse of the SEO optimization tools used for Greenfields' campaign."
          },
          {
            src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Social media engagement reports showcasing campaign performance."
          }
        ],
        features: [
          "SEO optimization",
          "Social media marketing",
          "Google Ads and Facebook Ads",
          "Lead generation tracking",
        ],
        technologies: ["Google Analytics", "Hootsuite", "Ahrefs"],
        client: "Greenfields Agency",
        location: "Los Angeles, CA",
        projectStage: "Completed",
        deliverables: [
          "Digital marketing strategy",
          "SEO optimization",
          "Social media campaign",
          "Performance reporting",
        ],
      },
      
      {
        id: 9,
        title: "Hype Lounge",
        category: "Masterplanning & Identity",
        imgSrc: "https://images.pexels.com/photos/4065156/pexels-photo-4065156.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "A complete Masterplanning and identity project for Hype Lounge, a new luxury nightlife brand.",
        detailedDescription: `
          Hype Lounge required a sophisticated, modern brand identity that reflected their luxurious image. Our work included:
          - Designing a sleek logo and visual identity system.
          - Creating high-end marketing materials including menus, signage, and digital ads.
          - Developing a cohesive brand style guide for consistent visual language.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/4065156/pexels-photo-4065156.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "The sleek and modern logo designed for Hype Lounge."
          },
          {
            src: "https://images.pexels.com/photos/4065160/pexels-photo-4065160.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Promotional material designed for Hype Lounge's launch event."
          }
        ],
        features: [
          "Logo design",
          "Brand style guide",
          "Marketing materials",
          "Digital and print collateral",
        ],
        technologies: ["Illustrator", "Photoshop", "After Effects"],
        client: "Hype Lounge",
        location: "Miami, FL",
        projectStage: "In Progress",
        deliverables: [
          "Brand identity",
          "Marketing collateral",
          "Event promotion materials",
          "Style guide",
        ],
      },
      
      {
        id: 10,
        title: "Insight Analytics",
        category: "Data Visualization",
        imgSrc: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "A data visualization project for Insight Analytics, transforming complex data into easy-to-understand visuals.",
        detailedDescription: `
          For Insight Analytics, we developed a suite of data visualizations to help clients make sense of large datasets. The project included:
          - Creating interactive charts and dashboards.
          - Developing custom visualizations for specific client needs.
          - Ensuring data accuracy and real-time updates through API integrations.
          - Designing a user-friendly interface to present the data insights.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Interactive dashboard showcasing real-time data insights."
          },
          {
            src: "https://images.pexels.com/photos/590024/pexels-photo-590024.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "A custom-built chart to visualize complex data trends."
          }
        ],
        features: [
          "Interactive dashboards",
          "Custom data visualizations",
          "API integrations",
          "Real-time data updates",
        ],
        technologies: ["D3.js", "Tableau", "Power BI"],
        client: "Insight Analytics Inc.",
        location: "Chicago, IL",
        projectStage: "Completed",
        deliverables: [
          "Interactive data visualizations",
          "API integration",
          "Custom dashboards",
          "Data insights presentation",
        ],
      },{
        id: 11,
        title: "Urban Explore",
        category: "Architecture",
        imgSrc: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "A cutting-edge Architecture project for Urban Explore, focusing on showcasing urban tourism experiences.",
        detailedDescription: `
          Urban Explore wanted a modern, visually appealing website to highlight urban tourism experiences in major cities around the world. The website needed to be fully responsive, visually immersive, and easy to navigate. Key features of the project include:
          - Stunning full-width images and interactive galleries.
          - A booking system for tours and urban experiences.
          - Integration with Google Maps for location-based services.
          - Blog and social media integration to promote urban tourism.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "A captivating homepage showcasing high-resolution images of cityscapes."
          },
          {
            src: "https://images.pexels.com/photos/374075/pexels-photo-374075.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Tour booking interface allowing users to easily reserve urban experiences."
          }
        ],
        features: [
          "Interactive galleries",
          "Tour booking system",
          "Google Maps integration",
          "Social media integration",
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"],
        client: "Urban Explore Travel Co.",
        location: "New York, NY",
        projectStage: "Completed",
        deliverables: [
          "Website design",
          "Tour booking system",
          "Google Maps integration",
          "Social media promotion",
        ],
      },
      
      {
        id: 12,
        title: "Wellness Tracker",
        category: "Exterior",
        imgSrc: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Exterior design for a mobile app that helps users track and manage their health and wellness.",
        detailedDescription: `
          Wellness Tracker is a mobile app designed to help users monitor their health metrics, including exercise, sleep, and nutrition. The project required creating a user-friendly, visually appealing interface. Key elements of the design include:
          - Intuitive dashboard displaying health metrics at a glance.
          - Customizable health goals and reminders.
          - Integration with wearable devices like Fitbit and Apple Watch.
          - Data visualization for tracking progress over time.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "User-friendly dashboard showing daily health metrics."
          },
          {
            src: "https://images.pexels.com/photos/40569/medical-checkup-doctor-healthcare-40569.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Detailed progress charts for tracking wellness goals."
          }
        ],
        features: [
          "Intuitive dashboard",
          "Custom health goals",
          "Wearable device integration",
          "Progress tracking",
        ],
        technologies: ["React Native", "Redux", "Firebase"],
        client: "HealthPlus Technologies",
        location: "San Francisco, CA",
        projectStage: "In Progress",
        deliverables: [
          "Mobile app design",
          "Wearable integration",
          "Health goal tracking",
          "Data visualization",
        ],
      },
      
      {
        id: 13,
        title: "Artify Gallery",
        category: "Interior",
        imgSrc: "https://images.pexels.com/photos/185521/pexels-photo-185521.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Interior for Artify Gallery, a contemporary art gallery looking to enhance its visual identity.",
        detailedDescription: `
          Artify Gallery needed a fresh, modern visual identity to reflect its contemporary art collections. Our Interior work included:
          - A sleek, minimalist logo design.
          - Marketing collateral including posters, banners, and social media graphics.
          - Custom fonts and color schemes to match the gallery’s aesthetic.
          - A comprehensive brand style guide to ensure visual consistency.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/185521/pexels-photo-185521.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "The final minimalist logo design for Artify Gallery."
          },
          {
            src: "https://images.pexels.com/photos/185522/pexels-photo-185522.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Brand style guide highlighting custom fonts and color schemes."
          }
        ],
        features: [
          "Logo design",
          "Marketing collateral",
          "Custom fonts and colors",
          "Brand style guide",
        ],
        technologies: ["Illustrator", "Photoshop", "InDesign"],
        client: "Artify Gallery",
        location: "London, UK",
        projectStage: "Completed",
        deliverables: [
          "Logo design",
          "Marketing materials",
          "Brand style guide",
          "Social media graphics",
        ],
      },
      
      {
        id: 14,
        title: "EcoLiving",
        category: "Architecture",
        imgSrc: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "A website design project for EcoLiving, a platform promoting sustainable living and eco-friendly products.",
        detailedDescription: `
          EcoLiving needed a fully responsive, visually captivating website to promote sustainable living. The website showcases eco-friendly products, shares tips for sustainable living, and provides resources for reducing environmental impact. Key features include:
          - Product listings with detailed descriptions and eco-ratings.
          - Blog and resource center with tips on sustainable living.
          - User-friendly interface for navigating categories and products.
          - Integration with social media and eco-advocacy campaigns.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "EcoLiving's homepage featuring eco-friendly products."
          },
          {
            src: "https://images.pexels.com/photos/1643390/pexels-photo-1643390.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Detailed product page showcasing eco-friendly products and ratings."
          }
        ],
        features: [
          "Product listings",
          "Sustainability blog",
          "User-friendly navigation",
          "Social media integration",
        ],
        technologies: ["WordPress", "WooCommerce", "SEO"],
        client: "EcoLiving Corp.",
        location: "Portland, OR",
        projectStage: "Completed",
        deliverables: [
          "Website design",
          "Product listings",
          "Blog setup",
          "Social media campaign integration",
        ],
      },
      
      {
        id: 15,
        title: "BrandSphere",
        category: "Masterplanning",
        imgSrc: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Comprehensive Masterplanning and identity design for BrandSphere, a marketing consultancy firm.",
        detailedDescription: `
          BrandSphere needed a complete brand overhaul to reflect its innovative approach to marketing consultancy. Our work included:
          - Logo redesign to better align with the company’s forward-thinking values.
          - Business card and stationery design.
          - A complete brand style guide covering typography, color palette, and visual elements.
          - Marketing materials for both print and digital platforms.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "The final logo design for BrandSphere, representing modern and innovative values."
          },
          {
            src: "https://images.pexels.com/photos/247432/pexels-photo-247432.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Stationery and business card design as part of the new Masterplanning."
          }
        ],
        features: [
          "Logo redesign",
          "Business stationery",
          "Brand style guide",
          "Marketing materials",
        ],
        technologies: ["Photoshop", "Illustrator", "InDesign"],
        client: "BrandSphere Ltd.",
        location: "Chicago, IL",
        projectStage: "Completed",
        deliverables: [
          "Logo redesign",
          "Business stationery",
          "Brand style guide",
          "Print and digital marketing materials",
        ],
      },
      {
        id: 16,
        title: "Vibrant Visions",
        category: "Interior",
        imgSrc: "https://images.pexels.com/photos/247942/pexels-photo-247942.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Interior project creating a visual identity for an art exhibition.",
        detailedDescription: `
          Vibrant Visions was an art exhibition that needed eye-catching promotional materials and a cohesive visual identity to draw in a diverse audience. Our design work focused on:
          - Creating promotional posters with bold, vivid colors.
          - Designing a minimalist exhibition catalog that was easy to navigate.
          - Custom illustrations inspired by the featured artists' work.
          - Social media graphics to promote the exhibition across various platforms.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/247942/pexels-photo-247942.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Bold and colorful promotional poster design for the Vibrant Visions exhibition."
          },
          {
            src: "https://images.pexels.com/photos/247943/pexels-photo-247943.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Exhibition catalog showcasing the artwork and details of the artists."
          }
        ],
        features: [
          "Promotional posters",
          "Exhibition catalog",
          "Custom illustrations",
          "Social media graphics",
        ],
        technologies: ["Illustrator", "Photoshop", "InDesign"],
        client: "Vibrant Visions Exhibition",
        location: "Miami, FL",
        projectStage: "Completed",
        deliverables: [
          "Promotional posters",
          "Exhibition catalog",
          "Custom illustrations",
          "Social media graphics",
        ],
      },
      
      {
        id: 17,
        title: "UX Simplified",
        category: "Exterior",
        imgSrc: "https://images.pexels.com/photos/3183199/pexels-photo-3183199.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "User experience design for a web application focused on simplifying project management.",
        detailedDescription: `
          UX Simplified is a web application designed to help small teams manage projects more effectively. We focused on:
          - Designing a clean, intuitive interface for tracking tasks and milestones.
          - Implementing drag-and-drop functionality for seamless task organization.
          - A dashboard with visual insights into project progress and team performance.
          - Mobile responsiveness to ensure usability on any device.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/3183199/pexels-photo-3183199.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Dashboard design featuring real-time project insights and team activity."
          },
          {
            src: "https://images.pexels.com/photos/3183200/pexels-photo-3183200.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Drag-and-drop task manager allowing users to easily organize project tasks."
          }
        ],
        features: [
          "Task management system",
          "Drag-and-drop functionality",
          "Project insights dashboard",
          "Mobile responsiveness",
        ],
        technologies: ["React", "Redux", "Firebase"],
        client: "Simplified Tech Solutions",
        location: "Austin, TX",
        projectStage: "In Progress",
        deliverables: [
          "Exterior design",
          "Task management system",
          "Dashboard with insights",
          "Mobile-responsive design",
        ],
      },
      
      {
        id: 18,
        title: "Green Market",
        category: "Masterplanning",
        imgSrc: "https://images.pexels.com/photos/2306775/pexels-photo-2306775.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Masterplanning project for Green Market, a farmer's market promoting organic and sustainable products.",
        detailedDescription: `
          Green Market needed a fresh, earthy brand identity to promote their farmer's market. We focused on creating:
          - A new logo that embodies organic and eco-friendly values.
          - Packaging design for their range of organic products.
          - Marketing materials including brochures and digital ads.
          - A brand style guide to ensure consistent visual representation across all platforms.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/2306775/pexels-photo-2306775.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "New logo design for Green Market, inspired by organic farming and sustainability."
          },
          {
            src: "https://images.pexels.com/photos/2306780/pexels-photo-2306780.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Eco-friendly packaging for Green Market's organic products."
          }
        ],
        features: [
          "Logo design",
          "Packaging design",
          "Marketing materials",
          "Brand style guide",
        ],
        technologies: ["Illustrator", "Photoshop", "InDesign"],
        client: "Green Market",
        location: "Seattle, WA",
        projectStage: "Completed",
        deliverables: [
          "Logo design",
          "Packaging design",
          "Marketing materials",
          "Brand style guide",
        ],
      },
      
      {
        id: 19,
        title: "BlueSky Developers",
        category: "Architecture",
        imgSrc: "https://images.pexels.com/photos/374015/pexels-photo-374015.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Website design for BlueSky Developers, a real estate development company.",
        detailedDescription: `
          BlueSky Developers needed a sleek, professional website to showcase their real estate development projects. Key elements of the design include:
          - Project portfolio pages with detailed information and high-quality images.
          - Interactive maps showing development locations.
          - A blog to share industry insights and project updates.
          - Lead generation forms for potential buyers and investors.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/374015/pexels-photo-374015.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Homepage featuring BlueSky Developers' recent real estate projects."
          },
          {
            src: "https://images.pexels.com/photos/374016/pexels-photo-374016.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Interactive project portfolio page with development location maps."
          }
        ],
        features: [
          "Project portfolio",
          "Interactive maps",
          "Blog section",
          "Lead generation forms",
        ],
        technologies: ["WordPress", "Google Maps API", "PHP"],
        client: "BlueSky Developers",
        location: "Los Angeles, CA",
        projectStage: "Completed",
        deliverables: [
          "Website design",
          "Project portfolio",
          "Interactive maps",
          "Lead generation system",
        ],
      },
      
      {
        id: 20,
        title: "NextGen Fitness",
        category: "Exterior",
        imgSrc: "https://images.pexels.com/photos/3076515/pexels-photo-3076515.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Exterior design for a fitness app focused on personalized workout plans.",
        detailedDescription: `
          NextGen Fitness is a mobile app designed to provide users with personalized workout plans based on their fitness goals and preferences. Key design elements include:
          - A user-friendly onboarding process to assess fitness levels.
          - Customizable workout plans with video demonstrations.
          - Progress tracking with visual data representation.
          - Integration with wearable devices to monitor workouts in real-time.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/3076515/pexels-photo-3076515.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Onboarding interface assessing the user's fitness level and goals."
          },
          {
            src: "https://images.pexels.com/photos/3076516/pexels-photo-3076516.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Workout plan page with video demonstrations and progress tracking."
          }
        ],
        features: [
          "Personalized workout plans",
          "Progress tracking",
          "Wearable device integration",
          "Video demonstrations",
        ],
        technologies: ["React Native", "Redux", "Firebase"],
        client: "NextGen Fitness Inc.",
        location: "Chicago, IL",
        projectStage: "In Progress",
        deliverables: [
          "Mobile app design",
          "Personalized workout plans",
          "Progress tracking",
          "Wearable integration",
        ],
      },
      {
        id: 22,
        title: "Frog Jump",
        category: "Exterior",
        imgSrc: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Exterior design for a gamified learning app.",
        detailedDescription: `
          Frog Jump is a mobile app designed to make learning fun through interactive games. The focus was on:
          - Gamified learning modules for kids aged 6-12.
          - Easy-to-use interface with vibrant animations and sound effects.
          - Progress tracking with rewards to encourage continued engagement.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/2064826/pexels-photo-2064826.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Interactive learning game screen with bright, engaging elements."
          }
        ],
        features: [
          "Gamified learning",
          "Interactive animations",
          "Progress rewards",
          "Parental control options",
        ],
        technologies: ["React Native", "Firebase", "Adobe XD"],
        client: "Frog Jump Inc.",
        location: "New York, NY",
        projectStage: "Completed",
        deliverables: ["Mobile app design", "User journey optimization"],
      },
      {
        id: 23,
        title: "Them Chronic",
        category: "Interior",
        imgSrc: "https://images.pexels.com/photos/12983795/pexels-photo-12983795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "Interior for a music album cover.",
        detailedDescription: `
          Them Chronic is a Interior project for a music album cover that blends visual storytelling with modern design aesthetics. The project highlights:
          - Bold use of colors and abstract shapes.
          - Thematic representation of the album’s core message.
          - High-quality print design suitable for both digital and physical distribution.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/12983795/pexels-photo-12983795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            description: "Album cover design with abstract visual elements."
          }
        ],
        features: [
          "High-resolution graphics",
          "Bold color palette",
          "Abstract visual theme",
        ],
        technologies: ["Adobe Illustrator", "Photoshop"],
        client: "Them Chronic Music",
        location: "Los Angeles, CA",
        projectStage: "Completed",
        deliverables: ["Album cover design"],
      },
      {
        id: 24,
        title: "Housed Frontier",
        category: "Architecture",
        imgSrc: "https://images.pexels.com/photos/12445924/pexels-photo-12445924.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "Real estate website showcasing available properties.",
        detailedDescription: `
          Housed Frontier is a real estate website designed to provide an intuitive property search experience. The project included:
          - A filterable search system for users to find properties based on their criteria.
          - High-quality images of properties with virtual tours.
          - Integration with real-time property availability data.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/12445924/pexels-photo-12445924.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            description: "Search interface for browsing available properties."
          }
        ],
        features: [
          "Real-time property search",
          "Virtual property tours",
          "Responsive design",
        ],
        technologies: ["React", "Node.js", "MongoDB"],
        client: "Housed Frontier",
        location: "San Francisco, CA",
        projectStage: "Completed",
        deliverables: ["Website design", "Database integration"],
      },
      {
        id: 25,
        title: "Hoped Home",
        category: "Masterplanning",
        imgSrc: "https://images.pexels.com/photos/879355/pexels-photo-879355.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Masterplanning and identity design for a home decor company.",
        detailedDescription: `
          Hoped Home is a Masterplanning project for a home decor company, focusing on creating a modern and cohesive brand identity. The project involved:
          - Designing a memorable logo and visual identity.
          - Creating Masterplanning materials for both print and digital platforms.
          - Establishing a consistent color palette and typography.
        `,
        images: [
          {
            src: "https://images.pexels.com/photos/879355/pexels-photo-879355.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Brand identity mockup for Hoped Home."
          }
        ],
        features: [
          "Logo design",
          "Brand guidelines",
          "Marketing materials",
        ],
        technologies: ["Adobe Illustrator", "InDesign"],
        client: "Hoped Home Inc.",
        location: "Austin, TX",
        projectStage: "Completed",
        deliverables: ["Masterplanning guidelines", "Marketing collateral"],
      },
    {
    id: 26,
    title: "Deadly Right",
    category: "Interior",
    imgSrc: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Interior for an action movie poster.",
    detailedDescription: `
      Deadly Right is a Interior project for a high-impact action movie poster. The design conveys intensity and drama, incorporating:
      - Bold typography with action-oriented elements.
      - Dark, moody colors to create a sense of suspense.
      - A visually striking layout that highlights the main characters.
    `,
    images: [
      {
        src: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Final poster design featuring the main characters in dramatic poses."
      }
    ],
    features: [
      "High-resolution poster design",
      "Bold typography",
      "Character-focused layout",
    ],
    technologies: ["Adobe Photoshop", "Illustrator"],
    client: "Action Films LLC",
    location: "Hollywood, CA",
    projectStage: "Completed",
    deliverables: ["Movie poster", "Digital assets for promotion"],
  },
  {
    id: 27,
    title: "Monstar We Made",
    category: "Exterior",
    imgSrc: "https://images.pexels.com/photos/1634272/pexels-photo-1634272.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    description: "Exterior design for a horror-themed mobile game.",
    detailedDescription: `
      Monstar We Made is a horror-themed mobile game where players create and battle monsters. The Exterior design focuses on:
      - A dark, immersive interface that reflects the eerie theme of the game.
      - Smooth navigation between game levels and monster customization.
      - Animated interactions and sound effects that enhance the user experience.
    `,
    images: [
      {
        src: "https://images.pexels.com/photos/1634272/pexels-photo-1634272.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        description: "Main game interface with customizable monster features."
      }
    ],
    features: [
      "Dark theme UI",
      "Interactive game controls",
      "Animated transitions",
    ],
    technologies: ["Unity", "Adobe XD", "React Native"],
    client: "Monstar Games",
    location: "Berlin, Germany",
    projectStage: "In Progress",
    deliverables: ["Game interface design", "User experience optimization"],
  },
  {
    id: 28,
    title: "Killer House",
    category: "Masterplanning",
    imgSrc: "https://images.pexels.com/photos/28900598/pexels-photo-28900598/free-photo-of-scenic-french-lighthouse-by-the-seaside.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Masterplanning design for a real estate development company.",
    detailedDescription: `
      Killer House is a Masterplanning project for a luxury real estate development company. The Masterplanning needed to convey exclusivity and sophistication through:
      - A sleek logo design that reflects the company's modern architecture focus.
      - Cohesive Masterplanning materials including business cards, brochures, and signage.
      - A distinct color palette that reinforces the luxury aspect of the brand.
    `,
    images: [
      {
        src: "https://images.pexels.com/photos/28900598/pexels-photo-28900598/free-photo-of-scenic-french-lighthouse-by-the-seaside.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Masterplanning materials including business cards and brochures."
      }
    ],
    features: [
      "Logo and brand identity",
      "Luxury design aesthetic",
      "Comprehensive brand collateral",
    ],
    technologies: ["Adobe Illustrator", "InDesign"],
    client: "Killer House Real Estate",
    location: "Miami, FL",
    projectStage: "Completed",
    deliverables: ["Brand identity", "Marketing materials"],
  },
  {
    id: 29,
    title: "Pentagon",
    category: "Architecture",
    imgSrc: "https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Corporate website design for a consulting firm.",
    detailedDescription: `
      Pentagon is a corporate Architecture project for a leading consulting firm. The focus was on delivering:
      - A professional, clean layout that emphasizes the firm's expertise.
      - Integration of interactive elements like service calculators and client testimonials.
      - Optimized loading times and SEO to improve visibility.
    `,
    images: [
      {
        src: "https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Homepage featuring interactive service calculator and testimonials."
      }
    ],
    features: [
      "Interactive elements",
      "Clean, professional layout",
      "SEO optimization",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "WordPress"],
    client: "Pentagon Consulting",
    location: "Washington, D.C.",
    projectStage: "Completed",
    deliverables: ["Corporate website", "SEO and performance optimization"],
  },
  {
    id: 30,
    title: "Laste on Surface",
    category: "Exterior",
    imgSrc: "https://images.pexels.com/photos/186537/pexels-photo-186537.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "Exterior design for a futuristic space exploration app.",
    detailedDescription: `
      Laste on Surface is a space exploration app that allows users to explore planets and galaxies. The Exterior design focused on:
      - A visually stunning interface with space-themed animations.
      - Intuitive navigation for discovering new planetary systems and celestial objects.
      - Real-time simulation of planetary data for an immersive user experience.
    `,
    images: [
      {
        src: "https://images.pexels.com/photos/186537/pexels-photo-186537.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Exploration screen showcasing a detailed view of a new planet."
      }
    ],
    features: [
      "Space-themed animations",
      "Real-time planetary data",
      "Immersive user interface",
    ],
    technologies: ["React Native", "Three.js", "Firebase"],
    client: "Galactic Explorers Inc.",
    location: "Houston, TX",
    projectStage: "In Progress",
    deliverables: ["Mobile app design", "Planetary data integration"],
  }
];
  
  export default projects;
  