import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    let randomNumber = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let randomColor = () => {
      const [r, g, b] = [
        randomNumber(0, 255),
        randomNumber(0, 255),
        randomNumber(0, 255)
      ];
      return `rgb(${r}, ${g}, ${b})`;
    }
    let out3 = () => {
      const arr3 = [1, 2, 3, 4, 5];
      return arr3.map((elem, index) => {
        return <p key={index}>{elem}</p>;
      })
    }
    let out4 = () => {
      const arr4 = [1, 0, 1, 0];
      return arr4.map((elem, index) => {
        let cls = (elem === 1) ? 'white' : 'black';
        return <div key={index} className={cls} >{elem}</div>;
      })
    }
    let out5 = () => {
      let out5 = '';
      for (let i = 1; i <= 100; i++) {
        out5 += `${i} `;
      }
      return out5;
    }


    return (
      <div className="App">
        <h4>Task 1.</h4>
        <p>Используя Expression выведите на страницу случайное число в диапазоне от 50 до 60 включительно. Число должно обновляться при загрузке страницы.</p>
        <div className="out-1">{randomNumber(50, 60)}</div>
        <h4>Task 2.</h4>
        <p>Создайте блок, через inline стили присвойте ему цвет фона. Причем цвет должен случайно меняться при загрузке страницы.</p>
        <div className="out-2" style={{ background: randomColor() }}></div>
        <h4>Task 3.</h4>
        <p>Выведите с помощью Expression на страницу массив вида [1,2,3,4,5], каждый элемент списка должен быть выведен в отдельный параграф. Проверьте, необходимо ли добавлять ключ к параграфу? Если да - добавьте.</p>
        <div className="out-3">
          {out3()}
        </div>
        <h4>Task 4.</h4>
        <p>У вас есть массив [1,0,1,0]. Используя expression выведите на страницу данный массив, причем каждый элемент должен быть помещен в div. Если элемент равен 1, то div должен иметь класс white, если 0 - black.</p>
        <div className="out-4">
          {out4()}
        </div>
        <h4>Task 5.</h4>
        <p>Распечатайте цифры от 1 до 100 на странице с помощью expression.</p>
        {out5()}
      </div>
    );
  }
}

export default App;
