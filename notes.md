#2 different types of modules is 
1.Named export(function,elements etc), 
2.Default export(components) 

#Different ways to store data.
1. create a public file as .json, then fetch it.
2. fetch data from github . not recommended.   


##There is 2 ways to store data.
1. my own database: if I want to save user data to all of his devices
2. local storage: if only for that browser

#useEffect is a React Hook used to perform side effects (such as fetching data, setting timers, or adding event listeners) after a component renders.


<!-- useEffect -->
useEffect is a React Hook that runs side-effect code after a component renders, such as fetching data, setting timers, or interacting with browser APIs.

Quick Summary
Code	                        Meaning
useEffect(() => {})	            Run after every render
useEffect(() => {}, [])	        Run once after the first render
useEffect(() => {}, [count])	Run after the first render and whenever count changes

Memory trick: Think of useEffect as "After rendering, do this." That's its main job.


//data loading from api: when we use use hook, we do nto need async , await.
cause, both are promise  