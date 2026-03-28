// src/hooks/useTodos.ts
import { useState } from 'react';
import type { Todo } from '../types';

export const useTodos = () => {
    // TODO: สร้าง State สำหรับเก็บรายการ Todos (กำหนดค่าเริ่มต้นได้ตามต้องการ)
    const [todos, setTodos] = useState<Todo[]>([]);

    // TODO: สร้างฟังก์ชัน addTodo รับพารามิเตอร์ title เพื่อเพิ่มงานใหม่
    const addTodo = (title: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    // TODO: สร้างฟังก์ชัน deleteTodo รับพารามิเตอร์ id เพื่อลบงาน
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // TODO: สร้างฟังก์ชัน toggleTodo รับ id และสถานะ completed เพื่ออัปเดตงาน
    const toggleTodo = (id: number, completed: boolean) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, completed } : todo
        ));
    };

    // ส่งคืนค่าและฟังก์ชันทั้งหมด
    return { todos, addTodo, deleteTodo, toggleTodo };
};