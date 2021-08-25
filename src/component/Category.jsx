import React, { Component } from 'react';

class Category extends Component {
    render() { 
        const {onCategoryClick, activeCategory, category} = this.props;
        return ( 
            <div className="d-flex justify-content-center align-items-center">
            <ul className="list-group categories mt-3">
                <h3 className="text-center">Categories</h3>
                {category.map( c => <li onClick={() => onCategoryClick(c.id)} key={c.id} className={activeCategory === c.id ? "list-group-item on" : "list-group-item"}>{c.label}</li>)}
            </ul>
            <div className="line-break d-none d-md-flex"></div>
                
        </div>
         );
    }
    
    
}
 
export default Category;
