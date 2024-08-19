document.getElementById("loveButton").addEventListener("click", function() {
    let count = 1;
    const lovePage = window.open("", "", "width=600,height=600");

    lovePage.document.write(`
        <html>
        <head>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #ffe6e6;
                    font-family: Arial, sans-serif;
                    overflow: hidden;
                }
                .love-counter {
                    position: relative;
                    width: 200px;
                    height: 180px;
                    background-color: red;
                    transform: rotate(-45deg);
                    margin: 50px;
                    color: #fff;
                    text-align: center;
                    font-size: 20px;
                }
                .love-counter::before,
                .love-counter::after {
                    content: "";
                    position: absolute;
                    width: 200px;
                    height: 200px;
                    background-color: red;
                    border-radius: 50%;
                }
                .love-counter::before {
                    top: -100px;
                    left: 0;
                }
                .love-counter::after {
                    left: 100px;
                    top: 0;
                }
                p {
                    position: absolute;
                    top: 60px;
                    left: 20px;
                    transform: rotate(45deg);
                    margin: 0;
                    padding: 0;
                }
                @keyframes fallingHearts {
                    from {
                        transform: translateY(-100%);
                    }
                    to {
                        transform: translateY(100%);
                    }
                }
                .falling-heart {
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    background-color: red;
                    border-radius: 50%;
                    animation: fallingHearts 10s linear infinite;
                    opacity: 0.5;
                }
                .falling-heart:nth-child(1) { left: 10%; animation-duration: 8s; }
                .falling-heart:nth-child(2) { left: 30%; animation-duration: 12s; }
                .falling-heart:nth-child(3) { left: 50%; animation-duration: 10s; }
                .falling-heart:nth-child(4) { left: 70%; animation-duration: 9s; }
                .falling-heart:nth-child(5) { left: 90%; animation-duration: 11s; }
            </style>
        </head>
        <body>
            <div class="love-counter">
                <p id="loveText">Ami Tomay Unlimited Valobashi Ela: ${count}</p>
            </div>
            <div class="falling-heart" style="top: 0;"></div>
            <div class="falling-heart" style="top: 10%;"></div>
            <div class="falling-heart" style="top: 20%;"></div>
            <div class="falling-heart" style="top: 30%;"></div>
            <div class="falling-heart" style="top: 40%;"></div>
            <script>
                let counter = 1;
                const interval = setInterval(() => {
                    if (counter <= 8) {
                        document.getElementById("loveText").innerText = "Ami Tomay Unlimited Valobashi Ela: " + counter;
                        counter++;
                    } else {
                        document.getElementById("loveText").innerText = "Ami Tomay Unlimited Valobashi Ela";
                        clearInterval(interval);
                    }
                }, 1000);
            </script>
        </body>
        </html>
    `);
});
