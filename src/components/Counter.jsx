import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";

export default function Counter(){
    const [text,settext] = useState("");
    const stats ={
        numberOfWords:text.split(/\s/).filter((word)=>word !== "").length,
        numberOfCharacters :text.length,
        instagramOfCharacters: 280-text.length,
        facebookOfCharacters:2200-text.length
    }

    return (
        <main className="container">
            <Textarea text={text} settext={settext}/>
            <Stats 
            stats={stats}
            />
        </main>
    )
}