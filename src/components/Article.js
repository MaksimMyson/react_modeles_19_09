import React from 'react';
import '../styles.css';

function Article({ 
  title = 'Заголовок не визначено', 
  author = 'Автор не визначений', 
  text = 'Текст статті не визначений' 
}) {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p><strong>Автор:</strong> {author}</p>
      <p>{text}</p>
    </div>
  );
}

export default Article;
