<template>
  <form action="test.html" method="post" class="layout-form">
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>

        <!-- <div class="sheet cart__empty">
          <p>В корзине нет ни одного товара</p>
        </div> -->
        <ul class="cart-list sheet">
          <li class="cart-list__item">
            <CartItem />
          </li>
        </ul>
        <div class="cart__additional">
          <ul class="additional-list" v-if="misc.length">
            <CartAdditionalItem v-for="product in misc"
                                :product="product.name"
                                :price="product.price"
                                :img="product.image.split('/').at(-1).slice(0, -4)" v-model="totalPrice.misc[product.id - 1]"
            />
          </ul>
        </div>

        <OrderOptions />
      </div>
    </main>
    <AppFooter v-model="totalPrice"/>
  </form>

</template>

<script setup>
import AppFooter from "@/layouts/AppFooter.vue";
import CartItem from "@/modules/cart/CartItem.vue";
import CartAdditionalItem from "@/modules/cart/CartAdditionalItem.vue";
import OrderOptions from "@/modules/cart/OrderOptions.vue";
import {useCartStore} from "@/store/CartStore";
import {onBeforeMount, ref} from "vue";
import {storeToRefs} from "pinia";

const miscStore = useCartStore()

const {fetchMisc} = miscStore;
const {misc} = storeToRefs(miscStore);

onBeforeMount(async () => {
  await fetchMisc();
  console.log(misc.value)
})

const totalPrice = ref({
  order: [],
  misc: []
});
</script>

<style lang="scss">
@import "@/assets/scss/app";
@import '@/assets/scss/blocks/cart';
@import '@/assets/scss/blocks/cart-form';
@import '@/assets/scss/blocks/cart-list';
@import '@/assets/scss/blocks/product';
@import '@/assets/scss/blocks/additional-list';
@import '@/assets/scss/layout/container';
@import '@/assets/scss/layout/main';
@import '@/assets/scss/layout/layout-form';



</style>