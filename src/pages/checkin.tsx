import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { checkinUser } from "../api/checkinUser";
import { useNavigate } from "react-router-dom";

export default function Checkin() {
    const [name, setName] = useState("");
    const [checkinCode, setCheckinCode] = useState("");
    const navigate = useNavigate();

    const handleCheckin = async () => {
        try {
            if (name && checkinCode) {
                const response = await checkinUser(name || "Anonymous");
                localStorage.setItem('checkinId', response.id);
                console.log(response.id);
                navigate(`/inside/8ef92bb0-a65b-46a1-bf7d-2bf4cd3c8419`);
            } else {
                // Lógica para lidar com campos em branco, se necessário
            }
        } catch (error) {
            console.error('Error during check-in:', error);
        }
    };

    return (
        <div className="min-h-screen bg-[#111118]">
            <div className="flex flex-col w-full gap-4 p-4 items-center">
                <h1 className="text-white font-medium text-xl"> Vocal Club Karaoke</h1>
                <Input
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder="Código Checkin"
                    value={checkinCode}
                    onChange={(e) => setCheckinCode(e.target.value)}
                />
                <Button
                    color="roxo"
                    outline
                    label="Entrar"
                    onClick={handleCheckin}
                />
            </div>
        </div>
    )
}
