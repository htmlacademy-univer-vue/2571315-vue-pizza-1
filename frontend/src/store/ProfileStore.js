import { defineStore } from 'pinia';
import {ref} from "vue";

export const useProfileStore = defineStore('profile', () =>{
    // State
    const adresses = ref([])
    const user = ref({})
    const orders = ref([])
    // Actions

    // Getters

    return {

    }
});
