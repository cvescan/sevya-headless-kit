import React from 'react';
import { Lead, LeadStatus } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { MoreHorizontal, Phone, Mail, ExternalLink, Calendar } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LeadsTableProps {
    leads: Lead[];
    onEdit?: (lead: Lead) => void;
    className?: string;
}

export const LeadsTable = ({ leads, onEdit, className }: LeadsTableProps) => {
    const statusConfig: Record<LeadStatus, { label: string, color: string }> = {
        nouveau: { label: 'Nouveau', color: 'bg-blue-100 text-blue-700' },
        contacte: { label: 'Contacté', color: 'bg-orange-100 text-orange-700' },
        proposition_envoyee: { label: 'Devis envoyé', color: 'bg-purple-100 text-purple-700' },
        gagne: { label: 'Gagné', color: 'bg-emerald-100 text-emerald-700' },
        perdu: { label: 'Perdu', color: 'bg-red-100 text-red-700' },
        non_qualifie: { label: 'Hors-cible', color: 'bg-slate-100 text-slate-700' }
    };

    return (
        <div className={cn("overflow-hidden rounded-2xl border border-slate-200 bg-white dark:bg-slate-950 dark:border-slate-800 shadow-sm", className)}>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
                            <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-400 tracking-wider">Date</th>
                            <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-400 tracking-wider">Prospect</th>
                            <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-400 tracking-wider">Source</th>
                            <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-400 tracking-wider">Statut</th>
                            <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-400 tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {leads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-2 text-xs text-slate-500">
                                        <Calendar className="w-3 h-3" />
                                        {format(new Date(lead.created_at), 'dd MMM yyyy', { locale: fr })}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                                            {lead.firstName} {lead.lastName}
                                        </span>
                                        <div className="flex gap-2 mt-1">
                                            {lead.phone && <Phone className="w-3 h-3 text-slate-300" title={lead.phone} />}
                                            {lead.email && <Mail className="w-3 h-3 text-slate-300" title={lead.email} />}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                                            {lead.source || 'Direct'}
                                        </span>
                                        {lead.gclid && (
                                            <span className="text-[9px] bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 px-1.5 py-0.5 rounded w-fit font-mono">
                                                GCLID
                                            </span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={cn(
                                        "text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tight",
                                        statusConfig[lead.status].color
                                    )}>
                                        {statusConfig[lead.status].label}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button 
                                        onClick={() => onEdit?.(lead)}
                                        className="p-2 hover:bg-white dark:hover:bg-slate-800 rounded-lg border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all text-slate-400 hover:text-[#157f3c]"
                                    >
                                        <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {leads.length === 0 && (
                <div className="p-12 text-center">
                    <p className="text-sm text-slate-500">Aucun lead trouvé.</p>
                </div>
            )}
        </div>
    );
};
