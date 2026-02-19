import React, { useState } from 'react';
import { Lead, LeadStatus, UpdateLeadData } from '../types';
import { useUpdateLead } from '../hooks/useUpdateLead';
import { Save, X, Phone, User, Mail, Tag, MessageSquare, AlertCircle } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface LeadEditFormProps {
    lead: Lead;
    onClose?: () => void;
    className?: string;
}

export const LeadEditForm = ({ lead, onClose, className }: LeadEditFormProps) => {
    const { mutate: updateLead, isPending } = useUpdateLead();
    const [formData, setFormData] = useState<UpdateLeadData>({
        firstName: lead.firstName || '',
        lastName: lead.lastName || '',
        phone: lead.phone || '',
        email: lead.email || '',
        status: lead.status,
        note: lead.note || '',
        amount: lead.amount || 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'amount' ? parseFloat(value) : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        updateLead({ leadId: lead.id, data: formData }, {
            onSuccess: () => {
                if (onClose) onClose();
            }
        });
    };

    const statuses: { value: LeadStatus; label: string }[] = [
        { value: 'nouveau', label: 'Nouveau' },
        { value: 'contacte', label: 'Contacté' },
        { value: 'proposition_envoyee', label: 'Devis envoyé' },
        { value: 'gagne', label: 'Gagné' },
        { value: 'perdu', label: 'Perdu' },
        { value: 'non_qualifie', label: 'Hors-cible' },
    ];

    return (
        <form onSubmit={handleSubmit} className={cn("bg-white dark:bg-slate-950 p-6 rounded-2xl border shadow-xl space-y-6 max-w-lg w-full", className)}>
            <div className="flex justify-between items-center border-b pb-4">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-[#157f3c]" />
                    Modifier le lead
                </h3>
                {onClose && (
                    <button type="button" onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                        <X className="w-5 h-5 text-slate-400" />
                    </button>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Prénom</label>
                    <input 
                        name="firstName"
                        value={formData.firstName || ''}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-xl border bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-[#157f3c] outline-none text-sm transition-all"
                        placeholder="Ex: Jean"
                    />
                </div>
                <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Nom</label>
                    <input 
                        name="lastName"
                        value={formData.lastName || ''}
                        onChange={handleChange}
                        className="w-full h-10 px-3 rounded-xl border bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-[#157f3c] outline-none text-sm transition-all"
                        placeholder="Ex: Durand"
                    />
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border flex items-center justify-center text-slate-400 group-focus-within:text-[#157f3c] transition-colors">
                        <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                        <input 
                            name="phone"
                            value={formData.phone || ''}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-transparent focus:border-[#157f3c] outline-none text-sm py-1 transition-all"
                            placeholder="Numéro de téléphone"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border flex items-center justify-center text-slate-400 group-focus-within:text-[#157f3c] transition-colors">
                        <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                        <input 
                            name="email"
                            value={formData.email || ''}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-transparent focus:border-[#157f3c] outline-none text-sm py-1 transition-all"
                            placeholder="Email"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border flex items-center justify-center text-slate-400 group-focus-within:text-[#157f3c] transition-colors">
                        <Tag className="w-4 h-4" />
                    </div>
                    <div className="flex-1 space-y-1">
                        <select 
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-transparent focus:border-[#157f3c] outline-none text-sm py-1 transition-all appearance-none cursor-pointer"
                        >
                            {statuses.map(s => (
                                <option key={s.value} value={s.value}>{s.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase text-slate-400 tracking-wider flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    Notes de suivi
                </label>
                <textarea 
                    name="note"
                    value={formData.note || ''}
                    onChange={handleChange}
                    rows={3}
                    className="w-full p-3 rounded-xl border bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-[#157f3c] outline-none text-sm transition-all resize-none"
                    placeholder="Ajoutez un commentaire sur l'échange..."
                />
            </div>

            <div className="pt-4 flex gap-3">
                <button
                    type="submit"
                    disabled={isPending}
                    className="flex-1 h-11 bg-[#157f3c] hover:bg-[#157f3c]/90 disabled:opacity-50 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#157f3c]/20"
                >
                    {isPending ? (
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <Save className="w-4 h-4" />
                    )}
                    Enregistrer les modifications
                </button>
            </div>
            
            <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1 pt-2">
                <AlertCircle className="w-3 h-3" />
                Les modifications sont synchronisées avec vos algorithmes publicitaires.
            </p>
        </form>
    );
};
