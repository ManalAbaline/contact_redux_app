const initialState = {
    contacts: [
        {
          id: 1,
          name: 'Manal Abaline',
          email: 'mabal086@uottawa.ca',
          phone: '613 429 8301'
        },
        {
          id: 2,
          name: 'person2',
          email: 'p2@gmail.com',
          phone: '613 000 0000'
        },
        {
          id: 3,
          name: 'person3',
          email: 'p3@gmail.com',
          phone: '613 999 0000'
        },
        {
            id: 4,
            name: 'person4',
            email: 'p4@gmail.com',
            phone: '613 959 0000'
          }
      ]
  } ;

export default function (state = initialState, action) {

    switch(action.type) {

       // case 'Get_contacts':{
         //   return state
        //
    //or}

        case 'GET_CONTACTS':
        return {
            ...state
        }
        
        
        default: {
            return state;
        }
    }



}