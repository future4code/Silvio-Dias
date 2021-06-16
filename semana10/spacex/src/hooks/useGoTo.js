import { useHistory } from "react-router-dom";

const useGoTo = () => {
    const history = useHistory()

    const goToPage = (url,params) => {
        if(!params){
            params = ""
        }
        history.push(`${url}/${params}`);
    }

    return {history,goToPage}
}

export default useGoTo