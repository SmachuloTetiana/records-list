import React, { useMemo } from 'react';

import { useSelector } from 'react-redux';

import { AppState, ItemsFilters } from './types';
import { RecordForm } from './components/RecordForm';
import { RecordItem } from './components/RecordItem';
import { Tab } from './components/Tab';

function App() {
  const records = useSelector((state: AppState) => state?.records);
  const filter = useSelector((state: AppState) => state.filter);
  
  const completedCounter = useMemo(() => records.filter(item => item.complete).length, [records]);

  const incompletedCounter = useMemo(() => records.filter(item => !item.complete).length, [records]);

  const filteredRecords = useMemo(() => {
    return filter === ItemsFilters.SHOW_ACTIVE 
    ? records.filter(item => !item.complete)
    : filter === ItemsFilters.SHOW_COMPLETED 
    ? records.filter(item => item.complete)
    : records
  }, [records, filter]);

  return (
    <div className='container'>
      <RecordForm />
      <div className='tabs'>
        <Tab
          filter={ItemsFilters.SHOW_ALL}
          currentFilter={filter}
        >
          All <span>({records.length})</span>
        </Tab>
        
        <Tab
          filter={ItemsFilters.SHOW_ACTIVE}
          currentFilter={filter}
        >
          ACTIVE <span>({incompletedCounter})</span>
        </Tab>
        
        <Tab
          filter={ItemsFilters.SHOW_COMPLETED}
          currentFilter={filter}
        >
          COMPLETED <span>({completedCounter})</span>
        </Tab>
      </div>

      <ul className='tabs-panel'>
        {filteredRecords.map((recod) => (
          <RecordItem key={recod.id} {...recod} />
        ))}
      </ul>
    </div>
  );
}

export default App;
