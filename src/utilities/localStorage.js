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
export { getDataFromLS, addItemToLs }