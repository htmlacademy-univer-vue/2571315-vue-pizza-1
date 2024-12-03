export const calculatePrice = (item) => {
    if (Array.isArray(item)) {
        return item.reduce((acc, item) => {
            return acc += calculatePrice(item) * item.count
        }, 0)
    }
    else if (item.hasOwnProperty('price')) {
        return item.price
    }
    else if (item.hasOwnProperty('multiplier')) {
        return 0
    }
    else return 0
}