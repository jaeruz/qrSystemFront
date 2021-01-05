export default (purpose=[], action) => {
    switch (action.type) {
        case 'FETCH_PURPOSES':
            return action.payload
        case 'CREATE':

            return [...purpose,action.payload]
        default:
            return purpose
    }
    
}