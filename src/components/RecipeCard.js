import CustomImage from "./CoustomImage"

export default function RecipeCard({recipe}){
    return (
        <>
            <div className="recipe-card">
               <CustomImage imgSrc={recipe.image} pt="65%"/>
               <div className="recipe-card-info">
                <img className="author" src={recipe.authorImg} alt="" />
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis culpa ea provident</p>

                <a className="view-btn" href="#!" > VIEW RECIPE</a>
               </div>
            </div>
        </>
    )
}