import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import style from "./style.module.css";
export default function ProdectTraning() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className={style.main}>
        <h5>Prodect Traning</h5>
        <div className={style.traningButton} role="button" onClick={() => {}}>
          Train
        </div>
      </div>
    </DashboardLayout>
  );
}
