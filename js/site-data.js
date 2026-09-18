const siteData = {

    /* =========================================================
       COMPANY INFORMATION
       ========================================================= */
    company: {
        name: "SUNIMA PROPERTIES",

        tagline: "Building Projects. Creating Value.",

        description:
            "Sunima Properties works with builders and developers across the project lifecycle — from architectural coordination and construction supervision to project sales and strategic construction solutions.",

        shortDescription:
            "A project-focused business partner for builders and developers.",

        businessType:
            "Construction & Real Estate Solutions",

        location:
            "Pune, Maharashtra, India",

        email:
            "info@sunimaproperties.com",

        phone:
            "+91 XXXXX XXXXX",

        /* IMPORTANT:
           Enter WhatsApp number WITHOUT +, spaces or hyphens.
           Example: 919876543210
        */
        whatsapp:
            "919999999999"
    },


    /* =========================================================
       HERO SECTION
       ========================================================= */
    hero: {

        title:
            "Building Projects. Creating Value.",

        subtitle:
            "Supporting builders and developers with project supervision, sales capabilities and construction solutions.",

        primaryButton:
            "Discuss Your Project",

        primaryButtonLink:
            "#contact",

        secondaryButton:
            "View Projects",

        secondaryButtonLink:
            "#projects",

        backgroundImage:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
    },


    /* =========================================================
       MAIN BUSINESS AREAS
       ========================================================= */
    businessAreas: [

        {
            number: "01",

            title:
                "Project Supervision",

            shortTitle:
                "Supervision",

            description:
                "Architectural coordination, construction supervision and project execution support for residential and commercial developments.",

            icon:
                "supervision"
        },

        {
            number: "02",

            title:
                "Project Sales",

            shortTitle:
                "Project Sales",

            description:
                "Project sales and marketing support with sales capabilities to help builders and developers reach customers and scale project sales.",

            icon:
                "sales"
        },

        {
            number: "03",

            title:
                "Construction Solutions",

            shortTitle:
                "Construction Solutions",

            description:
                "Connecting builders and developers with practical construction products, lift solutions, tiles and business opportunities.",

            icon:
                "construction"
        }
    ],


    /* =========================================================
       SERVICES
       ========================================================= */
    services: [

        {
            number: "01",

            title:
                "Architectural & Project Supervision",

            description:
                "Supervision and coordination of architectural plans, site activities and project execution."
        },

        {
            number: "02",

            title:
                "Construction Site Coordination",

            description:
                "Coordination between project requirements, site execution, contractors and stakeholders."
        },

        {
            number: "03",

            title:
                "Project Sales & Marketing",

            description:
                "Sales support and marketing capabilities for builders and developers looking to grow project sales."
        },

        {
            number: "04",

            title:
                "Builder & Developer Support",

            description:
                "Business support, project coordination and strategic assistance across different stages of development."
        },

        {
            number: "05",

            title:
                "Lift / Elevator Solutions",

            description:
                "Lift and elevator business opportunities and solutions for residential and commercial projects."
        },

        {
            number: "06",

            title:
                "Tiles & Finishing Solutions",

            description:
                "Tiles, finishing materials and related construction product opportunities for development projects."
        }
    ],


    /* =========================================================
       PROJECT CATEGORIES
       ========================================================= */
    projectCategories: [

        {
            id: "all",
            name: "All"
        },

        {
            id: "residential",
            name: "Residential"
        },

        {
            id: "commercial",
            name: "Commercial"
        }
    ],


    /* =========================================================
       PROJECTS
       
       ADD NEW PROJECTS HERE.

       category must be:
       "residential"
       OR
       "commercial"

       Every project can have unlimited images.
       ========================================================= */
    projects: [

        /* -----------------------------------------------------
           RESIDENTIAL PROJECT 1
           ----------------------------------------------------- */
        {
            id: "residential-project-1",

            category: "residential",

            name:
                "ABC Heights",

            location:
                "Wakad, Pune",

            status:
                "Ongoing",

            type:
                "Residential",

            year:
                "2026",

            description:
                "Residential development project supported with project supervision, construction coordination and execution support.",

            mainImage:
                "images/projects/abc-heights/1.jpeg",

            images: [

                "images/projects/abc-heights/1.jpeg",

                "images/projects/abc-heights/2.jpeg",

                "images/projects/abc-heights/3.jpeg",

                "images/projects/abc-heights/4.jpeg",

                "images/projects/abc-heights/5.jpeg"

            ]
        },


        /* -----------------------------------------------------
           RESIDENTIAL PROJECT 2
           ----------------------------------------------------- */
        {
            id: "residential-project-2",

            category: "residential",

            name:
                "Sunima Residency",

            location:
                "Ravet, Pune",

            status:
                "Completed",

            type:
                "Residential",

            year:
                "2025",

            description:
                "Residential project with construction supervision and project coordination support.",

            mainImage:
                "images/projects/sunima-residency/1.jpeg",

            images: [

                "images/projects/sunima-residency/1.jpeg",

                "images/projects/sunima-residency/2.jpeg",

                "images/projects/sunima-residency/3.jpeg",

                "images/projects/sunima-residency/4.jpeg"

            ]
        },


        /* -----------------------------------------------------
           COMMERCIAL PROJECT 1
           ----------------------------------------------------- */
        {
            id: "commercial-project-1",

            category: "commercial",

            name:
                "ABC Business Park",

            location:
                "Baner, Pune",

            status:
                "Ongoing",

            type:
                "Commercial",

            year:
                "2026",

            description:
                "Commercial development supported through project coordination, supervision and construction solutions.",

            mainImage:
                "images/projects/abc-business-park/1.jpeg",

            images: [

                "images/projects/abc-business-park/1.jpeg",

                "images/projects/abc-business-park/2.jpeg",

                "images/projects/abc-business-park/3.jpeg",

                "images/projects/abc-business-park/4.jpeg"

            ]
        },


        /* -----------------------------------------------------
           COMMERCIAL PROJECT 2
           ----------------------------------------------------- */
        {
            id: "commercial-project-2",

            category: "commercial",

            name:
                "Business Centre",

            location:
                "Hinjewadi, Pune",

            status:
                "Upcoming",

            type:
                "Commercial",

            year:
                "2026",

            description:
                "Commercial project opportunity supported through business coordination and construction solutions.",

            mainImage:
                "images/projects/business-centre/1.jpeg",

            images: [

                "images/projects/business-centre/1.jpeg",

                "images/projects/business-centre/2.jpeg",

                "images/projects/business-centre/3.jpeg"

            ]
        }

    ],


    /* =========================================================
       CONSTRUCTION SOLUTIONS
       ========================================================= */
    constructionSolutions: [

        {
            title:
                "Lift / Elevator Solutions",

            description:
                "Lift and elevator solutions and business opportunities for residential and commercial projects.",

            image:
                "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?auto=format&fit=crop&w=1000&q=80"
        },

        {
            title:
                "Tiles & Finishing Solutions",

            description:
                "Tiles, finishing materials and construction product opportunities for builders and developers.",

            image:
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
        },

        {
            title:
                "Construction Products",

            description:
                "Connecting development projects with practical construction products and solutions.",

            image:
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
        },

        {
            title:
                "Franchise & Business Opportunities",

            description:
                "Business opportunities involving construction products, services and franchise partnerships.",

            image:
                "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80"
        }

    ],


    /* =========================================================
       PARTNERSHIPS
       ========================================================= */
    partnerships: [

        {
            title:
                "Builders & Developers",

            description:
                "Project supervision, sales support and construction solutions for builders and developers."
        },

        {
            title:
                "Manufacturers & Suppliers",

            description:
                "Business opportunities to connect quality construction products with development projects."
        },

        {
            title:
                "Franchise & Business Partners",

            description:
                "Exploring franchise, dealership and strategic business opportunities in the construction ecosystem."
        }

    ],


    /* =========================================================
       ABOUT SECTION
       ========================================================= */
    about: {

        title:
            "More than supervision. A project-focused business partner.",

        description:
            "Sunima Properties works with builders and developers to support projects through supervision, coordination, sales and construction solutions.",

        description2:
            "Our approach is focused on creating practical value across the project lifecycle — from planning and execution to sales and strategic business opportunities.",

        highlights: [

            "Architectural & Project Supervision",

            "Construction Site Coordination",

            "Project Sales & Marketing",

            "Builder & Developer Support",

            "Lift & Elevator Solutions",

            "Tiles & Construction Products"

        ]
    },


    /* =========================================================
       BUSINESS FLOW
       ========================================================= */
    businessFlow: {

        title:
            "How Sunima Properties Creates Value",

        steps: [

            {
                title: "Supervision",
                description: "Architectural and project execution support."
            },

            {
                title: "Project Sales",
                description: "Sales and marketing capabilities for development projects."
            },

            {
                title: "Construction Solutions",
                description: "Products, services and strategic construction opportunities."
            },

            {
                title: "Builders & Developers",
                description: "Creating long-term project and business partnerships."
            },

            {
                title: "Enquiry / WhatsApp",
                description: "Direct communication for project and business opportunities."
            }

        ]
    },


    /* =========================================================
       CONTACT SECTION
       ========================================================= */
    contact: {

        title:
            "Have a project or business opportunity?",

        description:
            "Let's discuss how Sunima Properties can support your residential or commercial project.",

        business:
            "Construction & Real Estate Solutions",

        location:
            "Pune, Maharashtra, India",

        email:
            "info@sunimaproperties.com",

        phone:
            "+91 XXXXX XXXXX"
    },


    /* =========================================================
       WHATSAPP SETTINGS
       ========================================================= */
    whatsapp: {

        /* Same number as company.whatsapp */
        number:
            "919999999999",

        generalMessage:
            "Hello Sunima Properties, I would like to discuss a project/business opportunity.",

        projectMessage:
            "Hello Sunima Properties, I am interested in the following project:\n\nProject: {PROJECT_NAME}\nCategory: {CATEGORY}\nLocation: {LOCATION}\n\nPlease share more details about this project."

    },


    /* =========================================================
       FOOTER
       ========================================================= */
    footer: {

        tagline:
            "Building Projects. Creating Value.",

        copyright:
            "© 2026 Sunima Properties. All rights reserved."
    }

};
