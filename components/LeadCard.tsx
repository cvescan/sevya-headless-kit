import React from 'react';
import { Lead } from '../types';
import { Phone, Mail, MapPin } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LeadCardProps {
    lead: Lead;
    className?: string;
}

export const LeadCard = ({ lead, className }: LeadCardProps) => {
    const statusColor = {
        nouveau: 'bg-blue-100 text-blue-700',
        gagne: 'bg-emerald-100 text-emerald-700',
        perdu: 'bg-red-100 text-red-700',
        contacte: 'bg-orange-100 text-orange-700',
        proposition_envoyee: 'bg-purple-100 text-purple-700',
        non_qualifie: 'bg-slate-100 text-slate-700'
    }[lead.status];

    return (
        <div className={cn("p-4 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow", className)}>
            <div className="flex justify-between items-start mb-3">
                <h4 className="font-bold text-slate-900">{lead.name}</h4>
                <div className={cn("text-[10px] px-2 py-0.5 rounded-full font-bold uppercase", statusColor)}>
                    {lead.status.replace('_', ' ')}
                </div>
            </div>

            <div className="space-y-2 mb-4">
                {lead.phone && (
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Phone className="w-3 h-3" />
                        {lead.phone}
                    </div>
                )}
                {lead.email && (
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Mail className="w-3 h-3" />
                        {lead.email}
                    </div>
                )}
                {lead.zip_code && (
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                        <MapPin className="w-3 h-3" />
                        {lead.zip_code}
                    </div>
                )}
            </div>

            <div className="pt-3 border-t flex justify-between items-center">
                <div className="text-[10px] text-slate-400 font-medium">
                    Source: <span className="text-slate-600">{lead.source || 'Direct'}</span>
                </div>
                {lead.gclid && (
                    <div className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded font-mono">
                        GCLID
                    </div>
                )}
            </div>
        </div>
    );
};
