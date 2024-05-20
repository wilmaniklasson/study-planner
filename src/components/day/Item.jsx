import React, { useState } from 'react';
import { useStore } from '../../data/store';

const Item = ({ item }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(item.text || '');
    const updateTodo = useStore(state => state.updateTodo);
    const toggleTodo = useStore(state => state.toggleTodo);
    const removeTodo = useStore(state => state.removeTodo);

    const handleToggle = () => {
        toggleTodo(item.id);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        updateTodo(item.id, editText);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setEditText(item.text);
        setIsEditing(false);
    };

    const handleEditChange = (e) => {
        setEditText(e.target.value);
    };

    const handleRemoveClick = () => {
        removeTodo(item.id);
    };

    return (
        <div className="item">
            <input type="checkbox" checked={item.done} onChange={handleToggle} />
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={editText}
                        onChange={handleEditChange}
                        autoFocus
                    />
                    <button className="save-btn" onClick={handleSaveClick}>Spara</button>
                    <button className="cancel-btn" onClick={handleCancelClick}>Avbryt</button>
                </>
            ) : (
                <label className={item.done ? 'done' : ''} onClick={handleToggle}>
                    {item.text}
                </label>
            )}
            {!isEditing && <span title="Ändra" onClick={handleEditClick}>✏️</span>}
            <span onClick={handleRemoveClick} title="Ta bort">🗑️</span>
        </div>
    );
};

export default Item;
