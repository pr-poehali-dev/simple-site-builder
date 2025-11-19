import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Learn = () => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">HTML Учебник</h1>
          <div className="flex gap-4">
            <Link to="/">
              <Button variant="ghost">Примеры</Button>
            </Link>
            <Link to="/learn">
              <Button variant="default">Обучение</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-20 text-center">
          <h1 className="text-5xl font-black mb-6 text-foreground">
            Всё что нужно знать о HTML
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Полное руководство для создания веб-страниц с нуля
          </p>
        </section>

        <Card className="mb-12 bg-accent border-2 border-primary">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Icon name="Lightbulb" size={32} className="text-primary" />
              <CardTitle className="text-3xl">Что такое HTML?</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed space-y-4">
            <p>
              <strong>HTML</strong> (HyperText Markup Language) — это язык разметки, используемый для создания веб-страниц. 
              Он определяет структуру и содержание страницы через специальные элементы, называемые <em>тегами</em>.
            </p>
            <p>
              HTML не является языком программирования — это язык разметки. Он просто указывает браузеру, 
              как отображать контент: где заголовок, где параграф, где изображение.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Icon name="Code2" size={32} className="text-primary" />
              <CardTitle className="text-3xl">Базовая структура HTML</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed space-y-6">
            <p>Любая HTML-страница имеет базовую структуру:</p>
            <pre className="bg-muted p-6 rounded-xl overflow-x-auto text-sm border border-border">
{`<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Название страницы</title>
</head>
<body>
    <h1>Привет, мир!</h1>
    <p>Это моя первая веб-страница.</p>
</body>
</html>`}
            </pre>
            <div className="space-y-4 mt-6">
              <div className="flex gap-3">
                <span className="text-primary font-bold min-w-[180px]">&lt;!DOCTYPE html&gt;</span>
                <span>— объявление типа документа HTML5</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold min-w-[180px]">&lt;html&gt;</span>
                <span>— корневой элемент страницы</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold min-w-[180px]">&lt;head&gt;</span>
                <span>— метаинформация (заголовок, кодировка, стили)</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold min-w-[180px]">&lt;body&gt;</span>
                <span>— видимое содержимое страницы</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Icon name="Type" size={32} className="text-primary" />
              <CardTitle className="text-3xl">Теги форматирования текста</CardTitle>
            </div>
            <CardDescription className="text-base mt-2">
              Основные HTML-теги для работы с текстом
            </CardDescription>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-primary font-bold">&lt;h1&gt; - &lt;h6&gt;</code>
                  <p className="mt-2 text-base">Заголовки разного уровня (от h1 — самый крупный, до h6 — самый мелкий)</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-primary font-bold">&lt;p&gt;</code>
                  <p className="mt-2 text-base">Параграф — блок текста</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-primary font-bold">&lt;strong&gt;</code>
                  <p className="mt-2 text-base">Жирный текст (важный)</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-primary font-bold">&lt;em&gt;</code>
                  <p className="mt-2 text-base">Курсивный текст (акцент)</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-primary font-bold">&lt;u&gt;</code>
                  <p className="mt-2 text-base">Подчёркнутый текст</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-primary font-bold">&lt;mark&gt;</code>
                  <p className="mt-2 text-base">Выделенный (маркированный) текст</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-primary font-bold">&lt;small&gt;</code>
                  <p className="mt-2 text-base">Мелкий текст</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-primary font-bold">&lt;sub&gt;</code>
                  <p className="mt-2 text-base">Подстрочный индекс (H₂O)</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-primary font-bold">&lt;sup&gt;</code>
                  <p className="mt-2 text-base">Надстрочный индекс (x²)</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-primary font-bold">&lt;br&gt;</code>
                  <p className="mt-2 text-base">Перенос строки</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Icon name="Image" size={32} className="text-primary" />
              <CardTitle className="text-3xl">Работа с изображениями</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed space-y-4">
            <p>Чтобы вставить изображение на страницу, используется тег <code className="text-primary font-bold">&lt;img&gt;</code>:</p>
            <pre className="bg-muted p-6 rounded-xl overflow-x-auto text-sm border border-border">
{`<img src="путь/к/изображению.jpg" alt="Описание изображения">`}
            </pre>
            <div className="space-y-3 mt-6">
              <div className="flex gap-3">
                <span className="text-primary font-bold min-w-[120px]">src</span>
                <span>— путь к файлу изображения (обязательный атрибут)</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold min-w-[120px]">alt</span>
                <span>— альтернативный текст, если изображение не загрузилось</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold min-w-[120px]">width/height</span>
                <span>— размеры изображения в пикселях</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Icon name="List" size={32} className="text-primary" />
              <CardTitle className="text-3xl">Списки</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed space-y-6">
            <div>
              <h4 className="font-bold text-xl mb-3">Маркированный список (неупорядоченный):</h4>
              <pre className="bg-muted p-6 rounded-xl overflow-x-auto text-sm border border-border">
{`<ul>
    <li>Первый пункт</li>
    <li>Второй пункт</li>
    <li>Третий пункт</li>
</ul>`}
              </pre>
            </div>
            <div>
              <h4 className="font-bold text-xl mb-3">Нумерованный список (упорядоченный):</h4>
              <pre className="bg-muted p-6 rounded-xl overflow-x-auto text-sm border border-border">
{`<ol>
    <li>Первый шаг</li>
    <li>Второй шаг</li>
    <li>Третий шаг</li>
</ol>`}
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Icon name="Link" size={32} className="text-primary" />
              <CardTitle className="text-3xl">Ссылки</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed space-y-4">
            <p>Для создания гиперссылок используется тег <code className="text-primary font-bold">&lt;a&gt;</code>:</p>
            <pre className="bg-muted p-6 rounded-xl overflow-x-auto text-sm border border-border">
{`<a href="https://example.com">Нажми сюда</a>`}
            </pre>
            <div className="space-y-3 mt-6">
              <div className="flex gap-3">
                <span className="text-primary font-bold min-w-[120px]">href</span>
                <span>— URL адрес, на который ведёт ссылка</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold min-w-[120px]">target="_blank"</span>
                <span>— открыть ссылку в новой вкладке</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Icon name="Table" size={32} className="text-primary" />
              <CardTitle className="text-3xl">Таблицы</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed space-y-4">
            <p>Таблицы создаются с помощью тега <code className="text-primary font-bold">&lt;table&gt;</code>:</p>
            <pre className="bg-muted p-6 rounded-xl overflow-x-auto text-sm border border-border">
{`<table>
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Иван</td>
            <td>25</td>
        </tr>
        <tr>
            <td>Мария</td>
            <td>30</td>
        </tr>
    </tbody>
</table>`}
            </pre>
            <div className="space-y-3 mt-6">
              <div className="flex gap-3">
                <span className="text-primary font-bold min-w-[120px]">&lt;table&gt;</span>
                <span>— контейнер для таблицы</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold min-w-[120px]">&lt;tr&gt;</span>
                <span>— строка таблицы</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold min-w-[120px]">&lt;th&gt;</span>
                <span>— ячейка заголовка (жирный текст)</span>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold min-w-[120px]">&lt;td&gt;</span>
                <span>— обычная ячейка данных</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-12 bg-accent border-2 border-primary">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Icon name="Zap" size={32} className="text-primary" />
              <CardTitle className="text-3xl">Важные принципы</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-lg leading-relaxed">
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                <span><strong>Всегда закрывайте теги</strong> — если открыли &lt;p&gt;, закройте &lt;/p&gt;</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                <span><strong>Используйте семантические теги</strong> — &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                <span><strong>Добавляйте alt к изображениям</strong> — для доступности и SEO</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                <span><strong>Соблюдайте отступы</strong> — делает код читаемым</span>
              </li>
              <li className="flex gap-3">
                <Icon name="Check" size={24} className="text-primary flex-shrink-0 mt-1" />
                <span><strong>Проверяйте в браузере</strong> — открывайте HTML файл и смотрите результат</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <section className="text-center bg-primary text-primary-foreground rounded-2xl p-12">
          <Icon name="Rocket" size={48} className="mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Начните практиковаться!</h2>
          <p className="text-xl mb-8 opacity-90">
            Лучший способ изучить HTML — это писать код. Создайте свой первый сайт уже сегодня!
          </p>
          <Link to="/">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Посмотреть примеры
              <Icon name="Eye" size={20} className="ml-2" />
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-muted mt-20 py-8 border-t">
        <div className="max-w-6xl mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 HTML Учебник. Образовательный проект для изучения веб-разработки.</p>
        </div>
      </footer>
    </div>
  );
};

export default Learn;
