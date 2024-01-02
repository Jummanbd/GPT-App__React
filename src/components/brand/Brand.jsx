import React from 'react';
import './brand.css';
import { atlassian, dropbox, google, shopify, slack } from './imports';

const Brand = () => (
  <div className="gpt3__brand padding_top-4 container">
    <div>
      <img src={google} alt='' />
    </div>
    <div>
      <img src={slack} alt=''/>
    </div>
    <div>
      <img src={atlassian} alt='' />
    </div>
    <div>
      <img src={dropbox} alt=''/>
    </div>
    <div>
      <img src={shopify} alt='' />
    </div>
  </div>
);

export default Brand;