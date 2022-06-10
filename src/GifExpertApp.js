import React, { useState } from 'react';
import { GifGrid } from './components/GifGrid';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = ({ defaultCategories = [] }) => {
    
    const [categories, setCategories] = useState(defaultCategories)

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </div>
    )
}