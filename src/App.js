import './index.css'
import { TaskList } from './TaskList.js';
import React, {useState} from 'react'
import { Modal } from './Modal';

export const App = () =>  {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)
  const [openModal, setModalOpen] = useState(false)
  const [description, setDescription] = useState('')
  const [taskResult, setTaskResult] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [id, setId] = useState('')
  

  const tasks = [
    {id: 1, shortName: "Сортировка по возрастанию", description: "Дан массив [9, 19, 3, 10, 786, 1, 1, 20, 31], с помощью метода sort необходимо отсортировать его по возрастанию"}, 
    {id: 2, shortName: "Фильтрация строк", description: "Дан массив строк [‘кот’, ‘собака’, ‘птица’, ‘крот’, ‘метод’, ‘функция’, ‘плод’, ‘кит’, ‘слон’]. Из исходного массива необходимо получить массив с теми строками, чья длина не более 4 символов"}, 
    {id: 3, shortName: "Поиск уникального слова", description: "Дан массив [‘яблоко’, ‘слива, ‘дыня, ‘груша’, ‘груша’, ‘дыня’, ‘яблоко’, ‘арбуз’, ‘арбуз’]. Необходимо определить слово, которое встречается в массиве один раз"}, 
    {id: 4, shortName: "Количество повторений", description: "Дан массив [‘яблоко’, ‘слива, ‘дыня, ‘груша’, ‘груша’, ‘дыня’, ‘яблоко’, ‘арбуз’, ‘арбуз’]. На основе этого массива необходимо сформировать объект, где ключ – это слово из массива, а значение – количество вхождений этого слова в массив"}, 
    {id: 5, shortName: "Большие гласные буквы", description: "Дана цитата: Зима — это гравюра, весна — акварель, лето — масляная живопись, а осень — мозаика всех трех. Необходимо вернуть строку, в которой все гласные буквы будут большими"} 
];     

const arrangeNumbers = (inputValue) => { 
  const numbersSort = inputValue.sort((a, b) => a - b); 
  return numbersSort.join(', '); 
}; 

const excludeWords = (inputValue) => { 
  const wordsSort = inputValue.filter(e => e.length <= 4); 
  return wordsSort.join(', '); 
};

const findUniqueWords = (inputValue) => { 
  const countItems = {}; 
  for (const item of inputValue) { 
      countItems[item] = countItems[item] ? countItems[item] + 1 : 1; 
  }; 

  const wordsUnique = Object.keys(countItems).filter((item) => countItems[item] < 2); 
  return wordsUnique.join(', '); 
}; 

const writeWordsNumber = (inputValue) => { 
  const numbersOfElenments = {}; 
  for (const item of inputValue) {
      numbersOfElenments[item] = numbersOfElenments[item] ? numbersOfElenments[item] + 1 : 1; 
  }; 
  const result = Object.entries(numbersOfElenments); 
  return result.join(', '); 
}; 

const changeSentence = (inputValue) => { 
  const volwes = ["а","е","ё","и","о","у","ы","э","ю","я"]; 
  const newSentence = Array.from(inputValue); 
  for(let i = 0; i < newSentence.length; i++) { 
      if(volwes.includes(newSentence[i])) { 
          newSentence[i] = newSentence[i].toUpperCase(); 
      }; 
  }; 
  return newSentence.join(''); 
};

const changeTaskResult = () => {
  switch (id) {
    case 1:
        const numbersForFirstTask = inputValue.split(',');
        setTaskResult(arrangeNumbers(numbersForFirstTask));
        break;
    case 2:
        const wordsForSecondTask = inputValue.split(',');
        setTaskResult(excludeWords(wordsForSecondTask));
        break;
    case 3:
        const wordsForThirdTask = inputValue.split(',');
        setTaskResult(findUniqueWords(wordsForThirdTask));
        break;
    case 4:
        const wordsForFourthTask = Object(inputValue.split(','));
        setTaskResult(writeWordsNumber(wordsForFourthTask));
        break;
    case 5:
        const senteceForFifth = String(inputValue);
        setTaskResult(changeSentence(senteceForFifth));
        break;
    default :
  };
}

  return (
    <div className='blocks'>
      <div className='first-block'> 
        <h1 className="task__title">Tasks</h1>
        <button className="open-button open-button__disabled" disabled={isButtonDisabled} onClick={() => setModalOpen(true)}>Открыть</button> 
        <TaskList tasks={tasks} onHandleOpen={setIsButtonDisabled} changeDescription={setDescription} setId={setId} setInputValue={setInputValue} setTaskResult={setTaskResult}/>
      </div>
      <div>
        <Modal opened={openModal} description={description} taskResult={taskResult} inputValue={inputValue} setInputValue={setInputValue} changeTaskResult={changeTaskResult}/>
      </div>
    </div>
  )
};