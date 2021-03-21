export default function(initialState: any) {
    // Lấy user infomation (role) từ app.ts
    const { id: userId, role } = initialState;
    
    return {
        canReadFoo: role === 'CUSTOMER',
        canUpdateFoo: role === 'ADMIN',
        // canDeleteFoo: temp => {
        //     return foo.ownerId === userId;
        // },
    };
  }