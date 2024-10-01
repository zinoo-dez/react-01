import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Category } from '../types/type';



interface CategoryContextType {
    categories: Category[];
    loading: boolean;
    error: string | null;
    fetchCategories: () => void;
}

const CategoryContext = createContext<CategoryContextType | null>(null);

interface CategoryProviderProps {
    children: ReactNode;
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCategories = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:4400/categories');
            const data = await response.json();
            setCategories(data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <CategoryContext.Provider value={{ categories, loading, error, fetchCategories }}>
            {children}
        </CategoryContext.Provider>
    );

};

export const useCategory = (): CategoryContextType => {
    const context = useContext(CategoryContext);
    if (context === null) {
        throw new Error('useCategory must be used within a CategoryProvider');
    }
    return context;
};