import { defineStore } from 'pinia';
import {ref} from "vue";
import axios from "axios";
import {normalize} from "@/common/helpers/normalize";

export const usePizzaStore = defineStore('pizza', () =>{
    // State

    const pizzaComponents = ref({
        dough: [],
        ingredients: [],
        sizes: [],
        sauces: []
    })

    // Actions

    const fetchAll = async () => {
        const pizza = ['dough', 'ingredients', 'sizes', 'sauces'];

        try {
            const results =
                await Promise.all(
                    pizza.map(item => axios.get(`${import.meta.env.VITE_API_BASE_URL}/${item}`))
                );
            pizza.forEach((item, index) => {
                pizzaComponents.value[item] = normalize(results[index].data, item)
            });
        }
        catch (error) {
            console.error(error)
        }
    }

    // Getters

    return {
        fetchAll,
        pizzaComponents,
    }
});
