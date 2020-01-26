import React from 'react';
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
            color: 'blue'
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


// class Square extends React.Component{
//     constructor(props) {
//         super(props);
//         // var boxes = [];
//         // const numBoxes = 24;
//         // this.state = {boxes};
//         // const style = {
//         //     width: '100px',
//         //     height: '100px',
//         //     display: 'inline-block',
//         //     backgroundColor: "blue"
//         // };
//     }
//
//     render() {
//         const boxes = this.state.boxes.map(b =>
//             <Box key={b.id} color={b.color} />
//         );
//         return (
//             <div className="App">
//                 {boxes}
//             </div>
//         );
//     }
// }

// class Box extends React.Component{
//     constructor(props) {
//         super(props);
//         var boxes = [];
//         // let allColors = "#00B1E1"
//
//         const numBoxes = 24;
//         // for (var i = 0; i < numBoxes; i++) {
//         //     // let randomColor = this.getRandomColor();
//         //     boxes.push({
//         //         id: i,
//         //         color: 'blue',
//         //     });
//         // }
//         this.state = {boxes};
//
//
//
//
//         // setInterval(() => {
//         //   const newBoxes = this.state.boxes.slice();
//         //   const randomBoxIndex = Math.floor(Math.random() * newBoxes.length);
//         //   newBoxes[randomBoxIndex] = Object.assign({}, newBoxes[randomBoxIndex],
//         //                               {color: this.getRandomColor()});
//         //   this.setState({
//         //     boxes: newBoxes
//         //   })
//         // }, 1000);
//
//     }
//
//     getRandomColor() {
//       let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
//       return this.props.allColors[colorIndex];
//     }
//
//
//
//     render() {
//         const boxes = this.state.boxes.map(b =>
//             <Box key={b.id} color={b.color} />
//         );
//         const style = {
//             width: '100px',
//             height: '100px',
//             display: 'inline-block',
//             border:'1px solid black',
//             backgroundColor: 'white'
//         };
//         return (
//             <div>
//         <div style={style}></div>
//                 <div className="App">{boxes}</div>
//             </div>
//         );
//     }
// }








class Square extends React.Component {
    constructor(props) {
        super(props);
        this.pickColor = this.pickColor.bind(this)
        this.setNewColor = this.setNewColor.bind(this)
        this.state = {};
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    pickColor () {
        let picknewColor ="red"
        this.setState({color: picknewColor})
    }

    setNewColor(props){
        this.interval = setInterval(() => {
            let bgColors = {
                default: null,
                blue: "#00B1E1",
            }
            let randomColor = bgColors[
                Object.keys(bgColors)[Math.floor(Math.random() * Object.keys(bgColors).length)]
                ];
            this.setState(() => ({bgColor: randomColor}))
        }, 900);
    }

    render() {
        return (
            // <div>
            <>
                {/*<button onClick={this.setNewColor}>gggggg</button>*/}
                <button
                    className="square"
                    style={{
                        // backgroundColor: this.state.color,
                        backgroundColor: this.state.bgColor,
                        border: "1px solid black",
                        height: "34px",
                        width: "34px",
                    }} onClick={this.setNewColor}>
                </button>
            </>
            // </div>
        );
    }
}

class Board extends React.Component {
    // renderSquare(i) {
    //     return <Square/>;
    // }

    constructor(props) {
        super(props);
        this.state ={
            squares: 3,
            value: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleStart = this.handleStart.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    createSquares(i){
        let squares = [];
        for (let i = 0; i < this.state.squares; i++) {
            squares.push(<Square color={this.props.color} key={i} />);
        }
        return squares;
        // return <Square/>
        // return <button onClick={Square}>jjjjj</button>
    }

    handleStart() {
        // // start timer after button is clicked
        // this.interval = setInterval(() => {
        //     this.setState(prevState => ({
        //         seconds: prevState.seconds + 1
        //     }));
        // }, 1000);
        // var bgColors = {
        //     // default: null,
        //     blue: "#00B1E1",
        // }
        this.interval = setInterval(() => {
            this.setState({
                bgColor: '#3CB371',
                isToggleOn: true
            })
        },1000);
    }


    render() {
        // const status = 'Next player: X';
        return (
            <div style={{
                marginLeft: '350px',
            }}>
                <input type="text" value={this.state.value} onChange={this.handleChange} /><button onClick={this.handleStart} style={{backgroundColor:this.state.bgColor}}>{this.state.isToggleOn ? 'Play Again' : 'Play'}</button>
                <p></p>
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
            <div className="container" style={{
                marginLeft: '350px',
            }}>
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

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            seconds: 0,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleStart = this.handleStart.bind(this);
        // this.props.setNewColor = this.props.setNewColor.bind(this);

    };


    handleClick () {
        this.setState((prevState, { count }) => ({
            count: prevState.count + 1
        }));

    };

    handleStart() {
        // // start timer after button is clicked
        // this.interval = setInterval(() => {
        //     this.setState(prevState => ({
        //         seconds: prevState.seconds + 1
        //     }));
        // }, 1000);
        // var bgColors = {
        //     // default: null,
        //     blue: "#00B1E1",
        // }
        this.interval = setInterval(() => {
            this.setState({
                bgColor: '#3CB371',
                isToggleOn: true
            })
        },1000);
    }

    handleColorSquares(){
        // let bgColors = {
        //     default: null,
        //     blue: "#00B1E1",
        // };
        // let randomColor = bgColors[
        //     Object.keys(bgColors)[Math.floor(Math.random() * Object.keys(bgColors).length)]
        //     // map.get(bgColors)[Math.floor(Math.random() * map.get(bgColors).length)]
        //     // Object.keys(bgColors)[Math.floor(Math.random() * Object.keys(bgColors).length)]
        //
        //     ];
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return (
            <div>
                <button onClick={this.handleClick}></button>
                <button>{this.state.count}</button>
                {/*Seconds: {this.state.seconds}*/}
                <button onClick={this.handleStart} style={{backgroundColor:this.state.bgColor}}>{this.state.isToggleOn ? 'Play Again' : 'Play'}</button>
                <button className="square" onClick={this.setNewColor} style={{backgroundColor:this.state.bgColor}}>hi</button>

            </div>
        )
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
                    {/*<Square />*/}
                    <Counter/>
                    {/*<Box/>*/}

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

