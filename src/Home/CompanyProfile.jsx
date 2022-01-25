import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Table } from 'antd';

const dataSource = [
  {
    attribute: '商号',
    value: '無限くじ合同会社',
  },
  {
    attribute: '英文表記',
    value: 'Mugen Kuji GK',
  },
  {
    attribute: '設立',
    value: '2022年1月7日',
  },
  {
    attribute: '本社',
    value: '〒557-0016　大阪府大阪市西成区花園北１－５－２７トライアングルＥＭ６０３号室',
  },
  {
    attribute: '資本金',
    value: '500万円',
  },
  {
    attribute: '決算期',
    value: '1月',
  },
  {
    attribute: '業務内容',
    value: 'ブロックチェーンに関するシステムの企画、開発、データ解析',
  },
  {
    attribute: '代表者',
    value: '体表社員　タグネピス　ジェイクマーバートパホニラン',
  },
];

const columns = [
  {
    title: 'Attribute',
    dataIndex: 'attribute',
    key: 'attribute',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
];

function CompanyProfile() {
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2><span>会社概要</span></h2>
        <div>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <p key="p" className="page-content">
            </p>
            <div key="code1" className="home-code">
            <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false}/>
            </div>
          </QueueAnim>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfile;
