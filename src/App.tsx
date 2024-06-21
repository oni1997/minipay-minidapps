import PayTokenFunctionCall from "./dApps/PayTokenFunctionCall";
import TransferCUSD from "./dApps/TransferCUSD";
import './App.css';

export default function App() {
    return (
        <div>
            <TransferCUSD />
            <PayTokenFunctionCall />
        </div>
    );
}
