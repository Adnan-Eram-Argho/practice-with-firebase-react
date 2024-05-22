function Countdown() {
    return (
        <div className="sm:flex sm:flex-col lg:flex-row md:flex-row justify-center">
            <p className="text-3xl pr-3 sm:text-center">I will become a fullstack dev in</p>
            <div className="flex gap-5 text-center items-center ">
                
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": 49 }}></span>
                        
                    </span>
                    sec
                </div>
             
            </div>
        </div>
    );
}

export default Countdown;
