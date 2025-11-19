import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
      <div style={{ backgroundColor: '#9b87f5', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1>Мой первый сайт про HTML</h1>
        <p>
          <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Главная</Link>
          <Link to="/learn" style={{ color: 'white' }}>Обучение</Link>
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center', color: '#1A1F2C' }}>
          Разные виды текста
        </h1>
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#666' }}>
          Здесь я покажу как можно форматировать текст
        </p>

        <hr style={{ margin: '30px 0' }} />

        <h2>Примеры форматирования:</h2>
        
        <p>Это <strong>жирный текст</strong> - делается тегом &lt;strong&gt;</p>
        
        <p>Это <em>курсивный текст</em> - делается тегом &lt;em&gt;</p>
        
        <p>Это <u>подчеркнутый текст</u> - делается тегом &lt;u&gt;</p>
        
        <p>Можно <strong><em>комбинировать жирный и курсив</em></strong></p>
        
        <p>Это <mark style={{ backgroundColor: 'yellow', padding: '2px 5px' }}>выделенный текст</mark> - тег &lt;mark&gt;</p>
        
        <p>Формула воды: H<sub>2</sub>O (используется &lt;sub&gt;)</p>
        
        <p>Формула энергии: E=mc<sup>2</sup> (используется &lt;sup&gt;)</p>
        
        <p><s>Зачеркнутый текст</s> - тег &lt;s&gt;</p>

        <hr style={{ margin: '30px 0' }} />

        <h2>Картинки на сайте:</h2>
        
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ border: '2px solid #ddd', padding: '10px', flex: '1', minWidth: '250px' }}>
            <img 
              src="https://cdn.poehali.dev/projects/25d8a600-41ea-43c2-8826-b1201eae7644/files/3ba373f4-2c4c-43a5-8ba3-086fe0dce565.jpg"
              alt="HTML код"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <p style={{ textAlign: 'center', marginTop: '10px' }}><strong>Картинка 1:</strong> HTML элементы</p>
          </div>

          <div style={{ border: '2px solid #ddd', padding: '10px', flex: '1', minWidth: '250px' }}>
            <img 
              src="https://cdn.poehali.dev/projects/25d8a600-41ea-43c2-8826-b1201eae7644/files/85b52f23-d2d7-402f-aa69-f28f7ef38944.jpg"
              alt="Типографика"
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <p style={{ textAlign: 'center', marginTop: '10px' }}><strong>Картинка 2:</strong> Форматирование</p>
          </div>
        </div>

        <hr style={{ margin: '30px 0' }} />

        <h2>Списки:</h2>
        
        <h3>Маркированный список:</h3>
        <ul>
          <li>Первый пункт</li>
          <li>Второй пункт</li>
          <li>Третий пункт</li>
        </ul>

        <h3>Нумерованный список:</h3>
        <ol>
          <li>Шаг первый</li>
          <li>Шаг второй</li>
          <li>Шаг третий</li>
        </ol>

        <hr style={{ margin: '30px 0' }} />

        <div style={{ 
          backgroundColor: '#f0f0f0', 
          padding: '20px', 
          borderLeft: '4px solid #9b87f5',
          fontStyle: 'italic',
          marginBottom: '30px'
        }}>
          "Обучение — это не наполнение ведра, а зажигание огня"
          <br />
          <small>— Уильям Батлер Йейтс</small>
        </div>

        <div style={{ 
          backgroundColor: '#9b87f5', 
          color: 'white', 
          padding: '30px', 
          textAlign: 'center',
          borderRadius: '10px'
        }}>
          <h2>Хочешь узнать как это сделать?</h2>
          <p style={{ fontSize: '18px' }}>Переходи на страницу обучения!</p>
          <Link to="/learn" style={{ 
            backgroundColor: 'white', 
            color: '#9b87f5', 
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px',
            display: 'inline-block',
            fontWeight: 'bold'
          }}>
            Начать учиться →
          </Link>
        </div>
      </div>

      <div style={{ 
        backgroundColor: '#f5f5f5', 
        textAlign: 'center', 
        padding: '20px',
        marginTop: '40px',
        borderTop: '1px solid #ddd'
      }}>
        <p style={{ margin: 0, color: '#666' }}>© 2024 Мой учебный проект по HTML</p>
      </div>
    </div>
  );
};

export default Index;
