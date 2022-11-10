
export const totalCartCost = (items) => items.reduce((acc, item) => acc += item.price, 0)