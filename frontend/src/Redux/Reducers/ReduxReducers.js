const initialDoctorState = {
    doctorInfo : null,
    doctorAppointments : [],
    doctorExperience : [],
    doctorEducation : [],
    doctorTime : null,
    doctorPayments : []
}

export const DoctorReducer = (state = initialDoctorState , action)=>{
    switch(action.type){
        case "SET_DOCTOR":
            return ({...state , 
                doctorInfo : action.payload.DoctorInfo,
                doctorAppointments : action.payload.DoctorAppointments ? action.payload.DoctorAppointments : [],
                doctorExperience : action.payload.DoctorExperience,
                doctorEducation : action.payload.DoctorEducation,
                doctorTime : action.payload.DoctorTime ,
                doctorPayments : action.payload.DoctorPayments ? action.payload.DoctorPayments : []

            });
        case "REMOVE_DOCTOR":
            return initialDoctorState;
        default :
            return state;
    }
}

const initialHighestRatedState = {
    HighestRatedDoctors : [],
}

export const HighestReducer = (state = initialHighestRatedState, action)=>{
    switch(action.type) {
        case "HIGHEST_DOCTORS" :
            return ({...state , HighestRatedDoctors: action.payload})
        default :
            return state;
    }
}

const initialSearchState = {
    SearchedDoctors : []
}

export const SearchReducer = (state=initialSearchState , action) =>{
    switch(action.type){
        case "SEARCHED_DOCTORS":
            return ({SearchedDoctors: action.payload});
        case "REMOVE_SEARCHED_DOCTORS":
            return initialSearchState
        default:
            return state;
    }
}

const initialClientState = {
    patientInfo : null,
    patientAppointments : [],
    patientPayments : []
};

export const ClientReducer = (state = initialClientState , action) =>{
    switch(action.type) {
        case "SET_CLIENT":
            return ({...state , 
                patientInfo : action.payload.PatientInfo,
                patientAppointments : action.payload.PatientAppointments,
                patientPayments : action.payload.PatientPayments
            });
        case "REMOVE_CLIENT":
            return initialClientState;
        default : 
            return state;
    }
}

const initalViewState = "Overview"

export const ViewReducter = (state = initalViewState , action)=>{
    switch(action.type){
        case "SET_VIEW" :
            return (state = action.payload);
        default :
            return state;
    }
}