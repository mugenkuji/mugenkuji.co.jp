import React from 'react';
import { Collapse } from 'antd';

const { Panel } = Collapse;

function FAQ() {
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2><span>よくあるご質問（FAQ）</span></h2>
        <div>
          <div className="page2-content">
            <p key="p" className="page-content" />
            <div key="code1" className="home-code">
              <Collapse accordion>
                <Panel header="ファントム(Fantom)とは何ですか?" key="1">
                  <p>Fantomは、既存のパブリック分散型台帳テクノロジーのスケーラビリティの問題を解決することを目的としたスマートコントラクトプラットフォームです。 Fantomプラットフォームは、コンセンサスを維持するために「Lachesisプロトコル」と呼ばれる新しいプロトコルを採用しており、これは現在のFantom　Operaチェーンに統合されます。 目的は、Fantom Operaチェーン上に構築されたアプリケーションが、すべてのユーザーの即時トランザクションとほぼゼロのトランザクションコストを享受できるようにすることです。</p>
                </Panel>
                <Panel header="バリデーターとは何ですか?" key="2">
                  <p>バリデーター（Validator）とは、ブロックチェーンに記録されるデータの内容が正しいかどうかを検証するノードのことです。



バリデータは、ブロックチェーンネットワークを稼働させるための重要な役割を担っており、記録されるデータ（トランザクションデータ）が正しいものであることを検証している。主にPoS（プルーフオブステーク）を採用しているブロックチェーンで使用される用語であり、PoW（プルーフオブワーク）におけるマイナーと同じ役割を持つことです。</p>
                </Panel>
                <Panel header="EVMとは何ですか?" key="3">
                  <p>EVMはイーサリアムの構成要素の1つで、スマートコントラクトをデプロイあるいは実行します。1つのEOA（外部所有アカウント）から別のEOAへの単純なトランザクションの送信に関しては、実際の所はEVMを関与させる必要はありませんが、それ以外のすべてのトランザクションに関してはEVMによって計算処理がなされた状態への更新を伴います。おおまかに言うと、イーサリアムブロックチェーン上で実行されるEVMは、それぞれ永続的なデータストアを伴い、多くの実行可能オブジェクトを格納した、グローバル分散コンピュータとみなせます。</p>
                </Panel>
                <Panel header="Web3とは何ですか?" key="4">
                  <p>Web3（ウェブスリー）、またはWeb3.0とは、パブリック型のブロックチェーンを基盤としたインターネットの概念であることです。</p>
                </Panel>

              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
