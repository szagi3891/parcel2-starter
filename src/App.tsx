import { observer } from "mobx-react-lite";
import React from "react";
import { Button } from "./Button";

export const App = observer(() => {
    return (
        <div>
            <div>Hello world</div>
            <Button version="version1">Strona główna</Button>
            <Button version="version2">O firmie</Button>
            <Button version="version3">Kontakt</Button>
        </div>
    );
})