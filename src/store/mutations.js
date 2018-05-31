const INITIALIZE_DATA = 'INITIALIZE_DATA'
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'

export default {
  [INITIALIZE_DATA] (state) {
    state.itemNum = 1
    state.answerid = []
  },
  [ADD_ITEMNUM] (state) {
    state.itemNum += 1
  },
  [REMBER_ANSWER] (state, id) {
    state.answerid.push(id)
  }
}
