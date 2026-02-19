import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sevyaApi, isDemoMode } from '@/lib/api-client';
import { LeadStatus } from '@/types';

export const useUpdateLeadStatus = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ leadId, status }: { leadId: string, status: LeadStatus }) => {
            if (isDemoMode()) {
                console.log(`[DEMO] Lead ${leadId} passé au statut : ${status}`);
                return { success: true };
            }
            const { data } = await sevyaApi.patch(`/leads/${leadId}`, { status });
            return data;
        },
        onSuccess: () => {
            // Force le rafraîchissement des données
            queryClient.invalidateQueries({ queryKey: ['leads'] });
        }
    });
};
