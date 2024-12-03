import { defineStore } from 'pinia';
import {ref} from "vue";
import axios from "axios";

export const usePizzaStore = defineStore('pizza', () =>{
    // State
    const pizzaComponents = ref({
        dough: [],
        ingredients: [],
        misc: [],
        sizes: [],
        sauces: []
    })

    // Actions

    const fetchAll = async () => {
        const pizza = ['dough', 'ingredients', 'misc', 'sizes', 'sauces'];

        try {
            const results =
                await Promise.all(
                    pizza.map(item => axios.get(`${import.meta.env.VITE_API_BASE_URL}/${item}`))
                );
            pizza.forEach((item, index) => {
                pizzaComponents.value[item] = results[index].data
            });
        }
        catch (error) {
            console.error(error)
        }
    }

    // Getters

    const getPizzaComponent = (component) => {
        return pizzaComponents.value[component];
    }

    return {
        fetchAll,
        getPizzaComponent
    }
});
