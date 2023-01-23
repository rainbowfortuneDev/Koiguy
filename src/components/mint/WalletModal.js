import metamask from "../../assets/img/metamask.png"
import coinbase from "../../assets/img/coinbase.png"

const WalletModal = ({show, setShow, connectMetaMaskHandler ,connectCoinbaseWalletHandler}) => {
    const styles = {
        backgroundColor: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(10px)",
        pointerEvents: show ? "auto" : "none",
        opacity: show ? 1 : 0
    }

    return (
        <div className="w-full h-screen fixed top-0 left-0 flex justify-center items-center p-10" style={styles}>
            <div className="p-10 rounded-lg bg-white max-w-full max-h-full overflow-y-auto relative">
                <button type="button" onClick={() => connectMetaMaskHandler()} className="rounded hover:shadow-xl transition-all duration-500 p-4 text-center mb-7 block w-full">
                    <img src={metamask} alt="MetaMask icon" className="max-w-full max-h-14 object-contain m-auto"/>
                    <h2 className="text-black font-bold my-5 text-4xl break-all">MetaMask</h2>
                    <p className="text-gray-500 text-lg break-all">Connect to your MetaMask wallet</p>
                </button>

                <button type="button" onClick={() => connectCoinbaseWalletHandler()} className="rounded hover:shadow-xl transition-all duration-500 p-4 text-center block w-full">
                    <img src={coinbase} alt="CoinBase icon" className="max-w-full max-h-14 object-contain m-auto"/>
                    <h2 className="text-black font-bold my-5 text-4xl break-all">CoinBase</h2>
                    <p className="text-gray-500 text-lg break-all">Scan with CoinBase to connect</p>
                </button>

                <button className="text-xl absolute top-2 right-4 text-gray-800" onClick={() => setShow(false)}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )
}

export default WalletModal
