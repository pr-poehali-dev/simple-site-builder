import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
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
            Демонстрация текстовых форматов
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            На этой странице вы увидите различные способы форматирования текста в HTML
          </p>
        </section>

        <section className="mb-16 bg-accent rounded-2xl p-12">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Type" size={32} className="text-primary" />
            <h2 className="text-3xl font-bold">Основные стили текста</h2>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Это <strong className="font-bold text-foreground">жирный текст</strong>, который привлекает внимание к важной информации.
            </p>
            <p>
              Это <em className="italic">курсивный текст</em>, используемый для выделения или акцента.
            </p>
            <p>
              Это <u className="underline decoration-2 decoration-primary">подчёркнутый текст</u>, показывающий важность.
            </p>
            <p>
              Можно комбинировать: <strong className="font-bold"><em className="italic">жирный и курсивный</em></strong>, 
              <strong className="font-bold"><u className="underline decoration-2">жирный и подчёркнутый</u></strong>.
            </p>
            <p>
              А это <mark className="bg-yellow-200 px-2 rounded">выделенный цветом текст</mark>, как маркером на бумаге.
            </p>
            <p>
              Текст может быть <small className="text-sm">маленьким</small> или <span className="text-2xl font-bold">большим</span>.
            </p>
            <p>
              Формула: H<sub className="text-sm">2</sub>O — вода, E=mc<sup className="text-sm">2</sup> — энергия.
            </p>
            <p className="line-through text-muted-foreground">
              Зачёркнутый текст показывает устаревшую информацию
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Image" size={32} className="text-primary" />
            <h2 className="text-3xl font-bold">Изображения в HTML</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border">
              <img 
                src="https://cdn.poehali.dev/projects/25d8a600-41ea-43c2-8826-b1201eae7644/files/3ba373f4-2c4c-43a5-8ba3-086fe0dce565.jpg"
                alt="HTML код и веб-элементы"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">HTML элементы</h3>
                <p className="text-muted-foreground">
                  Визуализация структуры HTML-кода и основных веб-элементов
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border">
              <img 
                src="https://cdn.poehali.dev/projects/25d8a600-41ea-43c2-8826-b1201eae7644/files/85b52f23-d2d7-402f-aa69-f28f7ef38944.jpg"
                alt="Типографика и форматирование текста"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Форматирование текста</h3>
                <p className="text-muted-foreground">
                  Различные стили текста: жирный, курсив, подчёркивание
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-white rounded-2xl p-12 border border-border">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="List" size={32} className="text-primary" />
            <h2 className="text-3xl font-bold">Списки</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Маркированный список:</h3>
              <ul className="space-y-3 ml-6">
                <li className="list-disc text-lg">Первый элемент списка</li>
                <li className="list-disc text-lg">Второй элемент списка</li>
                <li className="list-disc text-lg">Третий элемент списка</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Нумерованный список:</h3>
              <ol className="space-y-3 ml-6">
                <li className="list-decimal text-lg">Первый шаг</li>
                <li className="list-decimal text-lg">Второй шаг</li>
                <li className="list-decimal text-lg">Третий шаг</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Quote" size={32} className="text-primary" />
            <h2 className="text-3xl font-bold">Цитаты</h2>
          </div>
          
          <blockquote className="border-l-4 border-primary pl-8 py-6 bg-accent rounded-r-2xl italic text-xl text-foreground">
            "Обучение — это не наполнение ведра, а зажигание огня."
            <footer className="mt-4 text-base not-italic text-muted-foreground">— Уильям Батлер Йейтс</footer>
          </blockquote>
        </section>

        <section className="text-center bg-primary text-primary-foreground rounded-2xl p-12">
          <Icon name="BookOpen" size={48} className="mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Готовы изучить HTML?</h2>
          <p className="text-xl mb-8 opacity-90">
            Переходите к обучающему разделу и узнайте, как создавать такие сайты
          </p>
          <Link to="/learn">
            <Button variant="secondary" size="lg" className="text-lg px-8">
              Начать обучение
              <Icon name="ArrowRight" size={20} className="ml-2" />
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

export default Index;
