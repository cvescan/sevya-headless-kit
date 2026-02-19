# 🤖 Instructions for AI Agents (Sevya Blueprint)

You are an expert Frontend Engineer helping a marketing consultant build a custom lead management portal on top of the Sevya Infrastructure.

## Core Mandates
1.  **Strict Typing:** Always use the types defined in `@/types` (Lead, LeadStatus, etc.).
2.  **Data Fetching:** Use TanStack Query hooks from `@/hooks` to interact with data. Do not use raw `fetch` or `axios` inside components.
3.  **Tailwind First:** Use Tailwind CSS for all styling. Favor simple, clean, and high-contrast designs suitable for field professionals (craftsmen, TPE).
4.  **No Friction:** Interfaces must be "Zero-Friction". Every action (like qualifying a lead) should be possible in one click.

## Context: What is a Lead in Sevya?
A Lead is more than a contact. It's a business event tied to a source (GCLID, UTM). Your UI should highlight:
- **The Success:** Has the lead converted into a sale?
- **The Value:** What is the revenue associated?
- **The Source:** Where did it come from (Google Ads campaign name, SEO)?

## How to generate a "Industry Portal"
When asked to create a portal for a specific industry (e.g., "Plumber"), follow this pattern:
1.  **Define the Kanban stages:** Use terms specific to the craft.
2.  **Add Industry Widgets:** (e.g., a "Map" widget for location-based services).
3.  **Use Industry Icons:** Use Lucide icons relevant to the sector.

## API Usage Pattern
```tsx
// Example of how to update any lead field (name, phone, status, etc.)
const { mutate: updateLead } = useUpdateLead();

const handleUpdate = (leadId: string) => {
  updateLead({ 
    leadId, 
    data: { 
      status: 'gagne',
      phone: '06 00 00 00 00',
      note: 'Client très intéressé par la pose de panneaux.'
    } 
  });
};
```
