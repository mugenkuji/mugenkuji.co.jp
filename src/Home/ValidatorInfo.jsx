import React from 'react';
import { Table } from 'antd';

function ValidatorInfo() {
  const dataSource = [
    {
      attribute: 'バリデーター番号',
      value: '84',
    },
    {
      attribute: 'バリデーター名',
      value: 'Sakura',
    },
    {
      attribute: '委任先アドレス',
      value: '0x11a4e8c9C57b7BD4e5b27F46705767df50db03Ed',
    },
    {
      attribute: 'ステーキング開始日',
      value: '2022年1月4日',
    },
    {
      attribute: 'ステーキングスタートエポック',
      value: '67346',
    },
    {
      attribute: 'ステーキング金額',
      value: '59万3417 FTM',
    },
    {
      attribute: 'バリデーターの詳細 (英語)',
      value: 'https://explorer.fantom.network/validator/0x11a4e8c9c57b7bd4e5b27f46705767df50db03ed',
    }
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
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2><span>ファントムバリデーター情報</span></h2>
        <div>
            <p key="p" className="page-content">
            </p>
            <div key="code1" className="home-code">
            <Table dataSource={dataSource} columns={columns} pagination={false} showHeader={false}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ValidatorInfo;
