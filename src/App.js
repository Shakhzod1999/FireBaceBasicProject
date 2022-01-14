import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebar-config";

function App() {
    const [newName, setNewName] = useState("");
    const [newAge, setNewAge] = useState(0);
    const [users, setUsers] = useState([]);
    const userCollectionRef = collection(db, "users");

    const createUser = async () => {
        await addDoc(userCollectionRef, { name: newName, age: Number(newAge) });
    };

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id);
        await deleteDoc(userDoc);
    };

    const updateUser = async (id, age) => {
        const userDoc = doc(db, "users", id);
        const newFields = { age: age + 1 };
        await updateDoc(userDoc, newFields);
    };

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
    }, []);

    return (
        <div className="App">
            <input
                placeholder="Name..."
                onChange={(event) => setNewName(event.target.value)}
            />
            <input
                type="text"
                placeholder="Age..."
                onChange={(event) => setNewAge(event.target.value)}
            />
            <button onClick={createUser}>Create user</button>
            {users.map((user) => {
                return (
                    <div>
                        <h1>Name: {user.name}</h1>
                        <h2>Age: {user.age}</h2>
                        <button
                            onClick={() => {
                                updateUser(user.id, user.age);
                            }}
                        >
                            Incrice Age
                        </button>
                        <button
                            onClick={() => {
                                deleteUser(user.id);
                            }}
                        >
                            Delete user
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default App;
