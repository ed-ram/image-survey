

export const loadState = () => {
    try {
        const serialisedState = localStorage.getItem('state');
        if (serialisedState === null) {
            return undefined;
        }
        /*console.log('loading from localstorage')*/
        return JSON.parse(serialisedState);
    } catch (err) {
        console.log(err)
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        /*console.log(state);*/
        localStorage.setItem('state', serialisedState);
    } catch (err) {
        console.log(`caught this during saveState: ${err}`)
    }
}

/*
// subscribed to the store in index.js - store gets saved  
// automagically on each state change, reloaded on refresh!
*/