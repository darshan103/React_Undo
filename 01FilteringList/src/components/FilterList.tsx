import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

type User = {
    id: number;
    name: string;
    email: string;
    website: string;
}

const FilterList = () => {
    const [filterList, setFilterList] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setFilterList(res.data);
        };
        fetchData();
    }, []);

    return (
        <div className="filter-list">
            {filterList.map((user)=>{
                return <UserCard key={user.id} name={user.name} email={user.email} website={user.website} />
            })}
        </div>
    )
}

export default FilterList;