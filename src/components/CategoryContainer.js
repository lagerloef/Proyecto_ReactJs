import React from 'react';
import ItemListCategoryId from './ItemListCategoryId.js'
import { useParams } from 'react-router-dom';

function CategoryContainer(props) {
    const {categoryId} = useParams();  
    console.log(categoryId);

    return <div className="container">                
                <h1>{categoryId}</h1>                
                <ItemListCategoryId/>                
        </div>            
           
}
export default CategoryContainer