import {defineStore} from 'pinia';
import {computed, ref} from "vue";
import {calculatePrice} from "@/common/helpers/calculatePrice";
export const useDataStore = defineStore('data', () =>{
    // State
    const pizzaCart = ref({
        dough: {},
        ingredients: [],
        size: {},
        sauce: {},
        name: ''
    })
    // Actions

    // Getters

    const getPrice = computed(() => {
        const price = Object.values(pizzaCart.value).reduce((acc, item) => {
            return acc += calculatePrice(item)
        }, 0)
        return price * (pizzaCart.value.size.multiplier ?? 1)
    })

    return {
        getPrice,
        pizzaCart
    }
});
