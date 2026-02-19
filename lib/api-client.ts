import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_SEVYA_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_SEVYA_API_KEY;
const CLIENT_ID = process.env.NEXT_PUBLIC_SEVYA_CLIENT_ID;

export const sevyaApi = axios.create({
    baseURL: API_URL,
    headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'X-Client-ID': CLIENT_ID,
        'Content-Type': 'application/json',
    }
});

// Helper pour vérifier si on est en mode démo
export const isDemoMode = () => process.env.NEXT_PUBLIC_SEVYA_DEMO_MODE === 'true';
