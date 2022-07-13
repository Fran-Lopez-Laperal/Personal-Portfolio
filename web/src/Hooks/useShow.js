import { useState } from "react";
import WhoIAm from "../components/WhoIAm/WhoIAm";

function useShow() {

    const [show, setShow] = useState(false);

    function handleShow() {
        setShow(!show ? <WhoIAm /> : false)
    }

    return {
        show,
        handleShow
    }

}


export default useShow

