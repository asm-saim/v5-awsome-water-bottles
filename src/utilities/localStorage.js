// get data from localStorage:
const getDataFromLS = () => {

    const getData = localStorage.getItem("cart")
    if (getData) {
        const makeParse = JSON.parse(getData)
        return makeParse
    }
    return []
}

//set item to LS:
const setItemToLS = (cart) => {
    const setData = JSON.stringify(cart)
    localStorage.setItem('cart', setData)
}

//add item to local Storage:
const addItemToLs = (id) => {
    const cart = getDataFromLS()
    const newCart = [...cart, id]
    setItemToLS(newCart)
}

//remove clicked id from local storage:
const removeCartFromLocalStorage = (id) => {
    const storedData = getDataFromLS()
    const remainingData = storedData.filter(bottleId => bottleId !== id)
    setItemToLS(remainingData)

}

export {
    getDataFromLS as getStoreCart,
    addItemToLs as addStoreCart,
    removeCartFromLocalStorage as removeFromLS
}