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
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setFilterList(res.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <div className="filter-input">
                <input
                    type="text"
                    className="filter-input-user"
                    placeholder="Filter users by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button onClick={() => setFilterList(filterList.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase())))}>Search</button>
            </div>
            
            <div className="filter-list">
                {filterList.map((user) => {
                    return <UserCard key={user.id} name={user.name} email={user.email} website={user.website} />
                })}
            </div>
        </div>
       
    )
}

export default FilterList;