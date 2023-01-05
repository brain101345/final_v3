import React, { useState } from "react";
import { Button, Divider, Modal, Typography } from "antd";
import styled from "styled-components";

const RoundEnd = () => {
  const [guardModalOpen, setGuardModalOpen] = useState(true);

  return (
    <>
      <Modal
        centered={true}
        open={guardModalOpen}
        closable={false}
        mask={true}
        //maskStyle={{ backgroundColor: "rgba(200,0,0,0.1)" }}
        bodyStyle={{ backgroundColor: "white", borderRadius: "5px" }}
        footer={[]}
      >
        <div style={{ height: "50vh", overflowY: "scroll" }}>
          <Button type="text" size="large" style={{ width: "100%" }}>
            ❶ 衛兵
          </Button>
          <Button type="text" size="large" style={{ width: "100%" }}>
            ❷ 神父
          </Button>
          <Button type="text" size="large" style={{ width: "100%" }}>
            ❸ 男爵
          </Button>
          <Button type="text" size="large" style={{ width: "100%" }}>
            ❹ 侍女
          </Button>
          <Button type="text" size="large" style={{ width: "100%" }}>
            ❺ 王子
          </Button>
          <Button type="text" size="large" style={{ width: "100%" }}>
            ❻ 國王
          </Button>
          <Button type="text" size="large" style={{ width: "100%" }}>
            ❼ 公爵夫人
          </Button>
          <Button type="text" size="large" style={{ width: "100%" }}>
            ❽ 公主
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default RoundEnd;
