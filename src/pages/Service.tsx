import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Service() {
    const hello = useContext(UserContext);
    return (
        <div>Service {hello?.getA} </div>
    )
}
