import React from "react";
import { trendUp } from "../../../assets/icons";
import { SideBar, TopBar } from "../../../components";
import './dashboard.css'
import { Area } from '@ant-design/plots';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Dashboard() {
  const data = [
    {
      "Date": "M",
      "scales": 1,
    },
    {
      "Date": "T",
      "scales": 2
    },
    {
      "Date": "W",
      "scales": 3
    },
    {
      "Date": "T",
      "scales": 4
    },
    {
      "Date": "F",
      "scales": 5
    },
    {
      "Date": "S",
      "scales": 6
    },
    {
      "Date": "S",
      "scales": 7
    }]

  const config = {
    data,
    xField: 'Date',
    yField: 'scales',

    xAxis: {
      range: [0, 1],
      tickCount: 8,
    },


    areaStyle: () => {
      return {

        fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',

      };
    },
  };
  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <div className="alpha-dashboard-top_bar_main_container">
        <TopBar />
        <div className="alpha-dashboard-container">
          <div className="alpha-dashboard-top_title_view">
            <h1>Dashboard</h1>
          </div>

          <div className="alpha-dashboard-mini_graphs_top_view">
            <div className="alpha-dashboard-mini_graph_view">
              <div className="alpha-dashboard-avrg_revenue_view">
                <h2>Average Revenue</h2>
                <h1>$200.4K</h1>
                <div className="alpha-dashboard-trends_up-top_view">
                  <div className="alpha-dashboard-trends_up_view">
                    <img src={trendUp} />
                    <h3>20%</h3>
                  </div>
                  <h3>$20,452</h3>

                </div>
              </div>
              <div className="alpha-dashboard-mini_graphs-chart_view">
                <Area style={{ width: 127, height: 80 }} autoFit={true}  {...config} />
              </div>
            </div>
            <div className="alpha-dashboard-mini_graph_view">
              <div className="alpha-dashboard-avrg_revenue_view">
                <h4>Todays Sales</h4>
                <h1>$200.4K</h1>
                <h5>We have sold 123 items</h5>
              </div>
              <div className="alpha-dashboard-mini_graphs-chart_view">
                <div style={{ width: 80, height: 80 }}>
                  <CircularProgressbar value={75} strokeWidth={25} styles={buildStyles({
                    rotation: .1,
                    strokeLinecap: 'butt',
                    pathColor: `#475BE8`,
                    trailColor: '#E4E8EF',
                  })} />
                </div>
              </div>
            </div>
            <div className="alpha-dashboard-mini_graph_view">
              <div className="alpha-dashboard-avrg_revenue_view">
                <h4>In Escrow</h4>
                <h1>$18.2K</h1>
                <h5>Availabale to payout</h5>
              </div>
              <div className="alpha-dashboard-mini_graphs-chart_view">
                <div style={{ width: 80, height: 80 }}>
                  <CircularProgressbar value={75} strokeWidth={25} styles={buildStyles({
                    rotation: .1,
                    strokeLinecap: 'butt',
                    pathColor: `#F29A2E`,
                    trailColor: '#E4E8EF',
                  })} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
