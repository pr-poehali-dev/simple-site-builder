import { Link } from 'react-router-dom';

const Learn = () => {
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
          Как написать такой сайт?
        </h1>
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#666' }}>
          Здесь я расскажу всё что нужно знать про HTML
        </p>

        <hr style={{ margin: '30px 0' }} />

        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
          <h2 style={{ color: '#9b87f5' }}>📖 Что такое HTML?</h2>
          <p>
            <strong>HTML</strong> - это язык разметки для создания сайтов. 
            Он говорит браузеру как показывать текст, картинки и другие элементы на странице.
          </p>
          <p>
            HTML - это НЕ язык программирования! Это просто способ разметить где что находится на странице.
          </p>
        </div>

        <div style={{ backgroundColor: 'white', padding: '20px', border: '2px solid #ddd', borderRadius: '10px', marginBottom: '20px' }}>
          <h2 style={{ color: '#9b87f5' }}>💻 Структура HTML страницы</h2>
          <p>Любая HTML страница начинается так:</p>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '15px', 
            borderRadius: '5px',
            overflow: 'auto',
            fontSize: '14px'
          }}>
{`<!DOCTYPE html>
<html>
<head>
    <title>Название сайта</title>
</head>
<body>
    <h1>Привет!</h1>
    <p>Это мой первый сайт</p>
</body>
</html>`}
          </pre>
          <ul style={{ marginTop: '15px' }}>
            <li><strong>&lt;!DOCTYPE html&gt;</strong> - говорит что это HTML5</li>
            <li><strong>&lt;html&gt;</strong> - начало всего HTML кода</li>
            <li><strong>&lt;head&gt;</strong> - информация о сайте (название, описание)</li>
            <li><strong>&lt;body&gt;</strong> - всё что видно на странице</li>
          </ul>
        </div>

        <div style={{ backgroundColor: 'white', padding: '20px', border: '2px solid #ddd', borderRadius: '10px', marginBottom: '20px' }}>
          <h2 style={{ color: '#9b87f5' }}>✏️ Теги для текста</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f0f0f0' }}>
                <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Тег</th>
                <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Что делает</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}><code>&lt;h1&gt;</code></td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Большой заголовок</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}><code>&lt;p&gt;</code></td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Обычный текст (параграф)</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}><code>&lt;strong&gt;</code></td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Жирный текст</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}><code>&lt;em&gt;</code></td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Курсив</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}><code>&lt;u&gt;</code></td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Подчеркнутый текст</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}><code>&lt;br&gt;</code></td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Перенос строки</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ backgroundColor: 'white', padding: '20px', border: '2px solid #ddd', borderRadius: '10px', marginBottom: '20px' }}>
          <h2 style={{ color: '#9b87f5' }}>🖼️ Картинки</h2>
          <p>Чтобы вставить картинку:</p>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '15px', 
            borderRadius: '5px',
            fontSize: '14px'
          }}>
{`<img src="картинка.jpg" alt="Описание картинки">`}
          </pre>
          <ul style={{ marginTop: '10px' }}>
            <li><strong>src</strong> - путь к файлу картинки</li>
            <li><strong>alt</strong> - описание картинки</li>
          </ul>
        </div>

        <div style={{ backgroundColor: 'white', padding: '20px', border: '2px solid #ddd', borderRadius: '10px', marginBottom: '20px' }}>
          <h2 style={{ color: '#9b87f5' }}>📝 Списки</h2>
          <p><strong>Маркированный список:</strong></p>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '15px', 
            borderRadius: '5px',
            fontSize: '14px',
            marginBottom: '15px'
          }}>
{`<ul>
    <li>Пункт 1</li>
    <li>Пункт 2</li>
</ul>`}
          </pre>

          <p><strong>Нумерованный список:</strong></p>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '15px', 
            borderRadius: '5px',
            fontSize: '14px'
          }}>
{`<ol>
    <li>Шаг 1</li>
    <li>Шаг 2</li>
</ol>`}
          </pre>
        </div>

        <div style={{ backgroundColor: 'white', padding: '20px', border: '2px solid #ddd', borderRadius: '10px', marginBottom: '20px' }}>
          <h2 style={{ color: '#9b87f5' }}>🔗 Ссылки</h2>
          <p>Чтобы сделать ссылку на другой сайт:</p>
          <pre style={{ 
            backgroundColor: '#f5f5f5', 
            padding: '15px', 
            borderRadius: '5px',
            fontSize: '14px'
          }}>
{`<a href="https://google.com">Нажми сюда</a>`}
          </pre>
        </div>

        <div style={{ backgroundColor: '#fffbcc', padding: '20px', border: '2px solid #ffeb3b', borderRadius: '10px', marginBottom: '20px' }}>
          <h2 style={{ color: '#1A1F2C' }}>⚡ Важно помнить!</h2>
          <ul>
            <li>✅ Всегда закрывай теги! Если открыл &lt;p&gt; - закрой &lt;/p&gt;</li>
            <li>✅ Пиши код аккуратно с отступами</li>
            <li>✅ Сохраняй файл с расширением <strong>.html</strong></li>
            <li>✅ Открывай HTML файл в браузере чтобы увидеть результат</li>
          </ul>
        </div>

        <div style={{ 
          backgroundColor: '#9b87f5', 
          color: 'white', 
          padding: '30px', 
          textAlign: 'center',
          borderRadius: '10px'
        }}>
          <h2>Теперь ты знаешь основы!</h2>
          <p style={{ fontSize: '18px' }}>Попробуй создать свой первый HTML файл</p>
          <Link to="/" style={{ 
            backgroundColor: 'white', 
            color: '#9b87f5', 
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '5px',
            display: 'inline-block',
            fontWeight: 'bold'
          }}>
            ← Вернуться к примерам
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

export default Learn;
