import { useQuery } from '@tanstack/react-query';
import { sevyaApi, isDemoMode } from '@/lib/api-client';
import { MOCK_LEADS } from '@/lib/mock-data';
import { Lead } from '@/types';

export const useLeads = () => {
    return useQuery({
        queryKey: ['leads'],
        queryFn: async () => {
            if (isDemoMode()) {
                // Simule un délai réseau
                await new Promise(r => setTimeout(r, 800));
                return MOCK_LEADS;
            }
            const { data } = await sevyaApi.get<Lead[]>('/leads');
            return data;
        }
    });
};
