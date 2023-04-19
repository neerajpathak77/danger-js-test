import React, { FC, ReactElement } from 'react';
import { IResultProps } from 'types';
import './index.css';

const Results: FC<IResultProps> = ({ cases, deaths, recovered }): ReactElement => (
  <div className="recommendations">
    <label> cases: -{cases}</label>
    <label> deaths: -{deaths}</label>
    <label> recovered: -{recovered}</label>
  </div>
);

export default Results;
