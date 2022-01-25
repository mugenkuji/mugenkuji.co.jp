import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <Row className="bottom-bar">
        <Col lg={6} sm={24}>
          <span>連絡　info@mugenkuji.co.jp</span>
        </Col>
        <Col lg={18} sm={24}>
          <span style={{ marginRight: 12 }}>Copyright © 無限くじ合同会社</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
