import React, { FC, ReactElement, useState } from 'react';
import Results from 'components/shared/Results';
import Select from 'components/shared/Select';
import { REGIONS, DATA_RANGE } from 'utils/constants';
import useStatistics from 'hooks/useStatistics';
import { IOption } from 'types';
import './index.css';

const Statistics: FC = (): ReactElement => {
  const [region, setRegion] = useState<IOption>(REGIONS[0]);
  const [weeks, setWeeks] = useState<IOption>(DATA_RANGE[0]);
  const state = useStatistics(region, weeks);

  return (
    <div className="container">
      {state.loading && <div> LOADING....... </div>}
      {state.error && <div> {state.error} </div>}
      <Select onSelect={option => void setWeeks(option)} options={DATA_RANGE} selected={weeks} />
      <Select onSelect={option => void setRegion(option)} options={REGIONS} selected={region} />
      <Results cases={state?.cases} deaths={state?.deaths} recovered={state?.recovered} />
    </div>
  );
};

export default Statistics;
