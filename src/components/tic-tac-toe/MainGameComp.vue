<script>
import SquareComp from './SquareComp.vue';

export default {
    components: {
        SquareComp
    },

    data() {
        return {
            squares: ["", "", "", "", "", "", "", "", "",],
            isXTurn: true,
            gameStatus: ""
        }
    },

    methods: {
        getWinners(square) {
            const winningPatterns = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
                [0, 3, 6],
                [1, 4, 7],
            ];
            for (let i = 0; i < winningPatterns.length; i++) {
                const [x, y, z] = winningPatterns[i];
                if (
                    square[x] &&
                    square[x] === square[y] &&
                    square[x] === square[z]
                ) {
                    return square[x];
                }
            }
            return null;
        },

        handleClick(getCurrentSquare) {
            const copySquares = [...this.squares];

            if (this.getWinners(copySquares) || copySquares[getCurrentSquare]) return;
            copySquares[getCurrentSquare] = this.isXTurn ? "X" : "O";
            this.isXTurn = !this.isXTurn;
            this.squares = copySquares;
        },

        handleRestart() {
            this.isXTurn = true
            this.squares = ["", "", "", "", "", "", "", "", "",]
        },

        updateStatus() {
            const winner = this.getWinners(this.squares);
            if (!winner && this.squares.every((item) => item !== null)) {
                this.gameStatus = `This is a draw! Please restart the game.`;
            } else if (winner) {
                this.gameStatus = `Winner is ${winner}. Please restart the game`
            } else {
                this.gameStatus = `Next player is ${this.isXTurn ? "X" : "O"}`
            }
        }

    },

    watch: {
        squares: {
            handler() {
                this.updateStatus();
            },
            deep: true,
        },
        isXTurn() {
            this.updateStatus();
        },
    }


}
</script>

<template>
    <div class='min-h-screen w-full h-full bg-black text-white flex flex-col items-center justify-center gap-y-10'>
        <div>
            <div class='flex items-center'>
                <SquareComp :index="0" :value="squares[0]" :onClick="() => handleClick(0)" />
                <SquareComp :index="1" :value="squares[1]" :onClick="() => handleClick(1)" />
                <SquareComp :index="2" :value="squares[2]" :onClick="() => handleClick(2)" />
            </div>
            <div class='flex items-center'>
                <SquareComp :index="3" :value="squares[3]" :onClick="() => handleClick(3)" />
                <SquareComp :index="4" :value="squares[4]" :onClick="() => handleClick(4)" />
                <SquareComp :index="5" :value="squares[5]" :onClick="() => handleClick(5)" />
            </div>
            <div class='flex items-center'>
                <SquareComp :index="6" :value="squares[6]" :onClick="() => handleClick(6)" />
                <SquareComp :index="7" :value="squares[7]" :onClick="() => handleClick(7)" />
                <SquareComp :index="8" :value="squares[8]" :onClick="() => handleClick(8)" />
            </div>
        </div>

        <div class='space-y-2 flex justify-center items-center flex-col'>
            <h1 class='text-lg '>{{ gameStatus }}</h1>
            <button class='border-0 bg-purple-600 rounded-md px-5 py-2 active:shadow-lg hover:shadow-lg shadow-white'
                @click="handleRestart">
                Restart
            </button>
        </div>
    </div>
</template>