import "./ResultPage.css";
import React from "react";
import { Table, Divider, Button, Space } from "antd";
import { Routes, Route, useParams } from "react-router-dom";
import Lobby from "../containers/Lobby";
import RoundEnd from "./RoundEnd.js";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const navigate = useNavigate();
  const { room } = useParams();
  // console.log(room);
  const columns = [
    {
      title: "Rank",
      dataIndex: "rank",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Heart",
      dataIndex: "heart",
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      rank: 1,
      heart: "❤️❤️❤️❤️❤️",
    },
    {
      key: "2",
      name: "Jim Green",
      rank: 2,
      heart: "❤️❤️❤️",
    },
    {
      key: "3",
      name: "Joe Black",
      rank: 3,
      heart: "❤️❤️",
    },
    {
      key: "4",
      name: "John Brown",
      rank: 4,
      heart: "❤️",
    },
  ];

  const handleBack = () => {
    navigate(`/room/${room}`);
  };

  return (
    <div className="fullScreen">
      <div className="board">
        <Divider>Leader Board</Divider>
        <Table columns={columns} dataSource={data} size="large" />
        <Space wrap>
          <Button type="primary" onClick={handleBack}>
            Back To Room
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default ResultPage;
