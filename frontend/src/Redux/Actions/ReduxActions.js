export const setDocInfo = (docInfo)=>{
    return {
        type : "SET_DOCTOR",
        payload : docInfo
    };
};

export const setDocNull = ()=>{
    return {
        type : "REMOVE_DOCTOR",
    }
}

export const setClientNull = ()=>{
    return {
        type : "REMOVE_CLIENT",
    }
}

export const setSearchedNull = ()=>{
    return {
        type : "REMOVE_SEARCHED_DOCTORS",
    }
}

export const setHighestDocs = (highestDocsInfo)=>{
    return {
        type : "HIGHEST_DOCTORS",
        payload : highestDocsInfo
    }
}

export const setSearchedDocs = (searchedDocs)=>{
    return {
        type : "SEARCHED_DOCTORS",
        payload : searchedDocs
    }
};

export const setClientInfo = (clientInfo)=> {
    return {
        type : "SET_CLIENT",
        payload : clientInfo
    };
};

export const setView = (view)=>{
    return {
        type : "SET_VIEW",
        payload : view
    }
}

