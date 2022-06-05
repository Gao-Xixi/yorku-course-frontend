import { calculateNewValue } from "@testing-library/user-event/dist/utils"
import { Footer } from "antd/lib/layout/layout"
export default function(){
    return(
        <Footer
            style={{
                width: '100vw',
                textAlign: 'center',
                bottom: 0
            }}
        >
        YorkU Course App ©2022 Created by Xixi Gao
        </Footer>
    )
}