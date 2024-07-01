import FrameComponent from "../components/FrameComponent";
import ChartValues from "../components/ChartValues";
import "./AnalyticsDashboardDesktop.css";

const AnalyticsDashboardDesktop = () => {
  return (
    <div className="analytics-dashboard-desktop">
      <div className="side-menu">
        <div className="side-menu-inner">
          <FrameComponent />
        </div>
        <div className="menu-divider" />
      </div>
      <main className="chart-values-wrapper">
        <ChartValues />
      </main>
    </div>
  );
};

export default AnalyticsDashboardDesktop;
