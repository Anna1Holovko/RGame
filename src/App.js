import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import Dropdown from 'react-dropdown'


class Menu extends React.Component{
    constructor() {
        super();
        this.state ={
            clicksUr: null,
            clicksC: null,
        }
    }
    selectMenu(){
    }
    render() {
        return(
            <div>
                <button>Select the level</button>
                <div className="menu">
                    <button className="EasyMode"> Easy mode </button>
                    <button className="NormalMode"> Normal mode </button>
                    <button className="HardMode"> Hard mode </button>
                </div>
            </div>
        );
    }
}

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.pickColor = this.pickColor.bind(this)
        this.setNewColor = this.setNewColor.bind(this)
        let bgColors = {
            default: "#81b71a",
            blue: "#00B1E1",
            // cyan: "#37BC9B",
            // green: "#8CC152",
            // red: "#E9573F",
            // yellow: "#F6BB42",
        }
        this.state = {
            // randomcolor: null,
            // square:6,

        };

        this.interval = setInterval(() => {
            let randomColor = bgColors[
                Object.keys(bgColors)[
                    Math.floor(Math.random() *
                        Object.keys(bgColors).length)
                    ]
                ];
            this.setState(() => ({bgColor: randomColor}))
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }



    // componentDidMount () {
    //     this.setColor()
    //     // this.initialColor()
    // }

    pickColor () {
        // let newColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
        // let newColor = "white"
        // setTimeout()
        // let picknewColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
        let picknewColor ="red"
        // setInterval(randomize, 2000)
        this.setState({color: picknewColor})
        // this.setState({color:picknewColor})
    }

    setNewColor(){
        // let randomSquare = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')'
        // this.setState({color: randomSquare})
        // setInterval(this.pickColor, 1000)

    }

    render() {
        return (
            // <div id="squaresContainer" className="container">
            //     {this.createSquares(1)}
            // </div>
            <button
                className="square"
                style={{
                    // backgroundColor: this.state.color,
                    backgroundColor: this.state.bgColor,
                    border: "1px solid black",
                    height: "34px",
                    width: "34px",
                }}
                // onLoad={this.setNewColor}
                   // onClick={this.pickColor}
                // onClick={() => this.style.background("blue")}
            >
                {/*{this.props.value}*/}
            </button>
        );
    }
}

class Board extends React.Component {
    // renderSquare(i) {
    //     return <Square/>;
    // }

    constructor(props) {
        super(props);
        // let bgColors = {
        //     default: "#81b71a",
        //     blue: "#00B1E1",
        //     // cyan: "#37BC9B",
        //     // green: "#8CC152",
        //     // red: "#E9573F",
        //     // yellow: "#F6BB42",
        // }
        this.state ={
            squares:3,
            // randcolor:"blue"
        }
        // this.interval = setInterval(() => {
        //     let randomColor = bgColors[
        //         Object.keys(bgColors)[
        //             Math.floor(Math.random() *
        //                 Object.keys(bgColors).length)
        //             ]
        //         ];
        //     this.setState(() => ({bgColor: randomColor}))
        // }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    createSquares(i){
        let bgColors = {
            default: "#81b71a",
            blue: "#00B1E1",
            // cyan: "#37BC9B",
            // green: "#8CC152",
            // red: "#E9573F",
            // yellow: "#F6BB42",
        }
        let squares = [];
        for (let i = 0; i < this.state.squares; i++) {
            squares.push(<Square color={this.props.color} key={i} />);
        }

        this.interval = setInterval(() => {
            let randomColor = bgColors[
                Object.keys(bgColors)[
                    Math.floor(Math.random() *
                        Object.keys(bgColors).length)
                    ]
                ];
            this.setState(() => ({bgColor: randomColor}))
        }, 2000);
        return squares;
        // return <Square/>
    }
    //
    // randomize(){
    //     let randomSquare = this.state.squares[Math.floor(Math.random() * this.state.squares)]
    //     this.setState({color:randomSquare})
    //     return randomSquare;
    // }


    render() {
        // const status = 'Next player: X';
        return (
            <div>
                {/*<div className="status">{status}</div>*/}
                <div className="board-row">
                    {this.createSquares(0)}
                </div>
                <div className="board-row">
                    {this.createSquares(1)}
                </div>
                <div className="board-row">
                    {this.createSquares(2)}
                </div>
            </div>
            // <div>
            //     <div className="status">{status}</div>
            //     <div className="board-row">
            //         {this.renderSquare(0)}
            //         {this.renderSquare(1)}
            //         {this.renderSquare(2)}
            //     </div>
            //     <div className="board-row">
            //         {this.renderSquare(3)}
            //         {this.renderSquare(4)}
            //         {this.renderSquare(5)}
            //     </div>
            //     <div className="board-row">
            //         {this.renderSquare(6)}
            //         {this.renderSquare(7)}
            //         {this.renderSquare(8)}
            //     </div>
            // </div>

        );
    }
}

class LeaderList extends React.Component{
    state = {
        todos: []
    }
    componentDidMount() {
        fetch('https://starnavi-frontend-test-task.herokuapp.com/winners')
            .then(res => res.json())
            .then((data) => {
                this.setState({ todos: data })
                console.log(this.state.todos)
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="container">
                <div className="col-xs-12">
                    <h1>Leader List</h1>
                    {this.state.todos.map((todo) => (
                        <div className="card">
                            <div className="card-body">
                                <li> {todo.winner}&nbsp;&nbsp;&nbsp;{todo.date}</li>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Menu/>
                    <Board />
                    <LeaderList/>
                    {/*<SquaresContainer/>*/}
                    {/*<Square/>*/}

                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );

// ========================================

export default App;

