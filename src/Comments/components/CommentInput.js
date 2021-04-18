import React from "react";

export default function CommentInput() {
    return (
        <>
        <textarea type = "text" value="Dodaj komentarz..."></textarea>
        <div>
            <button>Anuluj</button>
            <button>Skomentuj</button>
        </div>
        </>
    );
}
