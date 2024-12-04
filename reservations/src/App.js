// removed import to logo.svg as it's never used
import './App.css';
import React, { useState } from "react";
import ResBanner from './ResBanner';
import ResCreator from './ResCreator';
import ResRow from './ResRow';
import VisibilityControl from './VisibilityControl';

function App() {
  // removed any reference to userName as it's not used in this app
  
  const [resItems, setResItems] = useState([
    // first area
    {action: "Evergreen Haven | 9:00 AM - 12:00 PM", done: true},
    {action: "Evergreen Haven | 12:00 PM - 3:00 PM", done: false},
    {action: "Evergreen Haven | 3:00 PM - 6:00 PM", done: false},
    // second area
    {action: "Crystal Lake Preserve | 9:00 AM - 12:00 PM", done: false},
    {action: "Crystal Lake Preserve | 12:00 PM - 3:00 PM", done: false},
    {action: "Crystal Lake Preserve | 3:00 PM - 6:00 PM", done: true},
    // third area
    {action: "Sundown Prairie | 9:00 AM - 12:00 PM", done: false},
    {action: "Sundown Prairie | 12:00 PM - 3:00 PM", done: true},
    {action: "Sundown Prairie | 3:00 PM - 6:00 PM", done: false},
    //fourth area
    {action: "Stone Ridge Sanctuary | 9:00 AM - 12:00 PM", done: false},
    {action: "Stone Ridge Sanctuary | 12:00 PM - 3:00 PM", done: false},
    {action: "Stone Ridge Sanctuary | 3:00 PM - 6:00 PM", done: false}
  ]);

  const [showReserved, setShowReserved] = useState(true);

  const createNewRes = (task) => {
    if (!resItems
      .find(item => item.action === task)
    )
    {
      setResItems([
        ...resItems,
        { action: task, done: false }
      ]);
    }
  };

  const toggleRes = (res) => {
    setResItems(resItems.map((item) =>
    item.action === res.action
      ? {...item,done: !item.done }
    :item
  ));
  };

  const resTableRows = (doneValue) => resItems.filter(item => item.done === doneValue).map(item =>
    <ResRow Key={ item.action } item={ item } toggle={ toggleRes } />
  )

  return (
    <div>
      <ResBanner resItems={resItems} />
      <div class="m-3">
        <ResCreator callback={ createNewRes } />
      </div>

      <div class="container-fluid">

        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: "75%" }}>Description</th>
              <th style={{ width: "25%" }}>Reserve</th>
            </tr>
          </thead>
          <tbody>
            { resTableRows(false) }
          </tbody>
        </table>

        <div className="bg-secondary text-white text-center p2">
          <VisibilityControl
            description="Reserved Slots"
            isChecked={showReserved} 
            callback={(checked) => setShowReserved(checked)} />
        </div>

        { showReserved &&
        <table className="table table-dark table-hover">
          <thead>
            <tr>
            <th style={{ width: "75%" }}>Description</th>
            <th style={{ width: "25%" }}>Reserved</th>
            </tr>
          </thead>
          <tbody>
            {resTableRows(true)}
          </tbody>
          </table>
          }
      </div>
    </div>
  );
}

// do not delete final semi-colon or bad things will happen!
export default App;