import { useModel } from '@/.umi/plugin-model/useModel';

export default function(initialState) {
    const { initialState, loading, error, refresh, setInitialState } = useModel('@@initialState');
    // const { userId, role } = initialState;
    const temp = initialState;
    console.log("🚀 ~ file: access.ts ~ line 4 ~ function ~ temp", temp)
    
    
   
    return {
        canReadFoo: temp === 'CUSTOMER',
        canUpdateFoo: temp === 'ADMIN',
        // canDeleteFoo: temp => {
        //     return foo.ownerId === userId;
        // },
    };
  }