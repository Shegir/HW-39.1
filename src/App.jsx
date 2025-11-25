import Counter from './components/Counter';
import Greeting from './components/Greeting';
import ClassCounter from './components/ClassCounter.jsx';

export default function App() {
    return (
        <div>
            <Greeting name="Serhii" />
            <Counter />
            <ClassCounter />
        </div>
    );
}
