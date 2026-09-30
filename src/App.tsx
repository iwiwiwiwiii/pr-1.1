import './App.css';

const emojis = [
    {
        emoji: '💯',
        title: '100',
        description: 'Hundred, points, symbol, wow, win, perfect, parties'
    },
    {
        emoji: '🔢',
        title: '1234',
        description: 'input symbol for numbers symbol'
    },
    {
        emoji: '🔢',
        title: '1234',
        description: 'input symbol for numbers symbol'
    }
];

function App() {
    return (
        <div className="app">
            <header className="hero">
                <h1 className="hero__title">Emoji Finder</h1>
                <p className="hero__subtitle">Find emoji by keywords</p>
            </header>

            <main className="container">
                <input
                    className="search"
                    type="text"
                    placeholder="Placeholder"
                />

                <div className="cards">
                    {emojis.map((item, index) => (
                        <div className="card" key={index}>
                            <div className="card__emoji">{item.emoji}</div>
                            <h2 className="card__title">{item.title}</h2>
                            <p className="card__description">{item.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;