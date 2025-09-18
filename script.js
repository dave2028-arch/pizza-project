let voteCount1 = 0;
let voteCount2 = 0;
let voteCount3 = 0;
        const originalTitle = "Monthly Pizza Pop-Up!";
        const alternateTitle = "New Month New Taste!";

        function changeTitle() {
            document.getElementById('main-title').textContent = alternateTitle;
        }

        function resetTitle() {
            document.getElementById('main-title').textContent = originalTitle;
        }

        function incrementVote1() {
            voteCount1++;
            document.getElementById('vote-count1').textContent = voteCount1;
        }
        function incrementVote2() {
            voteCount2++;
            document.getElementById('vote-count2').textContent = voteCount2;
        }
        function incrementVote3() {
            voteCount3++;
            document.getElementById('vote-count3').textContent = voteCount3;
        }

        function changeBackground() {
            const colors = [
                '#FFDDC1', // Light Peach
                '#C1FFD7', // Mint Green
                '#D1C1FF', // Lavender
                '#FFC1E0', // Light Pink
                '#C1E0FF', // Light Blue
                '#FFFACD'  // Lemon Chiffon
            ];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
        }