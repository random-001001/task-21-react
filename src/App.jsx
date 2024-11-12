import './index.css'

function App() {

  const cards = [
    {name : "Card1", description : "This is card 1", img : "https://cdn.pixabay.com/photo/2013/09/05/01/36/white-179005_1280.jpg"},
    {name : "Card2", description : "This is card 2", img : "https://cdn.pixabay.com/photo/2020/04/08/08/08/spring-5016266_640.jpg"},
    {name : "Card3", description : "This is card 3", img : "https://cdn.pixabay.com/photo/2022/09/23/14/58/rose-7474633_640.jpg"},
    {name : "Card4", description : "This is card 4", img : "https://cdn.pixabay.com/photo/2020/05/29/05/57/hibiscus-5233811_640.jpg"},
    {name : "Card5", description : "This is card 5", img : "https://cdn.pixabay.com/photo/2020/05/23/20/40/roses-5211410_640.png"},
    {name : "Card6", description : "This is card 6", img : "https://cdn.pixabay.com/photo/2019/03/25/13/42/orchid-4080258_640.jpg"},
    {name : "Card7", description : "This is card 7", img : "https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_640.jpg"},
    {name : "Card8", description : "This is card 8", img : "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg"},
    {name : "Card9", description : "This is card 9", img : "https://cdn.pixabay.com/photo/2023/11/13/01/30/flower-8384359_640.jpg"},
    {name : "Card10", description : "This is card 10", img : "https://cdn.pixabay.com/photo/2023/04/21/11/51/flower-7941764_640.jpg"},
    {name : "Card11", description : "This is card 11", img : "https://cdn.pixabay.com/photo/2021/08/07/19/49/cosmea-6529220_640.jpg"},
    {name : "Card12", description : "This is card 12", img : "https://cdn.pixabay.com/photo/2023/06/20/20/31/flower-8077948_640.jpg"}
  ]

  return (
    <div>
      <h2
        style={{
          fontWeight: "bold",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        All the cards are here!
      </h2>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map(card => (
            <div className="card mb-8">
            <div className="card-content">
              <img alt="Placeholder image of a scenic landscape with mountains and a lake" src={card.img} />
              <h2>{card.name}</h2>
              <p>{card.description}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App











{/*<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind Card Example</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
        }
        .card {
            width: 190px;
            height: 254px;
            background: #07182E;
            position: relative;
            display: flex;
            place-content: center;
            place-items: center;
            overflow: hidden;
            border-radius: 20px;
        }

        .card h2 {
            z-index: 1;
            color: white;
            font-size: 2em;
        }

        .card::before {
            content: '';
            position: absolute;
            width: 200%;
            background-color: rgb(0, 183, 255);
            height: 200%;
            animation: rotBGimg 6s linear infinite;
            transition: background-color 3s linear;
        }

        @keyframes rotBGimg {
            0% {
                transform: rotate(0deg);
                background-color: rgb(0, 183, 255);
            }
            25% {
                background-color: rgb(255, 48, 255);
            }
            50% {
                transform: rotate(180deg);
                background-color: rgb(255, 255, 0);
            }
            75% {
                background-color: rgb(0, 255, 0);
            }
            100% {
                transform: rotate(360deg);
                background-color: rgb(0, 183, 255);
            }
        }

        .card::after {
            content: '';
            position: absolute;
            background: #07182E;
            inset: 5px;
            border-radius: 15px;
        }
    </style>
</head>
<body class="bg-gray-100 flex flex-col items-center justify-center min-h-screen p-4">
    <div class="card mb-8">
        <h2>CARD</h2>
    </div>
    <div class="bg-white shadow-lg rounded-lg p-6 max-w-md">
        <h3 class="text-xl font-bold mb-4">About This Code</h3>
        <p class="text-gray-700 mb-2">
            This code creates a card component with a rotating gradient background using Tailwind CSS and custom CSS animations. The card has a dark blue background and a white text label in the center.
        </p>
        <p class="text-gray-700 mb-2">
            The rotating gradient background is achieved using the <code>::before</code> pseudo-element, which is animated with a keyframe animation named <code>rotBGimg</code>. This animation rotates the gradient background 360 degrees continuously.
        </p>
        <p class="text-gray-700">
            The <code>transition</code> property is used to ensure smooth transitions for the background gradient. The <code>transition: all 0.2s linear;</code> rule specifies that all properties should transition over 0.2 seconds with a linear timing function.
        </p>
    </div>
</body>
</html>*/}