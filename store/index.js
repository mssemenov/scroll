export const state = () => ({
    photos: [],
})
export const mutations = {
    _SetPhotos(store, data) {
        store.photos.push(data);
    }
}
export const actions = {
    async _AxiosPhotos({ commit }, page) {
        let limit = 30;
        let data = 
            await this.$axios.$get
                (`photos?_page=${page}
                &_limit=${limit}`);
        data.forEach(element => {
            commit("_SetPhotos", element);
        });
        if(data.length === 0){ // проверка что есть данные
            return true;
        }else{
            return false;
        }
    }
}
