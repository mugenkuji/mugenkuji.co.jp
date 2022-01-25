import React from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import FantomLogo from './icons/fantom.svg'
import Web3Logo from './icons/web3.jpg'
import EthereumLogo from './icons/ethereum.svg'

const { TweenOneGroup } = TweenOne;

const featuresCN = [
  {
    title: 'ファントムバリデーター',
    content: 'バリデーターノードを管理および保守することでファントムエコシステムを強化する',
    src: FantomLogo,
    color: '#13C2C2',
    shadowColor: 'rgba(19,194,194,.12)',
  },
  {
    title: 'web3',
    content: 'DeFiアプリケーションの研究開発',
    src: Web3Logo,
    color: '#2F54EB',
    shadowColor: 'rgba(47,84,235,.12)',
  },
  {
    title: 'EVM',
    content: '研究と開発',
    src: EthereumLogo,
    color: '#F5222D',
    shadowColor: 'rgba(245,34,45,.12)',
  },
];

const pointPos = [
  { x: -30, y: -10 },
  { x: 20, y: -20 },
  { x: -65, y: 15 },
  { x: -45, y: 80 },
  { x: 35, y: 5 },
  { x: 50, y: 50, opacity: 0.2 },
];

class BusinessContent extends React.PureComponent {
  static propTypes = {
    isMobile: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      hoverNum: null,
    };
  }
  onMouseOver = (i) => {
    this.setState({
      hoverNum: i,
    });
  }
  onMouseOut = () => {
    this.setState({
      hoverNum: null,
    });
  }
  render() {
    const { hoverNum } = this.state;
    let children = [[], [], []];
    featuresCN.forEach((item, i) => {
      const isHover = hoverNum === i;
      const pointChild = [
        'point-0 left', 'point-0 right',
        'point-ring', 'point-1', 'point-2', 'point-3',
      ].map(className => (
        <TweenOne
          component="i"
          className={className}
          key={className}
          style={{
            background: item.color,
            borderColor: item.color,
          }}
        />
      ));
      const child = (
        <li key={i.toString()} >
          <div
            className="page1-box"
            onMouseEnter={() => { this.onMouseOver(i); }}
            onMouseLeave={this.onMouseOut}
          >
            <TweenOneGroup
              className="page1-point-wrapper"
              enter={this.getEnter}
              leave={{
                x: 0, y: 30, opacity: 0, duration: 300, ease: 'easeInBack',
              }}
              resetStyleBool={false}
            >
              {(this.props.isMobile || isHover) && pointChild}
            </TweenOneGroup>
            <div
              className="page1-image"
              style={{
                boxShadow: `${isHover ? '0 12px 24px' :
                  '0 6px 12px'} ${item.shadowColor}`,
              }}
            >
              <img src={item.src} alt="img" style={i === 4 ? { marginLeft: -15 } : {}} width={50} height={50} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </li>
      );
      children[Math.floor(i / 3)].push(child);
    });

    children = children.map((item, i) => (
      <div
        className="page1-box-wrapper"
      >
        {item}
      </div>
    ));
    return (
      <div className="home-page page1" >
        <div className="home-page-wrapper" id="page1-wrapper">
          <h2><span>業務内容</span></h2>
          <div className="title-line-wrapper page1-line">
          </div>
            <div className="title-line" />
          <div>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessContent;
