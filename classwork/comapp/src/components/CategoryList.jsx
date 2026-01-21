import categoriesData from "../mockdb/categories";
import CategoryCard from "./CategoryCard";
import "../App.css";

const CategoryList = () => {
    const handleClick = (category) => {
        alert(`You clicked on ${category.title}`)
    }
  return (
    <div className="grid">
      {categoriesData.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          imgUrl={category.imgUrl}
          func={() => handleClick(category)}
        />
      ))}
    </div>
  );
};

export default CategoryList;
