const {produce} = require("immer"); 

const baseState = [
    {todo: "Learn ES6+", done: true},
    {todo: "Try immer", done:false},
    {todo: "Tweet about it"},
]


const newState1 = [
    ...baseState.map((tweet, index) => 
        index == 1 ? {...tweet, done:true} : tweet
    ),
];

const newState2 = produce(baseState, draft=>{
    draft[1].done = false;
})