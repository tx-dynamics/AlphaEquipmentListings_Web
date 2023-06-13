import React, { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts'
import { Line, Circle } from "rc-progress";
import { useSnackbar } from "react-simple-snackbar";

import { trendUp } from "../../../assets/icons";
import { Loader, SideBar, TopBar } from "../../../components";
import { api } from "../../../network/Environment";
import { Method, callApi } from "../../../network/NetworkManger";
import { store } from "../../../redux/store";
import { snakbarOptions } from "../../../globalData";
import './dashboard.css'
import { useDispatch } from "react-redux";
import { activeTab } from "../../../redux/Slices/activeTabSlice";

export default function Dashboard() {
  const dispatch = useDispatch()
  const [rangeValue, setRangeValue] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [showMessage, hideMessage] = useSnackbar(snakbarOptions)
  const [orderArray, setOrderArray] = useState([])

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

  useEffect(() => {
    dispatch(activeTab('dashboard'))
    getDashboardData();
  }, []);

  const getDashboardData = async () => {
    setIsLoading(true)
    try {
      const endPoint = api.sellerDashboard + `?search=`;
      console.log('------');

      await callApi(Method.GET, endPoint, null,
        res => {
          console.log(res, '------');
          if (res?.status === 200) {
            setIsLoading(false)
            setOrderArray(res?.data?.orders)
          }
          else {
            setIsLoading(false)
            showMessage(res?.message)
          }
        },
        err => {
          showMessage(err.message)
          setIsLoading(false);
        });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <div className="alpha-dashboard-main_container">
      <SideBar />
      <Loader loading={isLoading} />
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
            {orderArray?.length > 0 ?
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
                    {orderArray?.map((item, index) => {
                      const date = new Date(item?.createdAt)
                      return (
                        <tr key={index}>
                          <td data-label={'Buyer Name'} className='alpha_payment_history_padding_left'>{item?.requester?.name}</td>
                          <td data-label={'Product Name'}>{item?.product?.productName}</td>
                          <td data-label={'Sale'}>{item?.product?.productType}</td>
                          <td data-label={'Date'} >{date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()}</td>
                          <td data-label={'Payment'} >${item?.product?.price}</td>
                          <td data-label={'Method'} >{item?.wallet ? 'Wallet' : 'Card'}</td>
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
