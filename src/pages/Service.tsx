
import { useUser } from "../context/UserContext";

export default function Service() {
    const { username } = useUser()

    return (
        <div>Service {username} </div>
    )
}
