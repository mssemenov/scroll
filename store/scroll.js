export const state = () =>({
    QuantityScroll: 1, // количество скролинга
})
// mutations ---------------------
export const mutations  =  {
    AddQuantityScroll(state){ // прибавить количество скролинга на 1
        state.QuantityScroll++;
    },
}
export const getters = {
    GetQuantityScroll: s => s.QuantityScroll
}