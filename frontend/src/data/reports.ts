export interface Report {
    id: string;
    category: string;
    title: string;
    description: string;
    fullDescription?: string;
    date: string;
    priceAmount: number;
    priceLabel: string;
    pages?: number;
    highlights?: string[];
    tableOfContents?: { section: string; page: number }[];
    methodology?: string;
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
        id: 'thermal-interface',
        category: 'Technology',
        title: 'Thermal Interface Materials Market Size, Share & Trends Analysis Report By Product (Tapes & Films, Metal, Elastomeric Pads, Greases And Adhesives, Phase Change Materials), By Application (Telecom, Computers, Medical Devices, Industrial Machinery), By Region, And Segment Forecasts, 2026 - 2033',
        description: 'The thermal interface materials market size was estimated at USD 4.56 billion in 2025 and is expected to reach USD 11.17 billion by 2033, registering a CAGR of 12.0% from 2026 to 2033. The increasing use of electronic consumer products, such as smartphones and laptops, the adoption of automation i...',
        fullDescription: 'Thermal Interface Materials (TIMs) are essential for heat management in electronics. This report covers the growing demand for TIMs in 5G infrastructure, EVs, and consumer electronics.',
        date: 'January 23, 2026',
        priceAmount: 2999,
        priceLabel: '$2,999',
        pages: 128,
        highlights: [
            'Analysis of heat dissipation challenges in next-gen CPUs',
            'Growth trends in liquid metal and phase change materials',
            'Impact of ESG regulations on material selection'
        ],
        tableOfContents: [
            { section: 'Introduction', page: 1 },
            { section: 'Market Segmentation', page: 15 },
            { section: 'Competitive landscape', page: 60 }
        ],
        methodology: 'Standard primary and secondary research methods.'
    },
    {
        id: 'us-egg-market',
        category: 'Consumer Goods',
        title: 'U.S. Egg Market Size, Share & Trends Analysis Report By Product (Brown Eggs, White Eggs), By Production Category (Cage-Free, Organic, Pasture-Raised), By End Use Application (B2B, B2C), And Segment Forecasts, 2026 - 2033',
        description: 'The U.S. egg market size was estimated at USD 51.70 billion in 2025 and is projected to reach USD 84.60 billion by 2033, growing at a CAGR of 6.4% from 2026 to 2033. The demand for eggs and egg products in the U.S. is increasing as consumers prefer affordable, nutrient-dense protein sources that a...',
        date: 'January 22, 2026',
        priceAmount: 1999,
        priceLabel: '$1,999'
    },
    {
        id: 'renewable-energy',
        category: 'Energy & Power',
        title: 'Global Renewable Energy Market Outlook 2026-2033: Solar, Wind, and Hydro Transformation',
        description: 'As the world pivots toward sustainability, renewable energy sources are seeing unprecedented growth. This report analyzes the regulatory shifts, investment flows, and technological breakthroughs across the solar and wind industries...',
        date: 'January 15, 2026',
        priceAmount: 3200,
        priceLabel: '$3,200'
    }
];
