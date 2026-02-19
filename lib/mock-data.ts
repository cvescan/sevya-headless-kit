import { Lead } from '../types';

export const MOCK_LEADS: Lead[] = [
    {
        id: '1',
        name: 'Jean-Pierre Durant',
        email: 'jp.durant@email.com',
        phone: '06 12 34 56 78',
        zip_code: '67000',
        company: 'Rénov Alsace',
        status: 'nouveau',
        source: 'Google Ads (PMax)',
        amount: 4500,
        qualification_status: 'TO_REVIEW',
        created_at: new Date().toISOString(),
        message: 'Demande de devis pour isolation toiture.'
    },
    {
        id: '2',
        name: 'Sophie Martin',
        email: 's.martin@email.com',
        phone: '07 88 99 00 11',
        zip_code: '37000',
        status: 'contacte',
        source: 'SEO',
        qualification_status: 'QUALIFIED',
        created_at: new Date(Date.now() - 86400000).toISOString(),
        message: 'Recherche artisan pour pose de carrelage.'
    }
];
