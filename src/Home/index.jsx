import React from 'react';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';

import Banner from './Banner';
import BusinessContent from './BusinessContent';
import CompanyProfile from './CompanyProfile';
import ValidatorInfo from './ValidatorInfo';
import FAQ from './FAQ';

import Footer from './Footer';
import './static/style';

let isMobile;

enquireScreen((b) => {
  isMobile = b;
});

class Home extends React.PureComponent {
  state = {
    isMobile,
  }
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: !!b,
      });
    });
  }
  render() {
    return (
      <DocumentTitle title="無限くじ合同会社">
        <div>
          {/* <Header isMobile={this.state.isMobile} /> */}
          <div className="home-wrapper">
            <Banner isMobile={this.state.isMobile} />
            <BusinessContent isMobile={this.state.isMobile} />
            <ValidatorInfo />
            <CompanyProfile />
            <FAQ />
          </div>
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
