import React from 'react';
import './App.css';
import Custom from '@react-component-boilerplate/component'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Custom
          headers={[
            {
              key: 'hello0',
              title: 'world0',
              menu: [
                {
                  value: '메뉴입니다.',
                  onClick: () => {
                    console.log('메뉴클릭')
                  },
                },
              ],
            },
            {
              key: 'hello0',
              title: 'world1',
            },
            {
              key: 'hello0',
              title: 'world2',
              menu: [
                {
                  value: '메뉴입니다.',
                  onClick: () => {
                    console.log('메뉴클릭')
                  },
                },
              ],
            },
            {
              key: 'hello0',
              title: 'world3',
              menu: [
                {
                  value: '메뉴입니다.',
                  onClick: () => {
                    console.log('메뉴클릭')
                  },
                },
              ],
            },

            {
              key: 'hello1',
              title: 'world4',
              menu: [
                {
                  value: '메뉴입니다.2',
                  onClick: () => {
                    console.log('메뉴2클릭')
                  },
                },
                {
                  value: '메뉴입니다.3',
                  onClick: () => {
                    console.log('메뉴2클릭')
                  },
                },
                {
                  value: '메뉴입니다.3',
                  onClick: () => {
                    console.log('메뉴2클릭')
                  },
                },
              ],
            },
          ]}
          data={[
            {
              name: 'sss',
              age: 22,
            },
            {
              name: 'sdw',
              age: 2231,
            },
          ]}
        />
      </header>
    </div>
  );
}

export default App;