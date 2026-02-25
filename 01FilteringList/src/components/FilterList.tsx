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
    const [filterOriginalList, setFilterOriginalList] = useState<User[]>([]);
    const [filterList, setFilterList] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/users");
            setFilterOriginalList(res.data);
            setFilterList(res.data);
        };
        fetchData();
    }, []);

    const handleSearch = () => {
        const filteredList = filterOriginalList.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilterList(filteredList);
    }

    //-----------Core Concept of Filter Method------------

    // const arr = [1, 2, 3, 4];
    // const filtered = arr.filter(num => num > 2);
    // console.log(arr);       // [1, 2, 3, 4]  ✅ unchanged
    // console.log(filtered);  // [3, 4]        ✅ new array

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

                <button onClick={() => handleSearch()}>Search</button>
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