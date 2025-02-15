import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["Frieren anime", "Dandadan"]);

  const onAddCategory = (newCategory) => {
    const newCategoryLower = newCategory.toLowerCase();

    if(categories.some(category => category.toLowerCase() === newCategoryLower)) return;
    // if (categories.includes(newCategory)) return;

    setCategories( cat => [newCategory,...categories]);
    // setCategories(['Bleach anime',...categories]);
  }

  return (
    <> 
        <h1>GifExpertApp</h1>

        <AddCategory  
        // setCategories={setCategories}
        onNewCategory={event => onAddCategory(event)}
        
        />


        <ol>
          { 
            categories.map( category => (
                <div key={category}>
                  <li>{category}</li>
                </div>
              )
            )
          }
        </ol>
    </>
  )
}
