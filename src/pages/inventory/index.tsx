import DataTable from "../../components/dataTable"


const Inventory = () => {
  return(
    <div className="page-content-container">
      <div className="dashboard-container">
        <div className="item-ctn"> <span>All order -</span></div>
        <div className="item-ctn"><span>00000 - Today</span></div>
      </div>
      <div className="table-content-container">
        <DataTable/>
      </div>
    </div>
  )
}
export default Inventory