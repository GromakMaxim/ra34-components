import './App.css';
import './css/main.css';

function ShopItemFunc(props) {
    console.log(props.item)
    const receivedData = props.item;
    return (
        <div className="main-content">
            <h2>{receivedData.brand}</h2>
            <h1>{receivedData.title}</h1>
            <h3>{receivedData.description}</h3>
            <div className="description">{receivedData.descriptionFull}</div>
            <div className="highlight-window mobile">
                <div className="highlight-overlay"/>
            </div>
            <div className="divider"/>
            <div className="purchase-info">
                <div className="price">{receivedData.currency}{(receivedData.price).toFixed(2)}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    );
}

function App() {
    const item = {
        brand: 'Tiger of Sweden',
        title: 'Leonard coat',
        description: 'Minimalistic coat in cotton-blend',
        descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
        price: 399,
        currency: '£'
    }

    return (
        <div className="container">
            <div className="background-element">
            </div>
            <div className="highlight-window">
                <div className='highlight-overlay'/>
            </div>
            <div className="window">
                <ShopItemFunc item={item}/>
            </div>
        </div>
    );
}

export default App;
