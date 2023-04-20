import TopNav from "./TopNav";
import "../Dashboard.css";
import Total from "../../../components/Total/Total";
import Activities from "../Activities/Activities";
import Products from "../Products/Products";
import Todo from "../Tasks/Todo";

const Right = () => {
  return (
    <div className="rightSection">
      <TopNav />
      <Total />
      <Activities />
      <div className="bottomPart">
        <Products />
        <Todo />
      </div>
    </div>
  );
};

export default Right;
