import React, { useMemo } from 'react'
import { useAccess, Access } from 'umi';
import { getCurrentUserInfo } from "@/services/APILibrary"
import { useModel } from '@/.umi/plugin-model/useModel';

const getMe = (props) => {
    const [data, setData] = React.useState()

    const { initialState, loading, error, refresh, setInitialState } = useModel('@@initialState');
    console.log("🚀 ~ file: index.tsx ~ line 9 ~ getMe ~ initialState", initialState.role)

    async function getData() {
        const res = await getCurrentUserInfo()
        console.log("🚀 ~ file: index.tsx ~ line 9 ~ getData ~ res", res)
        // setData(res)
    }

    // useMemo(() => {
    //     getData()
    // }, [])

    // const {foo} = props;
    // const access = useAccess();
   

    return (
        // <>
        //     {/* {getData()} */}
        //     <h1>Hi there...</h1>
        //     {/* <p>data = {data}</p> */}
        // </>
        // <div>
        //     <Access
        //         accessible={access.canReadFoo}
        //         fallback={<div>Can not read foo content.</div>}
        //     >
        //         Foo content.
        //     </Access>
        //     <Access
        //         accessible={access.canUpdateFoo}
        //         fallback={<div>Can not update foo.</div>}
        //     >
        //         Update foo.
        //     </Access>
        //     <Access
        //         accessible={access.canDeleteFoo(foo)}
        //         fallback={<div>Can not delete foo.</div>}
        //     >
        //         Delete foo.
        //     </Access>
        // </div>
        <div></div>
    )
}

export default getMe