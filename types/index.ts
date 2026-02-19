// Types officiels SEVYA pour le Headless Kit

export type LeadStatus = 'nouveau' | 'contacte' | 'proposition_envoyee' | 'gagne' | 'perdu' | 'non_qualifie';
export type LeadQualificationStatus = 'TO_REVIEW' | 'QUALIFIED' | 'DISQUALIFIED';

export interface Lead {
    id: string;
    name: string;
    firstName?: string | null;
    lastName?: string | null;
    email?: string;
    phone?: string;
    zip_code?: string;
    company?: string | null;
    status: LeadStatus;
    source?: string;
    amount?: number | null;
    qualification_status: LeadQualificationStatus;
    created_at: string;
    utm_data?: Record<string, unknown>;
    gclid?: string;
    metadata?: Record<string, unknown>;
    landing_page?: string;
    message?: string;
    note?: string;
}

export interface Client {
    id: string;
    name: string;
    website?: string;
    contact_email?: string;
    created_at: string;
    status?: 'active' | 'inactive';
}

export interface LeadsStatsSummary {
    total: number;
    won: number;
    revenue: number;
    conversionRate: number;
}
