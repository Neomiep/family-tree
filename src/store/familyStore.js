import { observable, action, computed } from "mobx";

class FamilyStore {
    @observable users = [];
}

const store = new FamilyStore();
export default store;