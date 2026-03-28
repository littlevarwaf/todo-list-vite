// src/components/AddTodoForm.tsx
import React, { useState } from 'react';

interface Props {
    onSubmit: (title: string) => void;
}

const AddTodoForm: React.FC<Props> = ({ onSubmit }) => {
    // TODO: สร้าง State สำหรับเก็บค่า Input
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (title.trim()) {
            onSubmit(title);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex mb-4">
            <input
                type="text"
                // TODO: ผูกค่า value กับ State title และดักจับ onChange เพื่ออัปเดต State
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="เพิ่มงานใหม่..."
                className="flex-1 border p-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition"
            >
                Add
            </button>
        </form>
    );
};

export default AddTodoForm;