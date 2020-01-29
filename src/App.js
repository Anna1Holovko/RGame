import React from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import Dropdown from 'react-dropdown'
import Box from './Box';



// class Test extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             // counter:5,
//             // counterNormal:10
//         }
//
//         this.buttons =[];
//     }
//
//
//     handleTestClick = () => {
//         this.state = {counter: 5};
//         this.setState({ counter: this.state.counter +1});
//         this.buttons= [];
//         for(let i=0; i<this.state.counter; i++)
//             this.buttons.push(<button>{i}</button>)
//     }
//
//     handleTestClickNormal = () => {
//         this.state = {counterNormal: 10};
//         this.setState({ counterNormal: this.state.counterNormal +1});
//         this.buttons= [];
//         for(let i=0; i<this.state.counterNormal; i++)
//             this.buttons.push(<button>{i}</button>)
//     }
//
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleTestClick}>Click Me!</button>
//                 <button onClick={this.handleTestClickNormal}>handleTestClickNormal</button>
//
//                 <div>
//                     {this.buttons}
//                 </div>
//             </div>
//         )
//     }
// }



// class Menu extends React.Component{
//     constructor() {
//         super();
//         this.state ={
//             clicksUr: null,
//             clicksC: null,
//             color: 'blue'
//         }
//     }
//     selectMenu(){
//     }
//     render() {
//         return(
//             <div>
//                 <button>Select the level</button>
//                 <div className="menu">
//                     <button className="EasyMode"> Easy mode </button>
//                     <button className="NormalMode"> Normal mode </button>
//                     <button className="HardMode"> Hard mode </button>
//                 </div>
//             </div>
//         );
//     }
// }


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
        // this.setNewColor = this.setNewColor.bind(this)
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
                    }}
                    // onClick={this.setNewColor}
                >
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
        // var boxes = [];
        // const numBoxes = 5;
        // for (var i = 0; i < numBoxes; i++) {
        //     let randomColor = this.getRandomColor();
        //     boxes.push({
        //         id: i,
        //         color: null,
        //     });
        // }
        this.state ={
            // squaresEasy: 3,
            // squaresNormal: 5,
            value: '',
            // boxes
        }
        this.buttons =[];
        this.handleChange = this.handleChange.bind(this);
        this.handleStart = this.handleStart.bind(this);
        // this.createSquaresEasy = this.createSquaresEasy.bind(this);
        // this.createSquaresNormal = this.createSquaresNormal.bind(this);
        this.handleTestClick = this.handleTestClick.bind(this);
        this.handleTestClickNormal = this.handleTestClickNormal.bind(this);
        this.handleTestClickHard = this.handleTestClickHard.bind(this);



        // this.setNewColor = this.setNewColor.bind(this)
    }

    // getRandomColor() {
    //     let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
    //     return this.props.allColors[colorIndex];
    // }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    // handleTestClick = () => {
    //     this.state = {
    //         counter: 5,
    //         color: "#00B1E1"};
    //     this.setState({ counter: this.state.counter});
    //     this.buttons= [];
    //     for(let i=0; i<this.state.counter; i++)
    //         this.buttons.push(<button>{i}</button>)
    // }

    handleTestClick () {
        this.interval = setInterval( () => {
            this.buttons= [];
            this.state = {
                counter: 8,}

        }, 1000);
        this.setState({ counter: this.state.counter});

        for(let i=0; i<this.state.counter; i++)
            this.buttons.push(<button style={{
                // backgroundColor: this.state.color,
                backgroundColor: this.state.bgColor,
                border: "1px solid black",
                height: "34px",
                width: "34px",
                maxWidth: "100px"
            }}>
                {/*{i}</button>)*/}
                {i}</button>)
    }

    handleTestClickNormal () {
        this.interval = setInterval( () => {
            this.buttons= [];
            this.state = {
                counter: 10,}

        }, 1000);
        this.setState({ counter: this.state.counter});

        for(let i=0; i<this.state.counter; i++)
            this.buttons.push(<button style={{
                // backgroundColor: this.state.color,
                backgroundColor: this.state.bgColor,
                border: "1px solid black",
                height: "34px",
                width: "34px",
                maxWidth: "100px"
            }}>{i}
                {/*{i}</button>)*/}
            </button>)
    }

    handleTestClickHard () {
        this.interval = setInterval( () => {
            this.buttons= [];
            this.state = {
                counter: 15,}

        }, 1000);
        this.setState({ counter: this.state.counter});

        for(let i=0; i<this.state.counter; i++)
            this.buttons.push(<button style={{
                // backgroundColor: this.state.color,
                backgroundColor: this.state.bgColor,
                border: "1px solid black",
                height: "34px",
                width: "34px",
            }}>{i}
                {/*{i}</button>)*/}
            </button>)
    }


    createSquaresEasy(i){
        this.state={squaresEasy:3};
        let squaresEasy = [];
        for (let i = 0; i < this.state.squaresEasy; i++) {
            squaresEasy.push(<Square color={this.createSquaresEasy} key={i} />);
        }
          return squaresEasy;
    }

    createSquaresNormal(i){
        this.state={squaresNormal:5};
        let squaresNormal = [];
        for (let i = 0; i < this.state.squaresNormal; i++) {
            squaresNormal.push(<Square color={this.createSquaresNormal} key={i} />);
        }
        return squaresNormal;
    }



    handleStart(i) {
        this.interval = setInterval(() => {
            let squares = [];
            let setColor = {
                default: null,
                blueColor: "#00B1E1",
            }
            for (let i = 0; i < this.state.squaresEasy; i++) {
                squares.push(<Square color={this.handleStart} key={i} />);
            }
            let randomColor = setColor[
                // squares.keys(setColor)[Math.floor(Math.random() * squares.keys(setColor).length)]
                Object.keys(setColor)[Math.floor(Math.random() * Object.keys(setColor).length)]
                ];
            this.setState({
                bgColor: '#3CB371',
                isToggleOn: true,
                handleStart:randomColor
            })
            return squares;
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    // setNewColor(i){
    //     // let squares = [];
    //     this.interval = setInterval(() => {
    //         let setColor = {
    //             default: null,
    //             blueColor: "#00B1E1",
    //         }
    //         let randomColor = setColor[
    //             // squares.keys(setColor)[Math.floor(Math.random() * squares.keys(setColor).length)]
    //             Object.keys(setColor)[Math.floor(Math.random() * Object.keys(setColor).length)]
    //             ];
    //         // this.setState(() => ({bgColor: randomColor}))
    //         this.setState(() => ({setNewColor: randomColor}))
    //
    //     }, 900);
    // }


    render() {
        // let { count } =this.state
        // const boxes = this.state.boxes.map(b =>
        //     <Box key={b.id} color={b.color} />
        // );
        // const status = 'Next player: X';
        return (
            <div style={{
                marginLeft: '350px',
                // backgroundColor:this.state.handleStart
            }}>
                <div>
                    <button>Select the level</button>
                    <div className="menu">
                        <button className="EasyMode" onClick={this.handleTestClick}> Easy mode </button>
                        <button className="NormalMode" onClick={this.handleTestClickNormal}> Normal mode </button>
                        <button className="HardMode" onClick={this.handleTestClickHard}> Hard mode </button>
                    </div>
                </div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleStart}
                        style={{backgroundColor:this.state.handleStart}}
                        // style={{backgroundColor:this.state.bgColor}}
                >{this.state.isToggleOn ? 'Play Again' : 'Play'}</button>
                <p></p>
                <div>
                    {this.buttons}
                </div>
                <p></p>
                <div className="board-row"
                     // style={{backgroundColor:this.state.handleStart}}
                >
                    {this.createSquaresEasy(0)}
                </div>
                <div className="board-row">
                    {this.createSquaresEasy(1)}
                </div>
                <div className="board-row">
                    {this.createSquaresEasy(2)}
                </div>

                <div className="board-row">
                    {this.createSquaresNormal(0)}
                </div>
                <div className="board-row">
                    {this.createSquaresNormal(1)}
                </div>
                <div className="board-row">
                    {this.createSquaresNormal(2)}
                </div>
                <div className="board-row">
                    {this.createSquaresNormal(3)}
                </div>
                <div className="board-row">
                    {this.createSquaresNormal(4)}
                </div>
                {/*<button onClick={this.setNewColor}>ffff</button>*/}
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
            // seconds: 0,
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
                {/*<button onClick={this.handleStart} style={{backgroundColor:this.state.bgColor}}>{this.state.isToggleOn ? 'Play Again' : 'Play'}</button>*/}
                {/*<button className="square" onClick={this.setNewColor} style={{backgroundColor:this.state.bgColor}}>hi</button>*/}

            </div>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    {/*<Menu/>*/}
                    <Board />
                    <LeaderList/>
                    {/*<SquaresContainer/>*/}
                    {/*<Square />*/}
                    <Counter/>
                    {/*<Box/>*/}
                    {/*<Test/>*/}

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

// App.defaultProps = {
//     allColors: ['blue']
//     // ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
//     //         "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
//     //         "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
//     //         "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
//     //         "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
//     //         "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
//     //         "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
//     //         "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
//     //         "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
//     //         "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
//     //         "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
//     //         "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
//     //         "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
//     //         "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
//     //         "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
//     //         "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
//     //         "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
//     //         "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
//     //         "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
//     //         "Yellow","YellowGreen"]
// }

