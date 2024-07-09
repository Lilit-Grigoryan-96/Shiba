import React from "react";
import { Row, Col } from "antd";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import "./Faq.css";

const { Panel } = Collapse;

const list = [
  {
    header: "This is panel header 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh. Pretium at lobortis risus hac. Leo lectus id at volutpat rhoncus tincidunt. ",
  },
  {
    header: "This is panel header 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh. Pretium at lobortis risus hac. Leo lectus id at volutpat rhoncus tincidunt. ",
  },
  {
    header: "This is panel header 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh. Pretium at lobortis risus hac. Leo lectus id at volutpat rhoncus tincidunt. ",
  },
];

const Faq = () => {
  return (
    <div className="faq_section sec_padding" id="faq">
      <Row className="sec__container">
        <Col lg={24}>
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <Collapse
            defaultActiveKey={["1"]}
            expandIconPosition={"right"}
            expandIcon={({ isActive }) =>
              isActive ? <MinusOutlined /> : <PlusOutlined />
            }
          >
            {list.map((el, ind) => {
              return (
                <Panel header={el.header} key={++ind}>
                  <p>{el.text}</p>
                </Panel>
              );
            })}
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default Faq;
