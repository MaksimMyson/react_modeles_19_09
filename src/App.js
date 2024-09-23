import React from 'react';
import Article from './components/Article'; 
import './styles.css';

function App() {
  return (
    <div>
      <h1>Приклади статей</h1>
    
      <Article 
        title="Як навчитися програмувати" 
        author="Іван Іванов" 
        text="Це дуже цікавий процес, який вимагає багато часу." 
      />
      
      
      <Article 
        title="Користь фізичних вправ" 
        author="Марія Петренко" 
      />
      
     
      <Article 
        title="Чому важливо читати книги?" 
      />
      
 
      <Article />
    </div>
  );
}

export default App;
