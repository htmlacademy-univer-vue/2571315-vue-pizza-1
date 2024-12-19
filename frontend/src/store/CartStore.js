import { defineStore } from 'pinia';
import axios from "axios";
import {ref} from "vue";

export const useCartStore = defineStore('cart', () =>{
    // State

    const misc = ref([])

    // Actions

    // Getters
    const fetchMisc = async () => {
        try {
            const result =
                await axios.get(`${import.meta.env.VITE_API_BASE_URL}/misc`);

            if (result.status >= 200 && result.status < 300) {
                misc.value = result.data
            }

        }
        catch (error) {
            console.error(error)
        }
    }
    return {
        misc,
        fetchMisc
    }
});
