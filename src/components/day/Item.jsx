import React, { useState } from 'react';
import { useStore } from '../../data/store';

const Item = ({ item }) => {
    // Lokala tillståndsvariabler
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(item.text || '');

    // Funktioner från store
    const updateTodo = useStore(state => state.updateTodo);
    const toggleTodo = useStore(state => state.toggleTodo);
    const removeTodo = useStore(state => state.removeTodo);

    // Hanterar toggle av todo's done-status
    const handleToggle = () => {
        toggleTodo(item.id);
    };

    // Sätter komponenten i redigeringsläge
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // Sparar den redigerade texten och avslutar redigeringsläget
    const handleSaveClick = () => {
        updateTodo(item.id, editText);
        setIsEditing(false);
    };

    // Avbryter redigeringsläget och återställer texten
    const handleCancelClick = () => {
        setEditText(item.text);
        setIsEditing(false);
    };

    // Hanterar förändringar i textinmatningen under redigering
    const handleEditChange = (e) => {
        setEditText(e.target.value);
    };

    // Tar bort todo-item från store
    const handleRemoveClick = () => {
        removeTodo(item.id);
    };

    return (
        <div className="item">
            {/* Checkbox för att toggla done-status */}
            <input type="checkbox" checked={item.done} onChange={handleToggle} />
            {isEditing ? (
                <>
                    {/* Input för att redigera texten */}
                    <input
                        type="text"
                        value={editText}
                        onChange={handleEditChange}
                        autoFocus
                    />
                    {/* Buttons för att spara eller avbryta redigering */}
                    <button className="save-btn" onClick={handleSaveClick}>Spara</button>
                    <button className="cancel-btn" onClick={handleCancelClick}>Avbryt</button>
                </>
            ) : (
                // Visar texten och tillämpar en klass om todo är klar
                <label className={item.done ? 'done' : ''} onClick={handleToggle}>
                    {item.text}
                </label>
            )}
            {/* conditional rendering */}
            {!isEditing && <span title="Ändra" onClick={handleEditClick}>✏️</span>}
            <span onClick={handleRemoveClick} title="Ta bort">🗑️</span>
        </div>
    );
};

export default Item;
