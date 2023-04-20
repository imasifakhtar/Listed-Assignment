import "./Products.css";
import PieChart from "../../../components/PieChart/PieChart";

function Products() {
  return (
    <div className="topProducts">
      <div className="productText">
        <h2>Top Products</h2>
        <span>May - June 2021</span>
      </div>
      <PieChart />
    </div>
  );
}

export default Products;
