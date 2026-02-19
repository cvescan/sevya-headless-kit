// Types officiels SEVYA pour le Headless Kit

export type LeadStatus = 'nouveau' | 'contacte' | 'proposition_envoyee' | 'gagne' | 'perdu' | 'non_qualifie';
export type LeadQualificationStatus = 'TO_REVIEW' | 'QUALIFIED' | 'DISQUALIFIED';

export interface Lead {
    id: string;
    name: string;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    phone?: string | null;
    zip_code?: string | null;
    company?: string | null;
    status: LeadStatus;
    source?: string | null;
    amount?: number | null;
    qualification_status: LeadQualificationStatus;
    created_at: string;
    utm_data?: Record<string, unknown> | null;
    gclid?: string | null;
    fbclid?: string | null;
    metadata?: Record<string, unknown> | null;
    landing_page?: string | null;
    conversion_page?: string | null;
    message?: string | null;
    note?: string | null;
    loss_reason?: string | null;
}

export interface UpdateLeadData {
    name?: string;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    phone?: string | null;
    zip_code?: string | null;
    amount?: number | null;
    status?: LeadStatus;
    note?: string | null;
    loss_reason?: string | null;
    company?: string | null;
    landing_page?: string | null;
}

export interface LeadsStatsSummary {
    total: number;
    won: number;
    revenue: number;
    conversionRate: number;
}
