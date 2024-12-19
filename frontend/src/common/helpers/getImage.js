export const getCartImage = (image) => {
    return new URL(`../../assets/img/${image}.svg`, import.meta.url).href;
};