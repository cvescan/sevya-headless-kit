import React from 'react';
import { Lead, LeadStatus } from '../types';
import { LeadCard } from './LeadCard';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MoreHorizontal, Plus } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface KanbanBoardProps {
    leads: Lead[];
    onEdit?: (lead: Lead) => void;
    className?: string;
}

export const KanbanBoard = ({ leads, onEdit, className }: KanbanBoardProps) => {
    const columns: { id: LeadStatus; label: string }[] = [
        { id: 'nouveau', label: 'Nouveaux' },
        { id: 'contacte', label: 'Contactés' },
        { id: 'proposition_envoyee', label: 'Devis envoyés' },
        { id: 'gagne', label: 'Gagnés' },
    ];

    const getLeadsByStatus = (status: LeadStatus) => {
        return leads.filter(lead => lead.status === status);
    };

    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full items-start", className)}>
            {columns.map((column) => {
                const columnLeads = getLeadsByStatus(column.id);
                
                return (
                    <div key={column.id} className="flex flex-col gap-4 min-w-[280px]">
                        {/* Column Header */}
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-2">
                                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">{column.label}</h3>
                                <span className="bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-400 px-1.5 py-0.5 rounded-md">
                                    {columnLeads.length}
                                </span>
                            </div>
                            <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors text-slate-400">
                                <MoreHorizontal className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        {/* Leads List */}
                        <div className="flex flex-col gap-3 p-2 bg-slate-50/50 dark:bg-slate-900/30 rounded-2xl border border-slate-100 dark:border-slate-800 min-h-[500px]">
                            {columnLeads.map((lead) => (
                                <div key={lead.id} onClick={() => onEdit?.(lead)} className="cursor-pointer active:scale-95 transition-transform">
                                    <LeadCard lead={lead} />
                                </div>
                            ))}
                            
                            {columnLeads.length === 0 && (
                                <div className="flex-1 flex items-center justify-center border-2 border-dashed border-slate-100 dark:border-slate-800 rounded-xl">
                                    <p className="text-[10px] font-medium text-slate-300 uppercase tracking-widest text-center px-4">
                                        Glissez un lead ici
                                    </p>
                                </div>
                            )}

                            <button className="w-full py-2 flex items-center justify-center gap-2 text-[10px] font-bold text-slate-400 hover:text-[#157f3c] hover:bg-white dark:hover:bg-slate-800 rounded-xl transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-700 mt-2">
                                <Plus className="w-3 h-3" />
                                AJOUTER UN LEAD
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
