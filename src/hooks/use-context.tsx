import NavigationContext from "../context/navigation";
import { useContext } from "react";

export const useNavigationContext = () => {
    return useContext(NavigationContext)
}