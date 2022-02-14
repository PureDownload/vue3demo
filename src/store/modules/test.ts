const test = {
    state: {
        name: ''
    },
    mutations: {
        SET_NAME(state:any, data: String) {
            state.name = data
        }
    },
    actions: {
        setName(obj:any, data:String) {
            obj.commit('SET_NAME', data)
        }
    }
}
export default test