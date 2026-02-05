import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Seeding database...');

    const hashedPassword = await bcrypt.hash('password123', 10);

    // Create an Admin User
    const admin = await prisma.user.upsert({
        where: { email: 'admin@marketrevolution.com' },
        update: {
            password: hashedPassword,
        },
        create: {
            email: 'admin@marketrevolution.com',
            name: 'Admin User',
            password: hashedPassword,
            role: 'ADMIN',
        },
    });

    console.log(`✅ Admin user created: ${admin.email}`);

    // Create some initial reports
    const reports = [
        {
            id: 'ai-diagnostics',
            category: 'Healthcare',
            title: 'Artificial Intelligence In Diagnostics Market Size, Share & Trends Analysis Report 2026 - 2033',
            description: 'The global artificial intelligence in diagnostics market size was estimated at USD 1.97 billion in 2025 and is projected to reach USD 9.68 billion by 2033.',
            date: 'January 23, 2026',
            priceAmount: 2499,
            priceLabel: '$2,499',
            pages: 145,
            summaryContent: '<h2>Executive Summary</h2><p>The AI in diagnostics market is witnessing unprecedented growth due to advancements in deep learning...</p>',
        },
        {
            id: 'thermal-interface',
            category: 'Technology',
            title: 'Thermal Interface Materials Market Size, Share & Trends Analysis Report 2026 - 2033',
            description: 'The thermal interface materials market size was estimated at USD 4.56 billion in 2025 and is expected to reach USD 11.17 billion by 2033.',
            date: 'January 23, 2026',
            priceAmount: 2999,
            priceLabel: '$2,999',
            pages: 128,
            summaryContent: '<h2>Market Overview</h2><p>Increasing demand for efficient heat dissipation in electronics is driving the TIM market...</p>',
        }
    ];

    for (const report of reports) {
        await prisma.report.upsert({
            where: { id: report.id },
            update: {},
            create: report,
        });
    }

    console.log('✅ Initial reports seeded');
    console.log('🌱 Seeding complete!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
