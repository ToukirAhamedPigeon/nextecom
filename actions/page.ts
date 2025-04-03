"use server";

import axios from "axios";

export const getPages = async () => {
    try {
        const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/public/pages');
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
}
