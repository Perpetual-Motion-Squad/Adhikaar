"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddUser = () => {

    const router = useRouter();
    const [input, setInput] = useState({
        name: "",
        voterId: "",
        walletId: "",
    });

    const [visible, setVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/user", input)
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err.response.data);
        }).finally(() => {
            setInput({});
            router.refresh();
        });
    }

    const handleNameChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    const handleVoterIdChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

    const handleWalletIdChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    }

  return (
    <section className="bg-white mt-6 p-4 rounded-lg">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            
            <label className="flex flex-col">
                <span className="text-sm font-semibold text-gray-600">Name</span>
                <input type="text" name="name" value={input.name} onChange={handleNameChange} className="border border-gray-300 p-2 rounded-lg" />
            </label>
            
            <label className="flex flex-col">
                <span className="text-sm font-semibold text-gray-600">Voter ID</span>
                <input type="text" name="voterId" value={input.voterId} onChange={handleVoterIdChange} className="border border-gray-300 p-2 rounded-lg" />
            </label>
            
            <label className="flex flex-col">
                <span className="text-sm font-semibold text-gray-600">Wallet ID</span>
                <input type="text" name="walletId" value={input.walletId} onChange={handleWalletIdChange} className="border border-gray-300 p-2 rounded-lg" />
            </label>
            
            <button type="submit" className="bg-green-500 text-white font-semibold p-2 rounded-lg">Add User</button>

        </form>
    </section>
  )
}

export default AddUser