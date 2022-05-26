import React from 'react';

const Blog = () => {
    return (
        <div className='px-12 grid lg:grid-cols-3 mt-8 mb-8'>
            <div class="card w-96 bg-base-100 shadow-xl mb-3">
                <div class="card-body">
                    <h2 class="card-title"><span className='text-primary'>Question 1: </span> How will you improve the performance of a React Application?</h2>
                    <p>Optimization is the number one thing that is on the mind of every dev when building any
                        software, especially web apps. JS frameworks React and others, have included some
                        awesome configurations and features. Here, Below explore it .

                        Regardless of the specific patterns and methods you use to optimize your co
                        de. It's always important to keep your code DRY. Always strive to reuse components
                        — thats guaranteed to help in writing optimized code. If you spend more time wri
                        ting excellent code and less time re-writing mediocre code (with a much greater chance fo
                        r errors) — wonderful things will happen.

                        Having said that, reusing code can become a real challenge when dealing with large codebases or
                        with different repositories, and that for two main reasons: 1. often unaware of useful pieces of
                        code. 2. The traditional way of sharing code across repositories is through packages, and that requires some
                        heavy configurations. To solve both of these problems, use tools like Bit (GitHub). Bit helps you isolate compon
                        ents from your codebase and share them on bit.dev. Components on bit.dev are easily found with an impressive s
                        earch engine, filtering and li
                        ve playground.</p>
                </div>

            </div>
            <div class="card w-96 bg-base-100 shadow-xl mb-3">
                <div class="card-body">
                    <h2 class="card-title"><span className='text-primary'>Question 2:</span> How does prototypical inheritance work?</h2>
                    <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed
                        for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and cop
                        ied. Simply put, prototypical inheritance refers to the ability to
                        JavaScript is the most common of the prototype-capable languages, and its capabilities are
                        relatively unique. When used appropriately, prototypical inheritance in JavaScript
                        is a powerful tool that can save hours of coding.
                        access object properties from another object. We use a JavaScript prototype to add new p
                        roperties and methods to an existing object constructor. We can then essentially tell our JS code
                        to inherit properties from a prototype. Prototypical inheritance allows us to reuse the pro
                        perties or methods from one Ja
                        vaScript object to another through a reference pointer function.Prototypal Inheritance can be used not on
                        ly to inherit properties from other objects but methods as well.

                    </p>

                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"><span className='text-primary'>Question 3: </span> What are the different ways to manage a state in a React application?</h2>
                    <p>When we talk about the state in our applications, it is important to be clear about what
                        kind of state is really important. <br />
                        There are four main types of state you need to properly manage in your React apps:
                        <ul>
                            <li>1. Local state</li>
                            <li>2. Global state</li>
                            <li>3. Server state</li>
                            <li>4. URL state</li>
                        </ul>
                        <p>Local state: Local state is data we manage in one or another component.Local state is most often
                            managed in React using the useState hook.</p>  <br />
                        <p>Global state: Global state is data we manage across multiple components.
                            Global state is necessary when we want to get and update data anywhere in our app,
                            or in multiple components at least.</p> <br />
                        <p>Server state:  Data that comes from an external server that must be integrated with our UI state.
                            Server state is a simple concept, but can be hard to manage alongside all of our local and
                            global UI state.</p> <br />
                        <p>URL state: Data that exists on our URLs, including the pathname and query parameters.
                            URL state is often missing as a category of state, but it is an important one.
                            In many cases, a lot of major parts of our application rely upon accessing URL state. </p>
                    </p>

                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"><span className='text-primary'>Question 4: </span> Why you do not set the state directly in React. For example, if you have const
                        [products, setProducts] = useState([]). Why you do not set
                        products = [...] instead, you use the setProducts ? </h2>
                    <p>We use setProcuct without using the product directly. Because using setProcuct we put so man
                        y values in Procuct through setProcuct. React does not know when the value of which will chang
                        e. SetProcuct is used to denote a react. When we change something in the application. Then Re
                        act can't understand it directly.
                        For this, React has to understand the value of change. When the product is used directly with
                        out using setProduct, the reaction cannot be understood. When setProduct is used, setProduct put
                        s value into the product. And in this way React can understand the value of change.</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title"><span className='text-primary'>Question 5: </span> What is a unit test? Why should write unit tests?</h2>
                    <p>Unit testing involves the testing of each unit or an individual component of the s
                        behind unit testing is to validate unit components with its performance.
                        A unit is a single testable part of a software system and tested during the devel
                        opment phase of the application software.
                        The purpose of unit testing is to test the correctness of isolated code. A unit com
                        ponent is an individual function or code of the application. White box testing approach u
                        sed for unit testing and usually done by the developers.
                        Whenever the application is ready and given to the Test engineer, he/she will start
                        checking every component of the module or module of the application independently or one by one, a
                        nd this process is known as Unit testing or components testing.
                        Why should we write unit tests?
                        Unit testing ensures that all code meets quality standards before it's deployed. This ensures a
                        reliable engineering environment where quality is paramount. Over the course of the product development
                        life cycle, unit
                        testing saves time and money, and helps developers write better code, more efficiently.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;