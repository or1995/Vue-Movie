import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default {
    state() {
        return {
            userId: null,
            username: null,
            token: null,
        }
    },
    getters,
    mutations,
    actions
}