export interface Report {
    id: string;
    category: string;
    title: string;
    description: string;
    fullDescription?: string; // Rich text
    date: string;
    priceAmount: number;
    priceLabel: string;
    pages?: number;
    highlights?: string[];
    tableOfContents?: { section: string; page: number }[];
    methodology?: string; // Rich text

    // New Rich Text Section content
    summaryContent?: string; // Rich text
    tocContent?: string;      // Rich text (alternative to tableOfContents array)
    segmentationContent?: string; // Rich text
    highlightsContent?: string; // Rich text
}

export interface Inquiry {
    id: string;
    reportId: string;
    reportName: string;
    name: string;
    email: string;
    phone: string;
    date: string;
    status: 'new' | 'contacted' | 'closed';
}

export const allReports: Report[] = [
    {
        id: 'ai-diagnostics',
        category: 'Healthcare',
        title: 'Artificial Intelligence In Diagnostics Market Size, Share & Trends Analysis Report By Component (Software, Hardware, Services), By Diagnosis Type (Cardiology, Oncology, Pathology, Radiology, Chest And Lung, Neurology), By Region, And Segment Forecasts, 2026 - 2033',
        description: 'The global artificial intelligence in diagnostics market size was estimated at USD 1.97 billion in 2025 and is projected to reach USD 9.68 billion by 2033, growing at a CAGR of 21.74% from 2026 to 2033. Market growth is driven by advancements in machine learning and deep learning, enabling faster...',
        fullDescription: 'This comprehensive market analysis explores the rapid transformation of the global healthcare sector, driven by AI integration, telemedicine expansion, and personalized medicine. Our research provides deep insights into emerging market trends, competitive landscapes, and future growth projections for the next five years.',
        date: 'January 23, 2026',
        priceAmount: 2499,
        priceLabel: '$2,499',
        pages: 145,
        highlights: [
            'Comprehensive analysis of AI adoption in clinical settings',
            'Market share breakdown of top 10 global healthcare providers',
            'Regional growth forecasts for North America, APAC, and EMEA',
            'Regulatory impact assessment on digital health technologies',
            'Investment trends and venture capital flow in health-tech'
        ],
        tableOfContents: [
            { section: 'Executive Summary', page: 5 },
            { section: 'Market Dynamics & Drivers', page: 12 },
            { section: 'Competitive Landscape', page: 45 },
            { section: 'Regional Market Analysis', page: 78 },
            { section: 'Future Outlook & Projections', page: 110 },
            { section: 'Methodology', page: 140 }
        ],
        methodology: 'Our research methodology combines primary interviews with industry experts, secondary data analysis from reliable trade publications, and proprietary quantitative modeling to ensure the highest degree of accuracy.'
    },
    {
        id: 'telemedicine-outlook',
        category: 'Healthcare',
        title: 'Evolution of Telemedicine in Emerging Markets: 2025 Outlook and Growth Opportunities',
        description: 'Telemedicine is revolutionizing healthcare access in developing regions. This report provides a detailed breakdown of infra requirements, regulatory hurdles, and investment landscapes in APAC and Latin America...',
        date: 'January 10, 2026',
        priceAmount: 1899,
        priceLabel: '$1,899',
        pages: 110
    }
];
