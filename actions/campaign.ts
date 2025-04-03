"use server";

import axios from "axios";

export const getCampaigns = async (slug: string) => {
    try {
        const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/public/slides?slug=' + slug);
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
}
