Anyone can build browsers, we have to follow a standard(given by ECMA international) that the browser-building companies have to follow. Companies like Google and Firefox wrote their engines to convert JS code to binary that can then be understood by the machine.  
Native programs- That we can run on local machines. Earlier JS could only be used as web programs, so Node.js written by Google was pulled out and converted to a backend framework. Node.js is not a language or framework, it is just a JS runtime used to run JS in the backend in a local machine outside the Chrome browser.
JS is single-threaded language, which means it is kind of independent of how powerful our machine is, as it will utilize only one thread.  
JS is Asynchronous. Reading from a file, waiting for input from the key, writing to a database, or sending an HTTP request to a backend are all asynchronous tasks, as they can block the code if it is running synchronously. While asynchronous task is running we can do other tasks. (analogy- tell your friend to tell you that 1 hour has passed and now I have to drink water when I am busy studying. So now I don't have to look at the clock and can focus only on studying.)  
JS is loosely typed, the argument of a function need not be defined with its type.  
Interpreted language, goes line by line. While other languages like C++ will first do Compile checks, in its compilation time, it will give errors if the code has even a single error. (in JS the thread never goes inside a function until it is called, it just registers the function name.)  
APIs- exposed by the runtime environment, for example, fs, fetch, setTimeout, and setInterval are APIs.  
SetTimeout, setInterval takes a callback, and it is an asynchronous function.  
If you know about async JS, callback, Promises, and arrow functions you can sprint much faster.  
JS is asynchronous but it does not mean that it can do 2 tasks at the same time, if the thread is doing a time-consuming task and an asynchronous callback function is called during that  time, the async function will not work as the thread is busy executing the long task at the moment.  
Promises are not needed as such in js, you can do the same thing without them, but js peeps want code to be clean, and using promises you can write cleaner code.
Call stack, web APIs, event loop, callback queue. Web Apis is the friend that does the async task in the background. Once that is done, it puts the callback function in the callback queue, the function then waits there until the call stack is empty and the event loop pulls the function from the callback queue and puts it into the call stack for executing it. http://latentflip.com/loupe Check this website to see how the simulation is done  
Async chaining is done if you want one task to happen before another async task, because the first task is more important, eg, on chatgpt website the name appears before the upgrade plan and our history. Callback hell is this chaining of one async call after another, the code looks ugly due to this if we do more than 3 async calls one inside another.  
Promise returns an object, .then() is a function that is used to call the function we want to execute once the promise is returned(the callback function). The promise function takes resolve as an argument, when resolve is called, the control reaches then, resolve is the first argument of promise function, can be called anything.  
Backend- HTTP, Authentication, Database, Middlewares. Machines communicate using HTTP protocol with each other. Eg, I use servers of chatgpt to get answers to my questions as chatgpt servers run a very heavy ML algorithm, on my light machine which cannot use these algorithms on my local machine or phone. Eg, if you open Instagram, the feed, people's dp, etc comes from the servers/backend as they are not on my browser.  
You need to know where to send the server, there are many servers- servers of Google, facebook, openai, etc. We need to know their backend URL, eg if it is chatgpt, we use HTTP://chat-openai.com. The next part is route which tells what algorithm we want to run example HTTP://chat-openai.com/conversation/ conversation is the route.  
npm init -y initialize package.json file. Express is a library in nodejs that lets us create HTTP server. When you install new libraries, it is shown in the dependencies in package.json file. run node index.js to run the HTTP server.  
A long running process is a process that runs infinitely, like setInterval, or a server. The significance of route is that each route lets us do something different. In fs.readfile, the callback function takes two arguments, err and data, data contains the content of the file. FS is also a library like express is a library, both of nodejs.  
if we want to get input from user, we can do that using- query param, header, body. after the route add ? and then add the params. HTTP request has URL, route, and method. There are many methods, but the important one's are get, put, post and delete. Default is get request. Creating an account on instagram is a post request, updating data use put request, deletin use delete request. It doesn't have to be, it is a standard that is followed, we can do all things with get request, not recommended.  
app.get('/:username') this become wildcard, any route will now be able to do get request.it can be extracted as req.params.username. It is hard to send post request from the browser so initially use postman. Through url we can only send get request by default.  
IRL we use body to send data, 95% of the time. But first, we should see what is Middlewares. If we introduce a middleware then any request first go to middleware, which does some logic like authentication check and then the control reaches the other functions. Middleware in nodejs takes 3 argument- req,res and next, next is the next handler that we want to use if the request passes the logic of middleware. Have to write app.use(middleware1) to tell express to register the middleware so that all the requests are first sent to the middleware. Call next() in the middleware1 function which automatically calls the function for that route.   Middleware can also send res using res.send('hi') if we don't want to call the next function. If we try to send res.send() and also call next() which also contains res.send() then it will give error. Middleware is a function which is called before any route handler is called for any request. Middleware also helps to define a logic that we want to use in every route handler  
Body is something that express don't give us out of the box as like query params and headers. req.body is nothing as of req.query or req.headers. Express is a generic server, so you will bring xml,text,json,etc formats, they don''t want to provide support of all of them, that is why we have to use external libraries built by people called body-parser. npm install body-parser. app.use(bodyParser.json()). this bodyparser.json is a external middleware that we are using. bodyparser.json is a new middleware, which is just a funcition that extracts and parses the json in the body in the background, whose procedure we don't need to know. now we can use req.body().  
query params, headers and body are the three ways to send data. The function within the app.use() is the middleware. We can define route specific middleware as well can read more about them.  
the server responds with status code, body, headers. Status code are defined and are numbers like 404-not found page. The number can be anywhere between 100-600. No need to learn them. if 100-199 informational response, 200-299 succuessful response, mozilla page is the best page to read about each code. Express default send 200 status code. res.status(401).send(answer) will send 401 status code. 400-499 client error response, 500-599 server error. We can make a website only returning 200 code but that is not recommended. If our backend code is errornous then server error is returned.  
Response body can be of 3 types html, json, simple text. res.send('hi') is simple text type that is a string. Most of the times json is sent not simple text, as we can send more things in a simpler way. res.json() and res.send() are same, but we cannot send anyother type if we use res.json() expect json. If we send html code in the res.send() it will render on the page. this is for a get request. res.sendFile(__dirname+"/index.html") is used to directly  send the code from the html file. we cannot send res.send() multiple times.  
till now we saw that browsers and postman can send req to http servers, we can send req using nodejs process as well. It is done using another external library called fetch. so fetch function expects 3 arguments just in pattern of readFile function, the url we want to hit, the method type, the callbackFunc we want to call after successful connection with the url. Fetch  returns a promise so the callbackFunc is called using the .then() syntax. To get the json from the result we use result.json().then(callbackfunc) as .json() returns a promise so we have to use .then() see the code in the secondProcess.js to get clear idea as it is not that clear from here.  
Database- we can store data in json object in the server file locally but if the process restarts or computer restarts then the data is lost as it resets to empty as in the starting, so we can put the data in a separate file by reading and writing from that file as a temporary replacement. Whenever we read from a file we always get string, even the json is of string type, does not look good so we have to parse it in json type. we call JSON.parse(data), where data is the string we get from the file. Arrays are also JSON objects. Json.parse and json.stringify are opposite of each other. Till now we were using only POSTMAN to utilize our backend, now we have to connect it the frontend of the website so that users can use it via browser and phone.  
Connecting backend to frontend- the code we write in the html file in the script tag for onclick function is mostly client side not server side of express.  
CORS error- what if chatgpt frontend can send request to google backend or google send request to chatgpt backend, using fetch we can send request to anywhere, if I know which url to hit for a companies backend. This is not good for multiple security reasons, hence it is blocked by default. Cross Origin Response Error. First way to deal with this is to on app.get("/") sendFile of the index.html so that the frontend is served from the backend. this way we don't get cors error. The frontend url is as the backend URL, this is what browsers think and then we are ok. The other way to get away with cors error is add, cors=require("cors"), and app.use(cors()) this will tell browser it is ok to get request from anywhere, not recommended in a production ready app.  
In js we import using const express=require("express") kind of syntax. Whenever we have to send body using the fetch library we need to stringify the json object we are sending using JSON.stringify(). Also you need to send a header with the body if it is json type that is "Content-Type": "application/json" which tells the broswer that the body is of json type otherwise it will not work, kinda important.  
Legacy frontends - pre 2014. Foundation for react, what is react doing in the background. We will make dynamic frontend application as done in legacy time using vanilla css, html. What react does under the hood, we can send backend request from multiple places like postman, browser, frontend. Using id of html we can fetch what is input given by the user inside js using var title=document.getElementById("title").value. If we console log title, it will appear in the console of browser not vscode as the html is running on browser, vscode is running the backend code in the terminal.  
Inorder to show the data in the website we have to learn about DOM manipulation. How do you add js variables in html. To insert js variable in html, add a div with a id name, then get that div element in js code and use .innerHTML= js variable this will modify the html and add the js variable there. Whatever is inside a html tag, use .innerHTML to get it. if we use var a=document.createElement("div") creates a div element, but this div is not inserted in the dom. We can add text in it using a.innerHTML="hello". to add it to the mainArea div of html use document.getElementById("mainArea").appendChild(a). now the new div is inserted in the DOM of the webpage. This process was done for the longest time to make website dynamic until react came into the picture. We can give attribute to a tag using the .setAttribute function,         grandchild3.setAttribute("onclick","deleteTodo("+data[i].id+")");  
On facebook, opening chat is appendchild and closing the chat is remove child, this is what react do under the hood and hide the complexity to write all that ourselves, we just have to take care of the state variables that are changing.  
What is reconcilation- process of react or view taking the update of a state by calling appendchild or removechild in the background. How to move from existing state to current state, we should only calculate the differnce or diff, between the current state and updated state instead of rerendering the whole new state because that is very unoptimal. That is why frameworks were introduced to remove this hardwork and just focus on the state variable, the appendchild, removechild, etc will be taken care of on its own.  
Authentication- We can define route specific middleware as well, by passing the middleware function as an argument, app.post() can take infinite number of arguments, the last argument is the callback function which defines its functionality, all the middle arguments are middlewares that are called one by one and are passed using next() function in the middlewares. Sending username and password for every authentication request is bad, it should be sent only for the first time, after that we should send a hashed token that you get when you signup for the first time, this token should be sent instead of username and password. Benefits of token, this token get reset after one hour or so, that is why we sometimes get logged out of a website after sometime that is because the token gets expired for that particular username and password, hence there is not much safety concerns if this token is leaked as in if the username and password of a person is leaked, also the token is encryted by hashing. We will use JWT(json web token) in the header instead of sending username and password, username and password need to be sent only once at login or signup. Only the server can decode this token. JWT let you encrypt or decrypt object or strings.  
Encryption vs Hashing- Encryption can change a simple text to a random string, this string can be decrypted to get the text, supersecret is used to encryt the data, different supersecret give differnt output string, hence the supersecret have to be kept only to ourselves, if people know what the supersecret is then all the authentication will fail on our website.  
Files are not optimal to be used as database, also there is technology defined only for this task of storing data called database, so we will use the database for storing data. --database part  
Reconciler and react- Our first approach is clear the DOM completely and iterate over the content and render all the components, dom operations like appendchild, removechild are expensive hence we want to minimize the number of dom operations. Better way is to compare each new element with the current element present on the screen and find the difference or diff, that is we update, add, or remove elements from the dom, instead of removing all and adding the new elements from the completely. More optimal version is declaring a virtual dom global array in the file and assigning it to existing virtual dom array, then we change the virtual dom array with the new elements, we can now compare the new elements and current elements via the arrya instead of calling the dom elements to get the innerhtml and then comparing to update them, this save some time. virtual dom is a copy to the dom in variables of string ,int,etc. React use this virtual dom, which is a big object, and maintains it to calculate the diff and apply the changes.  
In complex frontend apps the state changes quickly, react batch multiple updates, if too many state changes are happening quickly. so it apply these changes together, this is good because if after bunch of updates, you get the same state, then there is no need to update anything. for example state update is happening at 1ms, then we update the dom after 10ms. This is called batch updates that react does beside many other things.  
States and Components- We wrote a reconciler, but our reconciler hard coded the logic of how the thing looks, react or any library to create a website should give independence of how the thing looks to the developer's will, hence it should not take only 1 input that is state, but 2 inputs a state and the component, i.e how the component looks.  
js vs jsx- write html in js file, we use jsx files. App.jsx is the entry point of the website. We can write js code in the html part inside {}, and it will render in the page. Instead of doing document.createElement("div") then var.appendchild(), that would put things to the dom, now we just have to write dynamic js variables inside {}.  
in react there is a certain way to define state variables. we can have 1000 variables in our app, react won't observe all of them, this would make it very slow, so we define the variables that will change in a certain way so that we tell react this is a state variable, observe it, this is not a state variable, don't observe it. use useState to declare a state variable. A component is a functions. Components can take in states called as props which are just the arguments of that function. We can send the arguments within the tag. The props is the only thing we need to give to the component, but we can pass multiple arguments in the html tag, like firstname and lastname, and access them in the component via props.firstname and props.lastname. .map() is a function of js not react, can use it on any array, the input it expects is a function, the function take value one by one as argument. React does not know how to render a json object, so we stringify it {JSON.stringify(todos)}. whenever you need to write js in html use {}. In react component take only a single argument called props, the keys of the props are arguments we pass.  
How rendering happens in react ans useEffect- The setInterval call happened more than once even after the timer is set to 1second. It is due to setInterval is getting called more than once, again and again. WHY? if we remove setInterval, then the App function ran only once. Whenever a state variable changes, reconciler need to re-render which means remove, add and update things from the dom. Hence the App function re runs and the setInterval runs again. React.useState() protects the variable to get its initial value during its re-render. Anytime we updtate the state using set, the App() function is called again.  
Introducing useEffect- usestate() is a hook, hook is a thing that remains independent to a re-render.Hooks/useState protect variables across re-renders. useEffect is a hook, a function like useState(), take 2 arguments, 1st arg is a function and 2nd arg is an array. The login inside the 1st arg function is protected and does not run on re-renders. so useeffect is hook that guards logic from running on re-renders, to avoid infinite loops, etc. If you want to use a js function only once and not on every re-render, then wrap it in useeffect(). fetch() is written in useEffect() for the same reason.  
Custom hooks- like we have used functions from other libraries like fs, fetch, but we can define our custom functions, similarly we can define our custom hooks apart from pre-defined hooks like usestate() or useeffect(), every hook we define needs to start with use. The benefit is that we can encapsulate the logic, any function that uses hooks inside it and returns a value related to hook is a custom hook.  
Components can be thought of as defining our own html tags. We can write css in {{}} double curly braces, like <div style={{background:"red"}}>hi there</div> in react. In the industry we don't write whole css on our own, we use styling frameworks like mui, which have components written already, by other people, we just use it. Google also uses mui. css width=100vw means 100% window width, 100vh means 100% window height. Flex box is used to align elements side by side. div take full width, 2 divs will appear one below the other. flex is applied only to the child elements, not grandchild, we will have to define child with flex if we want grandchild to appear side by side.  
Routing in react- react-router-dom is the library used by majority of the companies.<Route path="/login" element={<signin />}/> means if url route is /login then render signin component. so it is conditionally rendering things. Window.location("/signup") can be used to swith the url to a new page, but this reloads the page, not recommended, we can use Link tag that takes href. The most popular way to get the value that user write on the website is to store them in state variables, like we have forms that will get input from the user. If there is a variable that we want to show in the website and that is changing then we should define it as state variable. the TextField component of mui have onChange attribute that accept a function with argument e, onchang={(e)=>{setUsername(e.target.value)}}, e.target.value gives the value that is currently in the text field. This is the correct way to define and use state variables, or the variables that change in the lifecycle of the website. e.target and document.getelementbyid("id name") is the samething, e.target.value give the value inside the component, similar to document.getelementid("").value. here we don't need  to provide the id name when using e.target version, the mui already knows what we are refering to as the onchange function is the component's argument. The user when sign's up or signin the token he gets need to be stored in the localstorage of the browser so that he comes again he is already signed in, this is done using localStorage.setItem("token", token), can see if this works by inspecting the application->localstorage in inspect of browsers. we can send the authorization and the corresponding bearer token by writing "Authorization": "Bearer"+ localStorage.getItem("token") in the headers json object argument in fetch function, as earlier we were sending this in the postman's header field.  
We want to conditionally render the appbar, signup signin button if not signed in and the logout and user profile if signed in. We can use if else statement to return the component conditionally. When user clicks logout we assign token to null, hence the user is logged out.  
Prop drilling and recoil- React developer tools is an extension used to see the re-renders that happen when we do something on the website. Many times it happens that we have parent child that have 2 grandchild, if both of the grandchild need  a state variable then we have to define it to the first common ancester of the grandchild, as props or state variables can only be passed down, they cannot be passed up. Hence the state variable is defined in the top level parent common to both the elements using it. Hence when the variable(count in our case), is updated anytime, every element re-renders. We can use context to very slightly optimise it. We want re-render to happen only of the element that is showing the state variable not all the elements that are involved in the prop drilling. Context api(createContext) can be used to optimise this, declare it globally so that we define our state outside the top level app so that we can directly use the state variables we were drilling to any element we want(called using useContext). But the number of extra renders, this only help with us passing the prop through all the components, to now defining it in the top element and straightaway calling it where we need it. Recoil is used to prevent extra renders, wrap the app with recoilRoot, define an atom( atom is the state, defined outside the component tree, atom is a state variable. Now what are the places where we need to get the value of variable, so use useRecoilValue(atomname) ) setCount doesn't nessecarily need count to update it, we can change it using this syntax as well, setCount((existingCount)=>existingCount+1), so use this to avoid using count variable as this way react thinks we don't need count value and hence it will not re-render that component that is updating the atom's/state variable value. setCount= useSetRecoilState(atomname). Doing this only render happen of the component that is changing its appearence if the state variable is changed. This is used in large apps or gaming companies where there is heavy frontend work happening.  
If you are asked to make a new page, then find where the routes are defined and introduce the page. react-router-dom is not available in nextjs it is only available in react.  
Backend file structuring- we should create files to store our code in smaller files. Not every thing in one file. There is a top level index.js file, all the routes are moved to different file. Route for /admin are from admin.js and /user is from user.js. Another folder for db, have index.js for it which have schema defined. Object destructuring can be done based on the key. Like if a file exports an object we can import a key of it using object destructuring like import {User} = require('../db'). There is middleware folder, it contains our own defined middleware like authenticateJwt and Secret of the JWT. If the file returns export defualt User. then we don't do destructuring as it is not sending an object, we use const User = require('./admin'). If we have 100 lines in a file or more it is not considered good. To run the backend run the file that contains app.listen(3000), which in this case is top level index.js.  
Axios- Library similar to fetch that is used to send http requests. axios.post() take 2 arguments, first is the url we want to fetch or hit, 2nd is the body(json format). We don't mention the method as in fetch, we just call the function related like axios.post/.put(), etc. Axios does the same thing in a much cleaner and short code way. Async await syntax is better and cleaner way to write promises, instead of .then() syntax, to convert .then to await we assign the promise returning function to a variable( this variable works as the argument of the first callback if it was .then() syntax, eg response), and then use that variable when the await request is suceeded to do the things we used to do in the callback function, now below the await code. The first argument to a useEffect cannot be an async function, so we will have to use callback method for fetching via axios. Or if we have to use async await syntax then we can define another function inside the first argument function which is an async await function and call it at the end.
In mui each page is divided into 12 sections of equal width, these are used as the scale for grid, which element takes how much %age, for example we can do left element with 8 and right element with 4, for lg, for md we can do 12 for left element and 12 for right element, in this case they will appear one below the other as both are taking full width.  
Ok so till now what we have studied is 80% of a normal website. State management libraries store the state variables in a separate file and provide these statte variable to only those components that need it, so we don't have to pass it through prop drilling and render other non related components. To use Recoil we have to wrap our app with RecoilRoot first, any component that is inside recoilRoot can use recoil functions, other components cannot use recoil functions. Next is we have to define a state variable, we do it using creating atom(recoil terminalogy). git reset --hard let you change the local changes to the last commit state for all files. git pull origin master cannot work until you have local changes. git reset --hard <hashcode>, this will bring the HEAD to the commit with <hashcode>, git push origin HEAD, now we have got the code of the commit with <hashcode>. useParams is provided by react-router-dom library to get the params we pass through a URL like /courses/:courseId, here courseId is a param and we can get it using useParams().  
To change the value of state variable we need to get the setUser (an eg) function, we get it using useSetRecoilState(atom name), this will return the setUser function that can be then used to change the value of the state. const setUser= useSetRecoilState(userState). setUser("changed value example"). Whenever we change the value recoil will not re-render, it will only re-render components that show the value of it, not setting it. To get the value we use useRecoilValue  
Sometimes atom have 2 or more state variables defined in json, we can use selectors or subatoms that helps us get each of the state variables separately so we don't need to get the state variable via atom as it will give all the state variable defined in it and if we only want to update one of the state variable, it will update the other state variable defined in it as well. so now the component will re-render only if the part of the atom changes, not the whole atom change. Selectors help when lets say that a component need only the 1st state variable defined in the atom json, if we don't use selector we will have to get the 1st state variable through accessing atom  which will have other state variables as well, if any of the other state variables changes in some other component, then this component will also re-render even when it is not needing the state variable that changed, hence we get the specific 1st state variable using selectors, which let us break the atom into subatoms. In real world projects developers don't optimise this much hence you can provide value by fixing this on any project, they usually get the full store from atom instead of using selectors, hence you can provide value there to optimise the project. This is the correct way to optimise any website in terms of re-renders  
Why Typescript- ts is very hard than js, it expects you to write more for the same thing, also js is not used in the industry. Ts is a superscript of js, if we create a .ts file we can write js in that file, it just have more things that we can write. Ts give us static typing, and it makes our code more strict. We have to give type of the variable while declaring it, even if we use let. in functions the argument should mention its type also, and the type of the return value the function will return. This is the main goal of ts. We can even define a function's argument with what string or number or etc it will take, so that you cannot give anyother string,etc to it when you call it.  
TS never runs our code, when you run it, it will take the ts file and give a js file, the js file will run. if you run a ts file, first the esbuild command run which will generate index.js, then node index.js command runs to run the code. During compilation of ts, it will not run the code, it just inspects the file for the types, if some problem comes it will throw compilation errors, js throws runtime error. tsc is ts compiler that converts ts to js files. tsconfig file, we can tell how strict our type checking should be, it have many fields, most of them are not important to know, except some. Like target it represents the final ecmascript version of the final js, es3 and es5 are very old-internet explorer will understand, we should give ES2016-ES2020, these are good, runs in nearly all browsers. module- represents the ts file is a module or not, module is a file that exports something that can be imported. forceConsistentCasingInFileNames: true or false- will let the js file have strict casing matches to filenames for import export or not, depending on true and false. Strict: true or false, will let you not define the type of arguments or variables while declaring if set to false.
