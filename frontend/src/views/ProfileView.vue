<template>
  <div class="layout__content">
    <div class="layout__title">
      <h1 class="title title--big">Мои данные</h1>
    </div>

    <div class="user">
      <img
        :src="getPublicImage(currentUser.avatar)"
        :alt="currentUser.name"
        width="72"
        height="72"
      />
      <div class="user__name">
        <span>{{ currentUser.name }}</span>
      </div>
      <p class="user__phone">
        Контактный телефон: <span>{{ currentUser.phone }}</span>
      </p>
    </div>

    <div class="layout__address">
      <div
        v-for="address in userAddresses"
        :key="address.id"
        class="sheet address-form"
      >
        <div class="address-form__header">
          <b>{{ address.name }}</b>
          <div class="address-form__edit">
            <button type="button" class="icon" @click="handleEdit(address)">
              <span class="visually-hidden">Изменить адрес</span>
            </button>
          </div>
        </div>
        <template v-if="editingAddress.id !== address.id">
          <p>
            {{
              `${address.street}, д. ${address.building}, кв. ${address.flat}`
            }}
          </p>
          <small>{{ address.comment }}</small>
        </template>
        <template v-else>
          <div class="address-form__wrapper">
            <div class="address-form__input">
              <label class="input">
                <span>Название адреса*</span>
                <input
                  v-model="editingAddress.name"
                  type="text"
                  name="addr-name"
                  placeholder="Введите название адреса"
                  required
                />
              </label>
            </div>
            <div class="address-form__input address-form__input--size--normal">
              <label class="input">
                <span>Улица*</span>
                <input
                  v-model="editingAddress.street"
                  type="text"
                  name="addr-street"
                  placeholder="Введите название улицы"
                  required
                />
              </label>
            </div>
            <div class="address-form__input address-form__input--size--small">
              <label class="input">
                <span>Дом*</span>
                <input
                  v-model="editingAddress.building"
                  type="text"
                  name="addr-house"
                  placeholder="Введите номер дома"
                  required
                />
              </label>
            </div>
            <div class="address-form__input address-form__input--size--small">
              <label class="input">
                <span>Квартира</span>
                <input
                  v-model="editingAddress.flat"
                  type="text"
                  name="addr-apartment"
                  placeholder="Введите № квартиры"
                />
              </label>
            </div>
            <div class="address-form__input">
              <label class="input">
                <span>Комментарий</span>
                <input
                  v-model="editingAddress.comment"
                  type="text"
                  name="addr-comment"
                  placeholder="Введите комментарий"
                />
              </label>
            </div>
          </div>

          <div class="address-form__buttons">
            <button
              type="button"
              class="button button--transparent"
              @click="deleteAddress(editingAddress.id)"
            >
              Удалить
            </button>
            <button class="button" @click="editAddress()">Сохранить</button>
          </div>
        </template>
      </div>
    </div>

    <div v-if="createMode" class="layout__address">
      <div class="address-form address-form--opened sheet">
        <div class="address-form__header">
          <b>Новый Адрес</b>
        </div>

        <div class="address-form__wrapper">
          <div class="address-form__input">
            <label class="input">
              <span>Название адреса*</span>
              <input
                v-model="addressForm.name"
                type="text"
                name="addr-name"
                placeholder="Введите название адреса"
                required
              />
            </label>
          </div>
          <div class="address-form__input address-form__input--size--normal">
            <label class="input">
              <span>Улица*</span>
              <input
                v-model="addressForm.street"
                type="text"
                name="addr-street"
                placeholder="Введите название улицы"
                required
              />
            </label>
          </div>
          <div class="address-form__input address-form__input--size--small">
            <label class="input">
              <span>Дом*</span>
              <input
                v-model="addressForm.building"
                type="text"
                name="addr-house"
                placeholder="Введите номер дома"
                required
              />
            </label>
          </div>
          <div class="address-form__input address-form__input--size--small">
            <label class="input">
              <span>Квартира</span>
              <input
                v-model="addressForm.flat"
                type="text"
                name="addr-apartment"
                placeholder="Введите № квартиры"
              />
            </label>
          </div>
          <div class="address-form__input">
            <label class="input">
              <span>Комментарий</span>
              <input
                v-model="addressForm.comment"
                type="text"
                name="addr-comment"
                placeholder="Введите комментарий"
              />
            </label>
          </div>
        </div>

        <div class="address-form__buttons">
          <button class="button" @click="sendAddress()">Сохранить</button>
        </div>
      </div>
    </div>

    <div class="layout__button">
      <button
        type="button"
        class="button button--border"
        @click="() => (createMode = !createMode)"
      >
        Добавить новый адрес
      </button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useProfileStore } from "../store/profileStore";
import { useAuthStore } from "../store";
import { getPublicImage } from "@/common/helpers";
import { ref } from "vue";
import { addressesService } from "../services";

const { user: currentUser } = storeToRefs(useAuthStore());

const profileStore = useProfileStore();
const { userAddresses } = storeToRefs(profileStore);
const { fetchAddresses } = profileStore;

const createMode = ref(false);
const addressForm = ref({
  name: "",
  userId: currentUser.value.id,
  street: "",
  building: "",
  flat: "",
  comment: "",
});

const editingAddress = ref({ id: null });
const handleEdit = (address) => {
  if (editingAddress.value.id === address.id) {
    editingAddress.value.id = null;
  } else {
    editingAddress.value = { ...address };
  }
};

const sendAddress = async () => {
  await addressesService.createAddress(addressForm.value);
  await fetchAddresses();
};

const editAddress = async () => {
  await addressesService.updateAddress(editingAddress.value);
  await fetchAddresses();
  editingAddress.value.id = null;
};

const deleteAddress = async () => {
  await addressesService.deleteAddress(editingAddress.value.id);
  await fetchAddresses();
};
</script>

<style lang="scss">
@import "@/assets/scss/app";
@import "@/assets/scss/layout/layout";
@import "@/assets/scss/blocks/address-form";
@import "@/assets/scss/blocks/user";
@import "@/assets/scss/blocks/icon";
</style>
