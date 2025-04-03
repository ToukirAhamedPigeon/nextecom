"use server";

import axios from "axios";

export const getCategories = async () => {
    try {
        const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/public/categories');
        return res.data.data;
    } catch (error) {
        console.log(error);
    }
}
