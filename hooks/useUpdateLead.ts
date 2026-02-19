import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sevyaApi, isDemoMode } from '@/lib/api-client';
import { UpdateLeadData } from '@/types';

export const useUpdateLead = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ leadId, data }: { leadId: string, data: UpdateLeadData }) => {
            if (isDemoMode()) {
                console.log(`[DEMO] Lead ${leadId} mis à jour avec :`, data);
                return { success: true };
            }
            const response = await sevyaApi.patch(`/leads/${leadId}`, data);
            return response.data;
        },
        onSuccess: () => {
            // Force le rafraîchissement des données pour que l'UI soit à jour
            queryClient.invalidateQueries({ queryKey: ['leads'] });
        }
    });
};
