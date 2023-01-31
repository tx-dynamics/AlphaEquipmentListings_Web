import React from "react";
import { trendUp } from "../../../assets/icons";
import { SideBar, TopBar } from "../../../components";
import './dashboard.css'
import ReactApexChart from 'react-apexcharts'
import { Line, Circle } from "rc-progress";
import { useState } from "react";
export default function Dashboard() {
  const [rangeValue, setRangeValue] = useState(undefined)
  const paymentHistoryArray = [
    {
      id: 1,
      buyerName: 'Aadam Gabriel',
      productName: '2016 Wacker Neuson RD12A Double Drum Roller',
      sale: 'Machine',
      date: '20-11-2022',
      payment: '200$',
      method: 'Wallet',
    },
    {
      id: 2,
      buyerName: 'Aadam Gabriel',
      productName: 'Carry Deck Crane TS20',
      sale: 'Machine',
      date: '20-11-2022',
      payment: '200$',
      method: 'Wallet',
    },
    {
      id: 3,
      buyerName: 'Aadam Gabriel',
      productName: 'Break Kits Truck TS20',
      sale: 'Machine',
      date: '20-11-2022',
      payment: '200$',
      method: '-',
    },
    {
      id: 4,
      buyerName: 'Aadam Gabriel',
      productName: '2016 Wacker Neuson RD12A Double Drum Roller',
      sale: 'Machine',
      date: '20-11-2022',
      payment: '200$',
      method: 'Wallet',
    },

  ]
  const progressBarArray = [
    {
      id: 1,
      title: 'Carry Deck Crane',
      value: 70,
    },
    {
      id: 2,
      title: 'Truck TK30',
      value: 40,
    },
    {
      id: 3,
      title: 'Carry Deck Crane',
      value: 60,
    },
    {
      id: 4,
      title: 'Carry Deck Crane',
      value: 80,
    },
    {
      id: 5,
      title: 'Others',
      value: 20,
    },
  ]
  const barRangeArray = [
    {
      id: 1,
      title: '1D',
      value: 1,
    },
    {
      id: 2,
      title: '1W',
      value: 7,
    },
    {
      id: 3,
      title: '1M',
      value: 30,
    },
    {
      id: 4,
      title: '1Y',
      value: 31,
    },
    {
      id: 5,
      title: 'ALL',
      value: undefined,
    },
  ]

  var revenueChartOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false
      }

    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false,
    },
    fill: {
      type: 'gradient',
      colors: ['#2ac326', '#75d672', '#b7e8b6'],
      gradient: {
        shadeIntensity: 0.8,
        opacityFrom: 0.9,
        opacityTo: 0.9,
        stops: [10, 90, 100]
      }
    },
    stroke: {
      show: true,
      curve: 'straight',
      width: 0,
      colors: ['#2ac326']
    },
    xaxis: {
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
    yaxis: {
      show: false,
    },
  }

  var revenueChartSeries = [{
    name: 'series1',
    data: [0, 80, 40, 50, 90, 70, 0]
  }]


  var mianGraphSeries = [{
    name: 'series1',
    data: [33, 35, 31, 36, 32, 33, 32, 33, 35, 31, 36, 32, 33, 32, 33, 35, 31, 36, 32, 33, 32, 33, 35, 31, 36, 32, 33, 32, 33, 35, 31, 36, 32, 33,]
  }]
  // var mianGraphSeries = [{
  //   name: 'series1',
  //   data: [
  //     {
  //       y: new Date('2018-02-12').getTime(), x: 32
  //     },
  //     { y: new Date('2018-02-12').getTime(), x: 35 },
  //     { y: new Date('2018-02-12').getTime(), x: 32 },
  //     { y: new Date('2018-02-12').getTime(), x: 32 },
  //     { y: new Date('2018-02-12').getTime(), x: 32 },
  //     { y: new Date('2018-02-12').getTime(), x: 32 },
  //     { y: new Date('2018-02-12').getTime(), x: 32 },
  //     { y: new Date('2018-02-12').getTime(), x: 32 },
  //     { y: new Date('2018-02-12').getTime(), x: 32 },
  //     { y: new Date('2018-02-12').getTime(), x: 32 },
  //     { y: new Date('2018-02-12').getTime(), x: 32 },
  //     { y: new Date('2018-02-12').getTime(), x: 32 },
  //     { y: new Date('2018-02-12').getTime(), x: 32 },

  //   ]
  // }]
  var mainGraphOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }

    },
    dataLabels: {
      enabled: false
    },
    grid: {
      show: false,
    },
    fill: {
      type: 'gradient',
      colors: ['#d5eaff', '#e9f4ff',],
      gradient: {
        shadeIntensity: 0.8,
        opacityFrom: 0.9,
        opacityTo: 0.9,
        stops: [10, 90, 100]
      }
    },
    stroke: {
      show: true,
      curve: 'smooth',
      width: 2,
      colors: ['#7492FF']
    },
    xaxis: {
      type: 'category',
      range: rangeValue,
      lables: {
        show: true
      }
      // categories: ["JUN 8", "JUN 15", "JUN 22 ", "JUN 29", "JUL 6 ", "JUL 13", "JUL 21"],

    },
    yaxis: {
      show: false,
    },
  }


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
                <ReactApexChart options={revenueChartOptions} series={revenueChartSeries} type="area" height={140} width={160} />
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
                  <Circle style={{ transform: 'rotate(20deg)' }} percent={75} strokeWidth={25} trailWidth={25} strokeLinecap={'butt'} strokeColor="#475BE8" trailColor="#E4E8EF" />
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
                  <Circle style={{ transform: 'rotate(20deg)' }} percent={75} strokeWidth={25} trailWidth={25} strokeLinecap={'butt'} strokeColor="#F29A2E" trailColor="#E4E8EF" />

                </div>
              </div>
            </div>
          </div>
          <div className="alpha_dashboard-row">
            <div className="alpha-dashboard-main_grah_top_view">
              <div className="alpha-dashboard-main_graph_title_top_view">
                <h2>Current Value</h2>
                <div className="alpha-dashboard-main_graph_filter_view">
                  {barRangeArray.map((item) => {
                    return (
                      <h3 style={{ color: item.value === rangeValue ? '#4F86FF' : '#030303' }} onClick={() => setRangeValue(item.value)} key={item.id}>{item.title}</h3>
                    )
                  })}
                </div>
              </div>
              <div >
                <ReactApexChart options={mainGraphOptions} series={mianGraphSeries} type="area" height={250} width={'100%'} />
              </div>
            </div>
            <div className="alpha-dashboard_progress_bars_top_view">
              <h1>Most Sold Items </h1>
              {progressBarArray.map((item) => {
                return (
                  <div key={item.id} className="alpha-dashboard_progress_bar_view">
                    <div className="alpha-dashboard-progress_bar_title_view">
                      <h3>{item.title}</h3>
                      <h4>{item.value}%</h4>
                    </div>
                    <Line percent={item.value} strokeWidth={4} trailWidth={4} strokeColor="#475BE8" trailColor="#E3E7FC" />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="alpha-dashboard_payment_history_top_view">
            <p>Payment History</p>
            {paymentHistoryArray.length > 0 ?
              <div className="alpha_payment_history_table_view" style={{ overflowX: 'hidden' }}>
                <table>
                  <thead>
                    <tr>
                      <th scope="col" className='alpha_payment_history_padding_left'>Buyer Name</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Sale</th>
                      <th scope="col">Date</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Method</th>

                    </tr>
                  </thead>
                  <tbody >

                    {paymentHistoryArray.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td data-label={'Buyer Name'} className='alpha_payment_history_padding_left'>{item.buyerName}</td>
                          <td data-label={'Product Name'}>{item.productName}</td>
                          <td data-label={'Sale'}>{item.sale}</td>
                          <td data-label={'Date'} >{item.date}</td>
                          <td data-label={'Payment'} >{item.payment}</td>
                          <td data-label={'Method'} >{item.method}</td>

                        </tr>
                      )
                    })}
                  </tbody>

                </table>
              </div>
              :
              <div className="alpha-wallet_empty_div">
                <h2>You don’t have any transaction history.</h2>
              </div>
            }
          </div>

        </div>
      </div>
    </div>
  );
}
